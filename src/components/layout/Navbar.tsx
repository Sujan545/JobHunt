"use client";

import Link from "next/link";
import { Home, Info, BookOpen, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path || pathname.startsWith(path + "/")
      ? "flex items-center gap-1 text-black font-semibold"
      : "flex items-center gap-1 hover:text-black";

  return (
    <nav className="w-full shadow-lg fixed bg-white z-10">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          JobHunt
        </Link>

        <div className="flex items-center gap-6 text-gray-700">
          <Link href="/" className={linkClass("/")}>
            <Home size={18} /> Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            <Info size={18} /> About
          </Link>
          <Link href="/job" className={linkClass("/job")}>
            <BookOpen size={18} /> Job
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            <Mail size={18} /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
