"use client";

import { ScrapedDataSection } from "@/components/university/ScrapedDataSection";
import { University } from "@/data/universities";

interface UniversityScrapedInfoProps {
    university: University;
}

export function UniversityScrapedInfo({ university }: UniversityScrapedInfoProps) {
    // Map university ID to scraper ID (based on website domain)
    const getScraperId = (website: string): string => {
        const domain = website.replace("https://", "").replace("http://", "").split("/")[0];
        return domain.split(".")[0];
    };

    const scraperId = getScraperId(university.website);

    return (
        <section id="scraped" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                Данные с официального сайта
                <span className="text-sm font-normal text-slate-400 ml-2">
                    (автоматический парсинг)
                </span>
            </h2>
            <ScrapedDataSection universityId={scraperId} />
        </section>
    );
}
