import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete & Materials Calculator Bangalore | NIYA NIYAKRISH INDUSTRIES",
  description:
    "Free construction materials calculator for Bangalore projects. Estimate Ready Mix Concrete (m³), Solid Blocks, or Aggregates for your Karnataka construction site.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
