import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Knowledge Blog | NIYA — Concrete, Blocks & Aggregates",
  description:
    "Expert guides on Ready Mix Concrete grades, block wall construction, aggregate selection, and construction best practices from NIYA — Karnataka's trusted materials supplier.",
};

const articles = [
  {
    slug: "m20-vs-m25-concrete",
    title: "M20 vs M25 Concrete: Which Grade Should You Choose?",
    excerpt:
      "Confused between M20 and M25? Learn the difference in strength, cost, and application — and when each grade is the right choice for your project.",
    category: "Ready Mix Concrete",
    readTime: "5 min read",
    date: "June 2025",
  },
  {
    slug: "rmc-vs-site-mixed-concrete",
    title: "RMC vs Site-Mixed Concrete: The Complete Comparison",
    excerpt:
      "Is Ready Mix Concrete worth it over traditional site mixing? We break down quality, cost, speed, and risk — so you can make the right call for your project.",
    category: "Ready Mix Concrete",
    readTime: "6 min read",
    date: "June 2025",
  },
  {
    slug: "how-many-blocks-for-wall",
    title: "How Many Blocks Do You Need for a Wall? (Formula + Calculator)",
    excerpt:
      "A practical, step-by-step guide to calculating block quantity for any wall — with the exact formula, worked examples, and a link to our free calculator.",
    category: "Solid Blocks",
    readTime: "4 min read",
    date: "June 2025",
  },
  {
    slug: "understanding-aggregate-sizes",
    title: "Understanding Aggregate Sizes: 6mm, 10mm, 20mm & 40mm Explained",
    excerpt:
      "Not all aggregates are the same. Learn what each size is used for, how to match aggregate to your concrete mix, and why the wrong size affects strength.",
    category: "Aggregates",
    readTime: "5 min read",
    date: "June 2025",
  },
];

const categoryColors: Record<string, string> = {
  "Ready Mix Concrete": "bg-amber-100 text-amber-800",
  "Solid Blocks": "bg-stone-200 text-stone-800",
  "Aggregates": "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Knowledge Base</p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Construction Blog</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Practical guides on concrete grades, block construction, aggregate selection, and more — from the NIYA technical team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-white border border-stone-200 rounded-sm p-8 hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-stone-400">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="text-xs text-stone-400">{article.date}</span>
                </div>
                <h2 className="text-xl font-black text-stone-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-stone-900 rounded-sm p-8 text-center">
            <BookOpen size={28} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">More Articles Coming Soon</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              We regularly publish guides on construction best practices, material selection, and project planning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all"
            >
              Ask Our Technical Team
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
