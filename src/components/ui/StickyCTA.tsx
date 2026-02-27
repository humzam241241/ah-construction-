"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg sm:hidden">
      <div className="flex gap-2 p-3">
        <a
          href="tel:+923145500113"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1a3c5e] text-white font-semibold rounded-lg active:bg-[#0f2540] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#e8a020] text-white font-semibold rounded-lg active:bg-amber-500 transition-colors text-sm"
        >
          Get Quote
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
