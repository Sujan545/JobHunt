"use client";

import { useState, useEffect } from "react";
import { Job, JobsApiResponse } from "@/types/job";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://jobicy.com/api/v2/remote-jobs`);
        if (!res.ok) throw new Error("Failed to fetch jobs");

        const data: JobsApiResponse = await res.json();
        setJobs(data.jobs || []);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return { jobs, loading, error };
}
