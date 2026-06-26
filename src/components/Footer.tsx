import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// Social icon components (inline SVGs so no extra dependency)
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

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
              <span className="text-xl font-black tracking-wider text-white uppercase">
                NIYA
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-2">
              NIYAKRISH INDUSTRIES PVT LTD.
            </p>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              Delivering premium construction materials with precision and
              integrity.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-600 uppercase tracking-widest">
                Follow Us
              </span>
              {/* Replace # with your actual social links */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-stone-800 border border-stone-700 rounded-sm flex items-center justify-center text-stone-500 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-stone-800 border border-stone-700 rounded-sm flex items-center justify-center text-stone-500 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 bg-stone-800 border border-stone-700 rounded-sm flex items-center justify-center text-stone-500 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all"
              >
                <YoutubeIcon />
              </a>
            </div>
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
                { label: "Projects", href: "/projects" },
                { label: "Gallery", href: "/gallery" },
                { label: "Materials Calculator", href: "/calculator" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
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
                  Huliyurdurga, Kunigal Taluk
                  <br />
                  Tumkur District, Karnataka — 572123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+919071957777"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  +91 90719 57777
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-amber-500 flex-shrink-0 mt-0.5"
                />
                <a
                  href="mailto:niyakrishindustries@gmail.com"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors break-all"
                >
                  niyakrishindustries@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <span className="text-xs text-stone-600 uppercase tracking-wider">
                  24/7 · 365 Days a Year
                </span>
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
          <div className="flex items-center gap-4">
            <Link
              href="/faq"
              className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
            >
              FAQ
            </Link>
            <span className="text-stone-800">·</span>
            <Link
              href="/contact"
              className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
            >
              Contact
            </Link>
            <span className="text-stone-800">·</span>
            <Link
              href="/privacy-policy"
              className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-stone-800">·</span>
            <p className="text-xs text-stone-600">
              NIYA™ is a brand of NIYAKRISH INDUSTRIES PVT LTD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
