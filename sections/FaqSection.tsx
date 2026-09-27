"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import { FAQS, BUSINESS_INFO } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";
import { useQuote } from "@/components/QuoteContext";

export default function FaqSection() {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-20 md:py-28 relative mesh-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-gradient-cyan">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about our Sydney pressure washing, soft washing methods, surface safety, and quote process.
          </p>
        </div>

        <FaqAccordion items={FAQS} />

        {/* Have More Questions Box */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-3xl glass-panel bg-white/80 border border-white text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-sky-950/5">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific question about your surface?
            </h4>
            <p className="text-xs text-slate-500">
              Speak directly with an experienced technician today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 glass-card hover:bg-white border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 shadow-md shadow-sky-600/20 cursor-pointer"
            >
              <span>Ask in Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
