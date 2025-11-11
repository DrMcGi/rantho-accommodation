"use client";

import { useState } from "react";

export default function Student() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
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
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.room) newErrors.room = "Please select a room preference";
    return newErrors;
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Rantho, I’d like to book a student room (Zone 2).
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
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
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-100">
        Rantho Student Accommodation — Seshego Zone 2
      </h2>
      <p className="text-neutral-400 mt-2">
        House no 2121, 8 Ramahlale Avenue, Seshego Zone 2, Polokwane
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Amenities</div>
          <ul className="mt-3 text-neutral-400 space-y-1">
            <li>Near Capricorn TVET College</li>
            <li>Near Seshego Crossing and Seshego Plaza</li>
            <li>Near Seshego Hospital</li>
            <li>Near Seshego Police Station</li>
          </ul>

          <div className="font-semibold text-neutral-200 mt-6">Rooms overview</div>
          <ul className="mt-3 text-neutral-400 space-y-1">
            <li>7 bachelor rooms; unisex</li>
            <li>3 rooms in one house (1 bathroom, 1 restroom, 1 kitchen)</li>
            <li>4 standalone rooms sharing 1 kitchen; 1 restroom per 2 bedrooms</li>
            <li>2 bathrooms total, 3 restrooms total</li>
            <li>All @ NSFAS Rates</li>
          </ul>
        </div>

        <div className="panel p-6">
          <div className="font-semibold text-neutral-200">Booking</div>
          <p className="mt-2 text-neutral-400">
            Please book via NSFAS first. Alternatively, contact us directly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
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
            <a
              href="tel:+27823183790"
              className="px-4 py-2 rounded-md bg-neutral-200 text-black font-semibold hover:bg-neutral-100"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      {/* Fallback form for WhatsApp */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 panel p-6 max-w-3xl"
      >
        <div className="font-semibold text-neutral-200 mb-4">Fallback booking form</div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full names"
              className={`input ${errors.name ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={`input ${errors.phone ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`input ${errors.email ? "border-red-500 animate-shake" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.email}</p>}
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
              <option>Shared house room</option>
              <option>Standalone bachelor room</option>
            </select>
            {errors.room && <p className="text-red-500 text-xs animate-fadeIn mt-1">{errors.room}</p>}
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
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Clicking “Send via WhatsApp” will validate your details and then open WhatsApp with everything prefilled.
        </p>
      </form>

      <div className="mt-10 panel p-6">
        <div className="font-semibold text-neutral-200">Gallery</div>
        <p className="text-neutral-400 mt-2">Photos coming soon. Room-by-room galleries will be added.</p>
      </div>
    </section>
  );
}
