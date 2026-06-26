import Link from "next/link";
import { ArrowRight, MapPin, Layers, Box, Mountain, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "1,00,000+", label: "m³ Concrete Poured" },
  { value: "50,00,000+", label: "Solid Blocks Supplied" },
  { value: "10+", label: "Years of Expertise" },
];

const projects = [
  {
    id: 1,
    type: "Multi-Storey Residential Tower",
    location: "Whitefield, Bangalore",
    tag: "Residential",
    tagColor: "bg-amber-100 text-amber-800",
    metrics: [
      { label: "RMC Supplied", value: "1,200 m³", icon: Layers },
      { label: "Grade Used", value: "M25 / M30", icon: CheckCircle2 },
    ],
    products: ["Ready Mix Concrete", "Aggregates"],
    highlight: "High-rise residential complex requiring consistent M30 concrete delivery across multiple pours over 8 months.",
  },
  {
    id: 2,
    type: "IT & Commercial Park",
    location: "Electronic City, Bangalore",
    tag: "Commercial",
    tagColor: "bg-stone-200 text-stone-800",
    metrics: [
      { label: "RMC Supplied", value: "2,400 m³", icon: Layers },
      { label: "Blocks Supplied", value: "45,000 pcs", icon: Box },
    ],
    products: ["Ready Mix Concrete", "Solid Blocks", "Aggregates"],
    highlight: "Large-scale commercial project with demanding M35 slab pours and internal block wall partitions across 14 months.",
  },
  {
    id: 3,
    type: "Industrial Manufacturing Plant",
    location: "Peenya Industrial Area, Bangalore",
    tag: "Industrial",
    tagColor: "bg-amber-100 text-amber-800",
    metrics: [
      { label: "RMC Supplied", value: "680 m³", icon: Layers },
      { label: "Grade Used", value: "M25 / M40", icon: CheckCircle2 },
    ],
    products: ["Ready Mix Concrete", "Aggregates"],
    highlight: "Industrial floor slab requiring M40 high-strength concrete for heavy machinery load-bearing requirements.",
  },
  {
    id: 4,
    type: "Residential Villa Complex",
    location: "Mysore, Karnataka",
    tag: "Residential",
    tagColor: "bg-amber-100 text-amber-800",
    metrics: [
      { label: "Blocks Supplied", value: "28,000 pcs", icon: Box },
      { label: "RMC Supplied", value: "180 m³", icon: Layers },
    ],
    products: ["Solid Blocks", "Ready Mix Concrete"],
    highlight: "Premium villa project in Mysore requiring precision-sized solid blocks and M20 grade concrete for foundations.",
  },
  {
    id: 5,
    type: "Concrete Road — Township Project",
    location: "Tumkur Road, Bangalore",
    tag: "Infrastructure",
    tagColor: "bg-stone-200 text-stone-800",
    metrics: [
      { label: "RMC Supplied", value: "380 m³", icon: Layers },
      { label: "Grade Used", value: "M40", icon: CheckCircle2 },
    ],
    products: ["Ready Mix Concrete", "Aggregates"],
    highlight: "Township internal road network using M40 concrete for long-lasting vehicular traffic — delivered in 3 months.",
  },
  {
    id: 6,
    type: "Government Infrastructure Project",
    location: "Tumkur, Karnataka",
    tag: "Infrastructure",
    tagColor: "bg-stone-200 text-stone-800",
    metrics: [
      { label: "RMC Supplied", value: "950 m³", icon: Layers },
      { label: "Aggregates", value: "320 MT", icon: Mountain },
    ],
    products: ["Ready Mix Concrete", "Aggregates"],
    highlight: "Critical infrastructure project requiring IS-certified M35 concrete with strict quality documentation and test reports.",
  },
];

const productIcons: Record<string, typeof Layers> = {
  "Ready Mix Concrete": Layers,
  "Solid Blocks": Box,
  "Aggregates": Mountain,
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Our Portfolio</p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Projects</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            500+ completed projects across Bangalore, Mysore &amp; Tumkur — from residential towers to highways and industrial facilities.
          </p>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-stone-900 mb-1">{s.value}</div>
                <div className="text-stone-700 text-xs font-semibold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">Featured Work</p>
              <h2 className="text-3xl lg:text-4xl font-black text-stone-900 mb-4">Projects We Have Supplied</h2>
              <p className="text-stone-500 max-w-xl mx-auto text-base">
                A selection of projects where NIYA materials were trusted to deliver structural integrity and on-time supply.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <div className="bg-white border border-stone-200 rounded-sm hover:border-amber-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Top color bar */}
                  <div className="h-1 bg-amber-500" />
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest ${project.tagColor} mb-2`}>
                          {project.tag}
                        </span>
                        <h3 className="text-lg font-black text-stone-900">{project.type}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-500 text-sm mb-4">
                      <MapPin size={13} className="text-amber-600 flex-shrink-0" />
                      {project.location}
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">{project.highlight}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((m) => {
                        const Icon = m.icon;
                        return (
                          <div key={m.label} className="bg-stone-50 border border-stone-200 rounded-sm p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Icon size={12} className="text-amber-600" />
                              <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">{m.label}</span>
                            </div>
                            <div className="text-stone-900 font-black text-sm">{m.value}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Products used */}
                    <div className="flex flex-wrap gap-2">
                      {project.products.map((p) => {
                        const Icon = productIcons[p] || CheckCircle2;
                        return (
                          <span key={p} className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-sm">
                            <Icon size={11} className="text-amber-600" />
                            {p}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note about confidentiality */}
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-sm p-5 text-center">
            <p className="text-sm text-stone-600 leading-relaxed">
              Client names are kept confidential upon request. NIYA has worked with leading builders, developers, and infrastructure companies across Karnataka.
              {" "}<Link href="/contact" className="text-amber-700 font-bold hover:text-amber-600">Contact us</Link> to discuss your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-stone-400 mb-8 text-base leading-relaxed">
            Join hundreds of builders, developers, and infrastructure companies who trust NIYA for quality materials and reliable delivery across Bangalore &amp; Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider">
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/calculator"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider">
              Calculate Materials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
