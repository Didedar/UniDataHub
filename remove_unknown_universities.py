#!/usr/bin/env python3
"""
Скрипт для удаления всех записей "Unknown University" из universities.ts
"""

import re

print("Читаем universities.ts...")
with open('data/universities.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Всего строк: {len(lines)}")

# Найдем все блоки с "Unknown University"
in_unknown_block = False
block_start = None
blocks_to_remove = []
brace_count = 0

for i, line in enumerate(lines):
    if '"Unknown University"' in line:
        # Начало блока с Unknown University
        # Нужно найти начало объекта (строка с открывающей фигурной скобкой перед этой строкой)
        for j in range(i - 1, max(0, i - 10), -1):
            if lines[j].strip() == '{' or (lines[j].strip().startswith('{') and lines[j].strip() != '{'):
                block_start = j
                break
        
        if block_start is not None:
            in_unknown_block = True
            brace_count = 1
            
            # Найдем конец блока
            for j in range(block_start + 1, len(lines)):
                if '{' in lines[j]:
                    brace_count += lines[j].count('{')
                if '}' in lines[j]:
                    brace_count -= lines[j].count('}')
                
                if brace_count == 0:
                    # Конец блока найден
                    # Проверим, есть ли запятая после }
                    block_end = j
                    if j + 1 < len(lines) and lines[j + 1].strip() == ',':
                        block_end = j + 1
                    elif lines[j].strip().endswith(',}'):
                        block_end = j
                    
                    blocks_to_remove.append((block_start, block_end))
                    break
            
            in_unknown_block = False
            block_start = None

print(f"Найдено блоков с Unknown University: {len(blocks_to_remove)}")

# Удалим блоки (в обратном порядке, чтобы не сбить индексы)
for start, end in reversed(blocks_to_remove):
    del lines[start:end + 1]
    # Добавим пустую строку для читаемости
    # lines.insert(start, '\n')

print(f"Строк после удаления: {len(lines)}")

# Запишем обратно
print("Записываем обновленный файл...")
with open('data/universities.ts', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Готово! Все записи 'Unknown University' удалены.")
print(f"Удалено {len(blocks_to_remove)} записей.")
