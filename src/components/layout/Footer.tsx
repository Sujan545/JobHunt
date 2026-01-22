import Link from "next/link";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100  shadow-lg">
      <div className="max-w-full  mx-auto px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Briefcase className="text-blue-600" />
            JobHuntX
          </div>
          <p className="mt-3 text-sm text-gray-600">
            JobHuntX helps you discover thousands of job opportunities from
            trusted companies around the world.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li><Link href="/jobs" className="hover:text-black">Find Jobs</Link></li>
            <li><Link href="/companies" className="hover:text-black">Companies</Link></li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-black">About</Link></li>
            <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-black">Terms</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-black">
              <Github />
            </a>
            <a href="#" className="hover:text-black">
              <Linkedin />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-black">
              <Mail />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} JobHuntX. All rights reserved.
      </div>
    </footer>
  );
}
