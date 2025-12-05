import { universities } from "@/data/universities"
import { notFound } from "next/navigation"
import { CampusTour } from "@/components/three/CampusTour"
import { Button } from "@/components/ui/Button"
import { MapPin, Globe, Calendar, Users, Award } from "lucide-react"
import { UniversityScrapedInfo } from "@/components/university/UniversityScrapedInfo"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export function generateStaticParams() {
    return universities.map((uni) => ({
        id: uni.id,
    }))
}

export default async function UniversityPage({ params }: PageProps) {
    const { id } = await params
    const university = universities.find((u) => u.id === id)

    if (!university) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <div className="relative h-[40vh] bg-slate-900 flex items-end">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={university.imageUrl}
                        alt={university.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

                <div className="container mx-auto px-4 pb-10 relative z-10 text-white">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{university.name}</h1>
                            <div className="flex flex-wrap gap-4 text-slate-300">
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {university.location}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Est. {university.foundedYear}</span>
                                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {university.studentCount.toLocaleString()} Students</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Visit Website</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* About Section */}
                        <section id="about" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                About the University
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {university.description}
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-blue-600">#{university.ranking}</div>
                                    <div className="text-sm text-slate-500">National Rank</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-blue-600">{university.acceptanceRate}%</div>
                                    <div className="text-sm text-slate-500">Acceptance Rate</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-blue-600">{university.stats.employmentRate}%</div>
                                    <div className="text-sm text-slate-500">Employment Rate</div>
                                </div>
                            </div>
                        </section>

                        {/* Scraped Data Section - NEW */}
                        <UniversityScrapedInfo university={university} />

                        {/* Academic Programs */}
                        <section id="programs" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                Academic Programs
                            </h2>
                            <div className="space-y-4">
                                {university.programs.map((prog) => (
                                    <div key={prog.id} className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-white flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-lg">{prog.name}</h3>
                                            <div className="flex gap-3 text-sm text-slate-500 mt-1">
                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{prog.degree}</span>
                                                <span>{prog.duration}</span>
                                                <span>{prog.language}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-slate-900">{(prog.tuition / 1000000).toFixed(1)}M KZT</div>
                                            <div className="text-xs text-slate-500">per year</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3D Tour */}
                        <section id="tour" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                Virtual Campus Tour
                            </h2>
                            <CampusTour />
                        </section>

                        {/* Admissions */}
                        <section id="admissions" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                Admissions
                            </h2>
                            <div className="bg-slate-50 p-8 rounded-2xl">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-semibold mb-3">Requirements</h3>
                                        <ul className="space-y-2">
                                            {university.admissions.requirements.map((req, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-700">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3">Key Dates</h3>
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                                            <Calendar className="w-5 h-5 text-blue-500" />
                                            <div>
                                                <div className="text-sm text-slate-500">Application Deadline</div>
                                                <div className="font-medium">{university.admissions.deadline}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 border rounded-2xl bg-white shadow-sm">
                                <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm text-slate-500">Tuition Range</div>
                                        <div className="font-medium">
                                            {(university.tuitionRange.min / 1000000).toFixed(1)}M - {(university.tuitionRange.max / 1000000).toFixed(1)}M KZT
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">International Partners</div>
                                        <div className="font-medium">{university.international.partners}+ Universities</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">Research Output</div>
                                        <div className="font-medium">{university.stats.researchOutput}</div>
                                    </div>
                                </div>
                                <Button className="w-full mt-6">Download Brochure</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
