'use client';

import { useState } from 'react';
import { siteConfig } from '../_config/site';
import { fireConfetti } from '../_utils/confetti';

export default function GeneralClient() {
  const [form, setForm] = useState({
    name: '',
    id: '',
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    kinName: '',
    kinPhone: '',
    kinAddress: '',
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
    if (!form.id) newErrors.id = 'ID is required';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.address) newErrors.address = 'Physical address is required';
    if (!form.room) newErrors.room = 'Please select a room preference';
    return newErrors;
  };

  const whatsappMsg = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I’d like to book general accommodation (Zone 1).
Name: ${form.name}
ID: ${form.id}
Phone: ${form.phone}
Alt Phone: ${form.altPhone}
Email: ${form.email}
Address: ${form.address}
Next of kin: ${form.kinName} / ${form.kinPhone} / ${form.kinAddress}
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
    fireConfetti(100, 80);
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-neutral-100 md:text-3xl">
        {siteConfig.name} — Seshego Zone 1
      </h2>
      <p className="mt-2 text-neutral-400">
        {siteConfig.locations.general.street}, {siteConfig.locations.general.locality}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Rooms & pricing</div>
          <ul className="mt-3 space-y-2 text-neutral-400">
            <li>
              2 bedrooms in one house with dining room & kitchen —{' '}
              <span className="font-semibold text-neutral-100">R1300</span> per bed
            </li>
            <li>
              1 standalone full bachelor (own restroom & bathroom) —{' '}
              <span className="font-semibold text-neutral-100">R1200</span>
            </li>
            <li>
              5 standalone rooms (shared 2 outside toilets, 1 outside bathroom) —{' '}
              <span className="font-semibold text-neutral-100">R850</span> each
            </li>
          </ul>
        </div>

        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Booking</div>
          <p className="mt-2 text-neutral-400">
            Register via WhatsApp or call, or submit the form below.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="rounded-md bg-neutral-200 px-4 py-2 font-semibold text-black hover:bg-neutral-100"
            >
              Call
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${siteConfig.shortName}, I’d like to book general accommodation (Zone 1).`,
              )}`}
              className="rounded-md bg-emerald-600 px-4 py-2 font-semibold text-black hover:bg-emerald-500"
            >
              WhatsApp (quick)
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
        <div className="mb-4 font-semibold text-neutral-200">Booking form</div>
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
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="ID"
              className={`input ${errors.id ? 'animate-shake border-red-500' : ''}`}
            />
            {errors.id && <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.id}</p>}
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
              name="altPhone"
              value={form.altPhone}
              onChange={handleChange}
              placeholder="Alternative phone (optional)"
              className="input"
            />
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
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Physical address"
              className={`input w-full ${errors.address ? 'animate-shake border-red-500' : ''}`}
            />
            {errors.address && (
              <p className="animate-fadeIn mt-1 text-xs text-red-500">{errors.address}</p>
            )}
          </div>

          <div>
            <input
              name="kinName"
              value={form.kinName}
              onChange={handleChange}
              placeholder="Next of kin — name"
              className="input"
            />
          </div>

          <div>
            <input
              name="kinPhone"
              value={form.kinPhone}
              onChange={handleChange}
              placeholder="Next of kin — phone"
              className="input"
            />
          </div>

          <div className="md:col-span-2">
            <input
              name="kinAddress"
              value={form.kinAddress}
              onChange={handleChange}
              placeholder="Next of kin — physical address"
              className="input"
            />
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
              <option>R1300 bed (house with dining & kitchen)</option>
              <option>R1200 standalone bachelor (own restroom & bathroom)</option>
              <option>R850 standalone (shared outside toilets & bathroom)</option>
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
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${siteConfig.shortName}, I’d like to book general accommodation (Zone 1).`,
            )}`}
            className="rounded-md border border-emerald-500 px-4 py-2 text-emerald-300 hover:bg-emerald-500/20"
          >
            WhatsApp (quick)
          </a>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          We’ll confirm availability and next steps via WhatsApp or call.
        </p>
      </form>
    </section>
  );
}
