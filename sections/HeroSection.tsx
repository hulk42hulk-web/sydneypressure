"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { useQuote } from "@/components/QuoteContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HeroSection() {
  const { openQuoteModal } = useQuote();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden mesh-bg-hero">
      {/* Background Soft Aqua/Cyan Radial Glows clamped inside container */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-4 sm:right-10 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-cyan-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Hero Headline & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wide shadow-xs max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse shrink-0" />
              <span className="leading-tight">SYDNEY&apos;S PRESSURE & SOFT WASHING SPECIALISTS</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Bring Your Property{" "}
              <span className="text-gradient-cyan">Back to Life.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Professional pressure washing and soft washing for residential, strata, and commercial properties across Sydney. Safe, eco-friendly surface restoration that boosts curb appeal and value.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-xl shadow-sky-600/25 active:scale-[0.98] transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link
                href="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-slate-800 glass-card hover:bg-white border border-white/80 hover:border-sky-300 shadow-xs transition-all text-sm sm:text-base text-center"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Under Button Trust Indicators */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 text-sky-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-1.5 text-sky-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eco-Friendly Cleaning</span>
              </div>
              <div className="flex items-center gap-1.5 text-sky-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Direct Phone Highlight */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-2xl glass-card bg-white/80 border border-sky-100 max-w-full">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-200 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 block text-[11px]">Speak to a specialist:</span>
                  <a
                    href={BUSINESS_INFO.phoneUrl}
                    className="font-extrabold text-slate-900 hover:text-sky-600 text-xs sm:text-sm"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Before/After & Integrated Value Badges */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 w-full">
            <BeforeAfterSlider
              beforeImage="/images/before-after.jpg"
              afterImage="/images/hero.jpg"
              beforeLabel="Before • Grimy Pavers"
              afterLabel="After • Restored Surface"
            />

            {/* Clean Non-Overlapping Value Cards below slider */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl glass-card bg-white/90 border border-sky-100/90 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    100% Bio-Friendly
                  </span>
                  <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                    Safe for pets & gardens
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl glass-card bg-white/90 border border-sky-100/90 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    $20M Insured
                  </span>
                  <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                    Residential & Strata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
