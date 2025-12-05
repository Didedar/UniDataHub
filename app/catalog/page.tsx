import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university/UniversityCard"

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">University Catalog</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Browse through the top universities in Kazakhstan and find the perfect place for your education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {universities.map((uni) => (
                        <UniversityCard key={uni.id} university={uni} />
                    ))}
                </div>
            </div>
        </div>
    )
}
