"use client";

import { useState } from "react";
import { Camera, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Plant & Process", "Products", "Delivery", "Project Sites"];

const galleryItems = [
  { id: 1, category: "Plant & Process", title: "Automated Batching Plant", desc: "State-of-the-art computerized RMC batching plant" },
  { id: 2, category: "Plant & Process", title: "Quality Testing Lab", desc: "On-site concrete cube testing and quality control" },
  { id: 3, category: "Plant & Process", title: "Raw Material Storage", desc: "Covered aggregate storage and cement silos" },
  { id: 4, category: "Plant & Process", title: "Control Room", desc: "Computerized mix design and batch control system" },
  { id: 5, category: "Products", title: "Ready Mix Concrete", desc: "M20-M40 grade concrete freshly batched" },
  { id: 6, category: "Products", title: "Solid Blocks — 8 Inch", desc: "400×200×200mm load-bearing NIYA blocks" },
  { id: 7, category: "Products", title: "Solid Blocks — 6 Inch", desc: "400×200×150mm partition wall blocks" },
  { id: 8, category: "Products", title: "20mm Aggregates", desc: "IS 383 compliant crushed stone coarse aggregate" },
  { id: 9, category: "Delivery", title: "Transit Mixer Fleet", desc: "6 m³ transit mixers serving Bangalore & Karnataka" },
  { id: 10, category: "Delivery", title: "On-Site Concrete Pour", desc: "Precision concrete delivery directly to the pour point" },
  { id: 11, category: "Delivery", title: "Block Delivery", desc: "Bulk block delivery to construction sites" },
  { id: 12, category: "Delivery", title: "Aggregate Tipper", desc: "20T tipper delivering aggregates to site" },
  { id: 13, category: "Project Sites", title: "High-Rise Foundation", desc: "M30 concrete foundation pour, Whitefield Bangalore" },
  { id: 14, category: "Project Sites", title: "Commercial Complex", desc: "Slab pour for a commercial office project, Electronic City" },
  { id: 15, category: "Project Sites", title: "Compound Wall Construction", desc: "NIYA solid blocks used for compound wall, Mysore" },
  { id: 16, category: "Project Sites", title: "Road Construction", desc: "M40 concrete road, Tumkur Road stretch" },
];

const categoryColors: Record<string, string> = {
  "Plant & Process": "from-stone-800 to-stone-900",
  "Products": "from-amber-900 to-stone-900",
  "Delivery": "from-stone-700 to-stone-900",
  "Project Sites": "from-amber-800 to-stone-900",
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);
  const lightboxItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Our Work</p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Gallery</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            A look inside NIYA — our plant, products, delivery operations, and construction projects across Bangalore, Mysore &amp; Tumkur.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-sm text-sm font-semibold transition-all ${active === cat ? "bg-stone-900 text-white" : "bg-stone-50 border border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <button key={item.id} onClick={() => setLightbox(item.id)}
                className={`group relative aspect-square bg-gradient-to-br ${categoryColors[item.category]} rounded-sm overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl text-left`}>
                {/* Placeholder pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                {/* Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-500/30 transition-colors">
                    <Camera size={20} className="text-white/60 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <p className="text-white/40 text-xs text-center">Photo coming soon</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Add photos CTA */}
          <div className="mt-16 bg-stone-900 rounded-sm p-8 text-center">
            <Camera size={28} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">More Photos Coming Soon</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              We&apos;re continuously updating our gallery with project photos, plant images, and delivery shots. Want to see specific product photos or a site visit?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20would%20like%20to%20see%20photos%20of%20your%20products%20and%20plant." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-sm hover:bg-[#20bb5a] transition-all uppercase tracking-wider">
                <MessageCircle size={14} />
                Request Photos on WhatsApp
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all">
                Schedule a Plant Visit
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="bg-stone-900 rounded-sm max-w-md w-full p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-video bg-gradient-to-br ${categoryColors[lightboxItem.category]} rounded-sm flex items-center justify-center mb-6`}>
              <Camera size={48} className="text-white/30" />
            </div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{lightboxItem.category}</span>
            <h3 className="text-white font-black text-xl mt-2 mb-2">{lightboxItem.title}</h3>
            <p className="text-stone-400 text-sm mb-6">{lightboxItem.desc}</p>
            <button onClick={() => setLightbox(null)}
              className="px-6 py-2 border border-stone-700 text-stone-400 text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
