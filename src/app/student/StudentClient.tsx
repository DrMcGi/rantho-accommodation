'use client';

import { useState } from 'react';
import { siteConfig } from '../_config/site';
import { fireConfetti } from '../_utils/confetti';

export default function StudentClient() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    room: '',
    notes: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [valid, setValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Full name is required';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.room) newErrors.room = 'Please select a room preference';
    return newErrors;
  };

  const whatsappMsg = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I’d like to book a student room (Zone 2).
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Room preference: ${form.room}
Notes: ${form.notes}`,
  );
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappMsg}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setValid(false);
      return;
    }
    setValid(true);
    fireConfetti(80, 70);
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-neutral-100 md:text-3xl">
        {siteConfig.shortName} Student Accommodation — Seshego Zone 2
      </h2>
      <p className="mt-2 text-neutral-400">
        {siteConfig.locations.student.street}, {siteConfig.locations.student.locality}
      </p>
      <p className="mt-2 text-sm text-amber-300">
        {siteConfig.highlights.studentAccreditation} — {siteConfig.highlights.studentDistanceKm} km
        from Capricorn TVET College
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Amenities</div>
          <ul className="mt-3 space-y-1 text-neutral-400">
            <li>{siteConfig.highlights.studentAccreditation}</li>
            <li>Near Capricorn TVET College</li>
            <li>Near Seshego Crossing and Seshego Plaza</li>
            <li>Near Seshego Hospital</li>
            <li>Near Seshego Police Station</li>
          </ul>

          <div className="mt-6 font-semibold text-neutral-200">Rooms overview</div>
          <ul className="mt-3 space-y-1 text-neutral-400">
            <li>7 bachelor rooms; unisex</li>
            <li>3 rooms in one house (1 bathroom, 1 restroom, 1 kitchen)</li>
            <li>4 standalone rooms sharing 1 kitchen; 1 restroom per 2 bedrooms</li>
            <li>2 bathrooms total, 3 restrooms total</li>
            <li>All @ NSFAS Rates</li>
            <li>{siteConfig.highlights.studentDistanceKm} km from Capricorn TVET College</li>
          </ul>
        </div>

        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Booking</div>
          <p className="mt-2 text-neutral-400">
            Please book via NSFAS first. Alternatively, contact us directly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={siteConfig.nsfas.loginUrl}
              className="rounded-md bg-amber-600 px-4 py-2 font-semibold text-black hover:bg-amber-500"
            >
              NSFAS Login
            </a>
            <a
              href={siteConfig.nsfas.propertiesUrl}
              className="rounded-md border border-amber-500 px-4 py-2 text-amber-300 hover:bg-amber-500/20"
            >
              NSFAS Properties
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="rounded-md bg-neutral-200 px-4 py-2 font-semibold text-black hover:bg-neutral-100"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      {/* Inline gallery before form */}
      <div className="panel mt-10 p-6">
        <div className="font-semibold text-neutral-200">Gallery</div>
        <p className="mt-2 text-neutral-400">
          Photos coming soon. Room‑by‑room galleries will be added.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video rounded-lg border border-neutral-800 bg-white/5" />
          ))}
        </div>
      </div>

      {/* Booking form */}
      <form onSubmit={handleSubmit} className="panel mt-10 max-w-3xl p-6">
        <div className="mb-4 font-semibold text-neutral-200">Fallback booking form</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full names"
              className={`input ${errors.name ? 'animate-shake border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={`input ${errors.phone ? 'animate-shake border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`input ${errors.email ? 'animate-shake border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <select
              name="room"
              value={form.room}
              onChange={handleChange}
              className={`input ${errors.room ? 'animate-shake border-red-500' : ''}`}
            >
              <option value="" disabled>
                Room preference
              </option>
              <option>Shared house room</option>
              <option>Standalone bachelor room</option>
            </select>
            {errors.room && (
              <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.room}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes"
              className="input h-24"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            className={`rounded-md bg-emerald-600 px-4 py-2 font-semibold text-black hover:bg-emerald-500 ${
              valid ? 'animate-glowPulse' : ''
            }`}
          >
            Send via WhatsApp
          </button>
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="rounded-md bg-neutral-200 px-4 py-2 font-semibold text-black hover:bg-neutral-100"
          >
            Call
          </a>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Clicking “Send via WhatsApp” will validate your details and then open WhatsApp with
          everything prefilled.
        </p>
      </form>
    </section>
  );
}
