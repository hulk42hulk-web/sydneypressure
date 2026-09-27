"use client";

import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PricingPackage } from "@/lib/data";
import { useQuote } from "./QuoteContext";

interface PricingCardProps {
  pkg: PricingPackage;
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const { openQuoteModal } = useQuote();

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        pkg.popular
          ? "glass-card-interactive bg-white/95 ring-2 ring-sky-500 shadow-2xl shadow-sky-600/15 sm:-translate-y-2"
          : "glass-card hover:-translate-y-1 hover:border-sky-300"
      }`}
    >
      {/* Popular Badge */}
      {pkg.tag && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md ${
              pkg.popular
                ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white"
                : "bg-white text-sky-800 border border-sky-300"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{pkg.tag}</span>
          </span>
        </div>
      )}

      <div>
        <div className="pt-2">
          <h3 className="text-xl font-bold text-slate-900 leading-snug">{pkg.title}</h3>
          <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.description}</p>
        </div>

        <div className="my-6 pb-6 border-b border-sky-100">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              From
            </span>
            <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {pkg.price}
            </span>
          </div>
          <span className="text-[11px] font-medium text-sky-800 block mt-1">
            {pkg.unit}
          </span>
          <p className="text-[11px] text-slate-400 mt-1 italic">
            *Final quote tailored to property size & surface condition.
          </p>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
            What&apos;s Included:
          </span>
          <ul className="space-y-2.5">
            {pkg.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4">
        <button
          onClick={() => openQuoteModal(pkg.title)}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
            pkg.popular
              ? "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white shadow-sky-600/25 hover:shadow-lg hover:shadow-sky-600/35"
              : "bg-white/90 hover:bg-sky-50 text-slate-800 border border-sky-200/80 hover:border-sky-300"
          }`}
        >
          <span>Get a Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
