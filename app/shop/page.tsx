import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — PRANORE",
  description:
    "Shop Pranore attars and perfume oils — Mogra, Sandalwood, Vetiver, Oud and Saffron.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Page header */}
      <header className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Shop · N°01—05
            </p>
          </div>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl">
            THE <span className="italic text-gold">COLLECTION.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Five attars, five Indian botanicals. Each composed as a perfume oil
            of parfum concentration, presented in a 12 ml flacon.
          </p>
        </div>
      </header>

      {/* Product grid */}
      <div className="mt-14 px-6 md:mt-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={product.slug} className={index === 1 ? "lg:mt-16" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
