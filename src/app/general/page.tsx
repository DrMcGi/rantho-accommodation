// src/app/general/page.tsx
"use client";

import { useState } from "react";
import { fireConfetti } from "../_utils/confetti";

export default function General() {
  const [form, setForm] = useState({
    name: "",
    id: "",
    phone: "",
    altPhone: "",
    email: "",
    address: "",
    kinName: "",
    kinPhone: "",
    kinAddress: "",
    room: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [valid, setValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.id) newErrors.id = "ID is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.address) newErrors.address = "Physical address is required";
    if (!form.room) newErrors.room = "Please select a room preference";
    return newErrors;
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Rantho, I’d like to book general accommodation (Zone 1).
Name: ${form.name}
ID: ${form.id}
Phone: ${form.phone}
Alt Phone: ${form.altPhone}
Email: ${form.email}
Address: ${form.address}
Next of kin: ${form.kinName} / ${form.kinPhone} / ${form.kinAddress}
Room preference: ${form.room}
Notes: ${form.notes}`
  );
  const whatsappLink = `https://wa.me/27823183790?text=${whatsappMsg}`;

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
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-100">
        Rantho Accommodations — Seshego Zone 1
      </h2>
      <p className="text-neutral-400 mt-2">House 1243, Seshego Zone 1, Polokwane</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Rooms & pricing</div>
          <ul className="mt-3 text-neutral-400 space-y-2">
            <li>
              2 bedrooms in one house with dining room & kitchen —{" "}
              <span className="text-neutral-100 font-semibold">R1300</span> per bed
            </li>
            <li>
              1 standalone full bachelor (own restroom & bathroom) —{" "}
              <span className="text-neutral-100 font-semibold">R1200</span>
            </li>
            <li>
              5 standalone rooms (shared 2 outside toilets, 1 outside bathroom) —{" "}
              <span className="text-neutral-100 font-semibold">R850</span> each
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
              href="tel:+27823183790"
              className="px-4 py-2 rounded-md bg-neutral-200 text-black font-semibold hover:bg-neutral-100"
            >
              Call
            </a>
            <a
              href={`https://wa.me/27823183790?text=${encodeURIComponent(
                "Hello Rantho, I’d like to book general accommodation (Zone 1)."
              )}`}
              className="px-4 py-2 rounded-md bg-emerald-600 text-black font-semibold hover:bg-emerald-500"
            >
              WhatsApp (quick)
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 panel p-6 max-w-3xl">
        <div className="font-semibold text-neutral-200 mb-4">Booking form</div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full names"
              className={`input ${errors.name ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="ID"
              className={`input ${errors.id ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.id && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.id}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={`input ${errors.phone ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.phone}</p>
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
              className={`input ${errors.email ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Physical address"
              className={`input w-full ${errors.address ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.address && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.address}</p>
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
              className={`input ${errors.room ? "border-red-500 animate-shake" : ""}`}
            >
              <option value="" disabled>
                Room preference
              </option>
              <option>R1300 bed (house with dining & kitchen)</option>
              <option>R1200 standalone bachelor (own restroom & bathroom)</option>
              <option>R850 standalone (shared outside toilets & bathroom)</option>
            </select>
            {errors.room && (
              <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.room}</p>
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
            className={`px-4 py-2 rounded-md bg-emerald-600 text-black font-semibold hover:bg-emerald-500 ${
              valid ? "animate-glowPulse" : ""
            }`}
          >
            Send via WhatsApp
          </button>
          <a
            href="tel:+27823183790"
            className="px-4 py-2 rounded-md bg-neutral-200 text-black font-semibold hover:bg-neutral-100"
          >
            Call
          </a>
          <a
            href={`https://wa.me/27823183790?text=${encodeURIComponent(
              "Hello Rantho, I’d like to book general accommodation (Zone 1)."
            )}`}
            className="px-4 py-2 rounded-md border border-emerald-500 text-emerald-300 hover:bg-emerald-500/20"
          >
            WhatsApp (quick)
          </a>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          We’ll confirm availability and next steps via WhatsApp or call.
        </p>
      </form>

      <div className="mt-10 panel p-6">
        <div className="font-semibold text-neutral-200">Gallery</div>
        <p className="text-neutral-400 mt-2">Photos coming soon. Room-by-room galleries will be added.</p>
      </div>
    </section>
  );
}
