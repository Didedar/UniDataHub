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
import hashlib
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Dict, Any, Set, Tuple

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
    print("Выполните: pip install crawl4ai[all]")
    exit(1)

try:
    from bs4 import BeautifulSoup
except ImportError:
    BeautifulSoup = None

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

# ============================================================

# НАЦИОНАЛЬНЫЕ УНИВЕРСИТЕТЫ (11)

# ============================================================

{'name': 'Назарбаев Университет', 'url': 'https://nu.edu.kz', 'city': 'Астана'},

{'name': 'Казахский национальный университет им. аль-Фараби', 'url': 'https://kaznu.kz', 'city': 'Алматы'},

{'name': 'Евразийский национальный университет им. Л.Н. Гумилёва', 'url': 'https://enu.kz', 'city': 'Астана'},

{'name': 'Satbayev University (КазНИТУ)', 'url': 'https://satbayev.university', 'city': 'Алматы'},

{'name': 'Казахский национальный педагогический университет им. Абая', 'url': 'https://kaznpu.kz', 'city': 'Алматы'},

{'name': 'Казахский национальный аграрный исследовательский университет', 'url': 'https://kaznau.kz', 'city': 'Алматы'},

{'name': 'Казахский агротехнический университет им. С. Сейфуллина', 'url': 'https://kazatu.edu.kz', 'city': 'Астана'},

{'name': 'Казахский национальный медицинский университет им. С.Д. Асфендиярова', 'url': 'https://kaznmu.kz', 'city': 'Алматы'},

{'name': 'Казахская национальная консерватория им. Курмангазы', 'url': 'https://conservatoire.edu.kz', 'city': 'Алматы'},

{'name': 'Казахская национальная академия искусств им. Т.К. Жургенова', 'url': 'https://kaznai.kz', 'city': 'Алматы'},

{'name': 'Казахский национальный женский педагогический университет', 'url': 'https://kazmkpu.kz', 'city': 'Алматы'},


# ============================================================

# МЕЖДУНАРОДНЫЕ УНИВЕРСИТЕТЫ (5)

# ============================================================

{'name': 'Казахстанско-Британский технический университет', 'url': 'https://kbtu.kz', 'city': 'Алматы'},

{'name': 'KIMEP University', 'url': 'https://kimep.kz', 'city': 'Алматы'},

{'name': 'Международный казахско-турецкий университет им. Х.А. Ясави', 'url': 'https://ayu.edu.kz', 'city': 'Туркестан'},

{'name': 'Казахстанско-Немецкий университет', 'url': 'https://dku.kz', 'city': 'Алматы'},

{'name': 'Казахско-Российский медицинский университет', 'url': 'https://krmu.edu.kz', 'city': 'Алматы'},


# ============================================================

# ГОСУДАРСТВЕННЫЕ РЕГИОНАЛЬНЫЕ УНИВЕРСИТЕТЫ (25)

# ============================================================

{'name': 'Южно-Казахстанский университет им. М. Ауэзова', 'url': 'https://auezov.edu.kz', 'city': 'Шымкент'},

{'name': 'Карагандинский университет им. Е.А. Букетова', 'url': 'https://buketov.edu.kz', 'city': 'Караганда'},

{'name': 'Карагандинский технический университет им. А. Сагинова', 'url': 'https://ktu.edu.kz', 'city': 'Караганда'},

{'name': 'Торайгыров Университет', 'url': 'https://tou.edu.kz', 'city': 'Павлодар'},

{'name': 'Кызылординский университет им. Коркыт Ата', 'url': 'https://korkyt.kz', 'city': 'Кызылорда'},

{'name': 'Университет Шакарима', 'url': 'https://semgu.kz', 'city': 'Семей'},

{'name': 'Восточно-Казахстанский технический университет им. Д. Серикбаева', 'url': 'https://ektu.kz', 'city': 'Усть-Каменогорск'},

{'name': 'Восточно-Казахстанский университет им. С. Аманжолова', 'url': 'https://vku.edu.kz', 'city': 'Усть-Каменогорск'},

{'name': 'Северо-Казахстанский университет им. М. Козыбаева', 'url': 'https://nku.edu.kz', 'city': 'Петропавловск'},

{'name': 'Актюбинский региональный университет им. К. Жубанова', 'url': 'https://arsu.kz', 'city': 'Актобе'},

{'name': 'Атырауский университет им. Х. Досмухамедова', 'url': 'https://asu.edu.kz', 'city': 'Атырау'},

{'name': 'Атырауский университет нефти и газа им. С. Утебаева', 'url': 'https://aogu.edu.kz', 'city': 'Атырау'},

{'name': 'Западно-Казахстанский университет им. М. Утемисова', 'url': 'https://wksu.kz', 'city': 'Уральск'},

{'name': 'Западно-Казахстанский аграрно-технический университет им. Жангир хана', 'url': 'https://wkau.kz', 'city': 'Уральск'},

{'name': 'Жетысуский университет им. И. Жансугурова', 'url': 'https://zhgu.edu.kz', 'city': 'Талдыкорган'},

{'name': 'Таразский региональный университет им. М.Х. Дулати', 'url': 'https://tarsu.kz', 'city': 'Тараз'},

{'name': 'Костанайский региональный университет им. А. Байтурсынова', 'url': 'https://ksu.edu.kz', 'city': 'Костанай'},

{'name': 'Кокшетауский университет им. Ш. Уалиханова', 'url': 'https://kgu.kz', 'city': 'Кокшетау'},

