"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Hero3DScene } from "./Hero3DScene"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero3D() {
    return (
        <section className="relative h-[95vh] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
                    <Suspense fallback={null}>
                        <Hero3DScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>Будущее образования в Казахстане</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                            Найди свой <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                                Идеальный ВУЗ
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                            Умный поиск среди 100+ университетов, 3D туры и детальная аналитика для твоего успешного поступления.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105" asChild>
                                <Link href="/catalog">
                                    Начать поиск <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-white border-blue-100 text-slate-700 hover:text-blue-700 transition-all hover:scale-105" asChild>
                                <Link href="/compare">
                                    Сравнить ВУЗы
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decoratives */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
        </section>
    )
}
