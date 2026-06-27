'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div className="border-b border-stone-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-5 text-left gap-6 group"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-base leading-snug group-hover:text-amber-400 transition-colors duration-200">
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-amber-500 mt-0.5"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? `${contentHeight + 24}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 420ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <div ref={contentRef} className="pb-6 text-stone-400 leading-relaxed text-sm">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
