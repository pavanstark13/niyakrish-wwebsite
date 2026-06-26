import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Factory,
  Leaf,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NIYAKRISH INDUSTRIES | Ready Mix Concrete Manufacturer Bangalore",
  description:
    "NIYAKRISH INDUSTRIES PVT LTD. — Manufacturer of Ready Mix Concrete, Solid Blocks & Aggregates in Bangalore, Karnataka. Learn our story, mission & values.",
};

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Every product we manufacture undergoes stringent quality checks. We adhere to IS standards and continuously invest in testing equipment to maintain the highest quality benchmarks.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Our customers are our partners. We listen to their needs, provide expert guidance, and go the extra mile to ensure their projects succeed with our materials.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description:
      "We operate with advanced batching plant technology, computerized mix design, and automated production processes to ensure precision and consistency.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to responsible manufacturing — minimizing waste, optimizing resource usage, and adopting eco-friendly practices wherever possible.",
  },
];

const timeline = [
  {
    year: "~2010",
    title: "Started in Aggregates",
    description:
      "NIYAKRISH INDUSTRIES began its journey in the aggregates business, supplying crushed stone and manufactured sand across Tumkur district and surrounding regions.",
  },
  {
    year: "Growth",
    title: "Expanded to 4 VSI Crusher Plants",
    description:
      "Scaled the aggregates operations to four VSI (Vertical Shaft Impactor) crusher plants across different locations, establishing a strong regional supply network.",
  },
  {
    year: "2024",
    title: "Launched Ready Mix Concrete & Block Manufacturing",
    description:
      "Leveraging over a decade of materials expertise, we commissioned a state-of-the-art RMC batching plant and solid block manufacturing unit — bringing precision-mixed concrete and IS-certified blocks to construction sites.",
  },
  {
    year: "Today",
    title: "NIYA — A Complete Construction Materials Brand",
    description:
      "Operating from our factory and office in Hasige Hobli, Tumkur District (572123), we now serve contractors, developers, and builders across Bangalore, Mysore, Tumkur, and all of Karnataka under the NIYA brand.",
  },
];

export default function AboutPage() {
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
            About NIYA
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Who We Are
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            15+ years in aggregates. 4 VSI Crusher plants. Now Karnataka&apos;s
            trusted manufacturer of Ready Mix Concrete, Solid Blocks &amp; Aggregates.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                Our Story
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-stone-900 mb-6 leading-tight">
                NIYAKRISH INDUSTRIES
                <br />
                PVT LTD.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5 text-base">
                NIYAKRISH INDUSTRIES PVT LTD. is a manufacturer of construction
                materials headquartered in{" "}
                <strong className="text-stone-800">Hasige Hobli, Tumkur District, Karnataka (572123)</strong>,
                operating under the brand name{" "}
                <strong className="text-stone-800">NIYA</strong>. We specialize
                in Ready Mix Concrete, Concrete Solid Blocks, and Aggregates —
                the three fundamental materials that form the backbone of modern
                construction.
              </p>
              <p className="text-stone-500 leading-relaxed mb-5 text-base">
                Our story started over 15 years ago in the aggregates business.
                We built our foundation running{" "}
                <strong className="text-stone-800">4 VSI Crusher plants</strong>{" "}
                across different locations, developing deep expertise in stone
                processing and supply chain logistics. In 2024, we expanded into
                Ready Mix Concrete and Solid Block manufacturing — bringing the
                same commitment to quality into these new verticals.
              </p>
              <p className="text-stone-500 leading-relaxed text-base">
                Today, NIYA serves contractors, builders, developers, and
                infrastructure companies across Bangalore, Mysore, Tumkur, and
                the broader Karnataka region — with the reliability of a
                company that has been in the materials business for over a decade.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-stone-900 rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Target size={18} className="text-stone-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Our Mission</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      To deliver premium quality construction materials that
                      empower builders to create safe, durable, and lasting
                      structures — on time, every time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500 rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Eye size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-bold mb-2">
                      Our Vision
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      To be the most trusted construction material brand in
                      Bangalore and Karnataka, recognized for quality,
                      innovation, and sustainable manufacturing practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Heart size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-bold mb-2">
                      Our Promise
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Every product that carries the NIYA name is a promise —
                      of quality, consistency, and the trust you&apos;ve placed
                      in us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
            The Brand
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-6">
            What is NIYA?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-stone-500 leading-relaxed mb-6 text-base">
              <strong className="text-stone-900">NIYA</strong> is not just a
              brand name — it is a commitment. When you see NIYA on a product,
              it means that NIYAKRISH INDUSTRIES PVT LTD. stands behind it with
              its full reputation, expertise, and guarantee of quality.
            </p>
            <p className="text-stone-500 leading-relaxed text-base">
              The NIYA brand was created to give our customers a consistent,
              recognizable mark of quality across all our product lines —
              whether they are ordering Ready Mix Concrete, Solid Blocks, or
              Aggregates. It represents our unified promise across every product
              category.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                letter: "N",
                word: "Niyakrish",
                desc: "The foundation — our company name and heritage",
              },
              {
                letter: "I",
                word: "Integrity",
                desc: "Unwavering commitment to honest, quality-first business",
              },
              {
                letter: "YA",
                word: "Your Assurance",
                desc: "Every product is a guarantee of quality you can rely on",
              },
            ].map((item) => (
              <div
                key={item.letter}
                className="bg-stone-50 border border-stone-200 rounded-sm p-8 text-center"
              >
                <div className="text-5xl font-black text-amber-500 mb-3">
                  {item.letter}
                </div>
                <h3 className="text-base font-black text-stone-900 mb-2">
                  {item.word}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-stone-900">
              Milestones
            </h2>
          </div>

          <div className="space-y-1">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-stone-300 my-2" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-black text-stone-900 mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
              Our Values
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-stone-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-stone-50 border border-stone-200 rounded-sm p-8 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-stone-900 rounded-sm flex items-center justify-center mb-5">
                    <Icon size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Want to Work with NIYA?
          </h2>
          <p className="text-stone-400 mb-8 text-base leading-relaxed">
            Whether you&apos;re a contractor, developer, or builder in Bangalore,
            Mysore, or Tumkur — we&apos;d love to be your trusted material
            supplier in Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
