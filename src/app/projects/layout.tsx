import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | NIYA — Construction Material Supplier Bangalore",
  description:
    "NIYA has supplied Ready Mix Concrete, Solid Blocks & Aggregates to 500+ projects across Bangalore, Mysore & Tumkur. See our project portfolio.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
