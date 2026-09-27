"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { ServiceItem } from "@/lib/data";
import { useQuote } from "./QuoteContext";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const { openQuoteModal } = useQuote();

  return (
    <div
      className={`group relative rounded-2xl md:rounded-3xl p-6 sm:p-7 glass-card-interactive flex flex-col justify-between overflow-hidden ${
        featured ? "ring-2 ring-sky-400/40 bg-white/85" : ""
      }`}
    >
      {/* Background soft ambient cyan glow on hover */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200/80 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            <Sparkles className="w-6 h-6" />
          </div>

          {service.badge && (
            <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-sky-800 border border-sky-300/60 bg-sky-50/70">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-200 leading-snug">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
            {service.features.slice(0, 2).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          {service.startingPrice && (
            <div className="text-xs text-slate-500">
              <span>Starting</span>{" "}
              <strong className="text-sm font-extrabold text-slate-900">
                {service.startingPrice}
              </strong>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openQuoteModal(service.title)}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors"
          >
            Quote
          </button>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-sky-600 group-hover:translate-x-0.5 transition-all"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
