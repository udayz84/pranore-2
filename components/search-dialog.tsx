"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { products, formatPrice } from "@/lib/products";

const pages = [
  { name: "Shop", href: "/shop", hint: "All attars & perfume oils" },
  { name: "Collection", href: "/collection", hint: "The Pranore index" },
  { name: "The House", href: "/the-house", hint: "Our heritage & craft" },
  { name: "Journal", href: "/journal", hint: "Stories from India" },
];

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Search size={18} />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search fragrances, botanicals, pages…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fragrances">
            {products.map((product) => (
              <CommandItem
                key={product.slug}
                value={`${product.name} ${product.family} ${product.descriptor} ${product.notes.top} ${product.notes.heart} ${product.notes.base}`}
                onSelect={() => go(`/product/${product.slug}`)}
                className="cursor-pointer"
              >
                <span className="font-display text-sm tracking-wide">
                  {product.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {product.family} · {formatPrice(product.price)}
                </span>
                <ArrowUpRight size={14} className="ml-auto text-[#7B7166]" />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.href}
                value={`${page.name} ${page.hint}`}
                onSelect={() => go(page.href)}
                className="cursor-pointer"
              >
                <span className="text-sm">{page.name}</span>
                <span className="text-xs text-muted-foreground">
                  {page.hint}
                </span>
                <ArrowUpRight size={14} className="ml-auto text-[#7B7166]" />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
