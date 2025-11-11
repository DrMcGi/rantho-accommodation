// src/app/contact/page.tsx
export const metadata = {
  title: "Contact Rantho Accommodations",
  description:
    "Call, WhatsApp, or NSFAS booking links for Rantho Accommodations in Seshego, Polokwane.",
};

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-100">Contact</h2>
      <p className="text-neutral-400 mt-2">Reach us for bookings and questions.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="tel:+27823183790"
          className="px-4 py-2 rounded-md bg-neutral-200 text-black font-semibold hover:bg-neutral-100"
        >
          Call: 082 318 3790
        </a>
        <a
          href="https://wa.me/27823183790"
          className="px-4 py-2 rounded-md bg-emerald-600 text-black font-semibold hover:bg-emerald-500"
        >
          WhatsApp
        </a>
        <a
          href="https://tymprod.nsfas.org.za/login"
          className="px-4 py-2 rounded-md bg-amber-600 text-black font-semibold hover:bg-amber-500"
        >
          NSFAS Login
        </a>
        <a
          href="https://tymprod.nsfas.org.za/properties"
          className="px-4 py-2 rounded-md border border-amber-500 text-amber-300 hover:bg-amber-500/20"
        >
          NSFAS Properties
        </a>
      </div>
    </section>
  );
}
