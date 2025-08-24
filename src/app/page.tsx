// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Phantiva
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          Turning wild ideas into real campaigns.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-white px-5 py-3 font-medium text-black hover:opacity-90"
          >
            Get a quote
          </a>
        </div>
      </section>
    </main>
  );
}