{'name': 'Мангистауский университет им. Ш. Есенова', 'url': 'https://mu.edu.kz', 'city': 'Актау'},

{'name': 'Аркалыкский педагогический институт им. И. Алтынсарина', 'url': 'https://api.kz', 'city': 'Аркалык'},

{'name': 'Карагандинский медицинский университет', 'url': 'https://kgmu.kz', 'city': 'Караганда'},

{'name': 'Западно-Казахстанский медицинский университет им. М. Оспанова', 'url': 'https://zkmu.kz', 'city': 'Актобе'},

{'name': 'Семейский медицинский университет', 'url': 'https://semeymeduniversity.kz', 'city': 'Семей'},

{'name': 'Южно-Казахстанская медицинская академия', 'url': 'https://ukma.kz', 'city': 'Шымкент'},

{'name': 'Астанинский медицинский университет', 'url': 'https://amu.edu.kz', 'city': 'Астана'},


# ============================================================

# ЧАСТНЫЕ УНИВЕРСИТЕТЫ - АЛМАТЫ (30)

# ============================================================

{'name': 'SDU University', 'url': 'https://sdu.edu.kz', 'city': 'Алматы'},

{'name': 'Almaty Management University (AlmaU)', 'url': 'https://almau.edu.kz', 'city': 'Алматы'},

{'name': 'International IT University (IITU)', 'url': 'https://iitu.edu.kz', 'city': 'Алматы'},

{'name': 'Университет международного бизнеса (UIB)', 'url': 'https://uib.kz', 'city': 'Алматы'},

{'name': 'Университет Туран', 'url': 'https://turan-edu.kz', 'city': 'Алматы'},

{'name': 'Narxoz University', 'url': 'https://narxoz.kz', 'city': 'Алматы'},

{'name': 'Алматинский технологический университет', 'url': 'https://atu.edu.kz', 'city': 'Алматы'},

{'name': 'Алматинский университет энергетики и связи им. Г. Даукеева', 'url': 'https://aues.kz', 'city': 'Алматы'},

{'name': 'Казахский университет технологии и бизнеса', 'url': 'https://kutb.kz', 'city': 'Астана'},

{'name': 'Университет Нархоз', 'url': 'https://narxoz.kz', 'city': 'Алматы'},

{'name': 'Алматы менеджмент университет', 'url': 'https://almau.edu.kz', 'city': 'Алматы'},

{'name': 'Казахстанский инженерно-технологический университет', 'url': 'https://kitu.edu.kz', 'city': 'Алматы'},

{'name': 'Алматинский гуманитарно-экономический университет', 'url': 'https://algeu.edu.kz', 'city': 'Алматы'},

{'name': 'Каспийский государственный университет технологий и инжиниринга им. Ш. Есенова', 'url': 'https://kguti.kz', 'city': 'Актау'},

{'name': 'Центрально-Азиатский университет', 'url': 'https://cau.edu.kz', 'city': 'Алматы'},

{'name': 'Университет Алматы', 'url': 'https://almaty-uni.kz', 'city': 'Алматы'},

{'name': 'Казахский гуманитарно-юридический университет', 'url': 'https://kgyu.kz', 'city': 'Астана'},

{'name': 'M. Narikbayev University (KAZGUU)', 'url': 'https://kazguu.kz', 'city': 'Астана'},

{'name': 'Университет КазГЮИУ', 'url': 'https://kazguu.kz', 'city': 'Астана'},

{'name': 'Евразийский технологический университет', 'url': 'https://etu.edu.kz', 'city': 'Алматы'},

{'name': 'Академия Кайнар', 'url': 'https://kainar-edu.kz', 'city': 'Алматы'},

{'name': 'Алматинская академия экономики и статистики', 'url': 'https://aesa.kz', 'city': 'Алматы'},

{'name': 'Университет Мирас', 'url': 'https://miras.edu.kz', 'city': 'Шымкент'},

{'name': 'Казахская академия труда и социальных отношений', 'url': 'https://atso.kz', 'city': 'Алматы'},

{'name': 'Казахстанский университет инновационных и телекоммуникационных систем', 'url': 'https://kazkits.kz', 'city': 'Уральск'},

{'name': 'Университет Сырдария', 'url': 'https://syrdariya.kz', 'city': 'Жетысай'},

{'name': 'Центрально-Азиатский инновационный университет', 'url': 'https://caiu.edu.kz', 'city': 'Шымкент'},

{'name': 'Инновационный Евразийский университет', 'url': 'https://ieu.edu.kz', 'city': 'Павлодар'},

{'name': 'Университет Улагат', 'url': 'https://ulagat.edu.kz', 'city': 'Кызылорда'},

{'name': 'Университет Болашак', 'url': 'https://bulan.edu.kz', 'city': 'Караганда'},


# ============================================================

# ЧАСТНЫЕ УНИВЕРСИТЕТЫ - АСТАНА (15)

# ============================================================

{'name': 'Astana IT University', 'url': 'https://astanait.edu.kz', 'city': 'Астана'},

{'name': 'Евразийский гуманитарный институт', 'url': 'https://egi.edu.kz', 'city': 'Астана'},

{'name': 'Университет Туран-Астана', 'url': 'https://turan-astana.kz', 'city': 'Астана'},

{'name': 'Казахский университет экономики, финансов и международной торговли', 'url': 'https://kuef.kz', 'city': 'Астана'},

