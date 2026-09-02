"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const placeOrder = () => {
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="flex max-w-md flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel">
            <Check size={22} className="text-[#7B7166]" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-medium tracking-tight text-foreground">
            ORDER PLACED.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Thank you. Your oils are being prepared in protective, plastic-free
            packaging and will dispatch within 48 hours.
          </p>
          <Link
            href="/shop"
            className="mt-8 bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Checkout
          </p>
        </div>
        <h1 className="mt-5 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          YOUR <span className="italic text-gold">ORDER.</span>
        </h1>

        {items.length === 0 ? (
          <div className="mt-14 flex flex-col items-center border border-border px-6 py-16 text-center">
            <p className="font-display text-2xl text-foreground">
              Your bag is empty
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Discover the Pranore collection of botanical hair and body
              oils.
            </p>
            <Link
              href="/shop"
              className="mt-8 bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-12 divide-y divide-border border-y border-border">
              {items.map((item) => (
                <li key={item.slug} className="flex items-center gap-5 py-5">
                  <div className="relative h-20 w-14 flex-shrink-0 overflow-hidden bg-secondary">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg tracking-wide text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.size} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <p>Subtotal</p>
                <p>{formatPrice(subtotal)}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <p>Shipping</p>
                <p className="text-[#7B7166]">Complimentary</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Total
                </p>
                <p className="font-display text-2xl font-medium text-foreground">
                  {formatPrice(subtotal)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={placeOrder}
              className="mt-10 w-full bg-foreground px-8 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-colors hover:bg-gold hover:text-foreground"
            >
              Place Order
            </button>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Demo checkout — no payment is processed.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
