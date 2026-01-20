"use client";


import JobCard from "@/components/shared/JobCard";
import { useJobs } from "@/hooks/useJobs";
import { useState } from "react";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const { jobs, loading, error } = useJobs({ search, location });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Browse Jobs
      </h1>

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
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
