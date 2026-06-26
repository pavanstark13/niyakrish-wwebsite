import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M20 vs M25 Concrete: Which Grade Should You Choose? | NIYA Blog",
  description:
    "Confused between M20 and M25 concrete? Learn the difference in compressive strength, water-cement ratio, cost, and when to use each grade for your construction project.",
};

export default function M20vsM25Page() {
  return (
    <>
      <section className="pt-32 pb-10 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors text-sm mb-8">
            ← Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
            Ready Mix Concrete
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            M20 vs M25 Concrete: Which Grade Should You Choose?
          </h1>
          <p className="text-stone-400 text-base leading-relaxed">
            Choosing the wrong concrete grade can affect the structural integrity of your building. Here&apos;s everything you need to know.
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">

          <div className="bg-amber-50 border-l-4 border-amber-500 px-6 py-4 rounded-r-sm mb-10">
            <p className="text-amber-800 text-sm font-semibold mb-1">Quick Answer</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              For residential construction (slabs, beams, columns), <strong>M20 is the minimum</strong> per IS 456. For commercial or multi-storey structures, use <strong>M25 or higher</strong>. When in doubt, always go one grade up.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">What Do M20 and M25 Mean?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The &quot;M&quot; stands for Mix and the number is the characteristic compressive strength in N/mm² (or MPa) at 28 days, measured on a 150mm cube sample.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3 text-stone-600 text-sm"><span className="text-amber-600 font-bold flex-shrink-0">M20:</span> 20 N/mm² compressive strength at 28 days</li>
            <li className="flex gap-3 text-stone-600 text-sm"><span className="text-amber-600 font-bold flex-shrink-0">M25:</span> 25 N/mm² compressive strength at 28 days</li>
          </ul>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-sm border border-stone-200 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Parameter</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">M20</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">M25</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Compressive Strength", "20 N/mm²", "25 N/mm²"],
                  ["Water-Cement Ratio (max)", "0.55", "0.50"],
                  ["Cement Content (approx)", "300 kg/m³", "330 kg/m³"],
                  ["IS 456 Classification", "Normal — Moderate exposure", "Normal — Severe exposure"],
                  ["Typical Cost vs M20", "—", "+8–12% premium"],
                  ["Min. cover for RCC slab", "20 mm", "25 mm"],
                ].map(([param, m20, m25], i) => (
                  <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-bold text-stone-900">{param}</td>
                    <td className="px-4 py-3 text-stone-600">{m20}</td>
                    <td className="px-4 py-3 text-stone-600">{m25}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">When to Use M20</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            M20 is the <strong>minimum grade specified by IS 456 for reinforced concrete</strong> in residential construction. It is suitable for:
          </p>
          <ul className="space-y-2 mb-8 list-disc pl-5 text-stone-600 text-sm">
            <li>Ground floor slabs of individual houses and low-rise residential buildings</li>
            <li>Footings for residential structures</li>
            <li>Internal columns and beams in low-rise buildings (G+2)</li>
            <li>Compound walls and boundary structures</li>
            <li>Areas with mild to moderate exposure conditions</li>
          </ul>

          <h2 className="text-2xl font-black text-stone-900 mb-4">When to Use M25</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            M25 is preferred — and often required by structural consultants — for:
          </p>
          <ul className="space-y-2 mb-8 list-disc pl-5 text-stone-600 text-sm">
            <li>Multi-storey residential buildings (G+3 and above)</li>
            <li>Commercial buildings, offices, and malls</li>
            <li>Basements and underground structures</li>
            <li>Columns and beams carrying heavy loads</li>
            <li>Areas with severe exposure (near coast, industrial zones, high humidity)</li>
            <li>Any project where your structural engineer specifies M25</li>
          </ul>

          <div className="bg-stone-900 rounded-sm p-6 mb-10">
            <h3 className="text-white font-black text-lg mb-3">NIYA Pro Tip</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Always follow your structural engineer&apos;s specifications. If you don&apos;t have a structural drawing, the general rule is: <strong className="text-amber-400">residential G+1 → M20, G+2 and above → M25</strong>. Using a higher grade than specified is never wrong — only lower is risky.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">The Cost Difference</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            M25 costs approximately 8–12% more than M20 per m³ due to the higher cement content and lower water-cement ratio. For a typical 1,000 sq ft residential slab requiring ~15 m³ of concrete, the cost difference is usually under ₹5,000–8,000 — a small premium for significantly better structural safety margin.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Conclusion</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            For most construction in Bangalore and Karnataka, M25 is the recommended starting point for structural elements. M20 is acceptable for low-rise residential slabs, but always check with your structural engineer before finalizing grades. With Ready Mix Concrete from NIYA, you get consistent quality — every batch computerized, every delivery on time.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-black text-stone-900 mb-1">Get M20 or M25 RMC Delivered to Your Site</p>
              <p className="text-stone-600 text-sm">Request a quote on WhatsApp — we respond within minutes.</p>
            </div>
            <a
              href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20need%20a%20quote%20for%20Ready%20Mix%20Concrete."
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
            <Link href="/blog/rmc-vs-site-mixed-concrete" className="group bg-white border border-stone-200 rounded-sm p-5 hover:border-amber-300 transition-colors">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Ready Mix Concrete</p>
              <p className="font-black text-stone-900 text-sm group-hover:text-amber-700 transition-colors leading-snug">RMC vs Site-Mixed Concrete: The Complete Comparison</p>
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
