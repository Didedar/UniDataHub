"use client"

import { University } from "@/data/universities"
import { Check, X, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonTableProps {
    universities: University[]
}

export function ComparisonTable({ universities }: ComparisonTableProps) {
    if (universities.length === 0) {
        return <div className="text-center p-10 text-slate-500">Select universities to compare</div>
    }

    const metrics = [
        { label: "Location", key: "location" },
        { label: "Founded", key: "foundedYear" },
        { label: "Ranking", key: "ranking", format: (val: number) => `#${val}` },
        { label: "Students", key: "studentCount", format: (val: number) => val.toLocaleString() },
        { label: "Acceptance Rate", key: "acceptanceRate", format: (val: number) => `${val}%` },
        {
            label: "Tuition (Year)",
            key: "tuitionRange",
            format: (val: { min: number, max: number }) =>
                `${(val.min / 1000000).toFixed(1)}M - ${(val.max / 1000000).toFixed(1)}M KZT`
        },
        {
            label: "Employment Rate",
            key: "stats.employmentRate",
            format: (val: number) => `${val}%`
        },
        {
            label: "Research Output",
            key: "stats.researchOutput"
        },
    ]

    const getValue = (uni: University, key: string) => {
        if (key.includes('.')) {
            const [parent, child] = key.split('.')
            // @ts-ignore
            return uni[parent][child]
        }
        // @ts-ignore
        return uni[key]
    }

    return (
        <div className="overflow-x-auto border rounded-xl shadow-sm bg-white">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr className="bg-slate-50 border-b">
                        <th className="p-4 text-left w-48 font-semibold text-slate-600">Feature</th>
                        {universities.map((uni) => (
                            <th key={uni.id} className="p-4 text-left min-w-[200px]">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 mb-3 rounded-full bg-slate-200 overflow-hidden">
                                        {/* Placeholder for logo */}
                                        <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                                            {uni.shortName}
                                        </div>
                                    </div>
                                    <span className="font-bold text-slate-900">{uni.shortName}</span>
                                    <span className="text-xs text-slate-500 font-normal">{uni.name}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {metrics.map((metric) => (
                        <tr key={metric.key} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-medium text-slate-700 bg-slate-50/30">{metric.label}</td>
                            {universities.map((uni) => {
                                const val = getValue(uni, metric.key)
                                return (
                                    <td key={`${uni.id}-${metric.key}`} className="p-4 text-center text-slate-600">
                                        {metric.format ? metric.format(val) : val}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                    {/* Boolean/Check features */}
                    <tr>
                        <td className="p-4 font-medium text-slate-700 bg-slate-50/30">Dormitory</td>
                        {universities.map(uni => (
                            <td key={uni.id} className="p-4 text-center">
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
