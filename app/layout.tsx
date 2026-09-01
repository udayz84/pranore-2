import React from "react"
import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CartProvider } from "@/components/cart/cart-provider"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Header } from "@/components/header"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SiteLoader } from "@/components/site-loader"
import { FooterSection } from "@/components/sections/footer-section"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT"],
});

export const metadata: Metadata = {
  title: 'PRANORE — The Art of Indian Perfumery',
  description:
    'A contemporary Indian fragrance house. Attars, perfume oils and fragrances crafted from extraordinary Indian botanicals — mogra, sandalwood, vetiver, saffron and oud.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      /* Server-rendered loading state — locks scroll + pauses the hero entrance.
         The SiteLoader removes it after hydration; suppressHydrationWarning keeps
         React calm about the post-hydration class change. */
      className="pranore-loading"
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{`#pranore-loader{display:none}html.pranore-loading{overflow:auto}`}</style>
        </noscript>
      </head>
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <SiteLoader />
        <SmoothScroll />
        <CartProvider>
          <Header />
          {children}
          <FooterSection />
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
