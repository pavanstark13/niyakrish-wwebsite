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
  Calculator,
  Star,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import QuickQuoteForm from "@/components/QuickQuoteForm";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Delivered" },
  { value: "4", label: "VSI Crusher Plants" },
  { value: "24/7", label: "Service & Support" },
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

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Sri Constructions",
    quote:
      "NIYA's Ready Mix Concrete has been consistent across all our projects. The on-time delivery and mix quality have never disappointed us. We won't use anyone else.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Civil Contractor",
    company: "Reddy Builders",
    quote:
      "The solid blocks are perfectly dimensioned every single time. Laying walls has become so much faster with NIYA blocks — minimal wastage, maximum productivity.",
    rating: 5,
  },
  {
    name: "Anand Sharma",
    role: "Site Engineer",
    company: "Sharma Infra Pvt Ltd",
    quote:
      "We use NIYA aggregates for all our road works. The gradation and cleanliness are spot on. Their bulk delivery is always on schedule — a truly reliable partner.",
    rating: 5,
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
            delivered across Bangalore, Mysore &amp; Tumkur, Karnataka.
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
              href="/calculator"
              className="inline-flex items-center gap-2 px-8 py-4 border border-amber-500/40 text-amber-300 font-semibold text-sm rounded-sm hover:border-amber-400 hover:text-amber-200 transition-all duration-200 uppercase tracking-wider"
            >
              <Calculator size={15} />
              Materials Calculator
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-stone-600 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section — animated counters */}
      <section className="bg-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust Strip */}
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
            Standards & Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { code: "IS 456", name: "Concrete Practice Code" },
              { code: "IS 10262", name: "Mix Design Standard" },
              { code: "IS 2185", name: "Solid Blocks Standard" },
              { code: "IS 383", name: "Aggregates Standard" },
              { code: "BIS", name: "Bureau of Indian Standards" },
            ].map((cert) => (
              <div key={cert.code} className="flex items-center gap-2.5 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-sm">
                <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Shield size={14} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-stone-900">{cert.code}</p>
                  <p className="text-xs text-stone-400 leading-none">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                Our Products
              </p>
              <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-4">
                What We Offer
              </h2>
              <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
                Three core products. Uncompromising quality. Every project,
                every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <ScrollReveal key={product.id} delay={i * 120} direction="up">
                  <div
                    className={`group relative p-8 rounded-sm border-2 ${product.cardBg} ${product.cardBorder} hover:shadow-xl transition-all duration-300 h-full`}
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
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-stone-800 transition-colors uppercase tracking-wider"
              >
                View All Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator CTA Banner */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="left">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-stone-800 border border-stone-700 rounded-sm p-8 lg:p-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-amber-500 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Calculator size={24} className="text-stone-900" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                    Free Tool
                  </p>
                  <h3 className="text-xl font-black text-white mb-2">
                    Not Sure How Much Material You Need?
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed max-w-lg">
                    Use our free Materials Calculator — enter your project
                    dimensions and instantly get the exact quantities of
                    concrete, blocks, and aggregates required.
                  </p>
                </div>
              </div>
              <Link
                href="/calculator"
                className="group flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
              >
                Try the Calculator
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
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
                  NIYA — supplying premium construction materials across
                  Bangalore, Mysore, and Tumkur with a promise of quality and
                  reliability in every batch.
                </p>
                <p className="text-stone-500 leading-relaxed mb-8 text-base">
                  Our state-of-the-art production facilities in Karnataka,
                  experienced workforce, and strict quality control processes
                  ensure that every product leaving our plant meets the highest
                  IS standards.
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
            </ScrollReveal>

            <ScrollReveal direction="right">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
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
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white p-8 rounded-sm border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 text-center h-full">
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                Client Stories
              </p>
              <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-stone-500 max-w-xl mx-auto text-base">
                Trusted by contractors, builders, and engineers across Bangalore,
                Mysore &amp; Tumkur, Karnataka.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="bg-stone-50 border border-stone-200 rounded-sm p-8 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-stone-600 text-sm leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                    <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-black text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-stone-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-stone-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
                Where We Deliver
              </p>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
                Service Coverage
              </h2>
              <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
                Operating from Hasige Hobli, Tumkur District — we deliver across Bangalore, Mysore, Tumkur, and the broader Karnataka region.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                city: "Bangalore",
                desc: "Full RMC, Blocks & Aggregates delivery",
                tag: "Primary Zone",
                tagColor: "bg-amber-500 text-stone-900",
                districts: ["Whitefield", "Electronic City", "Hebbal", "Kengeri", "Anekal"],
              },
              {
                city: "Tumkur",
                desc: "Home district — fastest turnaround",
                tag: "Home Base",
                tagColor: "bg-amber-500 text-stone-900",
                districts: ["Tumkur City", "Kunigal", "Tiptur", "Gubbi", "Sira"],
              },
              {
                city: "Mysore",
                desc: "RMC & Aggregates delivery",
                tag: "Active Zone",
                tagColor: "bg-stone-700 text-stone-200",
                districts: ["Mysore City", "Mandya", "Hunsur", "Nanjanagud"],
              },
              {
                city: "Rest of Karnataka",
                desc: "Bulk aggregate supply available",
                tag: "Extended",
                tagColor: "bg-stone-700 text-stone-200",
                districts: ["Hassan", "Shivamogga", "Davangere", "Chitradurga"],
              },
            ].map((zone) => (
              <ScrollReveal key={zone.city}>
                <div className="bg-stone-800 border border-stone-700 rounded-sm p-6 h-full hover:border-amber-500/50 transition-colors">
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-4 ${zone.tagColor}`}>
                    {zone.tag}
                  </span>
                  <h3 className="text-white font-black text-lg mb-2">{zone.city}</h3>
                  <p className="text-stone-400 text-sm mb-4 leading-relaxed">{zone.desc}</p>
                  <ul className="space-y-1.5">
                    {zone.districts.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-stone-500">
                        <div className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-stone-800 border border-stone-700 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Truck size={32} className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-black text-base">Not sure if we cover your area?</p>
                  <p className="text-stone-400 text-sm">Call or WhatsApp us — we'll confirm delivery availability within minutes.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919071957777?text=Hello%20NIYA!%20Do%20you%20deliver%20to%20my%20area%3F%20Please%20confirm."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-sm hover:bg-[#20bb5a] transition-all uppercase tracking-wider"
              >
                Check Delivery Area
                <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                  Get a Quote
                </p>
                <h2 className="text-3xl lg:text-5xl font-black text-stone-900 mb-6 leading-tight">
                  Need a Price?
                  <br />
                  <span className="text-amber-600">Ask via WhatsApp</span>
                </h2>
                <p className="text-stone-500 leading-relaxed mb-8 text-base">
                  Fill in your requirement and we&apos;ll instantly open a WhatsApp message pre-filled with your details. Our team responds within minutes.
                </p>

                <div className="space-y-5">
                  {[
                    { step: "1", text: "Select your product and enter approximate quantity" },
                    { step: "2", text: "Enter your site location and phone number" },
                    { step: "3", text: "Hit 'Send via WhatsApp' — your message is pre-filled" },
                    { step: "4", text: "We respond with pricing within minutes" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-400 font-black text-sm">{item.step}</span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed pt-1.5">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-sm">
                  <p className="text-amber-800 text-sm font-semibold mb-1">Why WhatsApp?</p>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    It&apos;s faster than email, easier to share photos or site details, and you get a direct line to our sales team — no forms, no waiting.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-stone-900 rounded-sm p-8 border border-stone-800">
                <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-6">
                  Quick Quote Form
                </p>
                <QuickQuoteForm />
              </div>
            </ScrollReveal>
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
          <ScrollReveal>
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
              right products and ensure timely delivery to your construction
              site.
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
