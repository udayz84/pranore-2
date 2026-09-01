"use client";

import { useEffect, useState } from "react";
import { PranoreSymbol } from "@/components/pranore-symbol";

const FLOW_MS = 2100; // symbol runs slowly from the top and settles
const HOLD_MS = 900; // PRANORE slightly visible, unhurried
const EXIT_MS = 500; // gentle release to the page

/**
 * Site loader — the PRANORE symbol, in flowing gold, runs slowly from the
 * top of the screen down and settles centre; PRANORE becomes slightly
 * visible; then the curtain releases to the page. No other text.
 */
export function SiteLoader() {
  const [phase, setPhase] = useState<"flow" | "exit" | "done">("flow");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const instant = setTimeout(() => {
        document.documentElement.classList.remove("pranore-loading");
        setPhase("done");
      }, 0);
      return () => clearTimeout(instant);
    }

    // Release the hero entrance + scroll lock as the page takes over
    const release = setTimeout(() => {
      document.documentElement.classList.remove("pranore-loading");
    }, FLOW_MS + HOLD_MS);

    const exit = setTimeout(() => setPhase("exit"), FLOW_MS + HOLD_MS);

    const done = setTimeout(
      () => setPhase("done"),
      FLOW_MS + HOLD_MS + EXIT_MS
    );

    return () => {
      clearTimeout(release);
      clearTimeout(exit);
      clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "exit";

  return (
    <div
      id="pranore-loader"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.05)" : "scale(1)",
        transition: `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`,
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center">
        {/* The symbol — one slow running flow from the top, gold flowing down */}
        <div className="animate-[loaderFlow_2100ms_cubic-bezier(0.32,0.72,0.16,1)_both]">
          <PranoreSymbol className="h-28 w-auto md:h-32" />
        </div>

        {/* PRANORE — only slightly visible, then the page takes over */}
        <p
          className="mt-8 flex pl-[0.42em] font-display text-xl font-medium tracking-[0.42em] text-cream opacity-0 animate-[loaderTextIn_800ms_ease_forwards]"
          style={{ animationDelay: `${FLOW_MS}ms` }}
        >
          PRANORE
        </p>
      </div>
    </div>
  );
}
