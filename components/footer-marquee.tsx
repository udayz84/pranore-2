"use client";

import { useEffect, useRef } from "react";

const PHRASE = "PRANORE · PRANORE · PRANORE · PRANORE · ";

/**
 * Cursor-reactive footer wordmark.
 * The marquee keeps its infinite drift; as the pointer sweeps across,
 * nearby letters lift, swell and warm from ghost-cream toward bronze,
 * with a soft bronze spotlight tracking the cursor. Reduced-motion
 * users get the plain drifting marquee.
 */
export function FooterMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let running = false;
    let rafId: number | null = null;
    let stopTimer: ReturnType<typeof setTimeout> | null = null;
    let mouse: { x: number; y: number } | null = null;
    let wrapRect = wrap.getBoundingClientRect();

    const loop = () => {
      const letters = lettersRef.current;
      // Read phase — current on-screen positions (marquee is drifting)
      const rects = letters.map((el) =>
        el ? el.getBoundingClientRect() : null
      );

      const m = mouse;
      // Write phase — lift/warm letters near the cursor
      for (let i = 0; i < letters.length; i++) {
        const el = letters[i];
        const r = rects[i];
        if (!el) continue;
        let influence = 0;
        if (m && r) {
          influence =
            Math.max(0, 1 - Math.abs(m.x - (r.left + r.width / 2)) / 240) *
            Math.max(0, 1 - Math.abs(m.y - (r.top + r.height / 2)) / 220);
        }
        const cr = Math.round(247 + (167 - 247) * influence);
        const cg = Math.round(243 + (180 - 243) * influence);
        const cb = Math.round(236 + (154 - 236) * influence);
        const alpha = 0.07 + 0.58 * influence;
        el.style.color = `rgba(${cr}, ${cg}, ${cb}, ${alpha.toFixed(3)})`;
        el.style.transform = `translateY(${(-16 * influence).toFixed(2)}px) scale(${(
          1 +
          0.05 * influence
        ).toFixed(3)})`;
      }

      // Spotlight follows the pointer (wrap-relative)
      if (spotRef.current) {
        if (m) {
          spotRef.current.style.opacity = "1";
          spotRef.current.style.transform = `translate3d(${
            m.x - wrapRect.left - 260
          }px, ${m.y - wrapRect.top - 160}px, 0)`;
        } else {
          spotRef.current.style.opacity = "0";
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      wrapRect = wrap.getBoundingClientRect();
      if (stopTimer) {
        clearTimeout(stopTimer);
        stopTimer = null;
      }
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      mouse = null;
      stopTimer = setTimeout(() => {
        running = false;
        if (rafId != null) cancelAnimationFrame(rafId);
        rafId = null;
      }, 1000);
    };
    const onMove = (e: PointerEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    wrap.addEventListener("pointerenter", start);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", stop);

    return () => {
      wrap.removeEventListener("pointerenter", start);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", stop);
      if (rafId != null) cancelAnimationFrame(rafId);
      if (stopTimer) clearTimeout(stopTimer);
    };
  }, []);

  const renderStrip = (base: number) => (
    <p
      aria-hidden="true"
      className="whitespace-nowrap pr-4 font-display text-[16vw] font-medium leading-none tracking-[0.1em] md:pr-8 md:text-[11vw]"
    >
      {PHRASE.split("").map((char, i) => (
        <span
          key={base + i}
          ref={(el) => {
            lettersRef.current[base + i] = el;
          }}
          className="inline-block will-change-transform"
          style={{
            color: "rgba(247,243,236,0.07)",
            transition:
              "transform 0.45s cubic-bezier(0.22,1,0.36,1), color 0.45s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden border-b border-cream/10 py-10 md:py-14"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes marquee-scroll { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }`,
        }}
      />
      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[320px] w-[520px] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167,180,154,0.16) 0%, rgba(167,180,154,0.05) 45%, transparent 70%)",
        }}
      />
      {/* Drifting wordmark strips */}
      <div
        className="relative z-10 flex w-fit"
        style={{ animation: "marquee-scroll 30s linear infinite" }}
      >
        {renderStrip(0)}
        {renderStrip(PHRASE.length)}
      </div>
    </div>
  );
}
