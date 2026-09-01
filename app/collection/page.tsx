import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CollectionIndex } from "@/components/sections/collection-index";

export const metadata: Metadata = {
  title: "Collection — PRANORE",
  description:
    "The Pranore collection index — five attars composed around Indian botanicals.",
};

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-background pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Collection
            </p>
          </div>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl">
            THE PRANORE <span className="italic text-gold">INDEX.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Every Pranore fragrance, held to the same standard — an Indian
            botanical worth wearing for a lifetime.
          </p>
        </div>
      </header>

      {/* Index */}
      <div className="mt-14 px-6 md:mt-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <CollectionIndex />
        </div>
      </div>

      {/* Editorial strip */}
      <div className="mt-20 px-6 md:mt-28 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
            <Image
              src="/images/pranore/pranore-botanical-detail.jpg"
              alt="Pranore botanicals — the materials behind the collection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
              SCENT, ROOTED IN <span className="italic text-gold">INDIA.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              From fragrant woods and luminous flowers to the timeless craft of
              attar, Pranore brings India&apos;s botanical heritage into a
              contemporary world.
            </p>
            <Link
              href="/the-house"
              className="mt-8 inline-block border border-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Discover The House
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
