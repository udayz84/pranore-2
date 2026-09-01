"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Locomotive-style smooth scrolling via Lenis.
 * Lenis animates the native scroll position (lerp interpolation), so
 * `position: sticky` scroll choreography keeps working — unlike
 * locomotive-scroll v4, which transforms the container and breaks it.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.085, // glide amount — lower = smoother/slower
      wheelMultiplier: 0.9, // slightly calmer wheel response
      touchMultiplier: 1.4,
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
