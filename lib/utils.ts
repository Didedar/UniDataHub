import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Program } from "@/data/universities"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// === University Data Utils ===

/**
 * Обрезает текст до указанной длины, добавляя "..." в конце
 */
export function truncateDescription(text: string, maxLength: number = 150): string {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

/**
 * Форматирует стоимость обучения
 * Если 0 - возвращает "По запросу"
 */
export function formatTuition(amount: number): string {
  if (amount === 0) return "По запросу"
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M KZT`
  }
  return `${(amount / 1000).toFixed(0)}K KZT`
}

/**
 * Парсит описание университета на секции
 */
export function parseDescription(description: string): {
  mission?: string
  history?: string
  leadership?: string
  achievements?: string
  admissions?: string
  deadlines?: string
  scholarships?: string
  partners?: string
  raw: string
} {
  const result: any = { raw: description }

  if (!description) return result

  const sections = description.split('\n\n')

  sections.forEach(section => {
    const lower = section.toLowerCase()
    if (lower.startsWith('миссия:')) {
      result.mission = section.replace(/^миссия:\s*/i, '')
    } else if (lower.startsWith('история:')) {
      result.history = section.replace(/^история:\s*/i, '')
    } else if (lower.startsWith('руководство:')) {
      result.leadership = section.replace(/^руководство:\s*/i, '')
    } else if (lower.startsWith('достижения:')) {
      result.achievements = section.replace(/^достижения:\s*/i, '')
    } else if (lower.startsWith('поступление')) {
      result.admissions = section.replace(/^поступление[^:]*:\s*/i, '')
    } else if (lower.startsWith('сроки при')) {
      result.deadlines = section.replace(/^сроки при[её]ма:\s*/i, '')
    } else if (lower.startsWith('гранты') || lower.startsWith('стипенд')) {
      result.scholarships = section.replace(/^[^:]+:\s*/i, '')
    } else if (lower.startsWith('международные партн')) {
      result.partners = section.replace(/^[^:]+:\s*/i, '')
    }
  })

  return result
}

/**
 * Группирует программы по степени
 */
export function groupProgramsByDegree(programs: Program[]): Record<string, Program[]> {
  return programs.reduce((acc, program) => {
    const degree = program.degree
    if (!acc[degree]) {
      acc[degree] = []
    }
    acc[degree].push(program)
    return acc
  }, {} as Record<string, Program[]>)
}

/**
 * Возвращает badge для типа университета
 */
export function getUniversityTypeBadge(type: string): { label: string; color: string } {
  switch (type) {
    case 'national':
      return { label: 'Национальный', color: 'bg-purple-100 text-purple-700' }
    case 'state':
      return { label: 'Государственный', color: 'bg-blue-100 text-blue-700' }
    case 'private':
      return { label: 'Частный', color: 'bg-green-100 text-green-700' }
    default:
      return { label: 'Университет', color: 'bg-gray-100 text-gray-700' }
  }
}

/**
 * Проверяет, пустое ли значение
 */
export function isEmpty(value: any): boolean {
  return value === 0 || value === null || value === undefined || value === ''
}
