"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { FadeImage } from "@/components/fade-image";

const specs = [
  { label: "Format", value: "12 ML" },
  { label: "Concentration", value: "Parfum" },
  { label: "Method", value: "Deg & Bhapka" },
  { label: "Origin", value: "India" },
];

export function EditorialSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom > 0 && rect.top < windowHeight) {
      const progress = 1 - (rect.top + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateParallax]);

  const parallaxY = (scrollProgress - 0.5) * 40;

  return (
    <section id="craft" className="bg-background pb-24 md:pb-32">
      {/* Statement */}
      <div className="mx-auto max-w-7xl px-6 pb-14 md:px-12 md:pb-20 lg:px-20">
        <div className="flex items-center gap-3">
          <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Perfume Oils
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
            DISTILLED WITH <span className="italic text-gold">INTENTION.</span>
          </h2>
          <div className="lg:max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Rare botanicals, traditional perfume-making knowledge and a
              contemporary approach to composition.
            </p>
            <Link
              href="/shop"
              className="mt-5 inline-block border border-foreground px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Explore Perfume Oils
            </Link>
          </div>
        </div>
      </div>

      {/* Parallax craft image */}
      <div
        ref={imageRef}
        className="relative aspect-[16/10] w-full overflow-hidden border-y border-border bg-secondary md:aspect-[21/9]"
      >
        <div
          className="absolute -inset-y-[12%] inset-x-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxY}%, 0)`,
          }}
        >
          <FadeImage
            src="/images/pranore/pranore-perfume-oil-detail.jpg"
            alt="Pranore perfume oil — attar being blended drop by drop"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Craft facts */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mt-14 grid grid-cols-2 gap-px bg-border md:mt-20 md:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-background p-6 text-center md:p-8">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {spec.label}
              </p>
              <p className="font-display text-2xl font-medium text-foreground md:text-3xl">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
