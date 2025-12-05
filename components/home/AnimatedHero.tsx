"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnimatedHero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
            </div>

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y, opacity }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                            The Future of Education in Kazakhstan
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
                        Discover Your Perfect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            University Match
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore top universities in Kazakhstan with immersive 3D tours,
                        comprehensive program details, and smart comparison tools.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-blue-200/50" asChild>
                            <Link href="/catalog">
                                Explore Universities <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-blue-200 hover:bg-blue-50" asChild>
                            <Link href="/compare">
                                Compare Now
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
