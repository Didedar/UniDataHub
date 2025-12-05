"use client"

import { University } from "@/data/universities"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface UniversityCardProps {
    university: University
}

export function UniversityCard({ university }: UniversityCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
        >
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={university.imageUrl}
                    alt={university.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                    <h3 className="font-bold text-lg leading-tight">{university.name}</h3>
                    <p className="text-sm opacity-90 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {university.location}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
                <div className="flex justify-between items-center text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>Rank #{university.ranking}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>{university.studentCount.toLocaleString()} students</span>
                    </div>
                </div>

                <p className="text-sm text-slate-500 line-clamp-2">
                    {university.description}
                </p>

                <div className="pt-2 flex gap-2">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href={`/university/${university.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="icon" className="shrink-0" title="Add to Compare">
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
