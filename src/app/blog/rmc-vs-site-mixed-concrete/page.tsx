import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RMC vs Site-Mixed Concrete: The Complete Comparison | NIYA Blog",
  description:
    "Ready Mix Concrete vs traditional site mixing — which is better for your project? Compare quality, cost, speed, and risk to make the right decision.",
};

export default function RMCvsSiteMixedPage() {
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
            RMC vs Site-Mixed Concrete: The Complete Comparison
          </h1>
          <p className="text-stone-400 text-base leading-relaxed">
            The choice between Ready Mix Concrete and traditional site mixing affects your project quality, speed, and cost. Here&apos;s an honest comparison.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xs text-stone-500">
            <span>June 2025</span>
            <span>·</span>
            <span>6 min read</span>
            <span>·</span>
            <span>By NIYA Technical Team</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-amber-50 border-l-4 border-amber-500 px-6 py-4 rounded-r-sm mb-10">
            <p className="text-amber-800 text-sm font-semibold mb-1">Bottom Line</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              For any structural element (slabs, columns, beams), Ready Mix Concrete offers superior consistency and quality. Site mixing is only acceptable for non-structural applications like flooring, plaster backing, or temporary works.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">The Core Difference</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            <strong>Ready Mix Concrete (RMC)</strong> is manufactured at a batching plant using computerized proportioning, consistent raw materials, and quality-controlled processes — then delivered to your site via transit mixers. <strong>Site-mixed concrete</strong> is manually proportioned and mixed on-site, typically using a drum mixer.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Full Comparison</h2>
          <div className="overflow-x-auto rounded-sm border border-stone-200 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Factor</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Ready Mix (RMC)</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-amber-400">Site Mixed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Quality Consistency", "High — computerized batching", "Variable — depends on labor"],
                  ["Mix Design Accuracy", "Precise to IS 10262", "Approximate, by volume"],
                  ["Speed of Pour", "Fast — transit mixer delivers ready", "Slow — batch-by-batch"],
                  ["Labor Required", "Minimal at site", "High — mixing crew needed"],
                  ["Water Control", "Strict — measured at plant", "Often excessive (weakens concrete)"],
                  ["Large Pour Suitability", "Excellent", "Impractical"],
                  ["Wastage", "Low — order exact quantity", "High — over-mixing common"],
                  ["IS Standard Compliance", "Guaranteed by plant QC", "Difficult to verify"],
                  ["Cost Transparency", "Per m³ rate, all-in", "Hidden costs in labor + materials"],
                  ["On-site Storage", "None needed", "Raw materials storage needed"],
                ].map(([factor, rmc, site], i) => (
                  <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-bold text-stone-900">{factor}</td>
                    <td className="px-4 py-3 text-stone-600">{rmc}</td>
                    <td className="px-4 py-3 text-stone-600">{site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">The Quality Problem with Site Mixing</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The most common failure in site-mixed concrete is <strong>too much water</strong>. On a hot Bangalore afternoon, workers add extra water to make the mix more workable — this increases the water-cement ratio well beyond the IS limit, significantly reducing final strength. A mix designed for M20 can end up behaving like M10 or M15.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Other issues include: inconsistent ingredient proportions (using headpan volumes instead of weight), aggregate dust and silt contamination, and improper mixing time. None of these problems exist with a properly operated RMC plant.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">The Cost Reality</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Site mixing appears cheaper per m³ when you only count raw material costs. But the full picture includes:
          </p>
          <ul className="space-y-2 mb-6 list-disc pl-5 text-stone-600 text-sm">
            <li>Mixing crew wages and supervision</li>
            <li>Drum mixer rental or purchase + maintenance</li>
            <li>Raw material wastage (typically 10–15%)</li>
            <li>Storage space for cement, sand, and aggregate</li>
            <li>Time cost — slower pours mean longer project duration</li>
            <li>Risk of having to redo weak concrete elements</li>
          </ul>
          <p className="text-stone-600 leading-relaxed mb-8">
            When all costs are included, RMC is often cost-competitive or only marginally more expensive — with significantly better quality assurance.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mb-4">When is Site Mixing Acceptable?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">Site mixing can be used for:</p>
          <ul className="space-y-2 mb-8 list-disc pl-5 text-stone-600 text-sm">
            <li>PCC (Plain Cement Concrete) filling, leveling courses</li>
            <li>Non-structural applications: walkways, garden paths, drainage channels</li>
            <li>Very small quantities (&lt; 2 m³) where RMC delivery is impractical</li>
            <li>Remote sites with no RMC plant nearby</li>
          </ul>

          <div className="bg-stone-900 rounded-sm p-6 mb-10">
            <h3 className="text-white font-black text-lg mb-3">IS 456 Requirement</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              IS 456 : 2000 (Plain and Reinforced Concrete — Code of Practice) recommends that concrete for structural elements be produced with proper batching and quality controls. For RCC slabs, columns, and beams, Ready Mix Concrete is the standard in modern construction — not site mixing.
            </p>
          </div>

          <h2 className="text-2xl font-black text-stone-900 mb-4">Conclusion</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            For any structural concrete work in your building — slabs, columns, beams, retaining walls — Ready Mix Concrete from a quality-controlled plant is the right choice. The slightly higher apparent cost is more than offset by quality assurance, speed, and the elimination of structural risk. Site mixing belongs in the past.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-black text-stone-900 mb-1">Ready to Switch to RMC?</p>
              <p className="text-stone-600 text-sm">NIYA delivers M10–M60 grade RMC across Bangalore, Tumkur, and Mysore. Get a quote now.</p>
            </div>
            <a
              href="https://wa.me/919071957777?text=Hello%20NIYA!%20I%20want%20to%20switch%20to%20Ready%20Mix%20Concrete.%20Please%20share%20rates."
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
            <Link href="/blog/how-many-blocks-for-wall" className="group bg-white border border-stone-200 rounded-sm p-5 hover:border-amber-300 transition-colors">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Solid Blocks</p>
              <p className="font-black text-stone-900 text-sm group-hover:text-amber-700 transition-colors leading-snug">How Many Blocks Do You Need for a Wall?</p>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500 mt-2">Read <ArrowRight size={10} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
