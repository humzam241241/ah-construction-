"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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

const INITIAL_STYLES: Record<Animation, string> = {
  "brick-drop": "opacity-0 -translate-y-24 scale-105",
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-12",
  "slide-right": "opacity-0 translate-x-12",
  "scale-up": "opacity-0 scale-90",
  "stagger-up": "opacity-0 translate-y-6",
};

const ANIMATE_STYLES: Record<Animation, string> = {
  "brick-drop": "opacity-100 translate-y-0 scale-100",
  "fade-up": "opacity-100 translate-y-0",
  "fade-in": "opacity-100",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
  "scale-up": "opacity-100 scale-100",
  "stagger-up": "opacity-100 translate-y-0",
};

// Brick-drop uses a custom cubic-bezier that mimics a heavy object falling and bouncing
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
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
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
}

// Helper for staggering children
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (!child) return null;
            const easing = EASINGS[animation] || "cubic-bezier(0.16, 1, 0.3, 1)";
            return (
              <div
                key={i}
                className={`transition-all ${visible ? ANIMATE_STYLES[animation] : INITIAL_STYLES[animation]}`}
                style={{
                  transitionDuration: `${duration}ms`,
                  transitionDelay: `${visible ? i * staggerDelay : 0}ms`,
                  transitionTimingFunction: easing,
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
