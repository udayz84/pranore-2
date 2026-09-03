"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const word = "PRANORE";

const sideImages = [
  {
    src: "/images/pranore/pranore-botanical-oils.jpg",
    alt: "Pranore botanicals — amla, bhringraj and sesame oils",
    position: "left",
    span: 1,
  },
  {
    src: "/images/pranore/pranore-hair-oil.jpg",
    alt: "Pranore Hair Oil — botanical hair & scalp oil",
    position: "left",
    span: 1,
  },
  {
    src: "/images/pranore/pranore-body-oil.jpg",
    alt: "Pranore Body Oil — nourishing body massage oil",
    position: "right",
    span: 1,
  },
  {
    src: "/images/pranore/pranore-lifestyle-oil.jpg",
    alt: "Pranore — the ritual of botanical oils",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - imageProgress * 80; // 100% to 20%
  const sideWidth = imageProgress * 40; // 0% to 40% (2 images per side)
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100; // -100% to 0%
  const sideTranslateRight = 100 - imageProgress * 100; // 100% to 0%
  const gap = imageProgress * 8; // 0px to 8px

  // Vertical offset for side columns on mobile
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section ref={sectionRef} id="hero" className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Top scrim — keeps the header legible over photography on the dark ground */}
        {/* Top scrim removed per request */}
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            {/* Left Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter((img) => img.position === "left").map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{ flex: img.span }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
              }}
            >
              <Image
                src="/images/pranore/hero-pranore-oils.jpg"
                alt="Pranore botanical oils amid Indian botanicals"
                fill
                priority
                className="absolute inset-0 z-0 object-cover"
              />

              {/* Bright parchment halo removed per request */}

              {/* Soft scrim so the wordmark and tagline stay legible over photography - removed per request */}

              {/* Wordmark - fades out first as scrolling begins */}
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center"
                style={{ opacity: textOpacity, transform: "translateY(-4%)" }}
              >
                <h1 className="whitespace-nowrap font-display text-[15vw] font-medium leading-[0.85] tracking-tight text-[#2A2825] md:text-[12vw]">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      data-hero-entrance
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.07}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
                <p
                  data-hero-entrance
                  className="mt-5 animate-[slideUp_0.8s_ease-out_forwards] opacity-0 text-[10px] font-medium uppercase tracking-[0.42em] text-[#2A2825]/80 md:text-xs"
                  style={{ animationDelay: "0.6s" }}
                >
                  The Art of Indian Wellness
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter((img) => img.position === "right").map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{ flex: img.span }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eyebrow + Tagline + CTAs - fixed at bottom, fades with the wordmark */}
      <div
        className="fixed bottom-0 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14"
        style={{
          opacity: textOpacity,
          pointerEvents: textOpacity > 0.25 ? "auto" : "none",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground">
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
            Pranore India
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
          </p>
          <p className="mt-4 font-display text-xl leading-snug text-foreground md:text-3xl">
            Ancient botanicals. Modern formulation.
            <br />
            Rituals crafted to last.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="bg-foreground px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-80"
            >
              Explore Collection
            </Link>
            <Link
              href="/the-house"
              className="border border-foreground px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Discover Pranore
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
