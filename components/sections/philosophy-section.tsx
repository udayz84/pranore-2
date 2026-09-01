"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const titles = ["SCENT,", "ROOTED", "IN INDIA."];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [titleProgress, setTitleProgress] = useState(0);
  const [descriptionProgress, setDescriptionProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    setTitleProgress(progress);

    if (descriptionRef.current) {
      const descRect = descriptionRef.current.getBoundingClientRect();
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;

      if (descRect.top < startTrigger && descRect.top > endTrigger - descRect.height) {
        const descProgress = Math.max(
          0,
          Math.min(1, (startTrigger - descRect.top) / (startTrigger - endTrigger))
        );
        setDescriptionProgress(descProgress);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateTransforms]);

  return (
    <section id="intro" className="bg-background">
      {/* Scroll-rotated statement */}
      <div ref={sectionRef} className="relative" style={{ height: "280vh" }}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl px-4">
            <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-[#7B7166]">
              Pranore India
            </p>
            <div
              className="flex items-center justify-center pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full"
                style={{ transformStyle: "preserve-3d", minHeight: "150px" }}
              >
                {titles.map((title, index) => {
                  const isLastText = index === titles.length - 1;
                  const segmentSize = 1 / titles.length;
                  const startProgress = index * segmentSize;
                  const endProgress = (index + 1) * segmentSize;

                  let rotateX = 0;
                  let opacity = 0;

                  if (titleProgress >= startProgress && titleProgress < endProgress) {
                    const localProgress =
                      (titleProgress - startProgress) / segmentSize;
                    rotateX = (1 - localProgress) * 90;
                    opacity = localProgress;
                  } else if (titleProgress >= endProgress) {
                    if (isLastText) {
                      rotateX = 0;
                      opacity = 1;
                    } else {
                      rotateX = -90;
                      opacity = 0;
                    }
                  } else {
                    rotateX = 90;
                    opacity = 0;
                  }

                  return (
                    <h2
                      key={index}
                      className="absolute inset-0 flex items-center justify-center px-4 text-center font-display text-[13vw] font-medium leading-tight tracking-tight text-foreground sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw]"
                      style={{
                        transform: `rotateX(${rotateX}deg) translateZ(0)`,
                        opacity,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                        transition: "transform 0.25s ease-out, opacity 0.25s ease-out",
                      }}
                    >
                      {title}
                    </h2>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Word-blur brand statement */}
      <div
        ref={descriptionRef}
        className="px-6 pb-24 pt-8 md:px-12 md:pb-36 md:pt-12 lg:px-20"
      >
        <p className="mx-auto max-w-3xl text-center font-display text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl">
          {"From fragrant woods and luminous flowers to the timeless craft of attar, Pranore brings India's botanical heritage into a contemporary world."
            .split(" ")
            .map((word, index, array) => {
              const wordProgress = Math.max(
                0,
                Math.min(1, descriptionProgress * array.length - index)
              );
              const opacity = wordProgress;
              const blur = (1 - wordProgress) * 40;

              return (
                <span
                  key={index}
                  style={{
                    opacity,
                    filter: `blur(${blur}px)`,
                    transition: "opacity 0.4s ease, filter 0.4s ease",
                  }}
                >
                  {word}
                  {index < array.length - 1 ? " " : ""}
                </span>
              );
            })}
        </p>
      </div>
    </section>
  );
}
