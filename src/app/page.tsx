import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Box,
  Mountain,
  Award,
  Truck,
  Users,
  Shield,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Excellence" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Premium Products" },
];

const products = [
  {
    id: "rmc",
    icon: Layers,
    title: "Ready Mix Concrete",
    description:
      "Factory-batched, consistently mixed concrete delivered fresh to your construction site. Superior strength, workability, and structural integrity for every project.",
    features: [
      "M10 to M60 grades available",
      "Consistent quality every batch",
      "On-time delivery guaranteed",
    ],
    href: "/products#rmc",
    cardBg: "bg-amber-50",
    cardBorder: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    id: "blocks",
    icon: Box,
    title: "Concrete Solid Blocks",
    description:
      "High-density, load-bearing solid concrete blocks engineered for durability. Perfect for walls, foundations, and structural applications requiring long-term performance.",
    features: [
      "High compressive strength",
      "Dimensional accuracy",
      "Thermal & sound insulation",
    ],
    href: "/products#blocks",
    cardBg: "bg-stone-50",
    cardBorder: "border-stone-200",
    iconBg: "bg-stone-200",
    iconColor: "text-stone-700",
  },
  {
    id: "aggregates",
    icon: Mountain,
    title: "Aggregates",
    description:
      "Crushed stone, gravel, and sand aggregates sourced and processed to meet the highest construction standards. The foundation of every strong structure.",
    features: [
      "Multiple size gradations",
      "Clean & dust-free material",
      "Bulk supply available",
    ],
    href: "/products#aggregates",
    cardBg: "bg-amber-50",
    cardBorder: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Quality",
    description:
      "All our products meet IS standards with rigorous quality testing at every stage of production.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Punctual delivery network ensures your project timeline is never compromised.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced engineers and technicians dedicated to providing the right product for your needs.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "Built on a foundation of trust, transparency, and long-term partnerships with our clients.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              NIYAKRISH INDUSTRIES PVT LTD.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight mb-4 leading-none">
            NIYA
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 font-light tracking-wide mb-6 max-w-2xl mx-auto">
            Building Tomorrow with{" "}
            <span className="text-amber-400 font-semibold">Precision</span>
          </p>

          <p className="text-base text-stone-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Premium Ready Mix Concrete, Concrete Solid Blocks, and Aggregates —
            the essential materials powering India&apos;s construction growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all duration-200 uppercase tracking-wider"
            >
              Explore Products
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-600 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-400 hover:text-white transition-all duration-200 uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-stone-600 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-black text-stone-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-stone-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
              Our Products
            </p>
            <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-4">
              What We Offer
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
              Three core products. Uncompromising quality. Every project, every
              time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className={`group relative p-8 rounded-sm border-2 ${product.cardBg} ${product.cardBorder} hover:shadow-xl transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 ${product.iconBg} rounded-sm flex items-center justify-center mb-6`}
                  >
                    <Icon size={22} className={product.iconColor} />
                  </div>

                  <h3 className="text-xl font-black text-stone-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-stone-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-amber-600 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-stone-800 transition-colors uppercase tracking-wider"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-6 leading-tight">
                The NIYA
                <br />
                Difference
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6 text-base">
                NIYAKRISH INDUSTRIES PVT LTD. operates under the brand name
                NIYA — a promise of quality, consistency, and reliability in
                every batch of material we produce. From large-scale
                infrastructure projects to residential construction, we are the
                trusted partner for builders across the region.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8 text-base">
                Our state-of-the-art production facilities, experienced
                workforce, and strict quality control processes ensure that
                every product leaving our plant meets the highest industry
                standards.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-colors uppercase tracking-wider"
              >
                Our Story
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-900 rounded-sm p-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center tracking-wide">
                  Quality First
                </span>
              </div>
              <div className="bg-amber-500 rounded-sm p-8 flex items-center justify-center">
                <span className="text-stone-900 font-bold text-sm text-center tracking-wide">
                  On-Time Delivery
                </span>
              </div>
              <div className="bg-stone-100 rounded-sm p-8 flex items-center justify-center">
                <span className="text-stone-900 font-bold text-sm text-center tracking-wide">
                  IS Standards
                </span>
              </div>
              <div className="bg-stone-700 rounded-sm p-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center tracking-wide">
                  Trusted Brand
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
              Why NIYA
            </p>
            <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-4">
              Built on Trust
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-base">
              Four pillars that define our commitment to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-sm border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-stone-900 rounded-sm flex items-center justify-center mx-auto mb-5">
                    <Icon size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-base font-black text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Start
            <br />
            Your Next Project?
          </h2>
          <p className="text-stone-400 text-base leading-relaxed mb-10">
            Get in touch with our team today. We&apos;ll help you select the
            right products and ensure timely delivery to your construction site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
            >
              Get a Free Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
