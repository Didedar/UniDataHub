import { universities } from "@/data/universities"
import { notFound } from "next/navigation"
import { CampusTour } from "@/components/three/CampusTour"
import { Button } from "@/components/ui/Button"
import { MapPin, Globe, Calendar, Users, Award, BookOpen, Trophy, Briefcase } from "lucide-react"
import { UniversityScrapedInfo } from "@/components/university/UniversityScrapedInfo"
import { parseDescription, formatTuition, isEmpty, groupProgramsByDegree } from "@/lib/utils"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export function generateStaticParams() {
    return universities.map((uni) => ({
        id: uni.id,
    }))
}

export default async function UniversityPage({ params }: PageProps) {
    const { id } = await params
    const university = universities.find((u) => u.id === id)

    if (!university) {
        notFound()
    }

    const parsedDesc = parseDescription(university.description)
    const groupedPrograms = groupProgramsByDegree(university.programs)

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Header */}
            <div className="relative h-[45vh] bg-slate-900 flex items-end">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={university.imageUrl}
                        alt={university.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                <div className="container mx-auto px-4 pb-12 relative z-10 text-white">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">{university.name}</h1>
                            <div className="flex flex-wrap gap-4 text-slate-200">
                                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                                    <MapPin className="w-4 h-4" /> {university.location}
                                </span>
                                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                                    <Calendar className="w-4 h-4" /> Основан в {university.foundedYear}
                                </span>
                                {!isEmpty(university.studentCount) && (
                                    <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                                        <Users className="w-4 h-4" /> {university.studentCount.toLocaleString()} студентов
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-slate-900 bg-white border-white hover:bg-slate-100"
                                asChild
                            >
                                <a href={university.website} target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Сайт
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* About Section with Tabs */}
                        <section id="about" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                                О университете
                            </h2>

                            {/* Navigation Tabs */}
                            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
                                {parsedDesc.mission && (
                                    <a href="#mission" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors whitespace-nowrap text-sm font-medium">
                                        🎯 Миссия
                                    </a>
                                )}
                                {parsedDesc.history && (
                                    <a href="#history" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap text-sm font-medium">
                                        📜 История
                                    </a>
                                )}
                                {parsedDesc.leadership && (
                                    <a href="#leadership" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap text-sm font-medium">
                                        👤 Руководство
                                    </a>
                                )}
                                {parsedDesc.achievements && (
                                    <a href="#achievements" className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors whitespace-nowrap text-sm font-medium">
                                        🏆 Достижения
                                    </a>
                                )}
                                {parsedDesc.partners && (
                                    <a href="#partners" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors whitespace-nowrap text-sm font-medium">
                                        🌍 Партнёры
                                    </a>
                                )}
                            </div>

                            <div className="space-y-8">
                                {/* Mission Card */}
                                {parsedDesc.mission && (
                                    <div id="mission" className="scroll-mt-24 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-3xl">🎯</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-blue-900 mb-3">Миссия университета</h3>
                                                <p className="text-slate-700 leading-relaxed text-lg">{parsedDesc.mission}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* History Card */}
                                {parsedDesc.history && (
                                    <div id="history" className="scroll-mt-24 bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-3xl">📜</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-slate-900 mb-3">История</h3>
                                                <p className="text-slate-700 leading-relaxed">{parsedDesc.history}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Leadership Card */}
                                {parsedDesc.leadership && (
                                    <div id="leadership" className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-3xl">👤</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Руководство</h3>
                                                <p className="text-slate-700 leading-relaxed">{parsedDesc.leadership}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Achievements Card with List */}
                                {parsedDesc.achievements && (
                                    <div id="achievements" className="scroll-mt-24 bg-gradient-to-br from-amber-50 via-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-3xl">🏆</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-amber-900 mb-4">Достижения и награды</h3>
                                                <div className="space-y-3">
                                                    {parsedDesc.achievements.split('\n').filter(line => line.trim()).map((achievement, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 bg-white/60 p-4 rounded-lg border border-amber-200">
                                                            <div className="shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow">
                                                                {idx + 1}
                                                            </div>
                                                            <p className="text-slate-700 leading-relaxed flex-1">{achievement.replace(/^[•\-\*]\s*/, '')}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Partners Card */}
                                {parsedDesc.partners && (
                                    <div id="partners" className="scroll-mt-24 bg-gradient-to-br from-purple-50 via-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-3xl">🌍</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-purple-900 mb-3">Международное сотрудничество</h3>
                                                <p className="text-slate-700 leading-relaxed">{parsedDesc.partners}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Fallback для необработанного описания */}
                                {!parsedDesc.mission && !parsedDesc.history && parsedDesc.raw && (
                                    <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
                                        <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                                            {parsedDesc.raw}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Stats Cards */}
                            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {!isEmpty(university.ranking) && (
                                    <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl text-center border-2 border-amber-200 hover:shadow-lg transition-all hover:scale-105">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <Trophy className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-amber-700">#{university.ranking}</div>
                                        <div className="text-sm text-amber-600 mt-2 font-medium">Национальный рейтинг</div>
                                    </div>
                                )}
                                {!isEmpty(university.acceptanceRate) && (
                                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center border-2 border-blue-200 hover:shadow-lg transition-all hover:scale-105">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-blue-700">{university.acceptanceRate}%</div>
                                        <div className="text-sm text-blue-600 mt-2 font-medium">Процент зачисления</div>
                                    </div>
                                )}
                                {!isEmpty(university.stats.employmentRate) && (
                                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl text-center border-2 border-green-200 hover:shadow-lg transition-all hover:scale-105">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Briefcase className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-green-700">{university.stats.employmentRate}%</div>
                                        <div className="text-sm text-green-600 mt-2 font-medium">Трудоустройство</div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Scraped Data Section - временно отключено, требует API сервер */}
                        {/* <UniversityScrapedInfo university={university} /> */}

                        {/* Academic Programs with Tabs */}
                        <section id="programs" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                                Академические программы
                            </h2>

                            {university.programs && university.programs.length > 0 ? (
                                <div className="space-y-4">
                                    {Object.entries(groupedPrograms).map(([degree, programs]) => (
                                        <details key={degree} className="group" open={degree === 'Bachelor'}>
                                            <summary className="flex items-center justify-between p-4 bg-slate-100 cursor-pointer rounded-lg hover:bg-slate-200 transition-colors">
                                                <span className="font-semibold text-lg flex items-center gap-2">
                                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                                    {degree} ({programs.length})
                                                </span>
                                                <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="mt-2 space-y-2">
                                                {programs.map((prog) => (
                                                    <div key={prog.id} className="p-5 border rounded-xl hover:shadow-md transition-shadow bg-white">
                                                        <div className="flex justify-between items-start gap-4">
                                                            <div className="flex-1">
                                                                <h3 className="font-semibold text-lg text-slate-900">{prog.name}</h3>
                                                                <div className="flex flex-wrap gap-2 text-sm text-slate-500 mt-2">
                                                                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                                                                        {prog.degree}
                                                                    </span>
                                                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                                                                        {prog.duration}
                                                                    </span>
                                                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                                                                        {prog.language}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {!isEmpty(prog.tuition) && (
                                                                <div className="text-right">
                                                                    <div className="font-bold text-slate-900 text-lg">{formatTuition(prog.tuition)}</div>
                                                                    <div className="text-xs text-slate-500">в год</div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-500 text-center py-8">Информация о программах обновляется...</p>
                            )}
                        </section>

                        {/* 3D Tour */}
                        <section id="tour" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                                Виртуальный тур по кампусу
                            </h2>
                            <CampusTour university={university} />
                        </section>

                        {/* Admissions */}
                        <section id="admissions" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                                Поступление
                            </h2>
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-xl mb-4 text-slate-900">Требования</h3>
                                        {university.admissions.requirements && university.admissions.requirements.length > 0 ? (
                                            <ul className="space-y-3">
                                                {university.admissions.requirements.map((req, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                                                        <span className="leading-relaxed">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-slate-500">Уточняйте на сайте университета</p>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-4 text-slate-900">Сроки подачи документов</h3>
                                        {university.admissions.deadline ? (
                                            <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                                                <Calendar className="w-6 h-6 text-blue-600 mb-2" />
                                                <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                                                    {university.admissions.deadline}
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-slate-500">Уточняйте на сайте университета</p>
                                        )}

                                        {university.admissions.scholarships && university.admissions.scholarships.length > 0 && (
                                            <div className="mt-4">
                                                <h3 className="font-bold text-lg mb-2 text-slate-900">Гранты и стипендии</h3>
                                                <ul className="space-y-2">
                                                    {university.admissions.scholarships.map((sch, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-700">
                                                            <Award className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                                            <span className="text-sm">{sch}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
                                <h3 className="font-bold text-xl mb-5 text-slate-900">Краткая информация</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            Стоимость обучения
                                        </div>
                                        <div className="font-medium text-slate-900">
                                            {!isEmpty(university.tuitionRange.min) && !isEmpty(university.tuitionRange.max)
                                                ? `${formatTuition(university.tuitionRange.min)} - ${formatTuition(university.tuitionRange.max)}`
                                                : 'По запросу'
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                                            <Globe className="w-4 h-4" />
                                            Международные партнёры
                                        </div>
                                        <div className="font-medium text-slate-900">
                                            {!isEmpty(university.international.partners)
                                                ? `${university.international.partners}+ университетов`
                                                : 'Информация обновляется'
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                                            <Trophy className="w-4 h-4" />
                                            Исследовательская деятельность
                                        </div>
                                        <div className="font-medium text-slate-900">{university.stats.researchOutput}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

