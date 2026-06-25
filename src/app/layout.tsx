import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIYA | NIYAKRISH INDUSTRIES PVT LTD.",
  description:
    "Premium quality Ready Mix Concrete, Concrete Solid Blocks, and Aggregates. NIYA by NIYAKRISH INDUSTRIES PVT LTD. — Building tomorrow with precision.",
  keywords:
    "ready mix concrete, solid blocks, aggregates, concrete, construction materials, NIYA, NIYAKRISH",
  openGraph: {
    title: "NIYA | NIYAKRISH INDUSTRIES PVT LTD.",
    description:
      "Premium quality Ready Mix Concrete, Concrete Solid Blocks, and Aggregates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-stone-50 text-stone-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
