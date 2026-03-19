"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SCROLL_HEIGHT_VH = 800; // Extra tall for generous text spacing

type TextBlock =
  | { type: "badge"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "cta"; text: string }
  | { type: "spacer"; text?: never };

const TEXT_BLOCKS: TextBlock[] = [
  { type: "badge", text: "Trusted Since 2005" },
  { type: "heading", text: "Building Pakistan's Skyline" },
  { type: "paragraph", text: "From Lahore to projects across Punjab" },
  { type: "heading", text: "One Project at a Time" },
  { type: "paragraph", text: "Custom homes, commercial builds, renovations" },
  { type: "heading", text: "500+ Projects Delivered" },
  { type: "paragraph", text: "Government, NGOs, banks, private clients" },
  { type: "heading", text: "Quality You Can Trust" },
  { type: "paragraph", text: "10-year structural warranty" },
  { type: "heading", text: "Start Your Build Today" },
  { type: "cta", text: "Get a Free Quote" },
  { type: "spacer" },
];

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Smooth lerp animation loop
  useEffect(() => {
    if (!isReady || showFallback) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const duration = video.duration;
    if (!duration || isNaN(duration)) return;

    let currentTime = 0; // smoothed value
    let targetTime = 0;  // raw scroll target
    let currentTextOffset = 0;
    let targetTextOffset = 0;
    let running = true;

    const LERP_SPEED = 0.12; // smoothing factor (0 = frozen, 1 = instant)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Continuous animation loop — runs every frame, lerps toward target
    const tick = () => {
      if (!running) return;

      // Lerp toward target
      currentTime = lerp(currentTime, targetTime, LERP_SPEED);
      currentTextOffset = lerp(currentTextOffset, targetTextOffset, LERP_SPEED);

      // Only seek if meaningfully different (avoid micro-seeks)
      if (Math.abs(currentTime - video.currentTime) > 0.01) {
        video.currentTime = currentTime;
      }

      // Update text position
      if (textRef.current) {
        textRef.current.style.transform = `translateY(calc(100vh - ${currentTextOffset}px))`;
      }

      requestAnimationFrame(tick);
    };

    // Scroll handler — just updates targets, doesn't touch DOM
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      targetTime = progress * duration;
      targetTextOffset = progress * vh * 5;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // set initial targets
    currentTime = targetTime; // snap on first load
    currentTextOffset = targetTextOffset;
    if (video) video.currentTime = currentTime;
    requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isReady, showFallback]);

  if (showFallback) {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      aria-label="Hero animation"
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Split screen layout */}
        <div className="flex h-full">
          {/* Left side: Video scrubbed by scroll */}
          <div className="relative w-full lg:w-1/2 h-full bg-[#0a1a2e]">
            <video
              ref={videoRef}
              src="/hero-scroll.mp4"
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={() => setIsReady(true)}
              onError={() => setShowFallback(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 lg:to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Right side: Vertical scrolling text */}
          <div className="absolute inset-0 lg:relative lg:w-1/2 h-full overflow-hidden">
            {/* Dark gradient background for text side */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a1a2e] via-[#0a1a2e]/95 to-transparent lg:from-[#0a1a2e] lg:via-[#0a1a2e] lg:to-[#0a1a2e]" />

            {/* Scrolling text container */}
            <div className="relative h-full overflow-hidden">
              <div
                ref={textRef}
                className="absolute w-full px-6 sm:px-8 lg:px-12 pt-24"
                style={{
                  transform: "translateY(100vh)",
                  willChange: "transform",
                }}
              >
                <div className="max-w-lg mx-auto space-y-0">
                  {TEXT_BLOCKS.map((block, i) => {
                    if (block.type === "spacer") {
                      return <div key={i} className="h-32 lg:h-40" />;
                    }
                    if (block.type === "badge") {
                      return (
                        <div key={i} className="flex justify-center lg:justify-start mb-12">
                          <div className="inline-flex items-center gap-2 bg-[#e8a020]/20 border border-[#e8a020]/40 rounded-full px-5 py-2.5">
                            <span className="w-2 h-2 bg-[#e8a020] rounded-full animate-pulse" />
                            <span className="text-[#e8a020] text-sm font-semibold tracking-wide">{block.text}</span>
                          </div>
                        </div>
                      );
                    }
                    if (block.type === "heading") {
                      return (
                        <h2
                          key={i}
                          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-center lg:text-left mt-28 mb-4"
                          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
                        >
                          {block.text.includes("Skyline") ? (
                            <>
                              Building Pakistan&apos;s{" "}
                              <span className="text-[#e8a020]">Skyline</span>
                            </>
                          ) : block.text.includes("500+") ? (
                            <>
                              <span className="text-[#e8a020]">500+</span> Projects Delivered
                            </>
                          ) : block.text.includes("Start") ? (
                            <>
                              Start Your{" "}
                              <span className="text-[#e8a020]">Build</span> Today
                            </>
                          ) : (
                            block.text
                          )}
                        </h2>
                      );
                    }
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={i}
                          className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed text-center lg:text-left mb-4"
                          style={{ textShadow: "0 2px 15px rgba(0,0,0,0.6)" }}
                        >
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "cta") {
                      return (
                        <div key={i} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-28">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-xl shadow-[#e8a020]/40"
                          >
                            Get a Free Quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <a
                            href="tel:+923145500113"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0314-5500113
                          </a>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Top fade for text disappearing */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a1a2e] via-[#0a1a2e]/80 to-transparent pointer-events-none z-10" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a1a2e] via-[#0a1a2e]/80 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce z-20">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
