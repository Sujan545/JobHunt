"use client";

import Link from "next/link";
import { Home, Info, BookOpen, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full shadow-lg fixed bg-white z-10">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
       
        <Link href="/" className="text-xl font-bold text-gray-900">
          NextStart
        </Link>

      
        <div className="flex items-center gap-6 text-gray-700">
          <Link href="/" className="flex items-center gap-1 hover:text-black">
            <Home size={18} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-black">
            <Info size={18} /> About
          </Link>
          <Link href="/job" className="flex items-center gap-1 hover:text-black">
            <BookOpen size={18} /> Job
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-black">
            <Mail size={18} /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
