"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { SearchDialog } from "@/components/search-dialog";
import { useCart } from "@/components/cart/cart-provider";

const navLinks = [
  { label: "SHOP", href: "/shop" },
  { label: "COLLECTION", href: "/collection" },
  { label: "THE HOUSE", href: "/the-house" },
  { label: "JOURNAL", href: "/journal" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { count, openCart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "rounded-none bg-background/85 shadow-[0_1px_0_0_var(--border),0_12px_32px_-16px_rgba(42,40,37,0.12)] backdrop-blur-md md:rounded-full"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-2 py-2 pl-5 transition-all duration-300 md:pl-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.22em] transition-colors hover:text-foreground ${
                pathname.startsWith(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <SearchDialog />
          </div>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open bag"
            className="relative text-muted-foreground transition-colors hover:text-foreground"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-foreground">
                {count}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-background px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl tracking-wide text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-6 border-t border-border pt-6">
              <SearchDialog />
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Search
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
