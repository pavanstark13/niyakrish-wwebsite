import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | NIYA — NIYAKRISH INDUSTRIES",
  description:
    "Frequently asked questions about NIYA's Ready Mix Concrete, Solid Blocks, and Aggregates — grades, delivery, minimum order, and more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
