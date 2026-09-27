"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function CommercialSection() {
  const { openQuoteModal } = useQuote();

  const facilities = [
    "Petrol Stations & Forecourts",
    "Warehouses & Distribution Hubs",
    "Loading Docks & Industrial Bays",
    "Sports Venues & Courts",
    "Commercial Swimming Pools",
    "Commercial Office Buildings",
    "Hard Surface Car Parks",
    "Exterior Pre-Paint Facades",
  ];

  return (
    <section className="py-16 md:py-28 relative mesh-bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Commercial Photo with Floating Card */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 sm:p-2.5 border border-white shadow-xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/commercial.jpg"
                  alt="Industrial warehouse loading dock and apron commercial pressure washing in Sydney"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Overlay Info: Below image on mobile, floating on sm+ */}
              <div className="relative mt-2 sm:mt-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 glass-panel bg-white/95 p-3.5 sm:p-4 rounded-2xl border border-white shadow-lg flex items-center justify-between">
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold uppercase text-sky-800">
                    Insured & Professional Service
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight block">
                    Industrial Grade Output & Degreasing
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Overview */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>Commercial & Industrial Facilities</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Commercial{" "}
              <span className="text-gradient-cyan">Pressure Cleaning</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Industrial facilities, retail shopping precincts, and corporate campuses require high-performance surface washing that handles heavy oil, stubborn rubber tyre marks, fuel spills, and heavy foot traffic. We deliver prompt, fully insured commercial solutions.
            </p>

            {/* Target Facilities Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {facilities.map((fac, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-xl glass-card bg-white/80 border border-sky-100 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{fac}</span>
                </div>
              ))}
            </div>

            {/* Operating Flexibility */}
            <div className="p-3.5 sm:p-4 rounded-2xl glass-card bg-white/70 border border-slate-200/80 flex items-start gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Out-of-Hours & Weekend Scheduling
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  We schedule service windows around your operational trading hours to ensure zero interruption to clients, deliveries, or customers.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal("Commercial Pressure Cleaning")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-xl shadow-sky-600/25 active:scale-[0.98] transition-all text-xs sm:text-sm md:text-base cursor-pointer"
              >
                <span>Request Commercial Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
