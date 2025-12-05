#!/usr/bin/env python3
"""
UniDataHub - Crawl4AI University Scraper
=========================================
Скрипт для парсинга сайтов университетов Казахстана.
Использует:
- Crawl4AI (браузерная автоматизация)
- Google Gemini 1.5 Flash (структурирование данных)
- Pydantic (валидация схемы)

Логика:
1. Заходит на главную страницу -> Ищет ссылки (About, Programs, Admissions).
2. Парсит главную страницу.
3. (Опционально) Парсит найденные внутренние страницы.
4. Объединяет данные в единый JSON.
"""

import os
import json
import asyncio
import logging
import re
from datetime import datetime
from typing import List, Optional, Dict, Any, Set

# ---------------------------------------------------------
# ИМПОРТЫ И НАСТРОЙКА ОКРУЖЕНИЯ
# ---------------------------------------------------------

try:
    from dotenv import load_dotenv
    load_dotenv()  # Загрузка переменных из .env файла
except ImportError:
    pass

from pydantic import BaseModel, Field

try:
    from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, LLMConfig, CacheMode
    from crawl4ai.extraction_strategy import LLMExtractionStrategy
except ImportError:
    print("❌ Ошибка: Crawl4AI не установлен.")
    print("Выполните: pip install crawl4ai[all]")
    exit(1)

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('crawl4ai.log', encoding='utf-8'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------
# 1. СХЕМА ДАННЫХ (PYDANTIC)
# ---------------------------------------------------------

class AboutUniversity(BaseModel):
    mission: Optional[str] = Field(None, description="Миссия университета.")
    history_summary: Optional[str] = Field(None, description="Краткая история (год основания, важные факты).")
    leadership: Optional[str] = Field(None, description="Имя ректора.")
    achievements: List[str] = Field(default_factory=list, description="Список наград, места в рейтингах (QS, THE).")

class AcademicProgram(BaseModel):
    program_name: str = Field(..., description="Название специальности/программы.")
    degree_level: str = Field(..., description="Уровень (Бакалавриат, Магистратура, PhD).")
    faculty: Optional[str] = Field(None, description="Факультет или школа.")

class Admissions(BaseModel):
    requirements: Optional[str] = Field(None, description="Требования (ЕНТ, проходные баллы).")
    deadlines: Optional[str] = Field(None, description="Даты приема документов.")
    scholarships: Optional[str] = Field(None, description="Информация о грантах и скидках.")
    tuition_info: Optional[str] = Field(None, description="Стоимость обучения (если есть).")

class VirtualTour(BaseModel):
    is_available: bool = Field(False, description="Есть ли 3D тур.")
    url: Optional[str] = Field(None, description="Ссылка на 3D тур.")

class InternationalCooperation(BaseModel):
    partners: List[str] = Field(default_factory=list, description="ВУЗы-партнеры.")
    exchange_programs: Optional[str] = Field(None, description="Программы обмена (Erasmus и др).")

class UniversityStats(BaseModel):
    employment_rate: Optional[str] = Field(None, description="Процент трудоустройства (строкой, например '95%').")
    student_count: Optional[str] = Field(None, description="Количество студентов.")

class UniversityData(BaseModel):
    """Основная модель данных университета."""
    university_name: str = Field(..., description="Название университета.")
    city: Optional[str] = Field(None, description="Город.")
    website: Optional[str] = Field(None, description="URL сайта.")
    about: AboutUniversity = Field(default_factory=AboutUniversity)
    academic_programs: List[AcademicProgram] = Field(default_factory=list)
    admissions: Admissions = Field(default_factory=Admissions)
    virtual_tour: VirtualTour = Field(default_factory=VirtualTour)
    international: InternationalCooperation = Field(default_factory=InternationalCooperation)
    stats: UniversityStats = Field(default_factory=UniversityStats)

# Вспомогательные модели для поиска ссылок
class LinkOfInterest(BaseModel):
    url: str = Field(..., description="Полная ссылка.")
    section_type: str = Field(..., description="Тип: 'about', 'programs', 'admissions', 'international'.")
    title: str = Field(..., description="Текст ссылки.")

class LinksDiscovery(BaseModel):
    links: List[LinkOfInterest] = Field(default_factory=list)

# ---------------------------------------------------------
# 2. ДАННЫЕ (СПИСОК УНИВЕРСИТЕТОВ)
# ---------------------------------------------------------
# Исправленный список URL (без Markdown разметки)
KAZAKHSTAN_UNIVERSITIES = [
    {'name': 'Назарбаев Университет', 'url': 'https://nu.edu.kz', 'city': 'Астана'},
    {'name': 'Казахский национальный университет им. аль-Фараби', 'url': 'https://kaznu.kz', 'city': 'Алматы'},
    {'name': 'Satbayev University', 'url': 'https://satbayev.university', 'city': 'Алматы'},
    {'name': 'Евразийский национальный университет', 'url': 'https://enu.kz', 'city': 'Астана'},
    {'name': 'КБТУ', 'url': 'https://kbtu.kz', 'city': 'Алматы'},
    {'name': 'KIMEP University', 'url': 'https://kimep.kz', 'city': 'Алматы'},
    {'name': 'Astana IT University', 'url': 'https://astanait.edu.kz', 'city': 'Астана'},
    {'name': 'МУИТ (IITU)', 'url': 'https://iitu.edu.kz', 'city': 'Алматы'},
    # ... сюда можно добавить весь остальной список
]

# ---------------------------------------------------------
# 3. ПРОМПТЫ ДЛЯ LLM
# ---------------------------------------------------------

EXTRACTION_INSTRUCTION = """
Ты аналитик данных. Извлеки информацию о университете со страницы.
Язык вывода: РУССКИЙ.
Если информации нет, оставляй поля пустыми (null).
Не выдумывай данные.

1. academic_programs: Найди 5-10 примеров специальностей.
2. stats: Ищи цифры (количество студентов, процент трудоустройства).
3. admissions: Ищи требования ЕНТ и сроки.
"""

LINK_DISCOVERY_INSTRUCTION = """
Найди в меню сайта ссылки на ключевые разделы:
1. 'about' - О нас, История, Миссия.
2. 'programs' - Факультеты, Специальности, Академические программы.
3. 'admissions' - Поступление, Абитуриенту, Приемная комиссия.
4. 'international' - Международное сотрудничество, Партнеры.

Верни только валидные, полные URL.
"""

# ---------------------------------------------------------
# 4. ЛОГИКА ПАРСЕРА
# ---------------------------------------------------------

class UniversityScraper:
    def __init__(self, api_key: str, output_file: str = "universities_data.json"):
        self.api_key = api_key
        # ЯВНОЕ ИСПОЛЬЗОВАНИЕ GEMINI 1.5 FLASH
        self.provider = "gemini/gemini-1.5-flash"
        self.output_file = output_file
        self.results = []
        
        # Загрузка существующих данных
        if os.path.exists(output_file):
            try:
                with open(output_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.results = data.get('universities', [])
            except Exception:
                pass

    def _get_llm_config(self) -> LLMConfig:
        return LLMConfig(provider=self.provider, api_token=self.api_key)

    def _clean_json(self, text: str) -> str:
        """Очищает ответ LLM от Markdown блоков."""
        text = re.sub(r'^```json\s*', '', text, flags=re.MULTILINE)
        text = re.sub(r'^```\s*', '', text, flags=re.MULTILINE)
        return text.strip()

    async def discover_links(self, url: str) -> List[Dict]:
        """Фаза 1: Поиск ссылок."""
        strategy = LLMExtractionStrategy(
            llm_config=self._get_llm_config(),
            schema=LinksDiscovery.model_json_schema(),
            instruction=LINK_DISCOVERY_INSTRUCTION
        )
        
        config = CrawlerRunConfig(
            extraction_strategy=strategy,
            cache_mode=CacheMode.BYPASS,
            page_timeout=30000,
            wait_until="domcontentloaded" # Быстрый режим для поиска меню
        )

        async with AsyncWebCrawler(config=BrowserConfig(headless=True)) as crawler:
            try:
                result = await crawler.arun(url=url, config=config)
                if result.success and result.extracted_content:
                    clean_content = self._clean_json(result.extracted_content)
                    data = json.loads(clean_content)
                    # Обработка случая, если вернулся список или объект
                    if isinstance(data, list) and data:
                        data = data[0]
                    return data.get('links', [])
            except Exception as e:
                logger.error(f"Link discovery failed for {url}: {e}")
        return []

    async def scrape_page(self, url: str, schema_cls=UniversityData) -> Optional[Dict]:
        """Универсальная функция парсинга страницы."""
        strategy = LLMExtractionStrategy(
            llm_config=self._get_llm_config(),
            schema=schema_cls.model_json_schema(),
            instruction=EXTRACTION_INSTRUCTION
        )
        
        # Используем magic=True для обхода анти-ботов (если поддерживается версией)
        browser_cfg = BrowserConfig(
            headless=True, 
            ignore_https_errors=True,
            headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        )

        async with AsyncWebCrawler(config=browser_cfg) as crawler:
            try:
                result = await crawler.arun(
                    url=url, 
                    config=CrawlerRunConfig(
                        extraction_strategy=strategy,
                        cache_mode=CacheMode.BYPASS,
                        page_timeout=40000 # 40 сек
                    )
                )
                
                if result.success and result.extracted_content:
                    clean_content = self._clean_json(result.extracted_content)
                    data = json.loads(clean_content)
                    if isinstance(data, list) and data:
                        return data[0]
                    return data
            except Exception as e:
                logger.warning(f"Failed to scrape {url}: {e}")
        return None

    def merge_data(self, main_data: Dict, new_data: Dict) -> Dict:
        """Умное слияние данных с внутренних страниц."""
        if not new_data: 
            return main_data
            
        # Helper для слияния списков без дубликатов
        def merge_lists(key, unique_key=None):
            main_list = main_data.get(key, []) or [] # Ensure list
            new_list = new_data.get(key, []) or []   # Ensure list
            
            # Если это список строк (например, achievements)
            if not unique_key:
                main_data[key] = list(set(main_list + new_list))
            else:
                # Если это список словарей (например, programs), проверяем уникальность
                existing_vals = {item.get(unique_key) for item in main_list if item.get(unique_key)}
                for item in new_list:
                    if item.get(unique_key) and item.get(unique_key) not in existing_vals:
                        main_list.append(item)
                main_data[key] = main_list

        # Слияние about
        if 'about' in new_data:
            for k, v in new_data['about'].items():
                if v and not main_data.get('about', {}).get(k):
                    if 'about' not in main_data: main_data['about'] = {}
                    main_data['about'][k] = v
            # Achievements merge
            if new_data['about'].get('achievements'):
                 if 'about' not in main_data: main_data['about'] = {}
                 existing = set(main_data['about'].get('achievements', []))
                 existing.update(new_data['about']['achievements'])
                 main_data['about']['achievements'] = list(existing)

        # Слияние программ (уникальность по program_name)
        if 'academic_programs' in new_data:
             # Логика выше была упрощена, тут реализуем вручную для вложенности
             current_progs = main_data.get('academic_programs', [])
             current_names = {p['program_name'] for p in current_progs}
             for p in new_data.get('academic_programs', []):
                 if p.get('program_name') and p['program_name'] not in current_names:
                     current_progs.append(p)
             main_data['academic_programs'] = current_progs

        # Слияние International partners
        if 'international' in new_data and new_data['international'].get('partners'):
            if 'international' not in main_data: main_data['international'] = {}
            existing = set(main_data['international'].get('partners', []))
            existing.update(new_data['international']['partners'])
            main_data['international']['partners'] = list(existing)

        return main_data

    async def process_university(self, uni_info: Dict):
        """Полный цикл обработки одного университета."""
        name = uni_info['name']
        url = uni_info['url']
        
        # Очистка URL если он в формате markdown [url](url)
        match = re.search(r'\((https?://[^)]+)\)', url)
        if match:
             url = match.group(1)
        elif url.startswith('[') and '](' in url: # [url](url) без http?
             match_alt = re.search(r'\(([^)]+)\)', url)
             if match_alt: url = match_alt.group(1)

        logger.info(f"🚀 Старт: {name} ({url})")

        # 1. Поиск ссылок
        links = await self.discover_links(url)
        logger.info(f"Found {len(links)} links for {name}")

        # 2. Парсинг главной
        main_data = await self.scrape_page(url)
        if not main_data:
            logger.error(f"❌ Main page failed: {name}")
            return
        
        # Заполняем базовые поля, если AI пропустил
        main_data['university_name'] = name
        main_data['website'] = url
        main_data['city'] = uni_info['city']
        main_data['_scraped_at'] = datetime.now().isoformat()

        # 3. Парсинг внутренних страниц (максимум 3)
        tasks = []
        processed_types = set()
        
        for link in links:
            l_type = link.get('section_type')
            l_url = link.get('url')
            
            if l_type in processed_types or not l_url.startswith('http'):
                continue
                
            processed_types.add(l_type)
            logger.info(f"  -> Парсинг раздела {l_type}: {l_url}")
            # Последовательно, чтобы не положить сервер или браузер
            sub_data = await self.scrape_page(l_url)
            if sub_data:
                main_data = self.merge_data(main_data, sub_data)
            
            await asyncio.sleep(1) # Вежливость
            if len(processed_types) >= 3: break

        # Сохранение в общий список
        # Удаляем старую запись если есть
        self.results = [r for r in self.results if r.get('website') != url]
        self.results.append(main_data)
        self.save_to_file()
        logger.info(f"✅ Готово: {name}")

    def save_to_file(self):
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump({
                "last_update": datetime.now().isoformat(),
                "universities": self.results
            }, f, ensure_ascii=False, indent=2)

    async def run_all(self):
        for uni in KAZAKHSTAN_UNIVERSITIES:
            await self.process_university(uni)
            await asyncio.sleep(2) # Пауза между вузами

# ---------------------------------------------------------
# 5. ЗАПУСК
# ---------------------------------------------------------

async def main():
    # 1. Получаем ключ из ENV
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        print("❌ Ошибка: Не найден GOOGLE_API_KEY в переменных окружения.")
        print("Создайте файл .env или выполните export GOOGLE_API_KEY='...'")
        return

    # 2. Инициализация
    scraper = UniversityScraper(api_key=api_key)
    
    # 3. Запуск
    print(f"🤖 Запуск парсера с моделью {scraper.provider}")
    await scraper.run_all()

    # 4. Попытка обновить TypeScript файл (если есть скрипт)
    try:
        from generate_minimal_ts import main as gen_ts
        print("🔄 Обновление TypeScript файла...")
        gen_ts()
    except ImportError:
        pass

if __name__ == "__main__":
    asyncio.run(main())
