"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice, type Product } from "@/lib/products";

export function AddToBagButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="flex w-full items-center justify-center gap-3 bg-foreground px-8 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-all hover:bg-gold hover:text-foreground sm:w-auto"
    >
      <ShoppingBag size={15} />
      Add to Bag — {formatPrice(product.price)}
    </button>
  );
}
