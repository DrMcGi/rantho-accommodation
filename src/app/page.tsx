// src/app/page.tsx — Landing split selector
export default function Home() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900 via-neutral-950 to-black" />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-3xl font-bold text-neutral-100 md:text-5xl">Rantho Accommodations</h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Choose your stay: NSFAS-aligned student rooms in Zone 2, or affordable general
          accommodation in Zone 1.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="/student"
            className="group rounded-xl border border-neutral-800 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="text-xl font-semibold text-neutral-100">Student Accommodation</div>
            <p className="mt-2 text-neutral-400">
              Near Capricorn TVET College. NSFAS rates. Zone 2.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
              <span>Explore</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </a>
          <a
            href="/general"
            className="group rounded-xl border border-neutral-800 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="text-xl font-semibold text-neutral-100">General Accommodation</div>
            <p className="mt-2 text-neutral-400">Bachelor rooms with clear pricing. Zone 1.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
              <span>Explore</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
