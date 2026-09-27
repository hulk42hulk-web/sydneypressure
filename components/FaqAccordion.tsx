"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/lib/data";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? "glass-card bg-white/95 border-sky-300 shadow-md shadow-sky-950/5"
                : "glass-card bg-white/70 border-white/90 hover:border-sky-200"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isOpen ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-600"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 mt-1 ${
                  isOpen ? "rotate-180 text-sky-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 pt-0 animate-in fade-in duration-200">
                <div className="pl-10 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
