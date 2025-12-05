"use client"

import { University } from "@/data/universities"
import { Video, ExternalLink, MapPin, Info } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface CampusTourProps {
    university?: University
}

export function CampusTour({ university }: CampusTourProps) {
    // Проверка наличия информации о туре из разных источников данных
    const hasTourUrl = university?.website && (
        !!university.virtualTourUrl ||
        university.description?.includes('виртуальный тур') ||
        university.description?.includes('3D') ||
        university.description?.includes('tour')
    )

    // Извлечение URL тура из description если есть
    const extractTourUrl = () => {
        if (university?.virtualTourUrl) return university.virtualTourUrl
        if (!university?.description) return null

        // Ищем URL в описании
        const urlMatch = university.description.match(/https?:\/\/[^\s)»]+/g)
        if (urlMatch && (
            university.description.includes('виртуальный тур') ||
            university.description.includes('3D')
        )) {
            return urlMatch.find(url =>
                url.includes('tour') ||
                url.includes('360') ||
                url.includes('virtual')
            )
        }
        return null
    }

    const tourUrl = extractTourUrl()

    // Если нет информации о туре
    if (!hasTourUrl && !tourUrl) {
        return (
            <div className="w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-300">
                <div className="text-center p-8 max-w-md">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center">
                        <Video className="w-10 h-10 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">
                        Виртуальный тур недоступен
                    </h3>
                    <p className="text-slate-600 mb-4">
                        К сожалению, для этого университета пока нет виртуального 3D-тура
                    </p>
                    {university?.website && (
                        <Button
                            asChild
                            variant="outline"
                            className="border-slate-400 text-slate-700 hover:bg-slate-300"
                        >
                            <a
                                href={university.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Посетить официальный сайт
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        )
    }

    // Если есть URL тура
    if (tourUrl) {
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Виртуальный тур доступен</h4>
                            <p className="text-sm text-slate-600">Исследуйте кампус онлайн</p>
                        </div>
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <a href={tourUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Открыть тур
                        </a>
                    </Button>
                </div>

                <div className="w-full h-[500px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-300">
                    <iframe
                        src={tourUrl}
                        className="w-full h-full"
                        allow="fullscreen; accelerometer; gyroscope"
                        title="Virtual Campus Tour"
                    />
                </div>
            </div>
        )
    }

    // Если информация есть, но без прямого URL
    return (
        <div className="w-full h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden flex items-center justify-center border border-blue-200">
            <div className="text-center p-8 max-w-md">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Виртуальный тур
                </h3>
                <div className="flex items-start gap-2 text-sm text-slate-700 mb-4 bg-white/50 p-3 rounded-lg">
                    <Info className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                    <p className="text-left">
                        Университет предоставляет виртуальный тур. Для получения подробной информации посетите официальный сайт.
                    </p>
                </div>
                {university?.website && (
                    <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                        <a
                            href={university.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Перейти на сайт
                        </a>
                    </Button>
                )}
            </div>
        </div>
    )
}
