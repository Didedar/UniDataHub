"use client";

import { useState } from "react";
import { useScrapeData } from "@/lib/useScrapeData";
import { DataModal, ExpandableText, ExpandableList } from "@/components/ui/DataModal";
import {
    Loader2, RefreshCw, AlertCircle,
    Globe, GraduationCap, FileText, Users, Building2,
    DollarSign, Calendar, ExternalLink, Video, Database, Wifi, WifiOff,
    Sparkles, MapPin
} from "lucide-react";

interface ScrapedDataSectionProps {
    universityId: string;
}

// API для улучшения текста с ИИ
const improveWithAI = async (text: string, type: string): Promise<string> => {
    try {
        const response = await fetch('http://localhost:8000/api/ai/improve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, type })
        });

        if (response.ok) {
            const result = await response.json();
            return result.improved_text || text;
        }
        return text;
    } catch {
        return text;
    }
};

export function ScrapedDataSection({ universityId }: ScrapedDataSectionProps) {
    const { data, loading, error, status, refetch, hasStaticData } = useScrapeData(universityId);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    // Загрузка
    if (loading && !data) {
        return (
            <div className="p-8 border rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3 text-blue-600">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="font-medium">Загрузка данных...</span>
                </div>
            </div>
        );
    }

    // Ошибка без данных
    if (error && !data) {
        return (
            <div className="p-6 border border-red-200 rounded-2xl bg-red-50">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Ошибка загрузки</span>
                </div>
                <p className="text-sm text-red-600">{error}</p>
                <button
                    onClick={() => refetch()}
                    className="mt-3 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition"
                >
                    Попробовать снова
                </button>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="p-6 border rounded-2xl bg-slate-50">
                <p className="text-slate-500">Данные не найдены</p>
            </div>
        );
    }

    // Форматирование чисел
    const formatNumber = (num: number | null) => {
        if (!num) return null;
        return num.toLocaleString("ru-RU");
    };

    const formatTuition = (value: number | null) => {
        if (!value) return null;
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)} млн ₸`;
        }
        return `${(value / 1000).toFixed(0)} тыс ₸`;
    };

    // Индикатор источника данных
    const getStatusBadge = () => {
        switch (status) {
            case "completed":
            case "cached":
                return (
                    <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                        <Wifi className="w-3 h-3" /> Актуальные данные
                    </span>
                );
            case "static":
                return (
                    <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
                        <Database className="w-3 h-3" /> Из каталога
                    </span>
                );
            default:
                return (
                    <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                        <WifiOff className="w-3 h-3" /> Офлайн
                    </span>
                );
        }
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                    {getStatusBadge()}
                    {data.meta?.type && (
                        <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                            {data.meta.type === "national" ? "🏛️ Национальный" :
                                data.meta.type === "state" ? "🏢 Государственный" :
                                    data.meta.type === "private" ? "🏫 Частный" : data.meta.type}
                        </span>
                    )}
                    {data.meta?.city && (
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin className="w-3 h-3" /> {data.meta.city}
                        </span>
                    )}
                </div>
                <button
                    onClick={() => refetch()}
                    disabled={loading}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50 transition"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    Обновить
                </button>
            </div>

            {/* Ключевые показатели */}
            {(data.comparison?.student_count || data.comparison?.founded_year || data.comparison?.tuition_min) && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {data.comparison?.student_count && (
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                            <div className="text-2xl font-bold text-blue-600">
                                {formatNumber(data.comparison.student_count)}
                            </div>
                            <div className="text-xs text-blue-600/70 mt-1">Студентов</div>
                        </div>
                    )}
                    {data.comparison?.founded_year && (
                        <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                            <div className="text-2xl font-bold text-amber-600">
                                {data.comparison.founded_year}
                            </div>
                            <div className="text-xs text-amber-600/70 mt-1">Год основания</div>
                        </div>
                    )}
                    {data.comparison?.tuition_min && (
                        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                            <div className="text-2xl font-bold text-green-600">
                                {formatTuition(data.comparison.tuition_min)}
                            </div>
                            <div className="text-xs text-green-600/70 mt-1">Минимальная стоимость</div>
                        </div>
                    )}
                    {data.comparison?.tuition_max && (
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                            <div className="text-2xl font-bold text-purple-600">
                                {formatTuition(data.comparison.tuition_max)}
                            </div>
                            <div className="text-xs text-purple-600/70 mt-1">Максимальная стоимость</div>
                        </div>
                    )}
                </div>
            )}

            {/* Основные секции */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Миссия */}
                {data.about?.mission && (
                    <div className="p-5 border rounded-xl bg-gradient-to-br from-blue-50 to-white">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-500" /> Миссия университета
                        </h4>
                        <ExpandableText
                            text={data.about.mission}
                            maxLength={180}
                            title="Миссия университета"
                            icon={<Globe className="w-5 h-5 text-blue-500" />}
                            onImproveWithAI={() => improveWithAI(data.about.mission, 'mission')}
                        />
                    </div>
                )}

                {/* История */}
                {data.about?.history_summary && (
                    <div className="p-5 border rounded-xl bg-gradient-to-br from-amber-50 to-white">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-amber-500" /> История
                        </h4>
                        <ExpandableText
                            text={data.about.history_summary}
                            maxLength={180}
                            title="История университета"
                            icon={<FileText className="w-5 h-5 text-amber-500" />}
                            onImproveWithAI={() => improveWithAI(data.about.history_summary, 'history')}
                        />
                    </div>
                )}

                {/* Уровни образования */}
                {data.academics?.degrees_offered?.length > 0 && (
                    <div className="p-5 border rounded-xl bg-gradient-to-br from-green-50 to-white">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-green-500" /> Уровни образования
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {data.academics.degrees_offered.map((degree, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                >
                                    {degree === "Bachelor" ? "🎓 Бакалавриат" :
                                        degree === "Master" ? "📚 Магистратура" :
                                            degree === "PhD" ? "🔬 Докторантура PhD" : degree}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ректор */}
                {data.about?.rector && (
                    <div className="p-5 border rounded-xl bg-gradient-to-br from-purple-50 to-white">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-500" /> Ректор
                        </h4>
                        <ExpandableText
                            text={data.about.rector}
                            maxLength={100}
                            title="Руководство университета"
                            icon={<Users className="w-5 h-5 text-purple-500" />}
                        />
                    </div>
                )}
            </div>

            {/* Факультеты */}
            {data.academics?.faculties?.length > 0 && (
                <div className="p-5 border rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-indigo-500" />
                        Факультеты и школы
                        <span className="text-xs text-slate-400 font-normal ml-1">
                            ({data.academics.faculties.length})
                        </span>
                    </h4>
                    <ExpandableList
                        items={data.academics.faculties}
                        maxItems={6}
                        title="Факультеты и школы"
                        icon={<Building2 className="w-5 h-5 text-indigo-500" />}
                    />
                </div>
            )}

            {/* Поступление */}
            {(data.admissions?.deadlines || data.admissions?.scholarship_info) && (
                <div className="p-5 border rounded-xl bg-gradient-to-br from-rose-50 to-white">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-rose-500" /> Информация для поступающих
                    </h4>
                    <div className="space-y-4">
                        {data.admissions.deadlines && (
                            <div>
                                <span className="text-sm font-medium text-slate-700 block mb-1">📅 Сроки подачи документов:</span>
                                <ExpandableText
                                    text={data.admissions.deadlines}
                                    maxLength={150}
                                    title="Сроки поступления"
                                    icon={<Calendar className="w-5 h-5 text-rose-500" />}
                                    onImproveWithAI={() => improveWithAI(data.admissions.deadlines, 'admission')}
                                />
                            </div>
                        )}
                        {data.admissions.scholarship_info && (
                            <div>
                                <span className="text-sm font-medium text-slate-700 flex items-center gap-1 mb-1">
                                    <DollarSign className="w-3 h-3" /> Стипендии и гранты:
                                </span>
                                <ExpandableText
                                    text={data.admissions.scholarship_info}
                                    maxLength={150}
                                    title="Стипендии и гранты"
                                    icon={<DollarSign className="w-5 h-5 text-green-500" />}
                                    onImproveWithAI={() => improveWithAI(data.admissions.scholarship_info, 'scholarship')}
                                />
                            </div>
                        )}
                        {data.admissions.applicant_link && (
                            <a
                                href={data.admissions.applicant_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-rose-600 hover:text-rose-800 font-medium transition mt-2"
                            >
                                <ExternalLink className="w-4 h-4" /> Перейти на страницу абитуриента
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Международные программы */}
            {(data.international?.has_exchange_programs || data.international?.exchange_programs) && (
                <div className="p-5 border rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-indigo-500" /> Международное сотрудничество
                        {data.international.erasmus_mention && (
                            <span className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full font-normal">
                                Erasmus+
                            </span>
                        )}
                    </h4>
                    {data.international.exchange_programs && (
                        <ExpandableText
                            text={data.international.exchange_programs}
                            maxLength={180}
                            title="Программы обмена"
                            icon={<Globe className="w-5 h-5 text-indigo-500" />}
                            onImproveWithAI={() => improveWithAI(data.international.exchange_programs, 'international')}
                        />
                    )}
                </div>
            )}

            {/* 3D Тур */}
            {data.tour?.has_3d_tour && (
                <div className="flex items-center gap-3 flex-wrap p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-200">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg">
                        <Video className="w-4 h-4" /> 🎥 Доступен виртуальный 3D-тур
                    </div>
                    {data.tour.tour_link && (
                        <a
                            href={data.tour.tour_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-800 font-medium transition"
                        >
                            <ExternalLink className="w-4 h-4" /> Смотреть тур
                        </a>
                    )}
                </div>
            )}

            {/* Кнопка улучшения с ИИ */}
            <div className="flex justify-center pt-2">
                <button
                    onClick={() => setActiveModal('ai-info')}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-violet-600 hover:bg-violet-50 rounded-lg transition"
                >
                    <Sparkles className="w-4 h-4" />
                    Улучшить данные с помощью ИИ
                </button>
            </div>

            {/* Модал с информацией об ИИ */}
            <DataModal
                isOpen={activeModal === 'ai-info'}
                onClose={() => setActiveModal(null)}
                title="Улучшение данных с помощью ИИ"
                content="Для улучшения текстов используется Gemini 2.0-flash. Нажмите кнопку «Подробнее» на любой секции и выберите «Улучшить с ИИ» для автоматической очистки и форматирования текста на русском языке."
                icon={<Sparkles className="w-5 h-5 text-violet-500" />}
            />
        </div>
    );
}
