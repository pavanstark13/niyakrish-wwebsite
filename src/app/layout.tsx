import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://niyakrish.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ready Mix Concrete Bangalore | NIYA — NIYAKRISH INDUSTRIES",
    template: "%s | NIYA Bangalore",
  },
  description:
    "NIYA by NIYAKRISH INDUSTRIES PVT LTD. — 15+ years in aggregates, now manufacturing Ready Mix Concrete, Solid Blocks & Aggregates. Headquartered in Tumkur District. Serving Bangalore, Mysore & Tumkur, Karnataka. M10–M60 grades. Call +91 90719 57777.",
  keywords: [
    "ready mix concrete Bangalore",
    "RMC supplier Bangalore",
    "ready mix concrete Mysore",
    "ready mix concrete Tumkur",
    "concrete supplier Bangalore",
    "concrete supplier Karnataka",
    "solid blocks Bangalore",
    "concrete blocks Bangalore",
    "aggregates supplier Bangalore",
    "M20 concrete Bangalore",
    "M25 concrete Bangalore",
    "M30 concrete Bangalore",
    "construction materials Bangalore",
    "RMC plant Bangalore",
    "concrete delivery Bangalore",
    "NIYA",
    "NIYAKRISH INDUSTRIES",
    "concrete supplier near me",
    "building materials Bangalore",
    "crushed stone aggregates Bangalore",
  ],
  authors: [{ name: "NIYAKRISH INDUSTRIES PVT LTD." }],
  openGraph: {
    title: "Ready Mix Concrete Bangalore | NIYA — NIYAKRISH INDUSTRIES",
    description:
      "Premium Ready Mix Concrete, Solid Blocks & Aggregates in Bangalore, Mysore & Tumkur. M10–M60 grades. IS certified. On-time delivery. Call +91 90719 57777.",
    type: "website",
    locale: "en_IN",
    siteName: "NIYA — NIYAKRISH INDUSTRIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Mix Concrete Bangalore | NIYA",
    description:
      "Premium RMC, Solid Blocks & Aggregates — Bangalore, Mysore & Tumkur. IS certified. Call +91 90719 57777.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  verification: {
    google: "pbyh-nLfH-XDRUwgjxt5CdIRuTTE55LxIA1ykVax1_4",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "NIYAKRISH INDUSTRIES PVT LTD.",
  alternateName: ["NIYA", "NIYA Industries", "NIYAKRISH"],
  description:
    "Manufacturer and supplier of Ready Mix Concrete (M10–M60), Concrete Solid Blocks, and Aggregates. Headquartered in Huliyurdurga, Kunigal Taluk, Tumkur District. Serving Bangalore, Mysore, Tumkur and all of Karnataka.",
  url: siteUrl,
  telephone: "+919071957777",
  email: "niyakrishindustries@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Huliyurdurga",
    addressLocality: "Kunigal",
    addressRegion: "Karnataka",
    postalCode: "572123",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0486,
    longitude: 77.0248,
  },
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mysore" },
    { "@type": "City", name: "Tumkur" },
    { "@type": "City", name: "Kunigal" },
    { "@type": "State", name: "Karnataka" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Materials — Bangalore Karnataka",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ready Mix Concrete Bangalore",
          description: "Factory-batched RMC in grades M10 to M60, delivered across Bangalore, Mysore & Tumkur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Concrete Solid Blocks Bangalore",
          description: "IS 2185 certified load-bearing concrete solid blocks, supplied across Karnataka",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Aggregates Bangalore",
          description: "IS 383 compliant crushed stone aggregates and M-sand for Bangalore & Karnataka",
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-stone-50 text-stone-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
