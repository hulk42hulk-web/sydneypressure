"use client";

import React from "react";
import { Zap, Shield, Sparkles, Check, ArrowRight } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function SoftWashingEducationSection() {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-20 md:py-28 relative mesh-bg-section overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Surface Science & Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pressure Washing{" "}
            <span className="text-gradient-cyan">vs Soft Washing</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Using the wrong water pressure on delicate surfaces causes costly permanent gouging and paint stripping. Here is how we match the exact cleaning chemistry and psi to each substrate.
          </p>
        </div>

        {/* Two-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: Pressure Washing */}
          <div className="glass-card-interactive p-8 sm:p-10 rounded-3xl border border-white bg-white/85 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center mb-5 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                High-Velocity Mechanical Force
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Pressure Washing
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Utilises higher water pressure (2,500 – 4,000 PSI) directed through rotary flat-surface surface cleaners to dislodge stubborn embedded dirt, tyre rubber, and oil from unyielding, hard substrates.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Best Suited For Hard Surfaces:
                </span>
                <ul className="space-y-2">
                  {[
                    "Plain & Coloured Concrete Driveways",
                    "Interlocking Pavers & Walkways",
                    "Exposed Aggregate & Asphalt",
                    "Stone Patio Terraces & Crossovers",
                    "Car Parks & Loading Aprons",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => openQuoteModal("Residential Pressure Cleaning")}
                className="w-full py-3 rounded-xl glass-card hover:bg-white text-xs font-bold text-sky-700 border border-sky-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Quote Pressure Cleaning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Soft Washing */}
          <div className="glass-card-interactive p-8 sm:p-10 rounded-3xl border border-white bg-white/90 shadow-xl relative overflow-hidden flex flex-col justify-between ring-2 ring-cyan-400/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200/80 flex items-center justify-center mb-5 shadow-xs">
                <Shield className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                Low-Pressure Eco-Sanitization
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Soft Washing
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Applies low pressure (under 500 PSI) with specialized biodegradable sanitizing solutions that break down microscopic mould spores, algae, and lichen at the root without eroding delicate finishes.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Best Suited For Delicate Facades:
                </span>
                <ul className="space-y-2">
                  {[
                    "Painted Exterior Render & Stucco",
                    "Timber Weatherboards & Siding",
                    "Eaves, Gutters, Fascias & Downpipes",
                    "Tile, Slate & Colorbond Roofs",
                    "Delicate Heritage Sandstone & Brick",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => openQuoteModal("Soft Washing")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-xs font-bold text-white shadow-md shadow-sky-600/20 hover:from-sky-700 hover:to-cyan-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Quote Soft Washing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
