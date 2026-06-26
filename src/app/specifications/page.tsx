import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Specifications | NIYA Ready Mix Concrete, Blocks & Aggregates",
  description:
    "Detailed technical specifications for NIYA Ready Mix Concrete (M10–M60), Concrete Solid Blocks (4\", 6\", 8\"), and Aggregates (6mm–40mm). IS standards compliance.",
};

const rmcGrades = [
  { grade: "M10", wc: "0.65", slump: "75–100mm", use: "PCC, mass concrete, lean mix" },
  { grade: "M15", wc: "0.60", slump: "75–100mm", use: "Footings, retaining walls" },
  { grade: "M20", wc: "0.55", slump: "100–125mm", use: "Slabs, beams, columns (residential)" },
  { grade: "M25", wc: "0.50", slump: "100–125mm", use: "Slabs, beams, columns (commercial)" },
  { grade: "M30", wc: "0.45", slump: "100–125mm", use: "High-rise structures, bridges" },
  { grade: "M35", wc: "0.42", slump: "100–125mm", use: "Pre-stressed concrete, heavy loading" },
  { grade: "M40", wc: "0.40", slump: "100–125mm", use: "Industrial floors, parking decks" },
  { grade: "M45", wc: "0.38", slump: "100–125mm", use: "Heavy infrastructure" },
  { grade: "M50", wc: "0.35", slump: "75–100mm", use: "Bridges, high-rise foundations" },
  { grade: "M60", wc: "0.30", slump: "75–100mm", use: "Special structures, metro rail" },
];

const blockSpecs = [
  {
    size: "4 inch",
    dimensions: "400 × 200 × 100 mm",
    weight: "~8 kg",
    strength: "≥ 3.5 N/mm²",
    use: "Non-load-bearing partitions, internal dividing walls",
    coverage: "~12.5 blocks/m²",
  },
  {
    size: "6 inch",
    dimensions: "400 × 200 × 150 mm",
    weight: "~12 kg",
    strength: "≥ 5.0 N/mm²",
    use: "Load-bearing internal walls, boundary walls",
    coverage: "~12.5 blocks/m²",
  },
  {
    size: "8 inch",
    dimensions: "400 × 200 × 200 mm",
    weight: "~16 kg",
    strength: "≥ 7.5 N/mm²",
    use: "External load-bearing walls, heavy structural walls",
    coverage: "~12.5 blocks/m²",
  },
];

