"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import { useQuote } from "@/components/QuoteContext";

export default function ServicesGridSection() {
  const [filter, setFilter] = useState<"all" | "residential" | "strata" | "commercial">("all");
  const { openQuoteModal } = useQuote();

  const filteredServices = SERVICES.filter((s) => {
    if (filter === "residential") {
      return (
        s.id.includes("residential") ||
        s.id.includes("soft-washing") ||
        s.id.includes("driveway") ||
        s.id.includes("deck") ||
        s.id.includes("pool") ||
        s.id.includes("sandstone") ||
        s.id.includes("backyard")
      );
    }
    if (filter === "strata") {
      return (
        s.id.includes("strata") ||
        s.id.includes("sidewalk") ||
        s.id.includes("graffiti") ||
        s.id.includes("soft-washing")
      );
    }
    if (filter === "commercial") {
      return (
        s.id.includes("commercial") ||
        s.id.includes("graffiti") ||
        s.id.includes("sidewalk") ||
        s.id.includes("driveway")
      );
    }
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-28 relative mesh-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span>Complete Exterior Restoration</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Exterior{" "}
            <span className="text-gradient-cyan">Cleaning Services</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            From residential driveways to commercial properties, we have the specialised equipment and expertise to restore exterior surfaces without damage.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "glass-pill text-slate-700 hover:text-sky-700 hover:bg-white"
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setFilter("residential")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                filter === "residential"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "glass-pill text-slate-700 hover:text-sky-700 hover:bg-white"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter("strata")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                filter === "strata"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "glass-pill text-slate-700 hover:text-sky-700 hover:bg-white"
              }`}
            >
              Strata Schemes
            </button>
            <button
              onClick={() => setFilter("commercial")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                filter === "commercial"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "glass-pill text-slate-700 hover:text-sky-700 hover:bg-white"
              }`}
            >
              Commercial & Industrial
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={idx === 0 || idx === 1}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-8 rounded-3xl glass-panel bg-white/85 border border-white text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-sky-950/5">
          <div className="text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need a custom multi-surface clean for your property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide tailored combination packages for driveways, patios, and house soft washes.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 text-xs sm:text-sm cursor-pointer"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
