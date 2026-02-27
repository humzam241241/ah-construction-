import Link from "next/link";

const serviceLinks = [
  { label: "New Home Construction", href: "/services" },
  { label: "Commercial Construction", href: "/services" },
  { label: "Concrete & Structural Work", href: "/services" },
  { label: "Renovation & Remodeling", href: "/services" },
  { label: "Interior Finishing", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceAreas = [
  "DHA Lahore", "Gulberg", "Bahria Town", "Model Town",
  "Johar Town", "Cantt", "Wapda Town", "Iqbal Town",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2540] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#e8a020] rounded flex items-center justify-center font-black text-white text-lg">
                AH
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm tracking-wide">A.H Construction</span>
                <span className="block text-[#e8a020] text-[10px] tracking-widest uppercase">Est. 2005</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Lahore&apos;s trusted construction partner. Building quality homes, commercial spaces, and concrete structures since 2005.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#e8a020] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#e8a020] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923145500113" className="hover:text-[#e8a020] transition-colors">+92 314 5500113</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#e8a020] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ahconstruction.pk" className="hover:text-[#e8a020] transition-colors">info@ahconstruction.pk</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#e8a020] transition-colors flex items-center gap-1.5">
                    <span className="text-[#e8a020]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#e8a020] transition-colors flex items-center gap-1.5">
                    <span className="text-[#e8a020]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Business Hours</h3>
            <div className="text-sm space-y-1">
              <p>Mon – Sat: <span className="text-white">8:00 AM – 7:00 PM</span></p>
              <p>Sunday: <span className="text-white">10:00 AM – 4:00 PM</span></p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-gray-300">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm mt-4 leading-relaxed">
              We serve all areas across Lahore and surrounding regions of Punjab, Pakistan.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-5 py-2.5 bg-[#e8a020] text-white text-sm font-semibold rounded hover:bg-amber-500 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} A.H Construction. All rights reserved. Lahore, Pakistan.</p>
          <p>Construction Company in Lahore — Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
