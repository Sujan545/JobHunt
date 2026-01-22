import { Briefcase, Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white px-20 py-24">
      <div className="max-w-full  mx-auto ">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            About JobHuntX
          </span>
          <h1 className="text-4xl font-semibold text-gray-900">
            Helping people find the right job, faster.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            JobHuntX is a modern job search platform built with Next.js to help
            candidates discover opportunities that match their skills and goals.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <Feature
            icon={<Target className="text-blue-600" />}
            title="Our Mission"
            text="To simplify job discovery by connecting talent with great companies using modern web technology."
          />

          <Feature
            icon={<Users className="text-blue-600" />}
            title="Who We Serve"
            text="Students, fresh graduates, and professionals looking for better career opportunities."
          />

          <Feature
            icon={<Rocket className="text-blue-600" />}
            title="Our Vision"
            text="To become a trusted platform where people find not just jobs, but meaningful careers."
          />

        </div>

        {/* Story Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            JobHuntX started as a learning project and evolved into a real-world
            job search application. Built with Next.js, Tailwind CSS, and modern
            frontend practices, it demonstrates how technology can solve
            real-life problems for job seekers.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This project focuses on performance, SEO, and user experience —
            ensuring that users can easily search, filter, and discover
            opportunities without friction.
          </p>
        </div>

      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow transition">
      <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