{'name': 'Медицинский университет Астана', 'url': 'https://mua.edu.kz', 'city': 'Астана'},

{'name': 'Университет Есенова', 'url': 'https://essenov.edu.kz', 'city': 'Актау'},

{'name': 'Университет ADAM', 'url': 'https://adam.edu.kz', 'city': 'Астана'},

{'name': 'Евразийская юридическая академия им. Д.А. Кунаева', 'url': 'https://eyau.edu.kz', 'city': 'Алматы'},

{'name': 'Казахстанский университет народного дружбы', 'url': 'https://kudn.kz', 'city': 'Астана'},

{'name': 'Академия логистики и транспорта', 'url': 'https://alt.edu.kz', 'city': 'Алматы'},

{'name': 'Академия гражданской авиации', 'url': 'https://aca.kz', 'city': 'Алматы'},

{'name': 'Казахская академия спорта и туризма', 'url': 'https://kazast.kz', 'city': 'Алматы'},

{'name': 'Алихан Бокейхан университет', 'url': 'https://abu.edu.kz', 'city': 'Семей'},

{'name': 'Баишев Университет', 'url': 'https://baishev.edu.kz', 'city': 'Актобе'},

{'name': 'Академия Bolashaq', 'url': 'https://bolashaq.edu.kz', 'city': 'Караганда'},


# ============================================================

# СПЕЦИАЛИЗИРОВАННЫЕ ВУЗЫ (12)

# ============================================================

{'name': 'Казахская национальная академия хореографии', 'url': 'https://balletacademy.kz', 'city': 'Астана'},

{'name': 'Казахский национальный университет искусств', 'url': 'https://kaznui.kz', 'city': 'Астана'},

{'name': 'Казахский университет международных отношений и мировых языков им. Абылай хана', 'url': 'https://ablaikhan.kz', 'city': 'Алматы'},

{'name': 'Казахская академия физической культуры и спорта', 'url': 'https://kazafc.kz', 'city': 'Алматы'},

{'name': 'Военный институт Сухопутных войск', 'url': 'https://visu.kz', 'city': 'Алматы'},

{'name': 'Национальный университет обороны им. Первого Президента РК', 'url': 'https://nuo.kz', 'city': 'Астана'},

{'name': 'Академия правоохранительных органов при Генеральной прокуратуре', 'url': 'https://apo.gov.kz', 'city': 'Астана'},

{'name': 'Пограничная академия КНБ РК', 'url': 'https://pa.gov.kz', 'city': 'Алматы'},

{'name': 'Алматинская академия МВД РК', 'url': 'https://amvd.kz', 'city': 'Алматы'},

{'name': 'Костанайская академия МВД РК', 'url': 'https://kamvd.kz', 'city': 'Костанай'},

{'name': 'Карагандинская академия МВД РК', 'url': 'https://karaganda.mvd.kz', 'city': 'Караганда'},

{'name': 'Актюбинский юридический институт МВД', 'url': 'https://aktyubmvd.kz', 'city': 'Актобе'},


# ============================================================

# ДОПОЛНИТЕЛЬНЫЕ РЕГИОНАЛЬНЫЕ ВУЗЫ (15)

# ============================================================

{'name': 'Гуманитарно-техническая академия', 'url': 'https://gta.edu.kz', 'city': 'Кокшетау'},

{'name': 'Университет Есенова', 'url': 'https://esenovuniversity.kz', 'city': 'Актау'},

{'name': 'Рудненский индустриальный институт', 'url': 'https://rii.kz', 'city': 'Рудный'},

{'name': 'Жезказганский университет им. О. Байконурова', 'url': 'https://zhezu.kz', 'city': 'Жезказган'},

{'name': 'Атырауский инженерно-гуманитарный институт', 'url': 'https://aigi.kz', 'city': 'Атырау'},

{'name': 'Шымкентский университет', 'url': 'https://shimkent-uni.kz', 'city': 'Шымкент'},

{'name': 'Южно-Казахстанский государственный педагогический университет', 'url': 'https://okmpu.kz', 'city': 'Шымкент'},

{'name': 'Казахский национальный исследовательский университет', 'url': 'https://kazniu.kz', 'city': 'Алматы'},

{'name': 'Университет Кунаева', 'url': 'https://kunaev-uni.kz', 'city': 'Алматы'},

{'name': 'Казахстанско-Американский свободный университет', 'url': 'https://kafu.kz', 'city': 'Усть-Каменогорск'},

{'name': 'Высшая школа права Әділет', 'url': 'https://adilet.edu.kz', 'city': 'Алматы'},

{'name': 'Университет Санат', 'url': 'https://sanat.edu.kz', 'city': 'Алматы'},

{'name': 'Академия Халықаралық', 'url': 'https://halyk.edu.kz', 'city': 'Алматы'},

{'name': 'Международная образовательная корпорация (МОК)', 'url': 'https://mok.kz', 'city': 'Алматы'},

{'name': 'Pavlodar University', 'url': 'https://pvl.edu.kz', 'city': 'Павлодар'},

]

# ---------------------------------------------------------
# 3. ПРОМПТЫ ДЛЯ LLM
# ---------------------------------------------------------

