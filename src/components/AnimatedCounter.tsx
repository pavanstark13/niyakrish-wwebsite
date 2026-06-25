"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function parseValue(val: string): { num: number; suffix: string; prefix: string } {
  const prefix = val.startsWith("+") ? "+" : "";
  const clean = val.replace(/[^0-9.%+]/g, "");
  const suffix = val.replace(/[0-9.]/g, "").replace("+", "");
  return { num: parseFloat(clean) || 0, suffix, prefix };
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const { num, suffix, prefix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease out: faster at start, slower at end
      const eased = 1 - Math.pow(1 - step / steps, 3);
      current = num * eased;
      setCount(current);

      if (step >= steps) {
        setCount(num);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, num]);

  const display = num % 1 === 0 ? Math.round(count) : count.toFixed(0);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-black text-stone-900 mb-1">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-sm font-medium text-stone-700 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
