import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ready Mix Concrete Supplier Bangalore | NIYA",
  description:
    "Contact NIYAKRISH INDUSTRIES for Ready Mix Concrete, Solid Blocks & Aggregates in Bangalore, Mysore & Tumkur. Call +91 90719 57777 or get a free quote online.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
