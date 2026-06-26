import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Aggregate Sizes: 6mm, 10mm, 20mm & 40mm Explained | NIYA Blog",
  description:
    "What is 6mm, 10mm, 20mm, and 40mm aggregate used for? Learn how to match aggregate size to your concrete mix, and why the wrong size affects strength.",
};

export default function UnderstandingAggregatesPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors text-sm mb-8">
            ← Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
            Aggregates
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Understanding Aggregate Sizes: 6mm, 10mm, 20mm &amp; 40mm Explained
          </h1>
          <p className="text-stone-400 text-base leading-relaxed">
            Choosing the right aggregate size is as important as choosing the right concrete grade. Here&apos;s what each size is actually used for.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xs text-stone-500">
            <span>June 2025</span>
            <span>·</span>
            <span>5 min read</span>
            <span>·</span>
            <span>By NIYA Technical Team</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-amber-50 border-l-4 border-amber-500 px-6 py-4 rounded-r-sm mb-10">
            <p className="text-amber-800 text-sm font-semibold mb-1">Key Principle</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The maximum aggregate size (MAS) should not exceed 1/4th of the minimum member dimension, or 3/4th of the clear spacing between reinforcement bars — whichever is smaller. For standard RCC work, <strong>20mm is the default choice</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">What is &quot;Aggregate Size&quot;?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Aggregate size refers to the nominal maximum size — meaning the sieve size through which 90–100% of the material passes. A &quot;20mm aggregate&quot; passes through a 25mm sieve and is retained on a 20mm sieve.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            At NIYA, aggregates are produced at our VSI (Vertical Shaft Impactor) crusher plant — a process that creates cubical, angular particles with low flakiness index, making them ideal for concrete production.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Size-by-Size Guide</h2>

          <div className="space-y-6 mb-10">
            {[
              {
                size: "6mm — Fine Aggregate / Grit",
                desc: "The smallest coarse aggregate. Also called grit or stone chips.",
                uses: [
                  "Plastering mix (as a coarse filler in thicker plaster coats)",
                  "Fine concrete for small precast elements",
                  "Gap-graded concrete mixes requiring very fine coarse aggregate",
                  "Tile fixing compounds",
                  "Pathway and decorative concrete",
                ],
                avoid: "Structural RCC — particles too fine to interlock effectively in high-strength mixes.",
              },
              {
                size: "10mm — Coarse Aggregate (Small)",
                desc: "Versatile mid-range size for thinner structural sections.",
                uses: [
                  "Concrete slabs less than 100mm thick",
                  "Staircase treads and landings",
                  "Precast concrete products (lintels, blocks, pavers)",
                  "Pump-grade concrete (easier to pump than 20mm)",
                  "Screeds and leveling courses",
                ],
                avoid: "Mass concrete or large foundations where 20mm or 40mm is more economical.",
              },
              {
                size: "20mm — Coarse Aggregate (Standard)",
                desc: "The workhorse of the construction industry. Default choice for 95% of structural concrete.",
                uses: [
                  "Slabs (residential, commercial, industrial)",
                  "Columns and beams (all types)",
                  "Foundations and footings",
                  "Retaining walls",
                  "Ready Mix Concrete (standard grade)",
                  "Most structural RCC elements",
                ],
                avoid: "Very thin slabs (&lt;80mm) where aggregate may bridge reinforcement. Use 10mm instead.",
              },
              {
                size: "40mm — Coarse Aggregate (Large)",
                desc: "For large-volume, non-critical structural elements where economy matters.",
                uses: [
                  "Mass concrete (dams, large foundations, leveling courses)",
                  "Plain Cement Concrete (PCC) below slabs",
                  "Road sub-base and sub-grade preparation",
                  "Large retaining walls and gravity dams",
                  "Drainage and soakpit filling",
                ],
                avoid: "Standard RCC slabs and columns — too large to flow around closely spaced reinforcement.",
              },
            ].map((item) => (
              <div key={item.size} className="bg-stone-50 border border-stone-200 rounded-sm p-6">
                <h3 className="text-lg font-black text-stone-900 mb-2">{item.size}</h3>
                <p className="text-stone-500 text-sm mb-4">{item.desc}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Best Used For</p>
                <ul className="space-y-1.5 mb-4">
                  {item.uses.map((use) => (
                    <li key={use} className="flex gap-2 text-stone-600 text-sm">
                      <span className="text-amber-500 flex-shrink-0">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-stone-400 italic">{item.avoid}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Quick Reference Table</h2>
          <div className="overflow-x-auto rounded-sm border border-stone-200 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Application</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Recommended Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard RCC slab, beam, column", "20mm"],
                  ["Thin slab (&lt;80mm), precast", "10mm"],
                  ["PCC, mass concrete, road base", "40mm"],
                  ["Plaster, fine concrete", "6mm"],
                  ["Pump-grade concrete", "10mm or 20mm"],
                  ["Foundation footings", "20mm or 40mm"],
                ].map(([app, size], i) => (
                  <tr key={app} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 text-stone-700" dangerouslySetInnerHTML={{ __html: app }} />
                    <td className="px-4 py-3 font-bold text-stone-900">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Why Aggregate Quality Matters</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Not all aggregates are equal. Key quality indicators include:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              { metric: "Flakiness Index (FI)", good: "≤ 25%", why: "Flat, flaky particles reduce concrete workability and bond strength" },
              { metric: "Crushing Value", good: "≤ 30%", why: "High crushing value means weak aggregate that breaks under load" },
              { metric: "Impact Value", good: "≤ 30%", why: "Indicates resistance to sudden impact loads" },
              { metric: "Silt / Dust Content", good: "≤ 3%", why: "Excess dust coats aggregate surface and reduces cement bond" },
            ].map((item) => (
              <li key={item.metric} className="bg-stone-50 border border-stone-200 rounded-sm p-4">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.metric} <span className="text-amber-600">(max {item.good})</span></p>
                    <p className="text-stone-500 text-xs mt-0.5">{item.why}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-stone-900 rounded-sm p-6 mb-10">
            <h3 className="text-white font-black text-lg mb-3">NIYA Aggregates — VSI Crusher Quality</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Our aggregates are produced from a Vertical Shaft Impactor (VSI) crusher — which creates cubical, well-shaped particles with low flakiness index. VSI aggregate is superior to jaw crusher aggregate for concrete use. All our aggregates comply with IS 383 : 2016.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-black text-stone-900 mb-1">Order Aggregates from NIYA</p>
              <p className="text-stone-600 text-sm">6mm, 10mm, 20mm, and 40mm aggregates in bulk — delivered across Karnataka.</p>
            </div>
            <a
              href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20need%20a%20quote%20for%20Aggregates."
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
            <Link href="/blog/rmc-vs-site-mixed-concrete" className="group bg-white border border-stone-200 rounded-sm p-5 hover:border-amber-300 transition-colors">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Ready Mix Concrete</p>
              <p className="font-black text-stone-900 text-sm group-hover:text-amber-700 transition-colors leading-snug">RMC vs Site-Mixed Concrete: The Complete Comparison</p>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500 mt-2">Read <ArrowRight size={10} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
