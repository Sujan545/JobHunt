import JobsClient from "@/components/job/JobClient";


export default function JobsPage() {
  return (
    <div className="max-w-full mx-auto px-20 py-16">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Browse Jobs
      </h1>
      <JobsClient />
    </div>
  );
}
