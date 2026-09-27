"use client";

import React from "react";
import { Leaf, Droplets, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function BiodegradableSection() {
  const { openQuoteModal } = useQuote();

  const ecoPoints = [
    {
      icon: Leaf,
      title: "Bio-Friendly Detergents",
      desc: "We prioritize using bio-friendly, biodegradable detergents where appropriate to protect lawns, ornamental plants, and family pets.",
    },
    {
      icon: Droplets,
      title: "Targeted Application",
      desc: "Precision chemical proportioning means we use the exact amount needed to eradicate organic mold at the root without unnecessary chemical excess.",
    },
    {
      icon: Heart,
      title: "Garden & Pet Friendly",
      desc: "Our technicians pre-saturate adjacent garden foliage with fresh water and thoroughly rinse post-wash, ensuring gardens remain lush and vibrant.",
    },
    {
      icon: ShieldCheck,
      title: "Water Management Care",
      desc: "Controlled runoff techniques help keep detergents and wash water properly routed away from storm drains and swimming pool reservoirs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative mesh-bg-accent overflow-hidden">
      {/* Aqua glow backdrop */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white/85 rounded-3xl border border-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                <span>Eco-Conscious Standards</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Powerful Cleaning.{" "}
                <span className="text-gradient-cyan">More Considerate Solutions.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Effective pressure cleaning does not require harsh, toxic chemicals that harm your family pets or garden shrubs. We aim to use bio-friendly detergents that dissolve dirt and neutralize active mould spores safely.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal("House Exterior Soft Washing")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Learn About Eco-Friendly Washing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 4 Glass Mini Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecoPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card bg-white/85 border border-sky-100 hover:border-cyan-300 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
