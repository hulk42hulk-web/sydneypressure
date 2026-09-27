"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Home, Sparkles } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function ResidentialSection() {
  const { openQuoteModal } = useQuote();

  const residentialSurfaces = [
    { name: "Driveways & Carports", note: "Concrete, stencil, aggregate & pavers" },
    { name: "Decks & Entertaining Patios", note: "Hardwood timber restoration & tiles" },
    { name: "Walkways & Garden Paths", note: "Slip-hazard algae removal" },
    { name: "Pool Areas & Coping", note: "Travertine, bluestone & sandstone" },
    { name: "Exterior House Walls", note: "Gentle low-pressure soft washing" },
    { name: "Sandstone & Brick Features", note: "Restores heritage golden hues" },
    { name: "Boundary Fences & Gates", note: "Timber, Colorbond & masonry" },
    { name: "Graffiti & Vandalism Removal", note: "Fast, non-destructive pigment removal" },
  ];

  return (
    <section className="py-16 md:py-28 relative mesh-bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image with Overlaid Glass Card */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 sm:p-2.5 border border-white shadow-xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/softwash.jpg"
                  alt="Modern Australian home being soft washed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Glass Info Panel: Below image on mobile, floating overlay on tablet/desktop */}
              <div className="relative mt-2 sm:mt-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-5 glass-panel bg-white/95 p-4 sm:p-5 rounded-2xl border border-white shadow-lg">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-sky-800 uppercase tracking-wide mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Residential Standard of Care</span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                  Protecting Your Home&apos;s Exterior Paint & Finishes
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  We tailor pressure levels and use bio-friendly solutions to prevent gouging soft timber or stripping architectural render.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Checkpoints */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>Residential Specialist</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Make Your Home{" "}
              <span className="text-gradient-cyan">Look New Again</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Accumulated Sydney salt spray, pollen, mould, and vehicle grime slowly degrade your home&apos;s exterior and outdoor living spaces. Our comprehensive residential wash restores vibrant colour, extends surface lifespan, and protects curb appeal.
            </p>

            {/* Surface List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {residentialSurfaces.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl glass-card bg-white/70 border border-sky-100 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900 leading-snug">
                      {item.name}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {item.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal("Residential Pressure Cleaning")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-xl shadow-sky-600/25 active:scale-[0.98] transition-all text-xs sm:text-sm md:text-base cursor-pointer"
              >
                <span>Get a Free Residential Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
