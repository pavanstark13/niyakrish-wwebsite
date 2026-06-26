"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, MessageCircle, ArrowRight, X } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Plant & Process", "Products", "Delivery", "Project Sites"];

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  src?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Plant & Process",
    title: "VSI Crusher — Front View",
    desc: "Durga Crusher plant showing conveyor belts, VSI unit, and 20mm aggregate stockpiles",
    src: "/gallery/crusher-plant-front.jpeg",
  },
  {
    id: 2,
    category: "Plant & Process",
    title: "Conveyor System",
    desc: "Multi-level conveyor network at our VSI crusher facility — stone moves from jaw crusher through screens to stockpiles",
    src: "/gallery/crusher-conveyor-system.jpeg",
  },
  {
    id: 3,
    category: "Plant & Process",
    title: "Plant Overview — Aerial",
    desc: "Elevated view of the complete crusher plant with aggregate stockpiles, VSI unit, and countryside surroundings",
    src: "/gallery/crusher-aerial-1.jpeg",
  },
  {
    id: 4,
    category: "Plant & Process",
    title: "Crusher Plant — Aerial 2",
    desc: "Overhead view of the VSI crusher and conveyor layout showing the full yard and stockpile arrangement",
    src: "/gallery/crusher-aerial-2.jpeg",
  },
  {
    id: 5,
    category: "Plant & Process",
    title: "Crusher — Operations Close-up",
    desc: "Close-up of the crushing and screening operations with aggregates being processed and conveyed",
    src: "/gallery/crusher-close-up.jpeg",
  },
  {
    id: 6,
    category: "Plant & Process",
    title: "Plant Wide View",
    desc: "Wide angle view of VSI crusher plant with all conveyor belts active and aggregate production in full operation",
    src: "/gallery/crusher-wide-view.jpeg",
  },
  {
    id: 7,
    category: "Products",
    title: "Ready Mix Concrete",
    desc: "M20–M40 grade RMC freshly batched and ready for delivery",
  },
  {
    id: 8,
    category: "Products",
    title: "Solid Blocks — 8 Inch",
    desc: "400×200×200mm IS 2185 certified load-bearing NIYA solid blocks",
  },
  {
    id: 9,
    category: "Products",
    title: "Solid Blocks — 6 Inch",
    desc: "400×200×150mm NIYA solid blocks for internal load-bearing walls",
  },
  {
    id: 10,
    category: "Products",
    title: "20mm Aggregates",
    desc: "IS 383 compliant crushed stone coarse aggregates from our VSI crusher plants",
  },
  {
    id: 11,
    category: "Delivery",
    title: "Transit Mixer Fleet",
    desc: "6 m³ transit mixers delivering RMC across Bangalore, Mysore & Tumkur",
  },
  {
    id: 12,
    category: "Delivery",
    title: "On-Site Concrete Pour",
    desc: "Precision concrete delivery directly to the pour point — on time, every time",
  },
  {
    id: 13,
    category: "Delivery",
    title: "Block Delivery",
    desc: "Bulk solid block delivery to construction sites across Karnataka",
  },
  {
    id: 14,
    category: "Delivery",
    title: "Aggregate Tipper",
    desc: "20T tipper delivering crushed stone aggregates to project site",
  },
  {
    id: 15,
    category: "Project Sites",
    title: "High-Rise Foundation",
    desc: "M30 concrete foundation pour, Whitefield Bangalore",
  },
  {
    id: 16,
    category: "Project Sites",
    title: "Commercial Complex",
    desc: "Slab pour for a commercial office project, Electronic City",
  },
  {
    id: 17,
    category: "Project Sites",
    title: "Compound Wall",
    desc: "NIYA solid blocks used for compound wall construction, Mysore",
  },
  {
    id: 18,
    category: "Project Sites",
    title: "Road Construction",
    desc: "M40 concrete road, Tumkur Road stretch",
  },
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
            A look inside NIYA — our crusher plants, products, delivery operations, and construction projects across Karnataka.
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
                className="group relative aspect-square rounded-sm overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl text-left bg-stone-800">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[item.category]}`} />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-500/30 transition-colors">
                        <Camera size={20} className="text-white/60 group-hover:text-amber-300 transition-colors" />
                      </div>
                      <p className="text-white/40 text-xs text-center">Photo coming soon</p>
                    </div>
                  </>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  {item.src && <p className="text-stone-300 text-xs mt-1 leading-relaxed line-clamp-2">{item.desc}</p>}
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-stone-900 rounded-sm p-8 text-center">
            <Camera size={28} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">More Photos Coming Soon</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              We&apos;re continuously updating our gallery with RMC plant photos, block manufacturing shots, and project site images. Want to see more or schedule a visit?
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
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-stone-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <X size={18} />
              Close
            </button>

            {/* Image or placeholder */}
            <div className="relative w-full rounded-sm overflow-hidden bg-stone-900"
              style={{ aspectRatio: lightboxItem.src ? "16/9" : "16/9" }}>
              {lightboxItem.src ? (
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${categoryColors[lightboxItem.category]} flex items-center justify-center`}>
                  <Camera size={64} className="text-white/20" />
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="bg-stone-900 rounded-b-sm px-6 py-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{lightboxItem.category}</span>
              <h3 className="text-white font-black text-lg mt-1">{lightboxItem.title}</h3>
              <p className="text-stone-400 text-sm mt-1 leading-relaxed">{lightboxItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
