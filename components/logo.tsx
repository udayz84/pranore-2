import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * PRANORE wordmark.
 * Stand-in for the supplied logo asset ("Pranore Logo-02(1).svg") until the
 * original file is dropped into /public/images/pranore/. Kept typographic and
 * restrained — replace the inner SVG here with the supplied logo path
 * (via next/image) once available.
 */
export function Logo({
  className,
  href = "/",
  tone = "dark",
}: {
  className?: string;
  href?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      aria-label="PRANORE — home"
      className={cn("group inline-flex items-baseline gap-1.5", className)}
    >
      <span
        className={cn(
          "font-display text-lg font-medium tracking-[0.32em] transition-colors",
          tone === "dark"
            ? "text-foreground"
            : "text-[#F2E9D8]"
        )}
      >
        PRANORE
      </span>
      <span
        aria-hidden="true"
        className="inline-block h-[5px] w-[5px] rotate-45 bg-gold transition-transform duration-500 group-hover:rotate-[225deg]"
      />
    </Link>
  );
}
