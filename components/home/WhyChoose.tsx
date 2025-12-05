"use client"

import { TrendingUp, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
    {
        title: "Актуальные данные",
        description: "Наши алгоритмы ежедневно обновляют информацию с официальных сайтов вузов, гарантируя вам доступ к самым свежим данным о программах и стоимости.",
        icon: TrendingUp,
        gradient: "from-blue-500 to-indigo-500",
        bgGradient: "from-blue-50 to-blue-100/50"
    },
    {
        title: "Удобное сравнение",
        description: "Уникальная система side-by-side сравнения позволяет сопоставить до 4 университетов по 20+ параметрам, чтобы вы могли сделать взвешенный выбор.",
        icon: Users,
        gradient: "from-indigo-500 to-purple-500",
        bgGradient: "from-indigo-50 to-purple-100/50"
    },
    {
        title: "Полная аналитика",
        description: "Мы предоставляем не просто цифры, а детальную аналитику, включая рейтинги трудоустройства выпускников и отзывы реальных студентов.",
        icon: Award,
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-50 to-pink-100/50"
    }
]

export function WhyChoose() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Abstract Background Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">UniDataHub?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-slate-500"
                    >
                        Мы создали инструменты, которые превращают сложный процесс выбора университета в простое и увлекательное путешествие.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                            className={`group p-8 rounded-3xl bg-gradient-to-b ${reason.bgGradient} border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                                <reason.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
