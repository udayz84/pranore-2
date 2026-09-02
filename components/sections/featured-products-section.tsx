"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { FadeImage } from "@/components/fade-image";
import { useCart } from "@/components/cart/cart-provider";
import { products, formatPrice, type Product } from "@/lib/products";

interface BentoSpec {
  product: Product;
  span: string;
}

const bentoLayout: BentoSpec[] = [
  { product: products[0], span: "col-span-2 row-span-2 md:col-span-3 md:row-span-2" },
  { product: products[1], span: "col-span-1 row-span-1 md:col-span-3 md:row-span-1" },
];

export function FeaturedProductsSection() {
  const { addItem } = useCart();

  return (
    <section id="collection" className="relative bg-background pb-24 md:pb-32">
      <div className="px-4 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                The Collection
              </p>
            </div>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl">
              OUR ESSENTIAL <span className="italic text-gold">OILS.</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:text-[#7B7166]"
          >
            View All
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="mx-auto grid w-full max-w-7xl auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-6 md:gap-4">
          {bentoLayout.map(({ product, span }, index) => (
            <article
              key={product.slug}
              className={`group relative overflow-hidden border border-border bg-secondary ${span}`}
            >
              <FadeImage
                src={product.image}
                alt={`Pranore ${product.name} — ${product.family} oil`}
                fill
                fadeDelay={index * 90}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Tone overlay for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />

              {/* Index */}
              <p className="absolute left-4 top-4 z-10 text-[10px] font-medium tracking-[0.25em] text-[#F2E9D8]/80">
                N°{product.index}
              </p>

              {/* Quick add */}
              <button
                type="button"
                onClick={() => addItem(product)}
                aria-label={`Add ${product.name} to bag`}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 translate-y-2 items-center justify-center bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-foreground group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Plus size={16} />
              </button>

              {/* Copy */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
                <span className="inline-block bg-pastel px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground">
                  {product.family}
                </span>
                <div className="mt-2.5 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-wide text-[#F2E9D8] md:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#F2E9D8]/70">
                      {product.descriptor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#F2E9D8]">
                      {formatPrice(product.price)}
                    </p>
                    <p className="mt-0.5 hidden items-center gap-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#F2E9D8]/0 transition-all duration-300 group-hover:text-[#F2E9D8] md:flex">
                      Explore <ArrowUpRight size={11} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Stretched link */}
              <Link
                href={`/product/${product.slug}`}
                aria-label={`Explore ${product.name}`}
                className="absolute inset-0 z-10"
              />
            </article>
          ))}

          {/* Fine fragrance — the next chapter */}
          <article className="group relative overflow-hidden border border-border bg-secondary col-span-1 row-span-1 md:col-span-3 md:row-span-1">
            <p className="absolute left-4 top-4 z-10 text-[10px] font-medium tracking-[0.25em] text-[#7B7166]">
              N°03
            </p>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Coming Soon
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-wide text-foreground md:text-2xl">
                FINE FRAGRANCE
              </h3>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                The next chapter
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
