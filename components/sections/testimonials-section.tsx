import Link from "next/link";

export function TestimonialsSection() {
  return (
    <section id="lifestyle" className="bg-background">
      {/* Full-bleed ritual-of-memory video statement */}
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[21/10]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/pranore/pranore-lifestyle-oil.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/pranore-where-you-are.mp4" type="video/mp4" />
        </video>

        {/* Cinematic navy grade */}
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/40" />

        {/* Ghost devanagari — प्राण, "prana" */}
        <p
          aria-hidden="true"
          className="absolute left-1/2 top-8 -translate-x-1/2 select-none font-display text-[24vw] leading-none text-cream/[0.09] md:top-10 md:text-[12vw]"
        >
          प्राण
        </p>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-14 text-center md:pb-20">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/80">
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
            The Daily Ritual
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
          </p>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream md:text-6xl lg:text-7xl">
            ROOTED IN <span className="italic text-gold">RITUAL.</span>
          </h2>

          {/* Ornamental divider */}
          <div aria-hidden="true" className="mt-7 flex items-center gap-4">
            <span className="h-px w-14 bg-gold/60 md:w-20" />
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            <span className="h-px w-14 bg-gold/60 md:w-20" />
          </div>

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-cream/85 md:text-base">
            A Sunday champi, an evening abhyanga — small ceremonies of
            care, passed down through generations.
          </p>
          <Link
            href="/shop"
            className="mt-9 bg-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-gold hover:text-foreground"
          >
            Discover The Rituals
          </Link>
        </div>
      </div>
    </section>
  );
}
