// src/app/page.tsx — Landing split selector
export default function Home() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-100">
          Rantho Accommodations
        </h1>
        <p className="mt-3 text-neutral-400 max-w-2xl">
          Choose your stay: NSFAS-aligned student rooms in Zone 2, or affordable general accommodation in Zone 1.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <a href="/student" className="group rounded-xl p-6 border border-neutral-800 bg-white/5 hover:bg-white/10 transition">
            <div className="text-neutral-100 font-semibold text-xl">Student Accommodation</div>
            <p className="text-neutral-400 mt-2">Near Capricorn TVET College. NSFAS rates. Zone 2.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
              <span>Explore</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </a>
          <a href="/general" className="group rounded-xl p-6 border border-neutral-800 bg-white/5 hover:bg-white/10 transition">
            <div className="text-neutral-100 font-semibold text-xl">General Accommodation</div>
            <p className="text-neutral-400 mt-2">Bachelor rooms with clear pricing. Zone 1.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
              <span>Explore</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
