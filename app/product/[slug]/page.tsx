import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AddToBagButton } from "@/components/add-to-bag-button";
import { ProductCard } from "@/components/product-card";
import { products, getProduct, formatPrice } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not Found — PRANORE" };
  return {
    title: `${product.name} — PRANORE`,
    description: `${product.name} — ${product.description}. A Pranore perfume oil attar rooted in India's botanical heritage.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const notes = [
    { label: "Top", value: product.notes.top },
    { label: "Heart", value: product.notes.heart },
    { label: "Base", value: product.notes.base },
  ];

  return (
    <main className="min-h-screen bg-background pb-24 pt-28 md:pt-36">
      {/* Back */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={13} />
            Shop
          </Link>
        </div>
      </div>

      {/* Product */}
      <div className="mt-8 px-6 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <div className="relative aspect-[3/4] overflow-hidden border border-border bg-secondary lg:sticky lg:top-28 lg:self-start">
            <Image
              src={product.image}
              alt={`Pranore ${product.name} — ${product.family} attar`}
              fill
              priority
              className="object-cover"
            />
            <p className="absolute left-5 top-5 bg-background/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur-sm">
              N°{product.index} — {product.size}
            </p>
          </div>

          {/* Detail column */}
          <div>
            <span className="inline-block bg-pastel px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
              {product.family}
            </span>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl">
              {product.name}
              <span className="text-gold">.</span>
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              {product.descriptor}
            </p>

            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-foreground/85">
              {product.longDescription}
            </p>

            {/* Olfactive notes */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-border border-y border-border">
              {notes.map((note) => (
                <div key={note.label} className="px-4 py-5 first:pl-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#7B7166]">
                    {note.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Purchase */}
            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {product.size} · Parfum
                </p>
                <p className="font-display text-3xl font-medium text-foreground">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div className="mt-5">
                <AddToBagButton product={product} />
              </div>
              <p className="mt-4 text-[11px] text-muted-foreground">
                Complimentary shipping across India · Taxes included
              </p>
            </div>

            {/* Details accordion */}
            <Accordion type="single" collapsible className="mt-12">
              <AccordionItem value="composition">
                <AccordionTrigger className="text-[11px] font-medium uppercase tracking-[0.25em] hover:no-underline">
                  Composition & Craft
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Composed in India from {product.notes.heart.toLowerCase()} at
                  the heart, layered with {product.notes.top.toLowerCase()} and
                  grounded in {product.notes.base.toLowerCase()}. Matured as a
                  perfume oil and hand-filled in small batches.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ritual">
                <AccordionTrigger className="text-[11px] font-medium uppercase tracking-[0.25em] hover:no-underline">
                  The Wearing Ritual
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Warm a drop between the fingertips, then press onto pulse
                  points — wrists, the base of the throat, behind the ears.
                  Oils bloom with body heat and linger for hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-[11px] font-medium uppercase tracking-[0.25em] hover:no-underline">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Dispatched within 48 hours in protective, plastic-free
                  packaging. Complimentary shipping across India. Unopened
                  flacons may be returned within 14 days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-24 px-6 md:mt-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              CONTINUE THE <span className="italic text-gold">RITUAL.</span>
            </h2>
            <Link
              href="/collection"
              className="group hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:text-[#7B7166] md:flex"
            >
              The Collection Index
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
