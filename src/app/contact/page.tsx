"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Layers,
  Box,
  Mountain,
  CheckCircle2,
} from "lucide-react";

const productInterests = [
  { id: "rmc", icon: Layers, label: "Ready Mix Concrete" },
  { id: "blocks", icon: Box, label: "Concrete Solid Blocks" },
  { id: "aggregates", icon: Mountain, label: "Aggregates" },
  { id: "all", icon: CheckCircle2, label: "All Products" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us directly at +91 90719 57777."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Contact Us
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Ready to discuss your project requirements? Our team is here to help
            you find the right solution.
          </p>
        </div>
      </section>

      {/* Google Maps — NIYAKRISH INDUSTRIES factory & office, Hasige Hobli */}
      <div className="w-full h-64 bg-stone-800 relative overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=R2QJ%2B38+Hasige+Hobli+Karnataka+572123&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NIYAKRISH INDUSTRIES location"
        />
        <div className="absolute inset-0 bg-stone-900/20 pointer-events-none" />
      </div>

      {/* Contact Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-stone-900 mb-2">
                  NIYAKRISH INDUSTRIES
                  <br />
                  PVT LTD.
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Reach out to us for product enquiries, bulk orders, or to
                  schedule a site consultation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-stone-200">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1">
                      Location
                    </p>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      R2QJ+38, Hasige Hobli
                      <br />
                      Karnataka — 572123
                      <br />
                      Tumkur District
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-stone-200">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:niyakrishindustries@gmail.com"
                      className="text-sm text-amber-600 hover:text-amber-700 break-all"
                    >
                      niyakrishindustries@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-stone-200">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1">
                      Phone / WhatsApp
                    </p>
                    <a
                      href="tel:+919071957777"
                      className="text-sm text-amber-600 hover:text-amber-700 block"
                    >
                      +91 90719 57777
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-stone-200">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1">
                      Business Hours
                    </p>
                    <p className="text-sm text-stone-500">
                      24 Hours · 7 Days a Week
                    </p>
                    <p className="text-sm text-stone-500">365 Days a Year</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-0.5">
                      WhatsApp Us
                    </p>
                    <p className="text-sm text-stone-500">Quick replies · 24/7 available</p>
                  </div>
                </a>
              </div>

              {/* Products quick reference */}
              <div className="bg-amber-50 border border-amber-200 rounded-sm p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
                  Our Products
                </p>
                <div className="space-y-2">
                  {productInterests.slice(0, 3).map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.id}
                        className="flex items-center gap-2 text-sm text-stone-700"
                      >
                        <Icon size={13} className="text-amber-600" />
                        {p.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-stone-200 rounded-sm p-12 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-black text-stone-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    Thank you for reaching out. Our team will get back to you
                    within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        product: "",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-stone-200 rounded-sm p-8 space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-black text-stone-900 mb-1">
                      Get a Free Quote
                    </h2>
                    <p className="text-stone-500 text-sm">
                      Fill in the details below and we&apos;ll respond within
                      24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Product Required *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      >
                        <option value="">Select a product</option>
                        <option value="rmc">Ready Mix Concrete</option>
                        <option value="blocks">Concrete Solid Blocks</option>
                        <option value="aggregates">Aggregates</option>
                        <option value="multiple">Multiple Products</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 cubic meters"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, site location, delivery requirements, and any specific grade or size requirements..."
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-sm">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-colors uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-stone-400 text-center">
                    By submitting this form, you agree to be contacted by NIYA /
                    NIYAKRISH INDUSTRIES PVT LTD. regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
