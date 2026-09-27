"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, Phone, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { useQuote } from "@/components/QuoteContext";

export default function ServiceAreaSection() {
  const [activeArea, setActiveArea] = useState(0);
  const { openQuoteModal } = useQuote();

  const areas = [
    {
      name: "Eastern Suburbs",
      tagline: "Our Home Base",
      suburbs: [
        "Bellevue Hill (HQ)",
        "Bondi & Bondi Beach",
        "Double Bay",
        "Rose Bay",
        "Vaucluse & Watsons Bay",
        "Coogee & Clovelly",
        "Randwick & Kensington",
        "Paddington & Woollahra",
      ],
      description:
        "Located in Bellevue Hill, we provide prompt same-day quotes across all Sydney Eastern Suburbs for residential homes, sandstone terraces, and apartment blocks.",
    },
    {
      name: "Inner West",
      tagline: "Heritage & Urban Specialists",
      suburbs: [
        "Balmain & Birchgrove",
        "Rozelle & Lilyfield",
        "Leichhardt & Annandale",
        "Newtown & Erskineville",
        "Glebe & Camperdown",
        "Marrickville & Dulwich Hill",
      ],
      description:
        "Specializing in Inner West heritage brick, delicate sandstone, historic terraces, and commercial retail thoroughfares.",
    },
    {
      name: "Sydney City & CBD",
      tagline: "Commercial & Strata Thoroughfares",
      suburbs: [
        "Sydney CBD",
        "Darlinghurst & Surry Hills",
        "Pyrmont & Ultimo",
        "Haymarket & Barangaroo",
        "Chippendale & Redfern",
      ],
      description:
        "High-output out-of-hours cleaning for CBD loading docks, retail arcades, public footpaths, and commercial strata towers.",
    },
    {
      name: "Lower North Shore",
      tagline: "Harbourfront Properties",
      suburbs: [
        "Mosman & Clifton Gardens",
        "Neutral Bay & Cremorne",
        "North Sydney & Kirribilli",
        "Crows Nest & Cammeray",
        "Lavender Bay & Wollstonecraft",
      ],
      description:
        "Restoring harbourside residential homes, steep driveways, pool decks, and strata communities across the Lower North Shore.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative mesh-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-500" />
            <span>Local Sydney Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Serving <span className="text-gradient-cyan">Sydney</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Based at 103A Birriga Road, Bellevue Hill, our mobile washing units travel daily across the Eastern Suburbs, Inner West, Sydney City, and the Lower North Shore.
          </p>
        </div>

        {/* Interactive Region Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Region Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {areas.map((area, idx) => (
              <button
                key={area.name}
                onClick={() => setActiveArea(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                  activeArea === idx
                    ? "glass-card bg-white/95 border-sky-400 shadow-lg shadow-sky-950/5 scale-[1.02]"
                    : "glass-card bg-white/60 border-white/80 hover:bg-white/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                    {area.tagline}
                  </span>
                  {activeArea === idx && (
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {area.name}
                </h3>
              </button>
            ))}

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl glass-card bg-sky-50/70 border border-sky-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Operating Hours: 7am – 9pm (7 Days)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sky-800">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Direct Dispatch: {BUSINESS_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Area Details Glass Panel */}
          <div className="lg:col-span-8 glass-panel bg-white/85 rounded-3xl border border-white p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-sky-100 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  Region Focus
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                  {areas[activeArea].name}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/70 text-sky-800 text-xs font-semibold">
                <Navigation className="w-3.5 h-3.5 text-sky-600" />
                <span>Fast Local Mobilization</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {areas[activeArea].description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
              Key Suburbs Serviced in this Region:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {areas[activeArea].suburbs.map((suburb, i) => (
                <div
                  key={i}
                  className="px-3.5 py-2.5 rounded-xl bg-sky-50/50 border border-sky-100 text-xs font-semibold text-slate-700 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Don&apos;t see your specific Sydney street? We cover all surrounding neighbourhoods.
              </span>

              <button
                onClick={() => openQuoteModal()}
                className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-xs shadow-md shadow-sky-600/20 cursor-pointer"
              >
                Check My Suburb
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
