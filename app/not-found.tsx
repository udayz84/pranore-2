import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#7B7166]">
        Lost the ritual
      </p>
      <h1 className="mt-5 font-display text-6xl font-medium tracking-tight text-foreground md:text-8xl">
        404<span className="text-gold">.</span>
      </h1>
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
        The page you are looking for has drifted beyond the trail.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="border border-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Shop
        </Link>
      </div>
    </main>
  );
}
