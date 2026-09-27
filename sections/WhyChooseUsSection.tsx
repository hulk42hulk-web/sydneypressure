"use client";

import React from "react";
import { Leaf, Award, ShieldCheck, Wrench, Sparkles } from "lucide-react";

export default function WhyChooseUsSection() {
  const cards = [
    {
      icon: Leaf,
      title: "BIO-FRIENDLY CLEANERS",
      tagline: "Eco-Conscious Chemistry",
      description:
        "We aim to use bio-friendly detergents where appropriate, protecting your pets, family, lawn, and delicate ornamental landscaping.",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      textLight: "text-emerald-700",
      borderLight: "border-emerald-200",
    },
    {
      icon: Award,
      title: "SATISFACTION GUARANTEED",
      tagline: "Uncompromising Quality",
      description:
        "Committed to delivering a quality service. We inspect every square metre with you upon completion to guarantee your complete satisfaction.",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      textLight: "text-amber-700",
      borderLight: "border-amber-200",
    },
    {
      icon: ShieldCheck,
      title: "FULLY INSURED",
      tagline: "Total Peace of Mind",
      description:
        "Professional service with comprehensive insurance coverage for residential, strata, and commercial works across Greater Sydney.",
      color: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50",
      textLight: "text-sky-700",
      borderLight: "border-sky-200",
    },
    {
      icon: Wrench,
      title: "PROFESSIONAL RESULTS",
      tagline: "Commercial Equipment",
      description:
        "Specialised equipment and cleaning methods for different surfaces, ensuring uniform streak-free results without surface gouging.",
      color: "from-cyan-500 to-sky-600",
      bgLight: "bg-cyan-50",
      textLight: "text-cyan-700",
      borderLight: "border-cyan-200",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative mesh-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>The Sydney Pressure Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Sydney <span className="text-gradient-cyan">Chooses Us</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We combine high-calibre industrial equipment, safe cleaning methods, and respectful customer service to deliver results that protect property value.
          </p>
        </div>

        {/* Four Large Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-7 glass-card-interactive bg-white/80 border border-white flex flex-col justify-between overflow-hidden shadow-lg shadow-sky-950/5 hover:-translate-y-2"
              >
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className={`w-14 h-14 rounded-2xl ${card.bgLight} ${card.textLight} border ${card.borderLight} flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="block text-[11px] font-extrabold text-sky-700 tracking-wider uppercase mb-1">
                    {card.tagline}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    Sydney Certified
                  </span>
                  <span className="text-xs font-semibold text-sky-600">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
