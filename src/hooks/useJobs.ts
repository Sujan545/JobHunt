"use client";

import { useState, useEffect } from "react";
import { Job, JobsApiResponse } from "@/types/job";

type UseJobsProps = {
  search?: string;
  location?: string;
};

export function useJobs({ search = "", location = "" }: UseJobsProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError(null);

      try {
        const query = new URLSearchParams();
        if (search) query.append("search", search);
        if (location) query.append("location", location);

        const res = await fetch(`https://jobicy.com/api/v2/remote-jobs?${query}`);
        if (!res.ok) throw new Error("Failed to fetch jobs");

        const data: JobsApiResponse = await res.json();
        setJobs(data.jobs);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [search, location]);

  return { jobs, loading, error };
}
