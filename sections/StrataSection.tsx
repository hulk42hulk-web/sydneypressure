"use client";

import React from "react";
import Image from "next/image";
import { Building2, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function StrataSection() {
  const { openQuoteModal } = useQuote();

  const strataAreas = [
    { title: "Common Walkways & Stairs", desc: "Immediate eradication of slip hazards and green biofilm." },
    { title: "Underground Car Parks", desc: "Degreasing tyre marks, oil stains, and sweeping paved bays." },
    { title: "Complex Driveways & Entry", desc: "Enhances initial impression for prospective buyers and owners." },
    { title: "Common Pool Areas & Spas", desc: "Hygienic, anti-slip sanitization for family recreation." },
    { title: "Bin Storage Rooms", desc: "High-pressure sanitization and bio-friendly odor elimination." },
    { title: "Exterior Facades & Render", desc: "Low-pressure soft washing safe for multi-storey walls." },
    { title: "Pre-Paint Strata Cleaning", desc: "Essential surface prep for scheduled building maintenance." },
    { title: "Graffiti Removal", desc: "Rapid removal to deter recurring vandalism on common property." },
  ];

  return (
    <section className="py-16 md:py-28 relative mesh-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Strata Details */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>Strata Schemes & Body Corporate</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Professional{" "}
              <span className="text-gradient-cyan">Strata Cleaning</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Regular exterior pressure and soft washing is vital for maintaining common property value, reducing slip-and-fall liabilities, and meeting WHS responsibilities. We provide punctual, documented services with minimal disturbance to residents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {strataAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl glass-card bg-white/75 border border-sky-100 flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {area.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Note */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700 shrink-0" />
              <p className="text-[11px] sm:text-xs text-sky-900 font-medium">
                Full compliance documentation: SWMS, JSEA, $20M Public Liability Certificate of Currency provided upon booking.
              </p>
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal("Strata Cleaning")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-xl shadow-sky-600/25 active:scale-[0.98] transition-all text-xs sm:text-sm md:text-base cursor-pointer"
              >
                <span>Request a Strata Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Photography */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 w-full">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 sm:p-2.5 border border-white shadow-xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/strata.jpg"
                  alt="Modern Sydney strata apartment complex pool and pavers cleaning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 glass-panel bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white shadow-md text-right">
                <span className="block text-[10px] sm:text-xs font-black text-slate-900">
                  Sydney-Wide Strata
                </span>
                <span className="text-[9px] sm:text-[11px] text-sky-700 font-semibold block">
                  Scheduled Maintenance Plans
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
