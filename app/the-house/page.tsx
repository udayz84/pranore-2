import type { Metadata } from "next";
import Link from "next/link";
import { FadeImage } from "@/components/fade-image";
import { CollectionSection } from "@/components/sections/collection-section";

export const metadata: Metadata = {
  title: "The House — PRANORE",
  description:
    "An ancient art, a contemporary house. Pranore reinterprets India's heritage of attar and perfume oils.",
};

export default function TheHousePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <FadeImage
          src="/images/pranore/pranore-indian-heritage.jpg"
          alt="India's heritage of fragrance — attar craft and botanicals"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/60 to-transparent" />
        <div className="relative z-10 px-6 pb-16 pt-40 md:px-12 md:pb-24 lg:px-20">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F2E9D8]/80">
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
            The House
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-[#F2E9D8] sm:text-5xl md:text-7xl">
            AN ANCIENT ART.
            <br />
            A <span className="italic text-gold">CONTEMPORARY</span> HOUSE.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              India has carried the art of fragrance through generations.
            </h2>
            <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-foreground/80">
              <p>
                Long before the modern perfume house, there was the attar —
                flowers, woods and spices hydro-distilled drop by drop in the
                deg and bhapka, carried in camel-skin pouches along trade
                routes, worn at weddings, offered at temples.
              </p>
              <p>
                Pranore was founded to carry that lineage forward without
                treating it as a museum piece. We work with extraordinary
                Indian botanicals — mogra gathered before dawn, Mysore
                sandalwood, Kerala vetiver, Kashmiri saffron, Assam oud — and
                compose them with a contemporary sensibility.
              </p>
              <p>
                Each fragrance is matured as a perfume oil, hand-filled in
                small batches, and presented in a flacon designed to be kept,
                not discarded.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-secondary">
              <FadeImage
                src="/images/pranore/pranore-perfume-oil-detail.jpg"
                alt="Pranore perfume oil — craftsmanship and ingredients"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Distilled with intention — perfume oils in small batches
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 pb-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              title: "BOTANICAL",
              copy: "Materials traced to Indian growers, harvests and regions — never reduced to a price list.",
            },
            {
              title: "CRAFT",
              copy: "Traditional attar knowledge composed with a modern perfumer's structure and restraint.",
            },
            {
              title: "LONGEVITY",
              copy: "Perfume oils at parfum concentration, made to linger on skin and in memory.",
            },
          ].map((principle) => (
            <div key={principle.title} className="bg-background p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7B7166]">
                {principle.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {principle.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection rail */}
      <div className="pt-16 md:pt-24">
        <CollectionSection />
      </div>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center border-t border-border pt-16 text-center md:pt-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            WEAR YOUR <span className="italic text-gold">MEMORY.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A fragrance can carry a place, a ritual, a season and a story.
          </p>
          <Link
            href="/shop"
            className="mt-8 bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-colors hover:bg-gold hover:text-foreground"
          >
            Explore The Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
