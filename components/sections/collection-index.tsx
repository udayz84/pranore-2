"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, formatPrice } from "@/lib/products";

export function CollectionIndex() {
  return (
    <div className="border-t border-border">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/product/${product.slug}`}
          className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-border py-7 transition-colors duration-300 hover:bg-pastel/50 md:grid-cols-[90px_1fr_1fr_auto_auto] md:gap-8 md:py-9"
        >
          <span className="pl-2 text-[11px] font-medium tracking-[0.2em] text-[#7B7166] md:pl-6">
            N°{product.index}
          </span>

          <h3 className="font-display text-3xl font-medium tracking-wide text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
            {product.name}
            <span className="text-gold">.</span>
          </h3>

          <div className="hidden md:block">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {product.family}
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground/70">
              {product.descriptor}
            </p>
          </div>

          <p className="hidden text-sm font-medium text-foreground md:block">
            {formatPrice(product.price)}
          </p>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-foreground md:mr-6">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>

          {/* Hover preview */}
          <span className="pointer-events-none absolute right-[16%] top-1/2 z-20 hidden aspect-[3/4] w-28 -translate-y-1/2 rotate-3 overflow-hidden border border-border opacity-0 shadow-2xl transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100 lg:block">
            <Image
              src={product.image}
              alt={`Pranore ${product.name} attar`}
              fill
              className="object-cover"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
