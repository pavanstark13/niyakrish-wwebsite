import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials Calculator | NIYA — NIYAKRISH INDUSTRIES",
  description:
    "Free construction materials calculator. Instantly estimate how much Ready Mix Concrete, Solid Blocks, or Aggregates your project needs.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
