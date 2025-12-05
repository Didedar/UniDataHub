"use client"

import { Search, Target, Zap, Shield, Microscope, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { motion } from "framer-motion"

const features = [
    {
        title: "Умный Поиск",
        description: "Находите идеальные варианты за секунды с помощью фильтров по 50+ критериям.",
        icon: Search,
        colSpan: "md:col-span-2",
        bg: "bg-blue-600",
        textDetails: "text-blue-100",
        iconColor: "text-white"
    },
    {
        title: "Сравнение ВУЗов",
        description: "Детальное сравнение программ и условий.",
        icon: Target,
        colSpan: "md:col-span-1",
        bg: "bg-white",
        textDetails: "text-slate-500",
        iconColor: "text-purple-600"
    },
    {
        title: "Live Данные",
        description: "Синхронизация с официальными источниками в реальном времени.",
        icon: Zap,
        colSpan: "md:col-span-1",
        bg: "bg-white",
        textDetails: "text-slate-500",
        iconColor: "text-amber-500"
    },
    {
        title: "Проверенная Инфо",
        description: "Только верифицированные данные от Министерства образования.",
        icon: Shield,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-slate-900 to-slate-800",
        textDetails: "text-slate-400",
        iconColor: "text-green-400"
    }
]

export function Features() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 text-slate-900"
                        >
                            Всё для осознанного выбора
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600"
                        >
                            Мощные инструменты аналитики и поиска, собранные на одной платформе для вашего удобства.
                        </motion.p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:flex rounded-full px-6 border-slate-300 hover:bg-white hover:text-blue-600">
                        <Link href="/catalog">Попробовать все функции <ChevronRight className="ml-1 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group relative p-8 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 ${feature.colSpan} ${feature.bg} shadow-sm border border-slate-100`}
                        >
                            {/* Decorative backgrounds handled by bg prop primarily, adding subtle internal glows */}
                            {feature.bg.includes('slate-900') && (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            )}
                            {feature.bg.includes('blue-600') && (
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                            )}

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-7 h-7 ${feature.iconColor} ${feature.bg.includes('white') ? '' : 'text-white'}`} />
                                </div>

                                <div>
                                    <h3 className={`text-2xl font-bold mb-3 ${feature.bg.includes('white') ? 'text-slate-900' : 'text-white'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-lg leading-relaxed ${feature.textDetails} ${feature.bg.includes('white') ? 'text-slate-600' : ''}`}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Button asChild variant="outline" className="rounded-full w-full justify-center">
                        <Link href="/catalog">Попробовать все функции</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
