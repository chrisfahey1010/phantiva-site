export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--brand)] text-[var(--foreground)]">
      <section className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-white/80">
          Tell us about your product, goal, and deadline. We typically reply within one business day.
        </p>

        <form
          action="mailto:phantivalabs@gmail.com"
          method="post"
          encType="text/plain"
          className="mt-8 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-white/70">
              Name
            </label>
            <input
              id="name"
              name="Name"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm text-white/70">
              Company
            </label>
            <input
              id="company"
              name="Company"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="Acme Co."
            />
          </div>
          <div>
            <label htmlFor="goal" className="block text-sm text-white/70">
              Goal
            </label>
            <input
              id="goal"
              name="Goal"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="Launch hero video and 3 variants"
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm text-white/70">
              Deadline
            </label>
            <input
              id="deadline"
              name="Deadline"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-white/70">
              Details
            </label>
            <textarea
              id="message"
              name="Details"
              rows={5}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-[var(--color-accent)]"
              placeholder="Share links, references, or constraints."
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-3 font-medium text-[var(--brand)] hover:opacity-90"
            >
              Send via email
            </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-white/60">
          Prefer a call? Book a 15‑min consult: <a className="underline" href="tel:+13868436948" aria-label="Call (386) 843-6948">(386) 843-6948</a>
        </div>
      </section>
    </main>
  );
}


