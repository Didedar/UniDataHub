"use client"

import { University } from "@/data/universities"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Users, Trophy, BookOpen, Percent } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { truncateDescription, getUniversityTypeBadge, isEmpty } from "@/lib/utils"

interface UniversityCardProps {
    university: University
}

export function UniversityCard({ university }: UniversityCardProps) {
    const typeBadge = getUniversityTypeBadge(university.type)

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
        >
            {/* Image Overlay */}
            <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <img
                    src={university.imageUrl}
                    alt={university.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Type Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${typeBadge.color} bg-opacity-90`}>
                        {typeBadge.label}
                    </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <h3 className="font-bold text-xl leading-tight mb-2 drop-shadow-lg">{university.name}</h3>
                    <p className="text-sm flex items-center gap-1.5 opacity-95">
                        <MapPin className="w-4 h-4" /> {university.location}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Stats Row */}
                <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                    {!isEmpty(university.ranking) && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-lg">
                            <Trophy className="w-4 h-4 text-amber-600" />
                            <span className="font-medium text-amber-900">#{university.ranking}</span>
                        </div>
                    )}
                    {!isEmpty(university.studentCount) && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-lg">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-blue-900">{university.studentCount.toLocaleString()}</span>
                        </div>
                    )}
                    {!isEmpty(university.acceptanceRate) && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-lg">
                            <Percent className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-900">{university.acceptanceRate}%</span>
                        </div>
                    )}
                    {university.programs && university.programs.length > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 rounded-lg">
                            <BookOpen className="w-4 h-4 text-purple-600" />
                            <span className="font-medium text-purple-900">{university.programs.length} программ</span>
                        </div>
                    )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 min-h-[60px]">
                    {truncateDescription(university.description, 180)}
                </p>

                <div className="pt-2 flex gap-2">
                    <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-sm">
                        <Link href={`/university/${university.id}`}>Подробнее</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                        title="Добавить к сравнению"
                    >
                        <span className="sr-only">Compare</span>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                        >
                            <path
                                d="M7.49991 0.875C7.84509 0.875 8.12491 1.15482 8.12491 1.5V13.5C8.12491 13.8452 7.84509 14.125 7.49991 14.125C7.15473 14.125 6.87491 13.8452 6.87491 13.5V1.5C6.87491 1.15482 7.15473 0.875 7.49991 0.875ZM1.5 7.5C1.5 7.15482 1.77982 6.875 2.125 6.875H12.875C13.2202 6.875 13.5 7.15482 13.5 7.5C13.5 7.84518 13.2202 8.125 12.875 8.125H2.125C1.77982 8.125 1.5 7.84518 1.5 7.5Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
