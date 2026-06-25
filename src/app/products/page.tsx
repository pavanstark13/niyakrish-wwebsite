import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Box, Mountain } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | NIYA — NIYAKRISH INDUSTRIES",
  description:
    "Explore NIYA's premium construction products: Ready Mix Concrete, Concrete Solid Blocks, and Aggregates.",
};

const products = [
  {
    id: "rmc",
    icon: Layers,
    tag: "Ready Mix Concrete",
    title: "Engineered for Strength",
    description:
      "Our Ready Mix Concrete (RMC) is manufactured at our state-of-the-art batching plant with precision control over mix design, water-cement ratio, and admixtures. Every batch is quality-tested before dispatch, ensuring the concrete that arrives at your site is ready to perform.",
    details: [
      "Available in grades M10, M15, M20, M25, M30, M35, M40, M45, M50, M55, M60",
      "Design mix as per IS 10262 & IS 456",
      "Controlled water-cement ratio for optimal strength",
      "Admixtures for improved workability & durability",
      "Computerized batching for precise proportioning",
      "Transit mixer delivery to site",
    ],
    applications: [
      "High-rise buildings & residential structures",
      "Bridges & flyovers",
      "Industrial floors & pavements",
      "Foundations & retaining walls",
      "Precast elements",
    ],
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    tagColor: "text-amber-700 bg-amber-100",
  },
  {
    id: "blocks",
    icon: Box,
    tag: "Concrete Solid Blocks",
    title: "Precision-Crafted Blocks",
    description:
      "NIYA Concrete Solid Blocks are manufactured using a vibro-compaction process, resulting in high-density blocks with consistent dimensions and superior compressive strength. These blocks offer excellent performance in load-bearing walls, partition walls, and compound walls.",
    details: [
      "Sizes: 400×200×200mm, 400×200×150mm, 400×200×100mm (custom sizes available)",
      "Compressive strength: 4 N/mm² to 10 N/mm²",
      "IS 2185 Part 1 certified",
      "Uniform shape & smooth finish",
      "Low water absorption",
      "Excellent fire & sound resistance",
    ],
    applications: [
      "Load-bearing & non-load-bearing walls",
      "Compound walls & boundary walls",
      "Commercial & industrial buildings",
      "Residential construction",
      "Landscaping & retaining structures",
    ],
    bg: "bg-stone-50",
    border: "border-stone-200",
    iconBg: "bg-stone-200",
    iconColor: "text-stone-700",
    tagColor: "text-stone-700 bg-stone-200",
  },
  {
    id: "aggregates",
    icon: Mountain,
    tag: "Aggregates",
    title: "The Foundation of Quality",
    description:
      "High-quality crushed stone aggregates, coarse aggregates, and fine aggregates sourced from carefully selected quarries. Our aggregates are cleaned, graded, and tested to meet IS standards, ensuring compatibility with all concrete mix designs and construction applications.",
    details: [
      "Coarse aggregates: 6mm, 10mm, 20mm, 40mm sizes",
      "Fine aggregates (M-sand & river sand)",
      "Crushed stone powder",
      "IS 383 compliant",
      "Low silt & clay content",
      "Bulk supply with tipper delivery",
    ],
    applications: [
      "Concrete production",
      "Road base & sub-base",
      "Drainage & filtration",
      "Landscaping & fill",
      "Railway ballast",
    ],
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    tagColor: "text-amber-700 bg-amber-100",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
            NIYA Products
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Our Products
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Premium construction materials manufactured to the highest
            standards. Built for performance. Designed to last.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="sticky top-16 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-50 border border-stone-200 rounded-sm text-sm font-semibold text-stone-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all whitespace-nowrap"
                >
                  <Icon size={14} />
                  {p.tag}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-8 bg-stone-50">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <section
              key={product.id}
              id={product.id}
              className={`py-20 scroll-mt-28 ${index % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${product.tagColor} mb-4`}
                    >
                      <Icon size={12} />
                      {product.tag}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black text-stone-900 mb-4">
                      {product.title}
                    </h2>
                    <p className="text-stone-500 leading-relaxed mb-8 text-base">
                      {product.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-sm font-black uppercase tracking-widest text-stone-900 mb-4">
                        Specifications
                      </h3>
                      <ul className="space-y-2.5">
                        {product.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2.5 text-sm text-stone-600"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-amber-600 flex-shrink-0 mt-0.5"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-colors uppercase tracking-wider"
                    >
                      Enquire Now
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                  {/* Applications Card */}
                  <div
                    className={`${product.bg} border-2 ${product.border} rounded-sm p-8 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 ${product.iconBg} rounded-sm flex items-center justify-center mb-6`}
                    >
                      <Icon size={26} className={product.iconColor} />
                    </div>

                    <h3 className="text-lg font-black text-stone-900 mb-6 uppercase tracking-wide">
                      Applications
                    </h3>
                    <ul className="space-y-3">
                      {product.applications.map((app) => (
                        <li
                          key={app}
                          className="flex items-center gap-3 text-sm text-stone-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-stone-200">
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Need custom specifications or bulk quantities? Our team
                        is ready to assist with tailored solutions for your
                        project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-stone-900 mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-stone-700 mb-8 text-base leading-relaxed">
            Our engineers will assess your project requirements and recommend
            the best product specifications.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-stone-800 transition-colors uppercase tracking-wider"
          >
            Talk to an Expert
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
