"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.95;
      const endOffset = windowHeight * 0.05;
      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;

      setProgress(Math.max(0, Math.min(1, currentPosition / totalDistance)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="font-display text-2xl font-medium leading-snug text-[#F2E9D8] md:text-4xl lg:text-[2.9rem]"
    >
      {words.map((word, index) => {
        const appearProgress = progress * (words.length + 1);
        const wordAppearProgress = Math.max(
          0,
          Math.min(1, appearProgress - index)
        );
        return (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: wordAppearProgress,
              filter: `blur(${(1 - wordAppearProgress) * 40}px)`,
              transition: "opacity 0.3s ease, filter 0.3s ease",
              marginRight: "0.3em",
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

const sideImages = [
  {
    src: "/images/pranore/pranore-oud.jpg",
    alt: "Pranore Oud attar — resinous heartwood",
    position: "left",
  },
  {
    src: "/images/pranore/pranore-saffron.jpg",
    alt: "Pranore Saffron attar — Kashmir harvest",
    position: "right",
  },
];

const textCycles = ["AN ANCIENT ART.", "A CONTEMPORARY HOUSE.", "CRAFTED IN INDIA."];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const heritageCopy =
    "India has carried the art of fragrance through generations. Pranore reinterprets that heritage through modern perfume oils, attars and fragrances created around extraordinary Indian botanicals.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 4;
      const scrolled = -rect.top;
      setScrollProgress(
        Math.max(0, Math.min(1, scrolled / scrollableHeight))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intro label fades first
  const labelOpacity = Math.max(0, 1 - scrollProgress / 0.12);

  // Image choreography begins as the label clears
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.15) / 0.85));

  const centerWidth = 100 - imageProgress * 26; // 100% → 74%
  const sideWidth = imageProgress * 14; // 0% → 14%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const kenBurnsScale = 1 + scrollProgress * 0.12; // slow push into the frame
  const gap = imageProgress * 14;

  return (
    <section ref={sectionRef} id="heritage" className="relative bg-ink">
      {/* Sticky heritage stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="relative flex h-full w-full items-stretch justify-center"
          style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
        >
          {/* Left panel */}
          <div
            className="relative hidden overflow-hidden will-change-transform md:block"
            style={{
              width: `${sideWidth}%`,
              transform: `translateX(${sideTranslateLeft}%)`,
              opacity: sideOpacity,
            }}
          >
            {sideImages
              .filter((img) => img.position === "left")
              .map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              ))}
          </div>

          {/* Center heritage frame */}
          <div
            className="relative overflow-hidden will-change-transform"
            style={{ width: `${centerWidth}%`, flex: "0 0 auto" }}
          >
            <Image
              src="/images/pranore/pranore-indian-heritage.jpg"
              alt="Indian heritage — attar distillation and botanical craft"
              fill
              priority
              className="object-cover"
              style={{ transform: `scale(${kenBurnsScale})` }}
            />
            <div className="absolute inset-0 bg-ink/45" />

            {/* Eyebrow */}
            <div
              className="absolute left-1/2 top-10 z-10 -translate-x-1/2 md:top-14"
              style={{ opacity: labelOpacity }}
            >
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F2E9D8]/90">
                <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
                The House
              </p>
            </div>

            {/* Cycling headlines */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              {textCycles.map((text, cycleIndex) => {
                const cycleStart = cycleIndex / textCycles.length;
                const cycleEnd = (cycleIndex + 1) / textCycles.length;
                const words = text.split(" ");

                return (
                  <h2
                    key={cycleIndex}
                    className="absolute max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#F2E9D8] sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    {words.map((word, wordIndex) => {
                      let wordOpacity = 0;
                      let wordBlur = 40;

                        if (
                          scrollProgress >= cycleStart &&
                          scrollProgress < cycleEnd
                        ) {
                          const localProgress =
                            (scrollProgress - cycleStart) /
                            (cycleEnd - cycleStart);

                          // First third: words fade in
                          if (localProgress < 0.35) {
                            const appearProgress =
                              (localProgress / 0.35) * (words.length + 1);
                            const wordAppearProgress = Math.max(
                              0,
                              Math.min(1, appearProgress - wordIndex)
                            );
                            wordOpacity = wordAppearProgress;
                            wordBlur = (1 - wordAppearProgress) * 40;
                          }
                          // Hold: headline stays fully readable
                          else if (localProgress < 0.72) {
                            wordOpacity = 1;
                            wordBlur = 0;
                          }
                          // Final stretch: words fade out
                          else {
                            const disappearProgress =
                              ((localProgress - 0.72) / 0.28) * (words.length + 1);
                            const wordDisappearProgress = Math.max(
                              0,
                              Math.min(1, disappearProgress - wordIndex)
                            );
                            wordOpacity = 1 - wordDisappearProgress;
                            wordBlur = wordDisappearProgress * 40;
                          }
                        }

                      return (
                        <span
                          key={wordIndex}
                          className="inline-block"
                          style={{
                            opacity: wordOpacity,
                            filter: `blur(${wordBlur}px)`,
                            transition:
                              "opacity 0.1s linear, filter 0.1s linear",
                            marginRight: "0.3em",
                          }}
                        >
                          {word}
                        </span>
                      );
                    })}
                  </h2>
                );
              })}
            </div>
          </div>

          {/* Right panel */}
          <div
            className="relative hidden overflow-hidden will-change-transform md:block"
            style={{
              width: `${sideWidth}%`,
              transform: `translateX(${sideTranslateRight}%)`,
              opacity: sideOpacity,
            }}
          >
            {sideImages
              .filter((img) => img.position === "right")
              .map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              ))}
          </div>
        </div>
      </div>

      {/* Scroll runway */}
      <div className="h-[400vh]" />

      {/* Reveal copy + CTA */}
      <div className="relative overflow-hidden bg-ink px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <ScrollRevealText text={heritageCopy} />
          <div className="mt-10 opacity-100 transition-opacity">
            <Link
              href="/the-house"
              className="inline-block border border-gold px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-foreground"
            >
              Discover The House
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
