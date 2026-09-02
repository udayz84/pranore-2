"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQuantity, removeItem } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-ink/70 backdrop-blur-[2px] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="font-display text-xl tracking-wide text-foreground">
            Your Bag{" "}
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ({items.length})
            </span>
          </p>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel">
                <span className="font-display text-2xl text-[#7B7166]">P</span>
              </div>
              <div>
                <p className="font-display text-xl text-foreground">
                  Your bag is empty
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discover the Pranore collection of botanical hair and
                  body oils.
                </p>
              </div>
              <Link
                href="/shop"
                onClick={closeCart}
                className="border border-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 py-5">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative h-28 w-20 flex-shrink-0 overflow-hidden bg-secondary"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-base tracking-wide text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.size} · {item.family}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-8 text-center text-xs tabular-nums text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Subtotal
              </p>
              <p className="font-display text-xl text-foreground">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Complimentary shipping across India. Taxes included.
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="mt-4 block bg-foreground px-6 py-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
