"use client"

import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university/UniversityCard"
import { useState, useMemo } from "react"
import { Search, Filter } from "lucide-react"

export default function CatalogPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCity, setSelectedCity] = useState("all")
    const [selectedType, setSelectedType] = useState("all")
    const [sortBy, setSortBy] = useState<"name" | "ranking" | "students">("ranking")

    // Extract unique cities and types
    const cities = useMemo(() => {
        const citySet = new Set(universities.map(u => u.location).filter(Boolean))
        return Array.from(citySet).sort()
    }, [])

    const types = useMemo(() => {
        const typeSet = new Set(universities.map(u => u.type).filter(Boolean))
        return Array.from(typeSet)
    }, [])

    // Filter and sort universities
    const filteredUniversities = useMemo(() => {
        // Safe normalizer helper
        const norm = (v?: string) => (v ?? "").trim().toLowerCase()

        let filtered = universities.filter(uni => {
            const searchLower = norm(searchQuery)

            // Safe search across name, shortName, location
            const matchesSearch = !searchLower ||
                norm(uni.name).includes(searchLower) ||
                norm(uni.shortName).includes(searchLower) ||
                norm(uni.location).includes(searchLower)

            // Robust comparison for city and type
            // Comparing normalized actual value with normalized selected value
            const matchesCity = selectedCity === "all" || norm(uni.location) === norm(selectedCity)
            const matchesType = selectedType === "all" || norm(uni.type) === norm(selectedType)

            return matchesSearch && matchesCity && matchesType
        })

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name, 'ru')
                case "ranking":
                    // Treat 0 as "unranked" (infinity) so it goes to the bottom
                    const rankA = a.ranking === 0 ? 9999 : a.ranking
                    const rankB = b.ranking === 0 ? 9999 : b.ranking
                    return rankA - rankB
                case "students":
                    return b.studentCount - a.studentCount
                default:
                    return 0
            }
        })

        return filtered
    }, [searchQuery, selectedCity, selectedType, sortBy])

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Каталог университетов
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Найдите лучший университет в Казахстане для вашего образования
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-5 h-5 text-blue-600" />
                        <h2 className="font-semibold text-lg text-slate-900">Фильтры и поиск</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Поиск
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Название или город..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* City Filter */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Город
                            </label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="all">Все города</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Тип
                            </label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="all">Все типы</option>
                                {types.map(type => (
                                    <option key={type} value={type}>
                                        {type === 'national' ? 'Национальный' : type === 'state' ? 'Государственный' : 'Частный'}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Sort Controls */}
                    <div className="mt-4 flex items-center gap-4">
                        <span className="text-sm font-medium text-slate-700">Сортировка:</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSortBy("name")}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${sortBy === "name"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                По названию
                            </button>
                            <button
                                onClick={() => setSortBy("ranking")}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${sortBy === "ranking"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                По рейтингу
                            </button>
                            <button
                                onClick={() => setSortBy("students")}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${sortBy === "students"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                По количеству студентов
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-slate-600">
                    Найдено университетов: <span className="font-semibold text-slate-900">{filteredUniversities.length}</span>
                </div>

                {/* Universities Grid */}
                {filteredUniversities.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredUniversities.map((uni) => (
                            <UniversityCard key={uni.id} university={uni} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Ничего не найдено</h3>
                        <p className="text-slate-600 mb-6">
                            Попробуйте изменить параметры поиска или фильтры
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("")
                                setSelectedCity("all")
                                setSelectedType("all")
                            }}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
