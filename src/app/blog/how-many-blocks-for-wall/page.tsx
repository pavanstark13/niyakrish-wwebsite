import Link from "next/link";
import { ArrowRight, MessageCircle, Calculator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Blocks Do You Need for a Wall? Formula & Calculator | NIYA Blog",
  description:
    "Step-by-step guide to calculating block quantity for any wall. Includes the exact formula, worked examples for 4\", 6\", 8\" blocks, and mortar estimates.",
};

export default function HowManyBlocksPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors text-sm mb-8">
            ← Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
            Solid Blocks
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            How Many Blocks Do You Need for a Wall? (Formula + Calculator)
          </h1>
          <p className="text-stone-400 text-base leading-relaxed">
            A practical, step-by-step guide to calculating the exact number of blocks for any wall — with worked examples and mortar material estimates.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xs text-stone-500">
            <span>June 2025</span>
            <span>·</span>
            <span>4 min read</span>
            <span>·</span>
            <span>By NIYA Technical Team</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-amber-50 border-l-4 border-amber-500 px-6 py-4 rounded-r-sm mb-10">
            <p className="text-amber-800 text-sm font-semibold mb-1">Want to Skip the Math?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Use our free <Link href="/calculator" className="underline font-bold">Materials Calculator</Link> — enter your wall dimensions, select block size, and get instant block count + mortar estimates.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">The Core Formula</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The number of blocks required depends on two things: the wall area, and the face area of each block (including mortar joints).
          </p>

          <div className="bg-stone-900 rounded-sm p-6 mb-6">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Formula</p>
            <p className="text-white font-mono text-sm leading-relaxed">
              Block Area (with joints) = (L + joint) × (H + joint)<br />
              <span className="text-stone-400">where joint = 10mm (standard mortar joint)</span><br /><br />
              Number of Blocks = Wall Area ÷ Block Area<br />
              Add 5–10% wastage
            </p>
          </div>

          <p className="text-stone-600 leading-relaxed mb-8">
            NIYA solid blocks have nominal dimensions of 400mm × 200mm (length × height). With a standard 10mm mortar joint, the effective face area per block is <strong>410mm × 210mm = 0.0861 m²</strong>, which means approximately <strong>11.6 blocks per m²</strong> of wall face area.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Block Coverage by Size</h2>
          <div className="overflow-x-auto rounded-sm border border-stone-200 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Block Size</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Nominal Dimensions</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Face Area (with joint)</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Blocks per m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4 inch", "400×200×100mm", "0.0861 m²", "~11.6 (use 12)"],
                  ["6 inch", "400×200×150mm", "0.0861 m²", "~11.6 (use 12)"],
                  ["8 inch", "400×200×200mm", "0.0861 m²", "~11.6 (use 12)"],
                ].map(([size, dims, area, count], i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-bold text-stone-900">{size}</td>
                    <td className="px-4 py-3 text-stone-600">{dims}</td>
                    <td className="px-4 py-3 text-stone-600">{area}</td>
                    <td className="px-4 py-3 text-stone-600">{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-500 text-sm mb-8 italic">
            Note: Block size (4&quot;, 6&quot;, 8&quot;) refers to the wall thickness, not the face dimensions. All sizes have the same 400×200mm face, so coverage per m² is the same for all three.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Worked Example</h2>
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 mb-10">
            <p className="font-black text-stone-900 mb-3">Problem: 8 inch wall, 10m long × 3m high, with two 1.2m × 1.0m windows</p>
            <div className="space-y-2 text-sm text-stone-600">
              <p><strong>Total wall area:</strong> 10 × 3 = 30.0 m²</p>
              <p><strong>Opening area:</strong> 2 × (1.2 × 1.0) = 2.4 m²</p>
              <p><strong>Net wall area:</strong> 30.0 − 2.4 = 27.6 m²</p>
              <p><strong>Blocks required:</strong> 27.6 × 11.6 = 320 blocks</p>
              <p><strong>Add 5% wastage:</strong> 320 × 1.05 = <strong className="text-stone-900">336 blocks</strong></p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Estimating Mortar (Cement + Sand)</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Mortar fills the 10mm joints between blocks. The volume of mortar is approximately 7.1% of total wall volume. Using a standard 1:6 (cement:sand) mix:
          </p>
          <div className="bg-stone-900 rounded-sm p-6 mb-6">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Mortar Formula</p>
            <p className="text-white font-mono text-sm leading-relaxed">
              Wall Volume = Wall Area × Wall Thickness<br />
              Mortar Wet Volume = Wall Volume × 0.071<br />
              Mortar Dry Volume = Mortar Wet × 1.33<br /><br />
              Cement (50kg bags) = Dry Volume ÷ 7 × 1440 ÷ 50<br />
              Sand (MT) = Dry Volume × 6/7 × 1600 ÷ 1000
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 mb-10">
            <p className="font-black text-stone-900 mb-3">Continuing the Example (8 inch = 200mm wall):</p>
            <div className="space-y-2 text-sm text-stone-600">
              <p><strong>Wall Volume:</strong> 27.6 m² × 0.200 m = 5.52 m³</p>
              <p><strong>Mortar Wet:</strong> 5.52 × 0.071 = 0.392 m³</p>
              <p><strong>Mortar Dry:</strong> 0.392 × 1.33 = 0.521 m³</p>
              <p><strong>Cement:</strong> 0.521 ÷ 7 × 1440 ÷ 50 = <strong className="text-stone-900">~3 bags (50kg)</strong></p>
              <p><strong>Sand:</strong> 0.521 × 6/7 × 1600 ÷ 1000 = <strong className="text-stone-900">~0.7 MT</strong></p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Forgetting to deduct openings (doors, windows) — leads to over-ordering by 10–20%",
              "Not adding wastage factor — blocks break during handling, especially corners",
              "Using gross wall area for double-skin walls without doubling block count",
              "Ordering exact quantity — always order 5–10% extra",
              "Ignoring mortar materials — many projects run short of cement mid-construction",
            ].map((mistake) => (
              <li key={mistake} className="flex gap-3 text-stone-600 text-sm">
                <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                {mistake}
              </li>
            ))}
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-black text-stone-900 mb-1">Use Our Free Block Calculator</p>
              <p className="text-stone-600 text-sm">Enter wall dimensions, block size, and openings — get instant results for blocks and mortar materials.</p>
            </div>
            <Link
              href="/calculator"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-all"
            >
              <Calculator size={14} />
              Open Calculator
            </Link>
          </div>

          <div className="mt-6 bg-stone-50 border border-stone-200 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-black text-stone-900 mb-1">Order NIYA Solid Blocks</p>
              <p className="text-stone-600 text-sm">4 inch, 6 inch, and 8 inch IS 2185 certified blocks. Delivered across Karnataka.</p>
            </div>
            <a
              href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20need%20a%20quote%20for%20Solid%20Blocks."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-bold text-sm rounded-sm hover:bg-[#20bb5a] transition-all"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </article>

      <section className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">More Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/m20-vs-m25-concrete" className="group bg-white border border-stone-200 rounded-sm p-5 hover:border-amber-300 transition-colors">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Ready Mix Concrete</p>
              <p className="font-black text-stone-900 text-sm group-hover:text-amber-700 transition-colors leading-snug">M20 vs M25 Concrete: Which Grade Should You Choose?</p>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500 mt-2">Read <ArrowRight size={10} /></span>
            </Link>
            <Link href="/blog/understanding-aggregate-sizes" className="group bg-white border border-stone-200 rounded-sm p-5 hover:border-amber-300 transition-colors">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Aggregates</p>
              <p className="font-black text-stone-900 text-sm group-hover:text-amber-700 transition-colors leading-snug">Understanding Aggregate Sizes: 6mm, 10mm, 20mm & 40mm</p>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500 mt-2">Read <ArrowRight size={10} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
