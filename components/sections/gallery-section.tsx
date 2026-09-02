"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeImage } from "@/components/fade-image";
import { botanicals } from "@/lib/products";

export function GallerySection() {
  return (
    <section id="botanicals" className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20">
      {/* Headline */}
      <div className="mx-auto mb-14 max-w-7xl md:mb-20">
        <div className="flex items-center gap-3">
          <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Ingredients
          </p>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
          THE BOTANICALS
          <br />
          BEHIND THE <span className="italic text-gold">RITUAL.</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Image-led column */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-secondary lg:sticky lg:top-28">
            <FadeImage
              src="/images/pranore/pranore-botanical-oils.jpg"
              alt="Botanical ingredients — amla, bhringraj, sesame and vetiver"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 bg-background/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur-sm">
              Sourced across India
            </p>
          </div>
        </div>

        {/* Typological index */}
        <div className="lg:col-span-7">
          {botanicals.map((botanical, index) => (
            <Link
              key={botanical.name}
              href={`/product/${botanical.product}`}
              className={`group flex items-center justify-between gap-6 border-t border-border py-6 transition-all duration-300 hover:bg-pastel/50 hover:pl-4 md:py-8 ${
                index === botanicals.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span className="text-[11px] font-medium tracking-[0.2em] text-[#7B7166]">
                  {botanical.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-wide text-foreground transition-colors md:text-4xl">
                    {botanical.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {botanical.origin}
                  </p>
                </div>
              </div>
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-foreground">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
