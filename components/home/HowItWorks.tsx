"use client"

import { Search, Scale, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        id: 1,
        title: "Исследуйте",
        description: "Изучите наш каталог из 100+ университетов. Фильтруйте по городу, цене и программам.",
        icon: Search,
        color: "blue"
    },
    {
        id: 2,
        title: "Сравнивайте",
        description: "Добавьте лучшие варианты в сравнение. Увидьте разницу в деталях на одном экране.",
        icon: Scale,
        color: "indigo"
    },
    {
        id: 3,
        title: "Поступайте",
        description: "Используйте наши гайды и чек-листы, чтобы успешно пройти процесс поступления.",
        icon: GraduationCap,
        color: "purple"
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
                    >
                        Простой процесс
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900"
                    >
                        Как это работает
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        Три простых шага отделяют вас от университета вашей мечты.
                    </motion.p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className={`
                    w-32 h-32 rounded-3xl bg-white border-4 border-${step.color}-100 shadow-xl 
                    flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 
                    group-hover:rotate-3
                `}>
                                <div className={`absolute -top-4 -right-4 w-10 h-10 bg-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white`}>
                                    {step.id}
                                </div>
                                <step.icon className={`w-12 h-12 text-${step.color}-600`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
