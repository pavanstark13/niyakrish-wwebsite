"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const faqs = [
  {
    category: "Ready Mix Concrete",
    items: [
      {
        q: "What concrete grades do you supply?",
        a: "We supply a full range from M10 to M60, covering standard grades like M15, M20, M25, M30, M35, M40, and M45. All mixes are designed as per IS 10262 and IS 456. For specialty grades (self-compacting, high-performance), please contact our engineering team.",
      },
      {
        q: "What is the minimum order quantity for Ready Mix Concrete?",
        a: "Our minimum order is typically 6 cubic metres (6 m³). For smaller quantities, we recommend discussing with our team — we may be able to accommodate based on current production schedules.",
      },
      {
        q: "How far in advance should I book a concrete delivery?",
        a: "We recommend placing your order at least 24–48 hours in advance to ensure availability and scheduling of transit mixers. For large volumes (above 50 m³), 3–5 days advance booking is preferred.",
      },
      {
        q: "How long does Ready Mix Concrete remain workable after delivery?",
        a: "Our RMC is designed for a minimum workability window of 90 minutes from batching. Transit time is factored in during mix design. Admixtures can extend this on request — specify at the time of ordering.",
      },
      {
        q: "Do you provide test reports / cube test results?",
        a: "Yes. All our concrete mixes are batch-tested and we provide cube test results (7-day and 28-day compressive strength) upon request. IS certification documentation is available for all grades.",
      },
    ],
  },
  {
    category: "Concrete Solid Blocks",
    items: [
      {
        q: "What sizes of concrete solid blocks are available?",
        a: "We manufacture blocks in standard sizes: 400×200×200mm (8 inch), 400×200×150mm (6 inch), and 400×200×100mm (4 inch). Custom sizes can be arranged for bulk orders — please contact us.",
      },
      {
        q: "What is the compressive strength of NIYA solid blocks?",
        a: "Our blocks are manufactured to achieve 4 N/mm² to 10 N/mm² compressive strength, as per IS 2185 Part 1. Specific strength grades can be produced on request for load-bearing applications.",
      },
      {
        q: "What is the minimum order for solid blocks?",
        a: "Minimum order is 500 blocks. For smaller quantities, please enquire as availability may permit. Bulk orders (5,000+ blocks) receive priority production scheduling.",
      },
      {
        q: "Are NIYA blocks suitable for load-bearing walls?",
        a: "Yes. Our solid blocks are designed and tested for load-bearing applications. They are suitable for external walls, internal load-bearing walls, compound walls, and foundations as specified by your structural engineer.",
      },
    ],
  },
  {
    category: "Aggregates",
    items: [
      {
        q: "What sizes of aggregates do you supply?",
        a: "We supply coarse aggregates in 6mm, 10mm, 20mm, and 40mm sizes. Fine aggregates (M-sand and river sand where available) and crushed stone powder are also available. All material is graded to IS 383 standards.",
      },
      {
        q: "Do you supply aggregates in bulk?",
        a: "Yes. We supply aggregates in tipper loads starting from 5 metric tonnes. We can arrange 10T, 20T, and 40T tipper deliveries based on project requirements. Contact us for bulk pricing.",
      },
      {
        q: "What is the silt content of your fine aggregates?",
        a: "Our fine aggregates are processed to maintain silt content below 3%, well within IS 383 limits. Sieve analysis reports are available on request.",
      },
    ],
  },
  {
    category: "Delivery & Logistics",
    items: [
      {
        q: "What areas do you deliver to?",
        a: "We currently serve the local region and surrounding areas. Please contact us with your site address for a delivery feasibility check and to get the applicable delivery charges.",
      },
      {
        q: "What are your delivery charges?",
        a: "Delivery charges depend on distance, product type, and volume. RMC delivery is typically included within a base radius. For aggregates and blocks, charges are calculated per tonne-kilometre. Contact us for an exact quote.",
      },
      {
        q: "Do you deliver on Sundays or public holidays?",
        a: "We operate 24 hours a day, 7 days a week, 365 days a year — including Sundays and public holidays. Call +91 90719 57777 or WhatsApp us anytime to schedule a delivery.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Can I visit your plant before ordering?",
        a: "Absolutely. We welcome site visits from clients, architects, and structural engineers. Our plant operates 24/7 — call us on +91 90719 57777 to schedule a convenient visit time.",
      },
      {
        q: "What payment terms do you offer?",
        a: "We accept payment by bank transfer (NEFT/RTGS/IMPS), UPI, and cheque. For regular customers, we offer credit terms subject to an account evaluation. Please contact our accounts team.",
      },
      {
        q: "Do you offer discounts for large or long-term orders?",
        a: "Yes. We offer volume discounts for large single orders and preferential rates for long-term contracts. Please speak to our sales team to discuss a customised pricing arrangement.",
      },
      {
        q: "How do I place an order?",
        a: "You can place an order by: (1) Calling us directly at +91 90719 57777, (2) WhatsApp on the same number, (3) Emailing niyakrishindustries@gmail.com, or (4) Filling out the enquiry form on our Contact page. We'll confirm your order within a few hours.",
      },
    ],
  },
];

export default function FAQPage() {
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
            Help Centre
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Frequently Asked
            <br />
            Questions
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Everything you need to know about our products, delivery, and
            ordering process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-4 pl-1">
                  {section.category}
                </h2>
                <div className="border border-stone-800 rounded-sm px-6">
                  <FaqAccordion
                    items={section.items.map((item) => ({
                      question: item.q,
                      answer: item.a,
                    }))}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-16 bg-stone-800 border border-stone-700 rounded-sm p-8 text-center">
            <MessageCircle size={28} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">
              Still Have Questions?
            </h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              Our team is happy to answer any question not covered here. Call,
              WhatsApp, or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
              >
                Contact Us
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+919071957777"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider"
              >
                +91 90719 57777
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
