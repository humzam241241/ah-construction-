"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#1a3c5e] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#e8a020] rounded flex items-center justify-center font-black text-white text-lg leading-none">
              AH
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm tracking-wide">
                A.H Construction
              </span>
              <span className="block text-[#e8a020] text-[10px] tracking-widest uppercase">
                Lahore, Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#e8a020]"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[#e8a020] text-white text-sm font-semibold rounded hover:bg-amber-500 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1a3c5e]">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#e8a020] bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-3 py-2.5 bg-[#e8a020] text-white text-sm font-semibold rounded text-center hover:bg-amber-500 transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
