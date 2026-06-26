import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NIYA — NIYAKRISH INDUSTRIES",
  description: "Privacy Policy for NIYAKRISH INDUSTRIES PVT LTD. — how we collect, use, and protect your information.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
