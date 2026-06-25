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
    default: "NIYA | NIYAKRISH INDUSTRIES PVT LTD.",
    template: "%s | NIYA",
  },
  description:
    "Premium quality Ready Mix Concrete, Concrete Solid Blocks, and Aggregates. NIYA by NIYAKRISH INDUSTRIES PVT LTD. — Building tomorrow with precision.",
  keywords: [
    "ready mix concrete",
    "RMC",
    "solid blocks",
    "aggregates",
    "concrete supplier",
    "construction materials",
    "NIYA",
    "NIYAKRISH",
    "M20 concrete",
    "M30 concrete",
    "concrete blocks",
    "crushed stone",
  ],
  authors: [{ name: "NIYAKRISH INDUSTRIES PVT LTD." }],
  openGraph: {
    title: "NIYA | NIYAKRISH INDUSTRIES PVT LTD.",
    description:
      "Premium Ready Mix Concrete, Concrete Solid Blocks, and Aggregates — delivered fresh to your site.",
    type: "website",
    locale: "en_IN",
    siteName: "NIYA by NIYAKRISH INDUSTRIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIYA | NIYAKRISH INDUSTRIES PVT LTD.",
    description:
      "Premium Ready Mix Concrete, Solid Blocks & Aggregates for construction.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "NIYAKRISH INDUSTRIES PVT LTD.",
  alternateName: "NIYA",
  description:
    "Manufacturer and supplier of Ready Mix Concrete, Concrete Solid Blocks, and Aggregates.",
  url: siteUrl,
  telephone: "+919071957777",
  email: "niyakrishindustries@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Materials",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ready Mix Concrete",
          description: "Factory-batched concrete in grades M10 to M60",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Concrete Solid Blocks",
          description: "High-density load-bearing concrete blocks, IS 2185 certified",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Aggregates",
          description: "Crushed stone coarse and fine aggregates, IS 383 compliant",
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
