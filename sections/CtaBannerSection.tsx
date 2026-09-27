"use client";

import React from "react";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { useQuote } from "@/components/QuoteContext";

export default function CtaBannerSection() {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[2.5rem] glass-panel bg-white/90 border border-white p-8 sm:p-12 md:p-16 shadow-2xl shadow-sky-950/10 text-center overflow-hidden">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Fast Free Quotes Across Sydney</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ready to Restore Your Property&apos;s{" "}
              <span className="text-gradient-cyan">Original Radiance?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Whether you need a single driveway washed or a complete strata complex sanitized, our Sydney specialists are ready to help with transparent, upfront pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-xl shadow-sky-600/25 active:scale-[0.98] transition-all text-base cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={BUSINESS_INFO.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-slate-800 glass-card hover:bg-white border border-slate-200 shadow-sm transition-all text-base"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-sm transition-all text-base"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5 text-sky-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> $20M Public Liability Insurance
              </span>
              <span>•</span>
              <span>No Obligation Online Quotes</span>
              <span>•</span>
              <span>Mon–Sun 7am–9pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
