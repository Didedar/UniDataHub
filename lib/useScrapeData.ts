"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { universities as staticUniversities, University as StaticUniversity } from "@/data/universities";

// =============================================================================
// TYPES - Combined static + scraped data
// =============================================================================

export interface AboutSection {
    name: string;
    mission: string;
    history_summary: string;
    rector: string;
}

export interface AcademicsSection {
    degrees_offered: string[];
    faculties: string[];
}

export interface AdmissionsSection {
    deadlines: string;
    scholarship_info: string;
    applicant_link: string;
}

export interface TourSection {
    has_3d_tour: boolean;
    tour_link: string;
}

export interface InternationalSection {
    has_exchange_programs: boolean;
    exchange_programs: string;
    erasmus_mention: boolean;
}

export interface ComparisonSection {
    student_count: number | null;
    tuition_min: number | null;
    tuition_max: number | null;
    faculty_count: number | null;
    founded_year: number | null;
}

export interface MetaSection {
    name: string;
    short_name: string;
    city: string;
    type: string;
}

export interface ScrapedData {
    url: string;
    scraped_at: string;
    about: AboutSection;
    academics: AcademicsSection;
    admissions: AdmissionsSection;
    tour: TourSection;
    international: InternationalSection;
    comparison: ComparisonSection;
    meta: MetaSection;
    cached?: boolean;
    error?: string;
}

export interface ScrapeResponse {
    status: "ready" | "scraping" | "completed" | "cached" | "error";
    message: string;
    data: ScrapedData | null;
}

const API_BASE = "http://localhost:8000";

// =============================================================================
// MERGE STATIC + SCRAPED DATA
// =============================================================================

/**
 * Find static university data by ID
 */
function findStaticUniversity(id: string): StaticUniversity | undefined {
    return staticUniversities.find(u => u.id === id);
}

/**
 * Merge scraped data with static data (static as fallback)
 */
function mergeWithStatic(scraped: any, staticUni: StaticUniversity | undefined): ScrapedData {
    const base: ScrapedData = {
        url: scraped?.url || staticUni?.website || "",
        scraped_at: scraped?.scraped_at || new Date().toISOString(),
        about: {
            name: scraped?.about?.name || staticUni?.name || "",
            mission: scraped?.about?.mission || staticUni?.description || "",
            history_summary: scraped?.about?.history_summary || "",
            rector: scraped?.about?.rector || "",
        },
        academics: {
            degrees_offered: scraped?.academics?.degrees_offered?.length
                ? scraped.academics.degrees_offered
                : staticUni?.programs?.map(p => p.degree).filter((v, i, a) => a.indexOf(v) === i) || [],
            faculties: scraped?.academics?.faculties?.length
                ? scraped.academics.faculties
                : [],
        },
        admissions: {
            deadlines: scraped?.admissions?.deadlines || staticUni?.admissions?.deadline || "",
            scholarship_info: scraped?.admissions?.scholarship_info ||
                (staticUni?.admissions?.scholarships?.join(", ") || ""),
            applicant_link: scraped?.admissions?.applicant_link || "",
        },
        tour: {
            has_3d_tour: scraped?.tour?.has_3d_tour || false,
            tour_link: scraped?.tour?.tour_link || "",
        },
        international: {
            has_exchange_programs: scraped?.international?.has_exchange_programs ||
                (staticUni?.international?.exchangePrograms?.length ? true : false),
            exchange_programs: scraped?.international?.exchange_programs ||
                (staticUni?.international?.exchangePrograms?.join(", ") || ""),
            erasmus_mention: scraped?.international?.erasmus_mention ||
                (staticUni?.international?.exchangePrograms?.some(p => p.toLowerCase().includes("erasmus")) || false),
        },
        comparison: {
            student_count: scraped?.comparison?.student_count || staticUni?.studentCount || null,
            tuition_min: scraped?.comparison?.tuition_min || staticUni?.tuitionRange?.min || null,
            tuition_max: scraped?.comparison?.tuition_max || staticUni?.tuitionRange?.max || null,
            faculty_count: scraped?.comparison?.faculty_count || null,
            founded_year: scraped?.comparison?.founded_year || staticUni?.foundedYear || null,
        },
        meta: {
            name: scraped?.meta?.name || staticUni?.name || "",
            short_name: scraped?.meta?.short_name || staticUni?.shortName || "",
            city: scraped?.meta?.city || staticUni?.location || "",
            type: scraped?.meta?.type || staticUni?.type || "unknown",
        },
        cached: scraped?.cached,
        error: scraped?.error,
    };

    return base;
}

// =============================================================================
// MAIN HOOK: useScrapeData
// =============================================================================

