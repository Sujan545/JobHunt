import Link from "next/link";
import { MapPin, Briefcase, Layers } from "lucide-react";
import { Job } from "@/types/job";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  console.log("LOGO URL:", job.companyLogo);
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <Link href={job.url}>
        {/* Company Logo */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <img
              src={job.companyLogo || "/logo-placeholder.png"}
              alt={job.companyName}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="object-contain p-2"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
              {job.jobTitle}
            </h3>
            <p className="text-sm text-gray-500">{job.companyName}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {job.jobGeo}
          </span>

          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" /> {job.jobType[0]}
          </span>

          <span className="flex items-center gap-1">
            <Layers className="h-4 w-4" /> {job.jobLevel}
          </span>
        </div>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm text-gray-600">
          {job.jobExcerpt}
        </p>

          </Link>
        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {new Date(job.pubDate).toLocaleDateString()}
          </span>

          <Link
            href={job.url}
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View Job →
          </Link>
        </div>
    </div>
  );
}
