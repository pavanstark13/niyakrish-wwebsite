"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const products = [
  "Ready Mix Concrete (RMC)",
  "Concrete Solid Blocks — 4 inch",
  "Concrete Solid Blocks — 6 inch",
  "Concrete Solid Blocks — 8 inch",
  "Aggregates — 6mm",
  "Aggregates — 10mm",
  "Aggregates — 20mm",
  "Aggregates — 40mm",
  "Multiple Products",
];

export default function QuickQuoteForm() {
  const [form, setForm] = useState({
    product: "",
    quantity: "",
    unit: "m³",
    location: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qty = form.quantity ? `${form.quantity} ${form.unit}` : "Not specified";
    const msg = encodeURIComponent(
      `Hello NIYA! I need a quick quote.\n\nProduct: ${form.product || "Not specified"}\nQuantity: ${qty}\nSite Location: ${form.location || "Not specified"}\nMy Phone: ${form.phone}\n\nPlease get back to me. Thank you!`
    );
    window.open(`https://wa.me/919071957777?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-sm text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={24} className="text-[#25D366]" />
        </div>
        <p className="text-white font-bold text-lg mb-1">WhatsApp Opened!</p>
        <p className="text-stone-400 text-sm">Your enquiry details have been pre-filled. Just hit Send.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Product */}
      <div className="relative">
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
          Product Required
        </label>
        <select
          value={form.product}
          onChange={(e) => set("product", e.target.value)}
          required
          className={inputClass + " appearance-none"}
        >
          <option value="">Select a product…</option>
          {products.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Quantity + Unit */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
          Approximate Quantity
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            placeholder="e.g. 50"
            value={form.quantity}
            onChange={(e) => set("quantity", e.target.value)}
            className={inputClass + " flex-1"}
          />
          <select
            value={form.unit}
            onChange={(e) => set("unit", e.target.value)}
            className={inputClass + " w-24 appearance-none"}
          >
            <option value="m³">m³</option>
            <option value="MT">MT</option>
            <option value="pcs">pcs</option>
            <option value="bags">bags</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
          Site / Delivery Location
        </label>
        <input
          type="text"
          placeholder="e.g. Whitefield, Bangalore"
          value={form.location}
          onChange={(e) => set("location", e.target.value)}
          required
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
          Your Phone Number
        </label>
        <input
          type="tel"
          placeholder="e.g. 98765 43210"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 text-stone-900 font-black text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider mt-2"
      >
        <MessageCircle size={16} />
        Send via WhatsApp
        <ArrowRight size={14} />
      </button>

      <p className="text-xs text-stone-500 text-center">
        Opens WhatsApp with your details pre-filled. We respond within minutes.
      </p>
    </form>
  );
}
