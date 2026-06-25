"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/calculator", label: "Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center">
                <span className="text-amber-500 font-black text-sm tracking-tight">
                  N
                </span>
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-stone-900 uppercase">
                  NIYA
                </span>
                <span className="hidden sm:block text-[9px] text-stone-500 font-medium tracking-widest uppercase leading-none">
                  NIYAKRISH INDUSTRIES
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-sm hover:bg-amber-600 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-stone-900 text-white text-sm font-semibold rounded-sm hover:bg-amber-600 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