export function useScrapeData(universityId: string, autoFetch: boolean = true) {
    const [data, setData] = useState<ScrapedData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string>("idle");

    // Get static data immediately
    const staticUni = useMemo(() => findStaticUniversity(universityId), [universityId]);

    const fetchData = useCallback(async (force: boolean = false) => {
        if (!universityId) return;

        setLoading(true);
        setError(null);
        setStatus("loading");

        try {
            // First, set static data as default
            if (staticUni) {
                setData(mergeWithStatic(null, staticUni));
            }

            // Try to get scraped data from API
            const dataResponse = await fetch(`${API_BASE}/api/data/${universityId}`);

            if (dataResponse.ok) {
                const result = await dataResponse.json();
                // API returns the university object directly, or wrapped in some cases
                const uniData = result.data || result;

                if (uniData && uniData.id) {
                    setStatus("completed");
                    setData(mergeWithStatic(uniData, staticUni));
                    setLoading(false);
                    return;
                }
            }

            // Fallback to scrape endpoint
            const response = await fetch(
                `${API_BASE}/api/scrape/${universityId}${force ? "?force=true" : ""}`
            );

            if (response.ok) {
                const result: ScrapeResponse = await response.json();
                setStatus(result.status);

                if (result.data) {
                    setData(mergeWithStatic(result.data, staticUni));
                }

                if (result.status === "scraping") {
                    setTimeout(() => fetchData(false), 3000);
                }
            } else {
                // API not available, use static data only
                if (staticUni) {
                    setData(mergeWithStatic(null, staticUni));
                    setStatus("static");
                } else {
                    throw new Error("University not found");
                }
            }
        } catch (err) {
            // On any error, fallback to static data
            if (staticUni) {
                setData(mergeWithStatic(null, staticUni));
                setStatus("static");
                setError(null); // Clear error if we have static data
            } else {
                setError(err instanceof Error ? err.message : "Unknown error");
                setStatus("error");
            }
        } finally {
            setLoading(false);
        }
    }, [universityId, staticUni]);

    // Auto-fetch on mount
    useEffect(() => {
        if (autoFetch && universityId) {
            fetchData();
        } else if (staticUni) {
            // Even without auto-fetch, show static data
            setData(mergeWithStatic(null, staticUni));
            setStatus("static");
        }
    }, [universityId, autoFetch, fetchData, staticUni]);

    return {
        data,
        loading,
        error,
        status,
        refetch: () => fetchData(true),
        fetch: fetchData,
        hasStaticData: !!staticUni,
    };
}

// =============================================================================
// HOOK: useUniversityList
// =============================================================================

export interface UniversityListItem {
    id: string;
    name: string;
    short_name: string;
    url: string;
    city: string;
    type: string;
}

export function useUniversityList() {
    const [universities, setUniversities] = useState<UniversityListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch from API to get the full list of 113 universities
        fetch(`${API_BASE}/api/universities`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setUniversities(data);
                    setLoading(false);
                } else {
                    // Fallback to static list (now contains 113 placeholders)
                    const staticList: UniversityListItem[] = staticUniversities.map(u => ({
                        id: u.id,
                        name: u.name,
                        short_name: u.shortName,
                        url: u.website,
                        city: u.location,
                        type: u.type || "unknown",
                    }));
                    setUniversities(staticList);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Failed to fetch universities from API:", err);
                setError("Failed to load university list");

                // Fallback to static list
                const staticList: UniversityListItem[] = staticUniversities.map(u => ({
                    id: u.id,
                    name: u.name,
                    short_name: u.shortName,
                    url: u.website,
                    city: u.location,
                    type: u.type || "unknown",
                }));
                setUniversities(staticList);
                setLoading(false);
            });
    }, []);

    return { universities, loading, error };
}

// =============================================================================
// HOOK: useAllUniversityData
// =============================================================================

export function useAllUniversityData() {
    const [data, setData] = useState<ScrapedData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Initialize with static data
        const staticData = staticUniversities.map(u =>
            mergeWithStatic(null, u)
        );
        setData(staticData);

        // Try to fetch scraped data
        fetch(`${API_BASE}/api/data`)
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success" && result.data?.length) {
                    // Merge each scraped item with static
                    const merged = result.data.map((scraped: any) => {
                        const id = scraped.url?.replace(/https?:\/\//, "").split("/")[0].split(".")[0];
                        const staticUni = staticUniversities.find(u => u.id === id);
                        return mergeWithStatic(scraped, staticUni);
                    });
                    setData(merged);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                // Keep static data
            });
    }, []);

    return { data, loading, error };
}

// =============================================================================
// HOOK: useUniversityStats
// =============================================================================

export interface UniversityStats {
    total_universities: number;
    with_3d_tour: number;
    with_exchange_programs: number;
    with_erasmus: number;
    by_city: Record<string, number>;
    by_type: Record<string, number>;
    avg_student_count: number;
    tuition_range: { min: number | null; max: number | null };
}

export function useUniversityStats() {
    const { data } = useAllUniversityData();

    const stats = useMemo<UniversityStats>(() => {
        const result: UniversityStats = {
            total_universities: data.length,
            with_3d_tour: 0,
            with_exchange_programs: 0,
            with_erasmus: 0,
            by_city: {},
            by_type: {},
            avg_student_count: 0,
            tuition_range: { min: null, max: null },
        };

        const studentCounts: number[] = [];
        const tuitions: number[] = [];

        for (const uni of data) {
            if (uni.tour?.has_3d_tour) result.with_3d_tour++;
            if (uni.international?.has_exchange_programs) result.with_exchange_programs++;
            if (uni.international?.erasmus_mention) result.with_erasmus++;

            const city = uni.meta?.city || "Unknown";
            result.by_city[city] = (result.by_city[city] || 0) + 1;

            const type = uni.meta?.type || "unknown";
            result.by_type[type] = (result.by_type[type] || 0) + 1;

            if (uni.comparison?.student_count) {
                studentCounts.push(uni.comparison.student_count);
            }
            if (uni.comparison?.tuition_min) tuitions.push(uni.comparison.tuition_min);
            if (uni.comparison?.tuition_max) tuitions.push(uni.comparison.tuition_max);
        }

        if (studentCounts.length) {
            result.avg_student_count = Math.round(
                studentCounts.reduce((a, b) => a + b, 0) / studentCounts.length
            );
        }

        if (tuitions.length) {
            result.tuition_range = {
                min: Math.min(...tuitions),
                max: Math.max(...tuitions),
            };
        }

        return result;
    }, [data]);

    return { stats, loading: !data.length };
}