const aggregateSizes = [
  {
    size: "6mm",
    type: "Fine Aggregate / Grit",
    grading: "Passing 10mm, retained 4.75mm",
    use: "Plastering, fine concrete, gap-graded mixes",
    fi: "≤ 25%",
  },
  {
    size: "10mm",
    type: "Coarse Aggregate",
    grading: "Passing 12.5mm, retained 10mm",
    use: "Slab concrete, screed, lightweight structures",
    fi: "≤ 25%",
  },
  {
    size: "20mm",
    type: "Coarse Aggregate",
    grading: "Passing 25mm, retained 20mm",
    use: "Standard RMC, columns, beams, walls",
    fi: "≤ 25%",
  },
  {
    size: "40mm",
    type: "Coarse Aggregate",
    grading: "Passing 50mm, retained 40mm",
    use: "Mass concrete, PCC, foundations, road sub-base",
    fi: "≤ 30%",
  },
];

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-stone-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-stone-900">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-stone-700 ${j === 0 ? "font-bold text-stone-900" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SpecificationsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Technical Data</p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Product Specifications</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Complete technical data for NIYA Ready Mix Concrete, Solid Blocks, and Aggregates — all in compliance with Bureau of Indian Standards.
          </p>
        </div>
      </section>

      {/* Standards Bar */}
      <div className="bg-amber-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-center">
            {["IS 456 — Concrete Code", "IS 10262 — Mix Design", "IS 2185 — Solid Blocks", "IS 383 — Aggregates", "IS 4926 — Ready Mix Concrete"].map((s) => (
              <span key={s} className="text-xs font-bold uppercase tracking-widest text-stone-900">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* RMC Specs */}
      <section className="py-20 bg-white" id="rmc">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Ready Mix Concrete</p>
            <h2 className="text-3xl font-black text-stone-900 mb-3">Concrete Grade Specifications</h2>
            <p className="text-stone-500 text-base leading-relaxed max-w-2xl">
              All NIYA RMC is batched using computerized mix design as per IS 10262, delivered via transit mixers within the specified time window.
            </p>
          </div>

          <Table
            headers={["Grade", "Max W/C Ratio", "Target Slump", "Typical Application"]}
            rows={rmcGrades.map((g) => [g.grade, g.wc, g.slump, g.use])}
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Mix Design Standard", value: "IS 10262 : 2019" },
              { label: "Practice Code", value: "IS 456 : 2000" },
              { label: "RMC Standard", value: "IS 4926 : 2003" },
              { label: "Delivery Window", value: "< 90 min from batching" },
              { label: "Transit Mixer Capacity", value: "6 m³" },
              { label: "Min Order Quantity", value: "3 m³" },
            ].map((item) => (
              <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-sm px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{item.label}</p>
                <p className="text-base font-black text-stone-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blocks Specs */}
      <section className="py-20 bg-stone-50" id="blocks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Concrete Solid Blocks</p>
            <h2 className="text-3xl font-black text-stone-900 mb-3">Block Specifications</h2>
            <p className="text-stone-500 text-base leading-relaxed max-w-2xl">
              NIYA solid blocks are manufactured to IS 2185 Part 1 standards with consistent dimensions and high compressive strength for load-bearing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {blockSpecs.map((b) => (
              <div key={b.size} className="bg-white border border-stone-200 rounded-sm p-6">
                <div className="inline-block px-3 py-1 bg-stone-900 text-amber-400 text-xs font-black uppercase tracking-widest rounded-sm mb-4">
                  {b.size}
                </div>
                <p className="text-xl font-black text-stone-900 mb-4">{b.dimensions}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Approx. Weight</span>
                    <span className="font-bold text-stone-900">{b.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Min. Compressive Strength</span>
                    <span className="font-bold text-stone-900">{b.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Coverage</span>
                    <span className="font-bold text-stone-900">{b.coverage}</span>
                  </div>
                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-stone-500 text-xs">Recommended Use</span>
                    <p className="text-stone-700 text-xs mt-1 leading-relaxed">{b.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 rounded-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "IS Standard", value: "IS 2185 : Part 1 : 2005" },
                { label: "Mortar Joint", value: "10mm cement mortar (1:6)" },
                { label: "Water Absorption", value: "≤ 10% by mass" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{item.label}</p>
                  <p className="font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aggregates Specs */}
      <section className="py-20 bg-white" id="aggregates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Aggregates</p>
            <h2 className="text-3xl font-black text-stone-900 mb-3">Aggregate Specifications</h2>
            <p className="text-stone-500 text-base leading-relaxed max-w-2xl">
              Crushed stone aggregates from our VSI Crusher plants — processed for consistent gradation, low flakiness index, and dust-free supply.
            </p>
          </div>

          <Table
            headers={["Size", "Type", "Grading", "Typical Use", "Max Flakiness Index"]}
            rows={aggregateSizes.map((a) => [a.size, a.type, a.grading, a.use, a.fi])}
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "IS Standard", value: "IS 383 : 2016" },
              { label: "Crushing Value", value: "≤ 30%" },
              { label: "Impact Value", value: "≤ 30%" },
              { label: "Abrasion Value", value: "≤ 30% (Los Angeles)" },
              { label: "Source", value: "VSI Crusher — Durga Plant" },
              { label: "Supply Form", value: "Tipper / Bulk delivery" },
            ].map((item) => (
              <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-sm px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{item.label}</p>
                <p className="text-base font-black text-stone-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Need a Specific Grade or Mix Design?</h2>
          <p className="text-stone-400 mb-8 text-base leading-relaxed">
            Our technical team can prepare custom mix designs for special requirements — high-early strength, pump-grade, self-compacting, or waterproof concrete.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20need%20technical%20specifications%20for%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-sm rounded-sm hover:bg-[#20bb5a] transition-all uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider"
            >
              Contact Our Team
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
