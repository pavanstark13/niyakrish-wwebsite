import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-stone-900 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-amber-500 mb-2 leading-none">
          404
        </div>
        <div className="w-16 h-px bg-amber-500/40 mx-auto mb-6" />
        <h1 className="text-2xl font-black text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-stone-400 text-sm leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
          >
            <Home size={14} />
            Go Home
          </Link>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-stone-700 text-stone-300 font-semibold text-sm rounded-sm hover:border-stone-500 hover:text-white transition-all uppercase tracking-wider"
          >
            View Products
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