EXTRACTION_INSTRUCTION = """
РОЛЬ: Senior Data Extraction Analyst (университеты/каталоги).
ЦЕЛЬ: Заполнить объект университета для universities.ts строго по схеме ниже, используя ТОЛЬКО данные, найденные на сайте/страницах университета.

ОГРАНИЧЕНИЯ:
- Язык вывода: РУССКИЙ (имя/shortName допускаются как на сайте, включая казахский).
- НЕ выдумывать и НЕ дополнять знаниями “из головы”.
- Если данных нет: ставь 0 для чисел, "" для строк, [] для массивов.
- Не копируй огромные простыни. В description делай структурированно и по делу.
- Все ссылки внутри description/полей указывай только если они реально есть на странице.

ВХОД:
1) university_base = { "website": "{{BASE_URL}}", "name_hint": "{{NAME_HINT}}", "id": "{{ID_HINT}}" }
2) page_content = "{{HTML_OR_TEXT_FROM_PAGES}}"   (может включать несколько страниц: главная + about + admissions + programs + international + 3d tour)

ЗАДАЧИ ИЗВЛЕЧЕНИЯ:
1) about/руководство/достижения -> в поле description (структурно).
2) поступление -> admissions.deadline / admissions.requirements / admissions.scholarships
3) international -> international.partners (кол-во найденных партнёров) + international.exchangePrograms (названия программ обмена)
4) programs -> минимум 5–15 программ (если есть), иначе сколько найдено
5) foundedYear -> год основания (если не найден — 0)
6) studentCount -> если есть число студентов (иначе 0)
7) ranking -> если реально есть “#1”/место в рейтинге на сайте; иначе 0
8) virtual tour -> если есть, добавь в description строку “3D-тур: <url>” (отдельной строкой)

ФОРМАТ ВЫВОДА:
Верни ТОЛЬКО валидный JSON ОДНОГО объекта (без markdown, без пояснений), строго по этой схеме:

{
  "id": "uni--{{stable_id_or_given}}",
  "name": "{{official_name}}",
  "shortName": "{{abbr_or_short}}",
  "location": "{{city_or_main_location}}",
  "description": "Руководство: ...\n\nДостижения: ...\n\nПоступление (требования): ...\n\nСроки приёма: ...\n\nГранты/скидки/стипендии: ...\n\nМеждународные партнёры (примеры): ...\n\n3D-тур: ...",
  "foundedYear": 0,
  "ranking": 0,
  "studentCount": 0,
  "acceptanceRate": 0,
  "tuitionRange": { "min": 0, "max": 0 },
  "website": "{{base_url}}",
  "logoUrl": "/logos/{{id}}.png",
  "imageUrl": "{{image_url_or_default}}",
  "type": "state|private",
  "programs": [
    {
      "id": "{{id}}-p-0",
      "name": "{{program_name}}",
      "degree": "Bachelor|Master|PhD|Foundation|Other",
      "duration": "{{e.g. '4 years' or ''}}",
      "tuition": 0,
      "language": "{{English|Russian|Kazakh|Other|''}}"
    }
  ],
  "admissions": {
    "deadline": [],
    "requirements": [],
    "scholarships": []
  },
  "international": {
    "partners": 0,
    "exchangePrograms": []
  },
  "stats": {
    "employmentRate": 0,
    "researchOutput": "Low|Medium|High",
    "studentSatisfaction": 0
  }
}

ПРАВИЛА ДЛЯ description:
- Делай ровно 6–8 блоков как в примере (каждый с заголовком и двоеточием).
- В каждом блоке 1–3 предложения максимум.
- Если блоков нет — оставляй пустую строку "" или заполняй только найденные блоки.

ПРАВИЛА ДЛЯ programs:
- Не добавляй “Undergraduate Programs” как программу, если это просто раздел.
- Если нет списка программ — верни [].

ПРОВЕРКА ПЕРЕД ОТВЕТОМ:
- JSON валидный.
- Все ключи присутствуют.
- Нет null (только 0/""/[]).

"""


LINK_DISCOVERY_INSTRUCTION = """
Ты — модуль обнаружения ссылок (link discovery) для сайта университета.
Нужно найти URL ключевых разделов. Ищи в: меню, футере, сайдбаре, хлебных крошках и внутренних ссылках.

Верни СТРОГО JSON-массив объектов:
[
  {
    "key": "about|programs|admissions|tour_3d|international",
    "url": "https://....",
    "anchor_text": "текст ссылки как на сайте",
    "confidence": 0.0-1.0
  }
]

Ключи:
- about: О нас / Об университете / Миссия / История / Ректор / Руководство
- programs: Академические программы / Специальности / Факультеты / Образование / Programs / Faculties
- admissions: Поступление / Абитуриенту / Приемная комиссия / Admissions / Enrollment
- tour_3d: 3D-тур / Виртуальный тур / Virtual tour / Панорама
- international: Международное сотрудничество / International / Mobility / Partners / Erasmus

Правила:
1) Возвращай только валидные ПОЛНЫЕ URL (абсолютные). Если ссылка относительная — преобразуй в абсолютную.
2) Убери дубликаты (одинаковый URL).
3) Не включай соцсети, PDF, файлы, новости (если они не являются разделом).
4) Если раздела нет — не возвращай объект с этим key.
5) Сортируй по confidence по убыванию.

Ничего кроме JSON не возвращай.
"""


# ---------------------------------------------------------
# 4. ЛОГИКА ПАРСЕРА
# ---------------------------------------------------------

