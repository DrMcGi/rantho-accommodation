'use client';

export default function ContactClient() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-neutral-100 md:text-3xl">Contact</h2>
      <p className="mt-2 text-neutral-400">Reach us for bookings and questions.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="tel:+27823183790"
          className="rounded-md bg-neutral-200 px-4 py-2 font-semibold text-black hover:bg-neutral-100"
        >
          Call: 082 318 3790
        </a>
        <a
          href="https://wa.me/27823183790"
          className="rounded-md bg-emerald-600 px-4 py-2 font-semibold text-black hover:bg-emerald-500"
        >
          WhatsApp
        </a>
        <a
          href="https://tymprod.nsfas.org.za/login"
          className="rounded-md bg-amber-600 px-4 py-2 font-semibold text-black hover:bg-amber-500"
        >
          NSFAS Login
        </a>
        <a
          href="https://tymprod.nsfas.org.za/properties"
          className="rounded-md border border-amber-500 px-4 py-2 text-amber-300 hover:bg-amber-500/20"
        >
          NSFAS Properties
        </a>
      </div>
    </section>
  );
}
