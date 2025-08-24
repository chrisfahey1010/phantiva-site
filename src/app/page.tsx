// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--brand)] text-[var(--foreground)]">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_50%_at_50%_0%,_rgba(96,165,250,.35)_0%,_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 mix-blend-overlay [background:linear-gradient(to_bottom,_transparent,_rgba(10,16,59,.8))]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/phantiva_text.png"
              alt="Phantiva logo"
              width={512}
              height={512}
              priority
              className="h-30 w-auto"
            />
            <h1 className="mt-8 text-2xl sm:text-6xl font-semibold tracking-tight">
              Cinematic ads. <span className="text-[var(--color-accent)]">AI speed.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--color-muted)]">
              We turn wild ideas into launch-ready videos that people actually watch and share.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-3 font-medium text-[var(--brand)] hover:opacity-90"
              >
                Book a 15‑min consult
              </Link>
              <a
                href="#reels"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/5"
              >
                See demo reels
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reels */}
      <section id="reels" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-white/90">Demo reels</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "https://www.youtube-nocookie.com/embed/pcqsu0qfCnw?rel=0&modestbranding=1",
            "https://www.youtube-nocookie.com/embed/fvcjxCBV00M?rel=0&modestbranding=1",
            "https://www.youtube-nocookie.com/embed/JGCaMdbKBFQ?rel=0&modestbranding=1",
          ].map((src) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20"
            >
              <div className="relative w-full [aspect-ratio:9/16] sm:[aspect-ratio:16/9]">
                <iframe
                  src={src}
                  title="Demo reel"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-xl font-semibold text-white/90">Services</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80">
          {[
            "Concept & creative direction",
            "Generative video production",
            "Editing and motion graphics for product footage",
            "Search engine optimization for business websites",
            "Consulting for AI-first content workflows",
            "Website design and development",
          ].map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-xl font-semibold text-white/90">Process</h2>
        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80 list-decimal list-inside">
          {[
            "Discovery (goals, audience, offer, platforms, compliance)",
            "Creative sprint (script + storyboard + look refs, 48–72h)",
            "Prototype (5–15s proof or key shots for tone alignment)",
            "Production (AI gen, edit, motion, grade, audio)",
            "Package (captions, covers, CTA, variants)",
            "Launch + iterate (watch-time and save-rate led tweaks)",
          ].map((step) => (
            <li key={step} className="rounded-lg border border-white/10 bg-white/5 p-4">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-xl font-semibold text-white/90">Packages</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: "Starter",
              includes: "10–15s vertical + captions + basic cover",
              use: "MVP launch or product teaser",
            },
            {
              name: "Launch",
              includes:
                "15–30s hero + hooks + captions + covers + ad copy",
              use: "Product launch or campaign kick-off",
            },
            {
              name: "Cinematic",
              includes:
                "20–30s hero + motion graphics + bespoke grade + sound design",
              use: "Flagship creative with testing runway",
            },
          ].map((pkg) => (
            <div key={pkg.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{pkg.name}</div>
              <div className="mt-2 text-white/80">{pkg.includes}</div>
              <div className="mt-4 text-[var(--color-muted)]">{pkg.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-xl font-semibold text-white/90">Why Phantiva</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
          {[
            "AI-driven but director-led: narrative, pacing, composition come first",
            "Bilingual social chops (US + Xiaohongshu) with posting windows and nuance",
            "Legal-safety playbook for parody/brand-adjacent demos with clear disclaimers",
          ].map((d) => (
            <li key={d} className="rounded-lg border border-white/10 bg-white/5 p-4">
              {d}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center">
          <h3 className="text-2xl font-semibold">Ready to launch?</h3>
          <p className="mt-2 text-white/80">
            Small budget, big cinema. From prompt to polished - fast.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-3 font-medium text-[var(--brand)] hover:opacity-90"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
