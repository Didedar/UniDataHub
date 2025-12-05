"""
=============================================================================
UniDataHub API Server
=============================================================================
FastAPI backend for Crawl4AI university scraping integration with Next.js frontend.

Features:
- Crawl4AI + LLM extraction for structured university data
- Caching system to avoid redundant scraping
- Background task processing
- CORS enabled for Next.js frontend

Author: DataHub Team
"""

import os
import json
import asyncio
import logging
from datetime import datetime
from pathlib import Path
from typing import Optional, Dict, Any, List

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Import from our Crawl4AI scraper
from crawl4ai_scraper import (
    Crawl4AIUniversityScraper,
    KAZAKHSTAN_UNIVERSITIES,
    UniversityData,
    AboutUniversity,
    AcademicProgram,
    Admissions,
    VirtualTour,
    InternationalCooperation
)

# =============================================================================
# LOGGING SETUP
# =============================================================================

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('api_server.log', encoding='utf-8'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# =============================================================================
# APP CONFIGURATION
# =============================================================================

app = FastAPI(
    title="UniDataHub API",
    description="API для каталога казахстанских университетов с Crawl4AI",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене укажите конкретные домены
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =============================================================================
# CONFIGURATION
# =============================================================================

CACHE_DIR = Path("scraped_cache")
CACHE_DIR.mkdir(exist_ok=True)
CACHE_DURATION = 3600  # 1 час
OUTPUT_FILE = "universities_data.json"

# LLM Provider (Google Gemini по умолчанию)
LLM_PROVIDER = os.environ.get("LLM_PROVIDER", "gemini/gemini-1.5-flash")
API_KEY = os.environ.get("GOOGLE_API_KEY")


# =============================================================================
# PYDANTIC MODELS (API Response)
# =============================================================================

class UniversityListItem(BaseModel):
    id: str
    name: str
    short_name: str
    url: str
    city: str


class AboutSection(BaseModel):
    mission: Optional[str] = ""
    history_summary: Optional[str] = ""
    leadership: Optional[str] = ""
    achievements: List[str] = []


class AcademicsSection(BaseModel):
    programs: List[Dict[str, str]] = []
    degrees_offered: List[str] = []


class AdmissionsSection(BaseModel):
    requirements: Optional[str] = ""
    deadlines: Optional[str] = ""
    scholarships: Optional[str] = ""
    tuition_info: Optional[str] = ""


class TourSection(BaseModel):
    is_available: bool = False
    url: Optional[str] = ""
    description: Optional[str] = ""


class InternationalSection(BaseModel):
    partners: List[str] = []
    exchange_programs: Optional[str] = ""
    foreign_student_info: Optional[str] = ""


class ScrapedUniversity(BaseModel):
    id: str
    url: str
    scraped_at: str
    university_name: str
    city: str
    about: AboutSection
    academics: AcademicsSection
    admissions: AdmissionsSection
    tour: TourSection
    international: InternationalSection
    cached: bool = False
    error: Optional[str] = None


# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def get_uni_id_from_url(url: str) -> str:
    """Extract university ID from URL."""
    from urllib.parse import urlparse
    domain = urlparse(url).netloc
    # Remove www. and .kz/.edu.kz etc
    parts = domain.replace('www.', '').split('.')
    return parts[0] if parts else domain


def get_cache_path(uni_id: str) -> Path:
    """Get cache file path."""
    return CACHE_DIR / f"{uni_id}.json"


def get_cached_data(uni_id: str) -> Optional[Dict[str, Any]]:
    """Get cached data if valid."""
    cache_path = get_cache_path(uni_id)
    
    if not cache_path.exists():
        return None
    
    try:
        with open(cache_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Check if cache is still valid
        scraped_at = data.get('_metadata', {}).get('scraped_at', '')
        if scraped_at:
            scraped_time = datetime.fromisoformat(scraped_at)
            age = (datetime.now() - scraped_time).total_seconds()
            if age < CACHE_DURATION:
                data['cached'] = True
                return data
    except Exception as e:
        logger.error(f"Cache read error for {uni_id}: {e}")
    
    return None


def save_to_cache(uni_id: str, data: Dict[str, Any]):
    """Save data to cache."""
    cache_path = get_cache_path(uni_id)
    try:
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        logger.info(f"Cached data for {uni_id}")
    except Exception as e:
        logger.error(f"Cache save error for {uni_id}: {e}")


def find_university(uni_id: str) -> Optional[Dict[str, str]]:
    """Find university in master list."""
    for uni in KAZAKHSTAN_UNIVERSITIES:
        if get_uni_id_from_url(uni['url']) == uni_id:
            return uni
    return None


def transform_to_response(data: Dict[str, Any], uni_id: str) -> Dict[str, Any]:
    """Transform Crawl4AI output to API response format matching frontend."""
    
    metadata = data.get('_metadata', {})
    about_data = data.get('about', {}) if isinstance(data.get('about'), dict) else {}
    
    # About section - frontend expects: name, mission, history_summary, rector
    about = {
        'name': data.get('university_name', metadata.get('original_name', '')),
        'mission': about_data.get('mission') or about_data.get('history_summary') or '',
        'history_summary': about_data.get('history_summary', ''),
        'rector': about_data.get('leadership', ''),  # Map leadership to rector
        'achievements': about_data.get('achievements', [])  # Bonus field
    }
    
    # Academics - frontend expects: degrees_offered, faculties
    programs = data.get('academic_programs', [])
    degrees = set()
    faculties = set()
    for p in programs:
        if isinstance(p, dict):
            if p.get('degree_level'):
                degrees.add(p['degree_level'])
            if p.get('faculty'):
                faculties.add(p['faculty'])
    
    academics = {
        'degrees_offered': list(degrees),
        'faculties': list(faculties),
        'programs': [
            {'name': p.get('program_name', ''), 'level': p.get('degree_level', ''), 'faculty': p.get('faculty', '')}
            for p in programs if isinstance(p, dict)
        ]
    }
    
    # Admissions - frontend expects: deadlines, scholarship_info, applicant_link
    adm_data = data.get('admissions', {}) if isinstance(data.get('admissions'), dict) else {}
    admissions = {
        'requirements': adm_data.get('requirements', ''),
        'deadlines': adm_data.get('deadlines', ''),
        'scholarship_info': adm_data.get('scholarships', ''),  # Map scholarships to scholarship_info
        'tuition_info': adm_data.get('tuition_info', ''),
        'applicant_link': ''  # Not in scraper output
    }
    
    # Tour - frontend expects: has_3d_tour, tour_link
    tour_data = data.get('virtual_tour', {}) if isinstance(data.get('virtual_tour'), dict) else {}
    tour = {
        'has_3d_tour': tour_data.get('is_available', False),  # Map is_available to has_3d_tour
        'tour_link': tour_data.get('url', '') or '',  # Map url to tour_link
        'description': tour_data.get('description', '')
    }
    
    # International - frontend expects: has_exchange_programs, exchange_programs, erasmus_mention
    intl_data = data.get('international', {}) if isinstance(data.get('international'), dict) else {}
    exchange_str = intl_data.get('exchange_programs', '') or ''
    partners = intl_data.get('partners', [])
    
    international = {
        'has_exchange_programs': bool(exchange_str or partners),
        'exchange_programs': exchange_str,
        'erasmus_mention': 'erasmus' in exchange_str.lower() if exchange_str else False,
        'partners': partners,
        'foreign_student_info': intl_data.get('foreign_student_info', '')
    }
    
    # Comparison section (from static data or defaults)
    comparison = {
        'student_count': None,
        'tuition_min': None,
        'tuition_max': None,
        'faculty_count': len(faculties) if faculties else None,
        'founded_year': None
    }
    
    # Meta section
    meta = {
        'name': data.get('university_name', metadata.get('original_name', '')),
        'short_name': data.get('short_name', uni_id.upper()),
        'city': data.get('city', metadata.get('city', '')),
        'type': 'university'
    }
    
    return {
        'id': uni_id,
        'url': metadata.get('source_url', data.get('website', '')),
        'scraped_at': metadata.get('scraped_at', datetime.now().isoformat()),
        'about': about,
        'academics': academics,
        'admissions': admissions,
        'tour': tour,
        'international': international,
        'comparison': comparison,
        'meta': meta,
        'cached': data.get('cached', False),
        'error': None if not metadata.get('error') else 'Scraping failed',
        'pages_scraped': metadata.get('pages_scraped', 1),
        'sections_found': metadata.get('sections_found', [])
    }


def load_all_data() -> List[Dict[str, Any]]:
    """Load all scraped data from JSON."""
    if not Path(OUTPUT_FILE).exists():
        return []
    
    try:
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data.get('universities', [])
    except Exception as e:
        logger.error(f"Error loading data: {e}")
        return []


# Track scraping tasks
scraping_tasks: Dict[str, str] = {}


# =============================================================================
# API ENDPOINTS
# =============================================================================

@app.get("/")
async def root():
    """API информация."""
    return {
        "name": "UniDataHub API",
        "version": "2.0.0",
        "scraper": "Crawl4AI + LLM",
        "provider": LLM_PROVIDER,
        "endpoints": {
            "GET /universities": "Список всех университетов",
            "GET /scrape/{uni_id}": "Спарсить университет по ID",
            "GET /data/{uni_id}": "Получить данные университета",
            "GET /data": "Все спарсенные данные",
            "POST /scrape-all": "Запустить парсинг всех университетов"
        }
    }


@app.get("/universities", response_model=List[UniversityListItem])
async def list_universities():
    """Список всех университетов Казахстана."""
    result = []
    for uni in KAZAKHSTAN_UNIVERSITIES:
        uni_id = get_uni_id_from_url(uni['url'])
        result.append(UniversityListItem(
            id=uni_id,
            name=uni['name'],
            short_name=uni_id.upper(),
            url=uni['url'],
            city=uni['city']
        ))
    return result


@app.get("/scrape/{uni_id}")
async def scrape_university(uni_id: str, force: bool = False):
    """
    Спарсить университет по ID.
    
    Args:
        uni_id: ID университета (nu, kaznu, kbtu, etc.)
        force: Принудительно обновить, игнорируя кэш
    """
    # Find university
    uni = find_university(uni_id)
    if not uni:
        raise HTTPException(status_code=404, detail=f"Университет '{uni_id}' не найден")
    
    # Check cache
    if not force:
        cached = get_cached_data(uni_id)
        if cached:
            logger.info(f"Returning cached data for {uni_id}")
            return transform_to_response(cached, uni_id)
    
    # Check API key
    if not API_KEY:
        raise HTTPException(
            status_code=500,
            detail="API ключ не настроен. Установите GOOGLE_API_KEY или OPENAI_API_KEY"
        )
    
    # Mark as scraping
    scraping_tasks[uni_id] = "scraping"
    
    try:
        scraper = Crawl4AIUniversityScraper(
            api_key=API_KEY,
            provider=LLM_PROVIDER
        )
        
        result = await scraper.scrape_university(
            url=uni['url'],
            name=uni['name'],
            city=uni['city']
        )
        
        if result:
            # Cache the result
            save_to_cache(uni_id, result)
            scraping_tasks[uni_id] = "done"
            return transform_to_response(result, uni_id)
        else:
            scraping_tasks[uni_id] = "failed"
            raise HTTPException(status_code=500, detail="Ошибка парсинга")
            
    except Exception as e:
        scraping_tasks[uni_id] = "failed"
        logger.error(f"Scrape error for {uni_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/status/{uni_id}")
async def get_scrape_status(uni_id: str):
    """Статус парсинга университета."""
    status = scraping_tasks.get(uni_id, "unknown")
    has_cache = get_cache_path(uni_id).exists()
    
    return {
        "uni_id": uni_id,
        "status": status,
        "has_cache": has_cache
    }


@app.get("/data")
async def get_all_data():
    """Все спарсенные данные."""
    data = load_all_data()
    
    if not data:
        # Try to collect from cache
        cached_data = []
        for uni in KAZAKHSTAN_UNIVERSITIES:
            uni_id = get_uni_id_from_url(uni['url'])
            cached = get_cached_data(uni_id)
            if cached:
                cached_data.append(transform_to_response(cached, uni_id))
        
        if cached_data:
            return {
                "total": len(cached_data),
                "source": "cache",
                "universities": cached_data
            }
        
        return {
            "total": 0,
            "message": "Нет данных. Запустите /scrape-all для парсинга."
        }
    
    return {
        "total": len(data),
        "source": "file",
        "universities": [
            transform_to_response(d, get_uni_id_from_url(d.get('_metadata', {}).get('source_url', d.get('website', ''))))
            for d in data
        ]
    }


@app.get("/data/{uni_id}")
async def get_university_data(uni_id: str):
    """Данные конкретного университета."""
    # Try cache first
    cached = get_cached_data(uni_id)
    if cached:
        return transform_to_response(cached, uni_id)
    
    # Try main data file
    all_data = load_all_data()
    for d in all_data:
        d_id = get_uni_id_from_url(d.get('_metadata', {}).get('source_url', d.get('website', '')))
        if d_id == uni_id:
            return transform_to_response(d, uni_id)
    
    raise HTTPException(
        status_code=404,
        detail=f"Данные для '{uni_id}' не найдены. Используйте /scrape/{uni_id}"
    )


@app.post("/scrape-all")
async def trigger_scrape_all(background_tasks: BackgroundTasks, limit: int = None):
    """
    Запустить парсинг всех университетов (фоновая задача).
    
    Args:
        limit: Ограничение количества (для тестирования)
    """
    if not API_KEY:
        raise HTTPException(
            status_code=500,
            detail="API ключ не настроен"
        )
    
    async def run_scrape():
        scraper = Crawl4AIUniversityScraper(
            api_key=API_KEY,
            provider=LLM_PROVIDER,
            output_file=OUTPUT_FILE
        )
        await scraper.scrape_all(limit=limit, delay_between_requests=3.0)
    
    # Run in background
    background_tasks.add_task(asyncio.create_task, run_scrape())
    
    return {
        "status": "started",
        "message": f"Парсинг {'первых ' + str(limit) if limit else 'всех'} университетов запущен",
        "total": limit or len(KAZAKHSTAN_UNIVERSITIES)
    }


@app.delete("/cache/{uni_id}")
async def clear_cache(uni_id: str):
    """Очистить кэш для университета."""
    cache_path = get_cache_path(uni_id)
    if cache_path.exists():
        cache_path.unlink()
        return {"status": "cleared", "uni_id": uni_id}
    return {"status": "not_found", "uni_id": uni_id}


@app.delete("/cache")
async def clear_all_cache():
    """Очистить весь кэш."""
    count = 0
    for cache_file in CACHE_DIR.glob("*.json"):
        cache_file.unlink()
        count += 1
    return {"status": "cleared", "files_removed": count}


# =============================================================================
# STARTUP
# =============================================================================

@app.on_event("startup")
async def startup_event():
    """Startup actions."""
    logger.info("🚀 UniDataHub API запущен")
    logger.info(f"📦 LLM Provider: {LLM_PROVIDER}")
    logger.info(f"🔑 API Key: {'настроен' if API_KEY else 'НЕ НАСТРОЕН!'}")
    logger.info(f"🏛️ Университетов в базе: {len(KAZAKHSTAN_UNIVERSITIES)}")


# =============================================================================
# RUN SERVER
# =============================================================================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
