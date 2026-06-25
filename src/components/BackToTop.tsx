"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 w-10 h-10 bg-stone-800 border border-stone-700 text-stone-400 hover:bg-amber-500 hover:border-amber-500 hover:text-stone-900 rounded-sm flex items-center justify-center transition-all duration-200 shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
