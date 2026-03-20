"use client";

import { useEffect, useRef, useState, cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";

type Animation =
  | "brick-drop"
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "stagger-up";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

// Mobile-friendly: smaller translate distances to avoid overflow
const INITIAL_STYLES: Record<Animation, string> = {
  "brick-drop": "opacity-0 -translate-y-10 sm:-translate-y-24 scale-105",
  "fade-up": "opacity-0 translate-y-5 sm:translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-6 sm:-translate-x-12",
  "slide-right": "opacity-0 translate-x-6 sm:translate-x-12",
  "scale-up": "opacity-0 scale-95 sm:scale-90",
  "stagger-up": "opacity-0 translate-y-4 sm:translate-y-6",
};

const ANIMATE_STYLES: Record<Animation, string> = {
  "brick-drop": "opacity-100",
  "fade-up": "opacity-100",
  "fade-in": "opacity-100",
  "slide-left": "opacity-100",
  "slide-right": "opacity-100",
  "scale-up": "opacity-100",
  "stagger-up": "opacity-100",
};

const EASINGS: Partial<Record<Animation, string>> = {
  "brick-drop": "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Shorter threshold on mobile for earlier trigger
    const isMobile = window.innerWidth < 640;
    const effectiveThreshold = isMobile ? Math.min(threshold, 0.05) : threshold;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: effectiveThreshold, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const easing = EASINGS[animation] || "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={`transition-all ${visible ? ANIMATE_STYLES[animation] : INITIAL_STYLES[animation]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
}

// Stagger container — wraps each child with staggered animation
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: Animation;
  duration?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  animation = "stagger-up",
  duration = 600,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 640;
    const effectiveThreshold = isMobile ? Math.min(threshold, 0.05) : threshold;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: effectiveThreshold, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const childArray = Array.isArray(children) ? children : [children];
  const isMobileStagger = typeof window !== "undefined" && window.innerWidth < 640;
  const effectiveStagger = isMobileStagger ? Math.min(staggerDelay, 60) : staggerDelay;

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => {
        if (!child) return null;
        const easing = EASINGS[animation] || "cubic-bezier(0.16, 1, 0.3, 1)";
        const enterDelay = i * effectiveStagger;
        const exitDelay = (childArray.length - 1 - i) * (effectiveStagger * 0.4);
        const animClass = `transition-all ${visible ? ANIMATE_STYLES[animation] : INITIAL_STYLES[animation]}`;
        const animStyle = {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${visible ? enterDelay : exitDelay}ms`,
          transitionTimingFunction: easing,
        };

        // Apply styles directly to valid React elements to avoid wrapper divs
        if (isValidElement(child)) {
          const existing = (child as ReactElement<{ className?: string; style?: Record<string, string> }>).props;
          return cloneElement(child as ReactElement<{ className?: string; style?: Record<string, string>; key?: React.Key }>, {
            key: i,
            className: `${existing.className || ""} ${animClass}`.trim(),
            style: { ...existing.style, ...animStyle },
          });
        }

        // Fallback: wrap non-element children
        return (
          <div key={i} className={animClass} style={animStyle}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
