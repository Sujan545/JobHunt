"use client";

import JobCard from "@/components/job/JobCard";
import Pagination from "@/components/shared/Pagination";
import { useJobs } from "@/hooks/useJobs";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function JobsClient() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { jobs, loading, error } = useJobs({ search, location });
    const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentJobs = jobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, location]);

    return (
        <>
            {/* Search Form */}
            <div className="flex flex-col md:flex-row gap-3 mb-8">
                <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Jobs Grid */}
            {loading && <p>Loading jobs...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && jobs.length === 0 && (
                <p>No jobs found. Try adjusting your filters.</p>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </>
    );
}
