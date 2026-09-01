import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal — PRANORE",
  description:
    "Stories from the house of Pranore — botanicals, rituals and the craft of Indian perfumery.",
};

const entries = [
  {
    tag: "Botanicals",
    date: "Aug 2026",
    title: "The Monsoon Harvest of Mogra",
    excerpt:
      "In the fields of Tamil Nadu, jasmine sambac is picked between four and seven in the morning — before the sun takes the fragrance back. A note on patience, and why dawn oil smells different.",
    image: "/images/pranore/pranore-mogra.jpg",
  },
  {
    tag: "Craft",
    date: "Jul 2026",
    title: "Deg & Bhapka: The Old Distillation",
    excerpt:
      "The traditional attar still hasn't changed in five hundred years — copper deg, bamboo receiver, water charged with petals. We spent a season learning why slow distillation matters.",
    image: "/images/pranore/pranore-perfume-oil-detail.jpg",
  },
  {
    tag: "The House",
    date: "Jun 2026",
    title: "Sandalwood: A Meditation in Wood",
    excerpt:
      "Mysore sandalwood is not an ingredient so much as a pace of life. On temples, ritual paste, and composing a fragrance that behaves like a slow breath.",
    image: "/images/pranore/pranore-botanical-detail.jpg",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Journal
            </p>
          </div>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl">
            STORIES FROM THE <span className="italic text-gold">HOUSE.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Field notes on botanicals, rituals and the craft of Indian
            perfumery.
          </p>
        </div>
      </header>

      {/* Entries */}
      <div className="mt-14 px-6 md:mt-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 md:grid-cols-3">
          {entries.map((entry) => (
            <article key={entry.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <span className="bg-pastel px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground">
                    {entry.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium leading-snug tracking-wide text-foreground">
                  {entry.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 px-6 md:mt-28 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center border-t border-border pt-14 text-center">
          <p className="font-display text-2xl italic text-foreground md:text-3xl">
            The best stories are worn, not read.
          </p>
          <Link
            href="/shop"
            className="mt-7 border border-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explore The Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
