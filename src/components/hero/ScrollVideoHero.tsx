"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const FRAMES_BASE = "/hero-frames";
const SCROLL_HEIGHT_VH = 300;
const OVERLAY_STEPS = [
  { start: 0, end: 0.28, title: "Building Pakistan's", sub: "Skyline" },
  { start: 0.28, end: 0.55, title: "Trusted Since 2005", sub: "One project at a time" },
  { start: 0.55, end: 0.82, title: "Lahore to Punjab", sub: "We deliver" },
  { start: 0.82, end: 1.01, title: "Start your build", sub: "Get a free quote" },
];

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameCount, setFrameCount] = useState(0);
  const [frameIndex, setFrameIndex] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    fetch(`${FRAMES_BASE}/count.json`)
      .then((r) => r.json())
      .then((data: { count: number }) => setFrameCount(data.count))
      .catch(() => setFrameCount(0));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalScroll = rect.height - viewportHeight;
        if (totalScroll <= 0) {
          setScrollProgress(0);
          setFrameIndex(1);
          setActiveStep(0);
          return;
        }
        const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));
        setScrollProgress(progress);
        const count = frameCount || 1;
        const index = Math.min(count, Math.max(1, Math.floor(progress * count) + 1));
        setFrameIndex(index);
        const step = OVERLAY_STEPS.findIndex((s) => progress >= s.start && progress < s.end);
        setActiveStep(step >= 0 ? step : OVERLAY_STEPS.length - 1);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [frameCount]);

  if (frameCount === 0) {
    return (
      <section className="relative bg-[#1a3c5e] overflow-hidden" aria-labelledby="hero-heading">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e8a020]/20 border border-[#e8a020]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#e8a020] rounded-full animate-pulse" />
              <span className="text-[#e8a020] text-sm font-medium">Trusted Construction Partner Since 2005</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Pakistan&apos;s <span className="text-[#e8a020]">Skyline</span> One Project at a Time
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              From Punjab to projects across Pakistan, A.H Construction delivers reliable construction, renovation, infrastructure, maintenance, and project management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors text-base">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+923145500113" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0314-5500113
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const framePath = `${FRAMES_BASE}/frame_${String(frameIndex).padStart(4, "0")}.jpg`;
  const currentOverlay = OVERLAY_STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      aria-label="Hero animation"
    >
      <div className="sticky top-0 left-0 w-full h-screen">
        <div className="absolute inset-0 bg-[#1a3c5e]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={frameIndex}
            src={framePath}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {(() => {
              const step = currentOverlay;
              const progressInStep =
                scrollProgress >= step.start && step.end > step.start
                  ? (scrollProgress - step.start) / (step.end - step.start)
                  : 0;
              const isLast = activeStep === OVERLAY_STEPS.length - 1;
              return (
                <div className="flex flex-col justify-center items-center">
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
                    style={{
                      transform: `translateY(${(1 - progressInStep) * 24}px)`,
                      opacity: 0.92 + progressInStep * 0.08,
                      transition: "transform 0.12s ease-out, opacity 0.15s ease-out",
                    }}
                  >
                    {step.title}
                    {step.sub && (
                      <span className="block text-[#e8a020] mt-1">{step.sub}</span>
                    )}
                  </h1>
                  {isLast && (
                    <div
                      className="mt-8 flex flex-wrap gap-4 justify-center pointer-events-auto"
                      style={{
                        opacity: progressInStep > 0.25 ? 1 : 0,
                        transform: `translateY(${progressInStep > 0.25 ? 0 : 24}px)`,
                        transition: "opacity 0.35s ease, transform 0.35s ease",
                      }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
                      >
                        Get a Free Quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href="tel:+923145500113"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        0314-5500113
                      </a>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
