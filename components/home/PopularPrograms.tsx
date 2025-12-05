"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Laptop, Hammer, Building2, Stethoscope, Briefcase, Scale } from "lucide-react"

const programs = [
    { name: 'Информационные технологии', count: 45, icon: Laptop, color: "text-blue-500", bg: "bg-blue-50" },
    { name: 'Инженерия', count: 38, icon: Hammer, color: "text-orange-500", bg: "bg-orange-50" },
    { name: 'Бизнес и управление', count: 42, icon: Building2, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: 'Медицина', count: 28, icon: Stethoscope, color: "text-red-500", bg: "bg-red-50" },
    { name: 'Экономика и финансы', count: 35, icon: Briefcase, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: 'Юриспруденция', count: 30, icon: Scale, color: "text-slate-700", bg: "bg-slate-100" },
]

export function PopularPrograms() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Популярные направления
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Самые востребованные специальности среди абитуриентов этого года.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="group cursor-pointer p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl ${program.bg} flex items-center justify-center`}>
                                    <program.icon className={`w-6 h-6 ${program.color}`} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    {program.count}+ вузов
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                {program.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" variant="outline" className="border-2 rounded-full px-8 hover:bg-slate-50">
                        <Link href="/catalog">Смотреть все программы</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
