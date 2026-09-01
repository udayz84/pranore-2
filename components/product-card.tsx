"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { FadeImage } from "@/components/fade-image";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({
  product,
  aspect = "aspect-[3/4]",
}: {
  product: Product;
  aspect?: string;
}) {
  const { addItem } = useCart();

  return (
    <article className="group">
      <div className={`relative overflow-hidden border border-border bg-secondary ${aspect}`}>
        <FadeImage
          src={product.image}
          alt={`Pranore ${product.name} — ${product.family} attar`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <Link
          href={`/product/${product.slug}`}
          aria-label={`Explore ${product.name}`}
          className="absolute inset-0 z-10"
        />
        <p className="absolute left-4 top-4 z-10 text-[10px] font-medium tracking-[0.25em] text-[#F2E9D8]/80">
          N°{product.index}
        </p>
        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to bag`}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-2 items-center justify-center bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-foreground group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
        <div>
          <Link
            href={`/product/${product.slug}`}
            className="font-display text-xl font-medium tracking-wide text-foreground transition-colors hover:text-[#7B7166]"
          >
            {product.name}
          </Link>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {product.family} · {product.size}
          </p>
        </div>
        <p className="text-base font-medium text-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
