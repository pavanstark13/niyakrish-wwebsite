import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
                <span className="text-stone-900 font-black text-sm">N</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white uppercase">
                  NIYA
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-2">
              NIYAKRISH INDUSTRIES PVT LTD.
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Delivering premium construction materials with precision and
              integrity since our founding.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Ready Mix Concrete", href: "/products#rmc" },
                { label: "Concrete Solid Blocks", href: "/products#blocks" },
                { label: "Aggregates", href: "/products#aggregates" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/products" },
                { label: "Contact Us", href: "/contact" },
                { label: "Get a Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-amber-500 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-stone-400 leading-relaxed">
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+91"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Contact via form
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:info@niyakrish.com"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  info@niyakrish.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} NIYAKRISH INDUSTRIES PVT LTD. All
            rights reserved.
          </p>
          <p className="text-xs text-stone-600">
            NIYA™ is a brand of NIYAKRISH INDUSTRIES PVT LTD.
          </p>
        </div>
      </div>
    </footer>
  );
}
