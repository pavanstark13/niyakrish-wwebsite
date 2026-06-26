import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | NIYA — Ready Mix Concrete & Construction Materials Bangalore",
  description:
    "View NIYA's gallery — our batching plant, Ready Mix Concrete delivery, Solid Blocks manufacturing, and construction projects across Bangalore, Mysore & Tumkur.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
