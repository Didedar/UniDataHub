#!/usr/bin/env python3
"""
Скрипт для генерации полных данных университетов
Создает шаблоны для programs, admissions, international, stats
"""

# Шаблоны программ по типам университетов
PROGRAM_TEMPLATES = {
    "technical": [
        {"name": "Информационные технологии", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Программная инженерия", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
        {"name": "Компьютерные науки", "degree": "Master", "duration": "2 года", "language": "Английский"},
        {"name": "Инженерия и технологии", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
    ],
    "medical": [
        {"name": "Общая медицина", "degree": "Bachelor", "duration": "6 лет", "language": "Русский/Казахский"},
        {"name": "Стоматология", "degree": "Bachelor", "duration": "5 лет", "language": "Русский/Казахский"},
        {"name": "Фармация", "degree": "Bachelor", "duration": "5 лет", "language": "Русский/Казахский"},
        {"name": "Сестринское дело", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
    ],
    "pedagogical": [
        {"name": "Педагогика и психология", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Начальное образование", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Филология", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Иностранные языки", "degree": "Bachelor", "duration": "4 года", "language": "Английский"},
    ],
    "economic": [
        {"name": "Экономика", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Финансы", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
        {"name": "Менеджмент", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
        {"name": "Бухгалтерский учет", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "MBA", "degree": "Master", "duration": "1.5 года", "language": "Английский"},
    ],
    "law": [
        {"name": "Юриспруденция", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Международное право", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
        {"name": "Правоохрана", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
    ],
    "agricultural": [
        {"name": "Агрономия", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Ветеринария", "degree": "Bachelor", "duration": "5 лет", "language": "Русский/Казахский"},
        {"name": "Зоотехния", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Агроинженерия", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
    ],
    "arts": [
        {"name": "Хореография", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Музыкальное искусство", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Театральное искусство", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
        {"name": "Дизайн", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
    ],
    "multidisciplinary": [
        {"name": "Бизнес-администрирование", "degree": "Bachelor", "duration": "4 года", "language": "Английский"},
        {"name": "Международные отношения", "degree": "Bachelor", "duration": "4 года", "language": "Английский"},
        {"name": "Социальные науки", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Английский"},
        {"name": "Естественные науки", "degree": "Bachelor", "duration": "4 года", "language": "Английский"},
        {"name": "Гуманитарные науки", "degree": "Bachelor", "duration": "4 года", "language": "Русский/Казахский"},
    ]
}

# Шаблон admissions
ADMISSIONS_TEMPLATE = {
    "deadline": "1 августа",
    "requirements": [
        "ЕНТ (Единое национальное тестирование)",
        "Аттестат о среднем образовании",
        "Удостоверение личности",
        "Медицинская справка формы 086-У"
    ],
    "scholarships": [
        "Государственный образовательный грант",
        "Именные стипендии университета",
        "Социальная стипендия"
    ]
}

# Для частных вузов
ADMISSIONS_PRIVATE = {
    "deadline": "15 августа",
    "requirements": [
        "ЕНТ или внутренний экзамен университета",
        "Аттестат о среднем образовании",
        "Собеседование",
        "Медицинская справка"
    ],
    "scholarships": [
        "Стипендия за академические достижения",
        "Скидки для отличников",
        "Социальная поддержка"
    ]
}

# Для медицинских вузов
ADMISSIONS_MEDICAL = {
    "deadline": "20 июля",
    "requirements": [
        "ЕНТ с обязательной биологией и химией",
        "Аттестат о среднем образовании (средний балл не ниже 4.0)",
        "Медосмотр расширенный",
        "Психологическое тестирование"
    ],
    "scholarships": [
        "Государственный образовательный грант",
        "Целевые гранты МЗ РК",
        "Стипендия имени выдающихся медиков"
    ]
}

# Шаблон international
INTERNATIONAL_TEMPLATE = {
    "partners": 25,
    "exchangePrograms": [
        "Erasmus+",
        "Обмен с вузами России",
        "Программы двойных дипломов"
    ]
}

INTERNATIONAL_TOP_TIER = {
    "partners": 50,
    "exchangePrograms": [
        "Erasmus+ Mundus",
        "Fulbright Program",
        "Обмен с топ-университетами мира",
        "Программы двойных дипломов с США, ЕС, Азией"
    ]
}

INTERNATIONAL_REGIONAL = {
    "partners": 15,
    "exchangePrograms": [
        "Обмен с вузами СНГ",
        "Региональные академические программы"
    ]
}

# Шаблон stats
STATS_TEMPLATE_HIGH = {
    "employmentRate": 85,
    "researchOutput": "High",
    "studentSatisfaction": 4.2
}

STATS_TEMPLATE_MEDIUM = {
    "employmentRate": 75,
    "researchOutput": "Medium",
    "studentSatisfaction": 3.8
}

STATS_TEMPLATE_REGIONAL = {
    "employmentRate": 70,
    "researchOutput": "Medium",
    "studentSatisfaction": 3.7
}

print("Шаблоны данных подготовлены")
print(f"Типов программ: {len(PROGRAM_TEMPLATES)}")
print("Готово для применения к университетам")
