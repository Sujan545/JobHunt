"use client";

import { useJobs } from "@/hooks/useJobs";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import JobCard from "../job/JobCard";
import Pagination from "../shared/Pagination";

const ITEMS_PER_PAGE = 6;

export default function Hero() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const { jobs, loading, error } = useJobs();

  // Filter jobs client-side
  const filteredJobs = useMemo(() => {
    if (!searchTerm) return [];
    const q = searchTerm.trim().toLowerCase();
    return jobs.filter((job) => {
      const geo = job.jobGeo?.toLowerCase() || "";
      const title = job.jobTitle?.toLowerCase() || "";
      const company = job.companyName?.toLowerCase() || "";

      return (
        geo.includes(searchTerm) ||
        title.includes(searchTerm) ||
        company.includes(searchTerm)
      );
    });
  }, [jobs, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  //search function
 const handleSearched=()=>{
  const q=query.trim();
  setSearchTerm(q)
  setHasSearched(true)
 }
  return (
    <>
    
      <section className="relative bg-linear-to-br mx-auto px-20 max-w-full pt-14">
        <div className="text-center">
          <div className="px-6">
            <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              💼 Find jobs smarter, not harder
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              The modern way to{" "}
              <span className="text-blue-600">find your next job</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover roles from top companies. Filter by skills, location, and
              experience — all in one powerful job search platform.
            </p>
          </div>

         
          <div className="mt-10 mx-auto max-w-full px-6 rounded-2xl justify-between bg-white/70 backdrop-blur shadow-lg py-4 flex flex-col md:flex-row gap-3">
            <div className="flex items-center gap-2 px-3 py-2 w-full md:w-2/3">
              <Search size={18} className="text-gray-500" />
              <input
                className="w-full bg-transparent outline-none text-sm"
                placeholder="Job title, location, skill, or company"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearched}
              />
            </div>

            <button
              onClick={handleSearched}
              className="px-4 py-2 flex gap-2 bg-black text-white rounded-xl items-center justify-center hover:bg-gray-900 transition"
            >
              <SlidersHorizontal size={20} /> Search Jobs
            </button>
          </div>

     
          {!hasSearched && (
            <div className="py-8 grid grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-gray-600">
              <div>
                <p className="text-2xl font-semibold text-gray-900">50K+</p>
                Jobs Listed
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">10K+</p>
                Companies
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">1M+</p>
                Users
              </div>
            </div>
          )}
        </div>
      </section>


      <section className="w-full mx-auto px-20 py-6">
        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && hasSearched && filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">
            No jobs found for “{query}”
          </p>
        )}

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
