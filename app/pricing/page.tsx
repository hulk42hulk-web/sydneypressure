import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { PRICING_PACKAGES, BUSINESS_INFO } from "@/lib/data";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Transparent Pricing & Packages | Sydney Pressure Washing Service",
  description:
    "Upfront starting rates for driveway cleaning, backyard wash, house soft wash, and driveway sealing in Sydney. No hidden fees. Free quotes: 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/pricing",
  },
};

export default function PricingPage() {
  const pricingFaqs = [
    {
      question: "Are these fixed prices or starting estimates?",
      answer:
        "The figures listed above are transparent starting rates for standard-sized residential areas (e.g. up to 30sqm for a single-car driveway). Because properties vary greatly in surface area, access constraints, and degree of organic build-up or oil staining, we provide an exact, itemised written quote before undertaking any work.",
      category: "pricing" as const,
    },
    {
      question: "Do you charge extra for heavy oil or chemical stains?",
      answer:
        "Stubborn vehicle fluids, dried motor oil, and heavy grease require industrial-grade chemical emulsifiers, hot water washing, or repeated dwell-time applications. If extensive degreasing is required, we will clearly note this in your customized quotation.",
      category: "pricing" as const,
    },
    {
      question: "How do commercial and strata properties get priced?",
      answer:
        "Strata complexes and commercial premises are quoted on a customized project basis based on total square meterage, working hours (such as after-hours or weekend requirements), and specific safety management plans. Contact our team for an on-site inspection or aerial map estimate.",
      category: "pricing" as const,
    },
    {
      question: "Is there a call-out fee for quotes in Sydney?",
      answer:
        "No. All online and phone quotes across our primary Sydney service areas (Eastern Suburbs, Inner West, City, and Lower North Shore) are 100% free with no obligation.",
      category: "pricing" as const,
    },
  ];

  return (
    <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 mesh-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-sky-500" />
            <span>Honest & Upfront Rates</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Pricing{" "}
            <span className="text-gradient-cyan">Packages</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No high-pressure sales tactics or hidden fees. We believe in clear, honest starting rates for Sydney homeowners, strata committees, and businesses.
          </p>

          <div className="p-4 rounded-2xl glass-panel bg-white/70 border border-sky-200/80 max-w-xl mx-auto text-xs text-slate-600 leading-relaxed flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Important Note:</strong> Prices listed are starting prices. Final pricing depends on property size, substrate material, and surface condition.
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Strata & Commercial Custom Quote Banner */}
        <div className="glass-panel bg-white/90 rounded-3xl border border-white p-8 sm:p-10 mb-20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200/60">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Commercial & Strata Complexes</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Managing a Larger Commercial or Strata Property?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide comprehensive proposals, site visits, and scheduled annual maintenance contracts tailored for body corporates, facility managers, and business operators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 text-xs sm:text-sm"
            >
              Request Commercial Proposal
            </Link>
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="px-6 py-3.5 rounded-xl font-bold text-slate-800 glass-card hover:bg-white border border-slate-200 text-xs sm:text-sm flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Pricing Questions & Transparency
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers on how we assess and quote projects.
            </p>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </div>
    </main>
  );
}
