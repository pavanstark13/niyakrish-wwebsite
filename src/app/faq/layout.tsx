import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Ready Mix Concrete Bangalore | NIYA NIYAKRISH INDUSTRIES",
  description:
    "Frequently asked questions about NIYA's Ready Mix Concrete, Solid Blocks & Aggregates in Bangalore, Mysore & Tumkur — grades, delivery, minimum order, and more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
