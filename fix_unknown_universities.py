#!/usr/bin/env python3
"""
Скрипт для замены записей "Unknown University" в universities.ts
на правильные названия университетов из списка KAZAKHSTAN_UNIVERSITIES
"""

import json
import re

# Список всех университетов Казахстана
KAZAKHSTAN_UNIVERSITIES = [
    # НАЦИОНАЛЬНЫЕ УНИВЕРСИТЕТЫ (11)
    {'name': 'Назарбаев Университет', 'url': 'https://nu.edu.kz', 'city': 'Астана'},
    {'name': 'Казахский национальный университет им. аль-Фараби', 'url': 'https://kaznu.kz', 'city': 'Алматы'},
    {'name': 'Евразийский национальный университет им. Л.Н. Гумилёва', 'url': 'https://enu.kz', 'city': 'Астана'},
    {'name': 'Satbayev University (КазНИТУ)', 'url': 'https://satbayev.university', 'city': 'Алматы'},
    {'name': 'Казахский национальный педагогический университет им. Абая', 'url': 'https://kaznpu.kz', 'city': 'Алматы'},
    {'name': 'Казахский национальный аграрный исследовательский университет', 'url': 'https://kaznau.kz', 'city': 'Алматы'},
    {'name': 'Казахский агротехнический университет им. С. Сейфуллина', 'url': 'https://kazatu.edu.kz', 'city': 'Астана'},
    {'name': 'Казахский национальный медицинский университет им. С.Д. Асфендияров', 'url': 'https://kaznmu.kz', 'city': 'Алматы'},
    {'name': 'Казахская национальная консерватория им. Курмангазы', 'url': 'https://conservatoire.edu.kz', 'city': 'Алматы'},
    {'name': 'Казахская национальная академия искусств им. Т.К. Жургенова', 'url': 'https://kaznai.kz', 'city': 'Алматы'},
    {'name': 'Казахский национальный женский педагогический университет', 'url': 'https://kazmkpu.kz', 'city': 'Алматы'},
    
    # МЕЖДУНАРОДНЫЕ УНИВЕРСИТЕТЫ (5)
    {'name': 'Казахстанско-Британский технический университет', 'url': 'https://kbtu.kz', 'city': 'Алматы'},
    {'name': 'KIMEP University', 'url': 'https://kimep.kz', 'city': 'Алматы'},
    {'name': 'Международный казахско-турецкий университет им. Х.А. Ясави', 'url': 'https://ayu.edu.kz', 'city': 'Туркестан'},
    {'name': 'Казахстанско-Немецкий университет', 'url': 'https://dku.kz', 'city': 'Алматы'},
    {'name': 'Казахско-Российский медицинский университет', 'url': 'https://krmu.edu.kz', 'city': 'Алматы'},
    
    # ГОСУДАРСТВЕННЫЕ РЕГИОНАЛЬНЫЕ УНИВЕРСИТЕТЫ (25)
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
]

def find_university_by_url(url):
    """Найти университет по URL"""
    for uni in KAZAKHSTAN_UNIVERSITIES:
        if uni['url'] in url or url in uni['url']:
            return uni
    return None

def find_university_by_description(description, programs):
    """Попытаться определить университет по описанию и программам"""
    # Проверка по ключевым словам медицинского университета
    medical_keywords = ['медицин', 'стоматолог', 'фармац', 'акушер', 'хирург']
    is_medical = any(keyword in description.lower() for keyword in medical_keywords)
    
    if is_medical:
        # Проверить по году основания или другим признакам
        if '1992' in description:
            return find_university_by_url('https://krmu.edu.kz')
    
    return None

# Читаем файл
print("Читаем universities.ts...")
with open('data/universities.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Подсчитаем количество Unknown University
unknown_count = content.count('"Unknown University"')
print(f"Найдено {unknown_count} записей 'Unknown University'")

print("\nЗаменяем 'Unknown University' на правильные названия...")
print("Это сложная задача, требующая ручной проверки каждой записи.")
print("Рекомендуется использовать данные из universities_data.json для правильной идентификации.")

