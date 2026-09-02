import Link from "next/link";
import { Logo } from "@/components/logo";
import { FooterMarquee } from "@/components/footer-marquee";

const houseLinks = [
  { label: "SHOP", href: "/shop" },
  { label: "COLLECTION", href: "/collection" },
  { label: "THE HOUSE", href: "/the-house" },
  { label: "JOURNAL", href: "/journal" },
];

export function FooterSection() {
  return (
    <footer className="bg-ink text-cream">
      {/* Cursor-reactive marquee wordmark */}
      <FooterMarquee />

      {/* Main footer */}
      <div className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A contemporary Indian wellness house — botanical hair and
              body oils rooted in the country&apos;s oil rituals, from the
              Sunday champi to the evening abhyanga.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-gold">
              Crafted in India
            </p>
          </div>

          {/* House nav */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/50">
              House
            </h4>
            <ul className="space-y-3.5">
              {houseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/50">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="mailto:care@pranore.in"
                  className="text-sm text-cream/80 transition-colors hover:text-gold"
                >
                  care@pranore.in
                </a>
              </li>
              <li className="text-sm text-cream/80">
                Mon — Sat · 10:00 — 19:00 IST
              </li>
              <li className="text-sm text-cream/80">
                Jaipur · Mumbai · Bengaluru
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-cream/50">
            2026 PRANORE. All rights reserved.
          </p>

          {/* Social placeholders */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
            >
              Pinterest
            </a>
            <a
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
