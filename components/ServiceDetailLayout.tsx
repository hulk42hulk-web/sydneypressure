"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Phone } from "lucide-react";
import { ServiceItem, BUSINESS_INFO } from "@/lib/data";
import { useQuote } from "@/components/QuoteContext";
import QuoteForm from "@/components/QuoteForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ServiceDetailLayoutProps {
  service: ServiceItem;
  beforeAfterImages?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  customFaqs?: { question: string; answer: string }[];
}

export default function ServiceDetailLayout({
  service,
  beforeAfterImages,
}: ServiceDetailLayoutProps) {
  const { openQuoteModal } = useQuote();

  return (
    <main className="flex-1 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 mesh-bg-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500 mb-5">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-sky-600">Services</Link>
          <span>/</span>
          <span className="text-sky-800 line-clamp-1">{service.title}</span>
        </div>

        {/* Hero Section of Service Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-extrabold text-sky-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>{service.badge || "Specialist Exterior Service"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {service.title} <span className="text-gradient-cyan">Sydney</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              {service.fullDescription}
            </p>

            {service.startingPrice && (
              <div className="inline-flex flex-wrap items-baseline gap-2 px-3.5 py-2 rounded-xl bg-sky-50/80 border border-sky-200 text-xs sm:text-sm">
                <span className="font-semibold text-slate-500">Starting Rate:</span>
                <span className="text-lg sm:text-xl font-black text-slate-900">{service.startingPrice}</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500">*Tailored to property area</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => openQuoteModal(service.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-lg shadow-sky-600/20 text-xs sm:text-sm cursor-pointer"
              >
                <span>Get Free Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-slate-800 glass-card hover:bg-white border border-slate-200 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-white shadow-xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Checkpoints & Ideal Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          <div className="glass-card bg-white/80 rounded-3xl border border-white p-5 sm:p-8 shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3.5">
              What&apos;s Included in Our {service.title}
            </h3>
            <ul className="space-y-2.5">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card bg-white/80 rounded-3xl border border-white p-5 sm:p-8 shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3.5">
              Surfaces & Applications Ideal For This Service
            </h3>
            <ul className="space-y-2.5">
              {service.idealFor.map((ideal, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{ideal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before and After Interactive Demonstration */}
        {beforeAfterImages && (
          <div className="mb-14 sm:mb-16">
            <div className="text-center mb-5">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Real Surface Restoration
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Before & After Comparison
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={beforeAfterImages.before}
                afterImage={beforeAfterImages.after}
                beforeLabel={beforeAfterImages.beforeLabel || "Before Wash"}
                afterLabel={beforeAfterImages.afterLabel || "After Restoration"}
              />
            </div>
          </div>
        )}

        {/* Service Quote Form Embedded */}
        <div className="glass-panel bg-white/90 rounded-3xl border border-white p-5 sm:p-10 shadow-xl max-w-3xl mx-auto">
          <div className="text-center mb-6 space-y-1">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
              Request Your Free Quote
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Get an Estimate for {service.title}
            </h3>
            <p className="text-xs text-slate-500">
              Servicing Eastern Suburbs, Inner West, Sydney CBD, and Lower North Shore.
            </p>
          </div>

          <QuoteForm initialService={service.title} />
        </div>
      </div>
    </main>
  );
}