class UniversityScraper:
    def __init__(self, api_key: str, output_file: str = "universities_data.json"):
        self.api_key = api_key
        # ЯВНОЕ ИСПОЛЬЗОВАНИЕ GEMINI FLASH LATEST (Corrected)
        self.provider = "gemini/gemini-flash-latest"
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

    async def discover_links(self, url: str, html: Optional[str] = None) -> List[Dict]:
        """Фаза 1: Поиск ссылок (LLM + Fallback)."""
        logger.info(f"🔍 Searching links for: {url}")
        
        # Optimization: If HTML is provided (from main scrape), skip network call!
        if html and BeautifulSoup:
            logger.info("⚡️ Using cached HTML for link discovery")
            return self._heuristic_link_discovery(html, url)

        # 1. Попытка через LLM (Network Call)
        strategy = LLMExtractionStrategy(
            llm_config=self._get_llm_config(),
            schema=LinksDiscovery.model_json_schema(),
            instruction=LINK_DISCOVERY_INSTRUCTION
        )
        
        config = CrawlerRunConfig(
            extraction_strategy=strategy,
            cache_mode=CacheMode.BYPASS,
            page_timeout=40000,
            wait_until="domcontentloaded"
        )

        async with AsyncWebCrawler(config=BrowserConfig(headless=True, extra_args=["--disable-blink-features=AutomationControlled"], ignore_https_errors=True)) as crawler:
            try:
                # Получаем и HTML и результат LLM
                result = await crawler.arun(url=url, config=config)
                
                llm_links = []
                if result.success and result.extracted_content:
                    try:
                        clean_content = self._clean_json(result.extracted_content)
                        data = json.loads(clean_content)
                        if isinstance(data, list) and data:
                            data = data[0]
                        llm_links = data.get('links', [])
                    except Exception:
                        pass
                
                if llm_links:
                    return llm_links
                    
                # 2. Fallback: Heuristic
                logger.info("⚠️ LLM found 0 links, trying heuristic fallback...")
                if result.success and result.html and BeautifulSoup:
                    return self._heuristic_link_discovery(result.html, url)
                    
            except Exception as e:
                logger.error(f"Link discovery failed significantly: {e}")
        
        return []

    def _heuristic_link_discovery(self, html: str, base_url: str) -> List[Dict]:
        """Поиск ссылок по ключевым словам через BS4."""
        soup = BeautifulSoup(html, 'html.parser')
        links = []
        seen = set()
        
        # Ключевые слова для разделов
        keywords = {
            'about': ['about', 'о нас', 'история', 'history', 'mission', 'миссия'],
            'programs': ['program', 'программы', 'academics', 'обучение', 'specialties', 'специальности', 'degree', 'бакалавриат'],
            'admissions': ['admission', 'поступление', 'абитуриент', 'apply', 'прием'],
            'international': ['international', 'международ', 'partner', 'global'],
            'virtual_tour': ['3d', 'tour', 'тур', 'виртуальн']
        }
        
        from urllib.parse import urljoin

        for a in soup.find_all('a', href=True):
            text = a.get_text(strip=True).lower()
            href = a['href']
            full_url = urljoin(base_url, href)
            
            if not text or len(text) < 3: continue
            
            for section, keys in keywords.items():
                if any(k in text for k in keys) and full_url not in seen:
                    links.append({
                        "url": full_url,
                        "section_type": section,
                        "title": text[:50]
                    })
                    seen.add(full_url)
                    break # Assign to first matching category
                    
        return links[:15] # Return top matches

    async def scrape_page(self, url: str, schema_cls=UniversityData) -> Tuple[Optional[Dict], Optional[str]]:
        """Универсальная функция парсинга страницы. Возвращает (data, html)."""
        strategy = LLMExtractionStrategy(
            llm_config=self._get_llm_config(),
            schema=schema_cls.model_json_schema(),
            instruction=EXTRACTION_INSTRUCTION,
            magic=True
        )
        
        browser_cfg = BrowserConfig(
            browser_type="chromium",
            headless=True,
            ignore_https_errors=True,
            headers={
                # Реалистичный User-Agent (Chrome на macOS)
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "none",
                "Sec-Fetch-User": "?1"
            },
            extra_args=["--disable-blink-features=AutomationControlled", "--no-sandbox"],
            enable_stealth=True
        )

        async with AsyncWebCrawler(config=browser_cfg) as crawler:
            for attempt in range(3):
                try:
                    result = await crawler.arun(
                        url=url, 
                        config=CrawlerRunConfig(
                            extraction_strategy=strategy,
                            cache_mode=CacheMode.BYPASS,
                            page_timeout=40000, # 40 сек
                            wait_until="domcontentloaded"
                        )
                    )
                    
                    if result.success and result.extracted_content:
                        clean_content = self._clean_json(result.extracted_content)
                        data = json.loads(clean_content)
                        if isinstance(data, list) and data:
                            data = data[0]
                        return data, result.html # Return HTML too!
                except Exception as e:
                    logger.warning(f"Failed to scrape {url} (Attempt {attempt+1}/3): {e}")
                    await asyncio.sleep(2 * (attempt + 1)) # Backoff
            
            logger.error(f"❌ All attempts failed for {url}")
        return None, None

    def merge_data(self, main_data: Dict, new_data: Dict) -> Dict:
        """Умное слияние данных с внутренних страниц (адаптировано под новый формат universities.ts)."""
        if not new_data: 
            return main_data
        
        # Простое слияние: берем не-пустые значения из new_data, если в main_data нет или пусто
        
        # description - конкатенируем или берем более полный
        if new_data.get('description') and len(new_data.get('description', '')) > len(main_data.get('description', '')):
            main_data['description'] = new_data['description']
        
        # foundedYear, ranking, studentCount - берем ненулевые значения
        for key in ['foundedYear', 'ranking', 'studentCount', 'acceptanceRate']:
            if new_data.get(key) and (not main_data.get(key) or main_data.get(key) == 0):
                main_data[key] = new_data[key]
        
        # tuitionRange - если есть мин или макс
        if 'tuitionRange' in new_data:
            if 'tuitionRange' not in main_data:
                main_data['tuitionRange'] = {'min': 0, 'max': 0}
            if new_data['tuitionRange'].get('min', 0) > 0:
                main_data['tuitionRange']['min'] = new_data['tuitionRange']['min']
            if new_data['tuitionRange'].get('max', 0) > 0:
                main_data['tuitionRange']['max'] = new_data['tuitionRange']['max']
        
        # programs - объединяем без дубликатов по имени
        if 'programs' in new_data and isinstance(new_data['programs'], list):
            if 'programs' not in main_data:
                main_data['programs'] = []
            
            existing_names = {p.get('name') for p in main_data.get('programs', []) if isinstance(p, dict)}
            for prog in new_data['programs']:
                if isinstance(prog, dict) and prog.get('name') and prog['name'] not in existing_names:
                    main_data['programs'].append(prog)
                    existing_names.add(prog['name'])
        
        # admissions - объединяем массивы
        if 'admissions' in new_data:
            if 'admissions' not in main_data:
                main_data['admissions'] = {'deadline': [], 'requirements': [], 'scholarships': []}
            
            for key in ['deadline', 'requirements', 'scholarships']:
                if isinstance(new_data['admissions'].get(key), list):
                    existing_set = set(main_data['admissions'].get(key, []))
                    for item in new_data['admissions'][key]:
                        if item and item not in existing_set:
                            if key not in main_data['admissions']:
                                main_data['admissions'][key] = []
                            main_data['admissions'][key].append(item)
                            existing_set.add(item)
        
        # international - partners это ЧИСЛО, exchangePrograms это массив
        if 'international' in new_data:
            if 'international' not in main_data:
                main_data['international'] = {'partners': 0, 'exchangePrograms': []}
            
            # partners - берем максимальное число
            if isinstance(new_data['international'].get('partners'), int):
                main_data['international']['partners'] = max(
                    main_data['international'].get('partners', 0), 
                    new_data['international']['partners']
                )
            
            # exchangePrograms - объединяем массивы
            if isinstance(new_data['international'].get('exchangePrograms'), list):
                existing_progs = set(main_data['international'].get('exchangePrograms', []))
                for prog in new_data['international']['exchangePrograms']:
                    if prog and prog not in existing_progs:
                        if 'exchangePrograms' not in main_data['international']:
                            main_data['international']['exchangePrograms'] = []
                        main_data['international']['exchangePrograms'].append(prog)
                        existing_progs.add(prog)
        
        # stats - простое объединение
        if 'stats' in new_data:
            if 'stats' not in main_data:
                main_data['stats'] = {'employmentRate': 0, 'researchOutput': 'Medium', 'studentSatisfaction': 0}
            
            for key in ['employmentRate', 'studentSatisfaction']:
                if new_data['stats'].get(key) and (not main_data['stats'].get(key) or main_data['stats'].get(key) == 0):
                    main_data['stats'][key] = new_data['stats'][key]
            
            if new_data['stats'].get('researchOutput') and new_data['stats']['researchOutput'] != 'Medium':
                main_data['stats']['researchOutput'] = new_data['stats']['researchOutput']
        
        return main_data

    def _norm_url(self, u: str) -> str:
        """Нормализация URL для сравнения."""
        if not u:
            return ""
        u = u.strip()
        return u[:-1] if u.endswith("/") else u

    def _extract_year(self, text: str) -> int | None:
        """Извлечение года из текста."""
        if not text:
            return None
        m = re.search(r"(18\d{2}|19\d{2}|20\d{2})", text)
        return int(m.group(1)) if m else None

    def _extract_int(self, text: str) -> int | None:
        """Извлечение целого числа из текста."""
        if not text:
            return None
        s = re.sub(r"[^\d]", "", text)
        return int(s) if s else None

    def _extract_percent(self, text: str) -> int | None:
        """Извлечение процента из текста."""
        if not text:
            return None
        m = re.search(r"(\d{1,3})\s*%", text)
        if not m:
            return None
        v = int(m.group(1))
        return v if 0 <= v <= 100 else None

    def _degree_map(self, degree_level: str | None) -> str:
        """Преобразование уровня степени."""
        if not degree_level:
            return "Bachelor"
        d = degree_level.lower()
        if "маг" in d or "master" in d:
            return "Master"
        if "док" in d or "phd" in d:
            return "PhD"
        return "Bachelor"

    def _build_description(self, uni: dict) -> str | None:
        """Построение описания университета из данных парсера."""
        # Поддержка обеих структур: старой (about) и новой (about_university)
        about = uni.get("about_university") or uni.get("about") or {}
        admissions = uni.get("admissions") or {}
        intl = uni.get("international_cooperation") or uni.get("international") or {}
        tour = uni.get("tour_3d") or uni.get("virtual_tour") or {}
        stats = uni.get("stats") or {}

        parts = []

        if about.get("mission"):
            parts.append(f"Миссия: {about['mission']}")
        if about.get("history_summary") or about.get("history"):
            history = about.get("history_summary") or about.get("history")
            parts.append(f"История: {history}")
        if about.get("leadership"):
            parts.append(f"Руководство: {about['leadership']}")
        if about.get("achievements"):
            achievements = about["achievements"]
            if isinstance(achievements, list):
                ach = "; ".join([str(a) for a in achievements if a])[:500]  # Ограничение длины
                if ach:
                    parts.append(f"Достижения: {ach}")

        # Admissions - поддержка обеих структур
        req = admissions.get("requirements")
        if req:
            req_text = req if isinstance(req, str) else str(req)
            parts.append(f"Поступление (требования): {req_text[:200]}")
        
        deadlines = admissions.get("deadlines")
        if deadlines:
            if isinstance(deadlines, list):
                deadlines = "; ".join([str(d) for d in deadlines if d])
            parts.append(f"Сроки приёма: {str(deadlines)[:200]}")
        
        scholarships = admissions.get("scholarships") or admissions.get("scholarships_fin_aid")
        if scholarships:
            sch_text = scholarships if isinstance(scholarships, str) else str(scholarships)
            parts.append(f"Гранты/скидки/стипендии: {sch_text[:200]}")
        
        tuition = admissions.get("tuition_info")
        if tuition:
            parts.append(f"Оплата/стоимость: {tuition[:200]}")

        # Virtual tour - обе структуры
        if tour.get("is_available") and tour.get("url"):
            parts.append(f"3D/виртуальный тур: {tour['url']}")
        elif tour.get("tour_url"):
            parts.append(f"3D/виртуальный тур: {tour['tour_url']}")

        # International partners - обе структуры
        partners = intl.get("partner_universities") or intl.get("partners") or []
        if partners and isinstance(partners, list):
            partners_text = ', '.join([str(p) for p in partners[:10] if p])
            if partners_text:
                parts.append(f"Международные партнёры (примеры): {partners_text}")

        # Stats
        if stats.get("student_count"):
            parts.append(f"Студентов: {stats['student_count']}")
        if stats.get("employment_rate"):
            parts.append(f"Трудоустройство: {stats['employment_rate']}")

        return "\n\n".join(parts) if parts else None

    def update_universities_ts(self, ts_path: str = "data/universities.ts", add_missing: bool = False):
        """Обновление universities.ts с данными из парсера."""
        ts_file = Path(ts_path)
        if not ts_file.exists():
            raise FileNotFoundError(f"universities.ts not found at: {ts_file.resolve()}")

        content = ts_file.read_text(encoding="utf-8")

        # Вытащить массив из `export const universities: University[] = [ ... ];`
        m = re.search(r"export const universities:\s*University\[\]\s*=\s*(\[[\s\S]*?\]);\s*$", content)
        if not m:
            raise ValueError("Cannot find `export const universities: University[] = [...]` in universities.ts")

        arr_text = m.group(1)
        arr_clean = re.sub(r",\s*([}\]])", r"\1", arr_text)  # убрать trailing commas для JSON
        current = json.loads(arr_clean)

        by_site = {}
        for obj in current:
            site = self._norm_url(obj.get("website", ""))
            if site:
                by_site[site] = obj

        updated = 0
        added = 0

        for uni in self.results:
            site = self._norm_url(uni.get("website", ""))
            if not site:
                continue

            existing = by_site.get(site)
            if not existing and not add_missing:
                continue

            if not existing:
                # создать новый объект, если разрешено add_missing
                uid = "uni-" + hashlib.sha1(site.encode("utf-8")).hexdigest()[:16]
                existing = {
                    "id": uid,
                    "name": uni.get("university_name") or "Unknown University",
                    "shortName": (uni.get("university_name") or "Uni")[:10],
                    "location": uni.get("city") or "Kazakhstan",
                    "description": "Информация загружается.",
                    "foundedYear": 2000,
                    "ranking": 0,
                    "studentCount": 0,
                    "acceptanceRate": 0,
                    "tuitionRange": {"min": 0, "max": 0},
                    "website": site,
                    "logoUrl": f"/logos/{uid}.png",
                    "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
                    "type": "state",
                    "programs": [],
                    "admissions": {"deadline": "", "requirements": [], "scholarships": []},
                    "international": {"partners": 0, "exchangePrograms": []},
                    "stats": {"employmentRate": 0, "researchOutput": "Medium", "studentSatisfaction": 0},
                }
                current.append(existing)
                by_site[site] = existing
                added += 1

            # --- обновление полей из парсера ---
            if uni.get("city"):
                existing["location"] = uni["city"]

            desc = self._build_description(uni)
            if desc:
                existing["description"] = desc

            founded = self._extract_year((uni.get("about") or {}).get("history_summary"))
            if founded:
                existing["foundedYear"] = founded

            # programs - поддержка обеих структур
            progs = uni.get("academic_programs") or []
            
            # Обработка новой структуры (program_examples)
            if isinstance(progs, dict) and progs.get("program_examples"):
                program_examples = progs.get("program_examples", [])
                if program_examples:
                    new_programs = []
                    uid = existing["id"]
                    for i, pname in enumerate(program_examples[:20]):
                        if not pname or not isinstance(pname, str):
                            continue
                        pname = pname.strip()
                        
                        # Определение уровня по ключевым словам
                        degree = "Bachelor"
                        pname_lower = pname.lower()
                        if any(word in pname_lower for word in ["магистр", "master", "ma ", "msc", "graduate"]):
                            degree = "Master"
                        elif any(word in pname_lower for word in ["докторант", "phd", "postgraduate"]):
                            degree = "PhD"
                        
                        new_programs.append({
                            "id": f"{uid}-p-{i}",
                            "name": pname,
                            "degree": degree,
                            "duration": "4 years",
                            "tuition": 0,
                            "language": "English"
                        })
                    if new_programs:
                        existing["programs"] = new_programs
            # Обработка старой структуры (список словарей)
            elif isinstance(progs, list) and progs:
                new_programs = []
                uid = existing["id"]
                for i, p in enumerate(progs[:20]):
                    if not isinstance(p, dict):
                        continue
                    pname = (p.get("program_name") or "").strip()
                    if not pname:
                        continue
                    new_programs.append({
                        "id": f"{uid}-p-{i}",
                        "name": pname,
                        "degree": self._degree_map(p.get("degree_level")),
                        "duration": "4 years",
                        "tuition": 0,
                        "language": "English"
                    })
                if new_programs:
                    existing["programs"] = new_programs

            # admissions
            adm = uni.get("admissions") or {}
            req = adm.get("requirements")
            if req:
                existing["admissions"]["requirements"] = [req]
            if adm.get("deadlines"):
                existing["admissions"]["deadline"] = adm["deadlines"]
            if adm.get("scholarships"):
                existing["admissions"]["scholarships"] = [adm["scholarships"]]

            # international
            intl = uni.get("international") or {}
            partners = intl.get("partners") or []
            if partners:
                existing["international"]["partners"] = len(partners)
            if intl.get("exchange_programs"):
                existing["international"]["exchangePrograms"] = [intl["exchange_programs"]] if isinstance(intl["exchange_programs"], str) else intl["exchange_programs"]

            # stats
            st = uni.get("stats") or {}
            emp = self._extract_percent(st.get("employment_rate"))
            if emp is not None:
                existing["stats"]["employmentRate"] = emp
            sc = self._extract_int(st.get("student_count"))
            if sc is not None:
                existing["studentCount"] = sc

            updated += 1

        # перезаписать файл: сохранить всё до `export const universities...`, затем новый массив
        prefix = content[:m.start()]
        new_block = "export const universities: University[] = " + json.dumps(current, ensure_ascii=False, indent=4) + ";\n"
        ts_file.write_text(prefix + new_block, encoding="utf-8")

        logger.info(f"🧩 universities.ts updated={updated}, added={added}, path={ts_file.resolve()}")

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

        # 1. Парсинг главной (Prioritize Main Data)
        main_data, main_html = await self.scrape_page(url)
        if not main_data:
            logger.error(f"❌ Main page failed: {name}")
            return
        
        # Заполняем базовые поля, если AI пропустил
        main_data['university_name'] = name
        main_data['website'] = url
        main_data['city'] = uni_info['city']
        main_data['_scraped_at'] = datetime.now().isoformat()

        await asyncio.sleep(5) # Delay before deep scraping

        # 2. Поиск ссылок (Reuse HTML if available!)
        try:
            links = await self.discover_links(url, main_html)
            logger.info(f"Found {len(links)} links for {name}")
        except Exception as e:
            logger.warning(f"Link discovery failed: {e}")
            links = []

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
            sub_data, _ = await self.scrape_page(l_url)
            if sub_data:
                main_data = self.merge_data(main_data, sub_data)
            
            await asyncio.sleep(2) # Вежливость
            if len(processed_types) >= 3: break

        # Сохранение в общий список
        # Удаляем старую запись если есть
        self.results = [r for r in self.results if r.get('website') != url]
        self.results.append(main_data)
        self.save_to_file()
        logger.info(f"✅ Готово: {name}")

    def save_to_file(self):
        # Сохраняем JSON для дебага
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump({
                "last_update": datetime.now().isoformat(),
                "universities": self.results
            }, f, ensure_ascii=False, indent=2)
        
        # Теперь обновляем universities.ts напрямую
        try:
            self.update_universities_ts("data/universities.ts", add_missing=False)
            logger.info("🔄 universities.ts updated from scraper results")
        except Exception as e:
            logger.warning(f"Failed to update universities.ts: {e}")

    async def run_all(self, single_uni_info: Optional[Dict] = None):
        if single_uni_info:
            await self.process_university(single_uni_info)
        else:
            for uni in KAZAKHSTAN_UNIVERSITIES:
                await self.process_university(uni)
                await asyncio.sleep(2) # Пауза между вузами

# ---------------------------------------------------------
# 5. ЗАПУСК
# ---------------------------------------------------------

async def main():
    import argparse
    parser = argparse.ArgumentParser(description="UniDataHub Scraper")
    parser.add_argument("--url", help="Scrape a single university by URL")
    parser.add_argument("--name", help="Name of the university (used if --url is provided)")
    args = parser.parse_args()

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
    
    if args.url:
        uni_info = {
            'name': args.name or "Unknown University",
            'url': args.url,
            'city': 'Unknown'
        }
        print(f"🎯 Single target mode: {uni_info['name']}")
        await scraper.run_all(single_uni_info=uni_info)
    else:
        await scraper.run_all()

    print("✅ Парсинг завершён! universities.ts обновлён автоматически.")

if __name__ == "__main__":
    asyncio.run(main())
