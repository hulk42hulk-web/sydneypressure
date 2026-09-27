"use client";

import React from "react";
import Link from "next/link";
import { DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/data";
import PricingCard from "@/components/PricingCard";

export default function PricingPreviewSection() {
  return (
    <section className="py-20 md:py-28 relative mesh-bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-sky-500" />
            <span>Upfront & Honest Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Starting{" "}
            <span className="text-gradient-cyan">Pricing Packages</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No hidden callout fees or unexpected extras. All prices listed are transparent starting rates; final quotations are tailored to surface area square meterage and grime condition.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Link to Full Pricing Page */}
        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass-card hover:bg-white text-xs sm:text-sm font-bold text-sky-800 border border-sky-300 shadow-md transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>View Full Pricing Breakdown & FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
