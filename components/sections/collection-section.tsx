"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { FadeImage } from "@/components/fade-image";
import { useCart } from "@/components/cart/cart-provider";
import { products, formatPrice } from "@/lib/products";

/**
 * Product rail — the collection presented as an ecommerce grid.
 * Mobile: snap carousel. Desktop: asymmetric offset grid.
 * Used on The House page; kept as the template's utilitarian catalog view.
 */
export function CollectionSection() {
  const { addItem } = useCart();

  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto mb-10 max-w-7xl md:mb-14">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              The Collection
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
              ATTARS & <span className="italic text-gold">PERFUME OILS.</span>
            </h2>
            <Link
              href="/shop"
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:text-[#7B7166]"
            >
              Shop All
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: snap carousel */}
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:hidden">
        {products.map((product) => (
          <article
            key={product.slug}
            className="group w-[72vw] flex-shrink-0 snap-center"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-border bg-secondary">
              <FadeImage
                src={product.image}
                alt={`Pranore ${product.name} attar`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Link
                href={`/product/${product.slug}`}
                aria-label={`Explore ${product.name}`}
                className="absolute inset-0 z-10"
              />
              <button
                type="button"
                onClick={() => addItem(product)}
                aria-label={`Add ${product.name} to bag`}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center bg-background/90 text-foreground backdrop-blur-sm transition-colors hover:bg-gold hover:text-foreground"
              >
                <Plus size={15} />
              </button>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-medium tracking-wide text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {product.family}
                </p>
              </div>
              <p className="text-sm font-medium text-foreground">
                {formatPrice(product.price)}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: offset grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-16 md:px-12 lg:px-20">
        {products.map((product, i) => (
          <article
            key={product.slug}
            className={`group ${i % 3 === 1 ? "md:mt-16" : ""} ${
              i > 2 ? "md:col-span-1" : ""
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-border bg-secondary">
              <FadeImage
                src={product.image}
                alt={`Pranore ${product.name} attar`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <Link
                href={`/product/${product.slug}`}
                aria-label={`Explore ${product.name}`}
                className="absolute inset-0 z-10"
              />
              <button
                type="button"
                onClick={() => addItem(product)}
                aria-label={`Add ${product.name} to bag`}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-2 items-center justify-center bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-foreground group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Plus size={16} />
              </button>
              <p className="absolute left-4 top-4 text-[10px] font-medium tracking-[0.25em] text-[#F2E9D8]/80">
                N°{product.index}
              </p>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
              <div>
                <h3 className="font-display text-xl font-medium tracking-wide text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {product.family} · {product.size}
                </p>
              </div>
              <p className="text-base font-medium text-foreground">
                {formatPrice(product.price)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
