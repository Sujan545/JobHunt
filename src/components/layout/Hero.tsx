import { Search, MapPin, SlidersHorizontal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-28">
      <div className="max-w-full mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          💼 Find jobs smarter, not harder
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          The modern way to <span className="text-blue-600">find your next job</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover roles from top companies. Filter by skills, location, and
          experience — all in one powerful job search platform.
        </p>

        {/* Search Box */}
        <div className="mt-10 mx-auto max-w-full rounded-2xl bg-white/70 backdrop-blur  shadow-lg p-4 flex flex-col md:flex-row gap-3">

          <div className="flex items-center gap-2 px-3 py-2 w-full">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Job title, skill, or company"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 w-full border-l">
            <MapPin className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            <SlidersHorizontal size={18} />
            Search Jobs
          </button>
        </div>

        {/* Trust / Stats */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-gray-600">
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
      </div>
    </section>
  );
}
