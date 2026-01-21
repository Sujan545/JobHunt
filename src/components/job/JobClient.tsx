"use client";

import JobCard from "@/components/job/JobCard";
import Pagination from "@/components/shared/Pagination";
import { useJobs } from "@/hooks/useJobs";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function JobsClient() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs, loading, error } = useJobs();

  const search = query.trim().toLowerCase();

  const filteredJobs = useMemo(() => {
    if (!search) return jobs;

    return jobs.filter((job) => {
      const geo = job.jobGeo?.toLowerCase() || "";
      const title = job.jobTitle?.toLowerCase() || "";
      const company = job.companyName?.toLowerCase() || "";

      return (
        geo.includes(search) ||
        title.includes(search) ||
        company.includes(search)
      );
    });
  }, [jobs, search]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1); // Reset page when searching
  }, [search]);

  return (
    <>
      {/* 🔍 Search Input */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Search by title, company or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Jobs Grid */}
      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && filteredJobs.length === 0 && (
        <p>No jobs found.</p>
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
