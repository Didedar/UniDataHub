"use client"

import { useState } from "react"
import { universities, University } from "@/data/universities"
import { ComparisonTable } from "@/components/comparison/ComparisonTable"
import { Button } from "@/components/ui/Button"
import { Check, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ComparePage() {
    // Default select first 2 for demo
    const [selectedIds, setSelectedIds] = useState<string[]>([universities[0].id, universities[1].id])

    const toggleUniversity = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(i => i !== id))
        } else {
            if (selectedIds.length < 4) {
                setSelectedIds([...selectedIds, id])
            }
        }
    }

    const selectedUniversities = universities.filter(u => selectedIds.includes(u.id))

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Compare Universities</h1>
                    <p className="text-lg text-slate-600 mb-8">
                        Select up to 4 universities to compare side-by-side.
                    </p>

                    {/* Selection Area */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        {universities.map((uni) => {
                            const isSelected = selectedIds.includes(uni.id)
                            return (
                                <div
                                    key={uni.id}
                                    onClick={() => toggleUniversity(uni.id)}
                                    className={cn(
                                        "cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center gap-3",
                                        isSelected
                                            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                                            : "border-slate-200 bg-white hover:border-blue-300"
                                    )}
                                >
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                                        isSelected ? "bg-blue-500 border-blue-500" : "border-slate-300"
                                    )}>
                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="font-medium text-sm">{uni.shortName}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <ComparisonTable universities={selectedUniversities} />
            </div>
        </div>
    )
}
