import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Exterior Pressure Cleaning & Soft Washing Services | Sydney",
  description:
    "Explore our full range of exterior cleaning services in Sydney: driveways, house soft wash, strata schemes, commercial aprons, sandstone restoration, and graffiti removal.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 mesh-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Sydney Exterior Cleaning Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Specialised Surface Cleaning{" "}
            <span className="text-gradient-cyan">& Restoration</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether cleaning delicate painted weatherboards, historic golden sandstone, or heavy industrial concrete, we deploy calibrated pressure levels and biodegradable detergents to protect surface integrity.
          </p>
        </div>

        {/* Quick Service Links Bar */}
        <div className="glass-panel p-4 rounded-2xl bg-white/80 border border-white mb-14 shadow-lg flex flex-wrap items-center justify-center gap-2">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-50/70 hover:bg-sky-100 text-sky-900 border border-sky-200/50 transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx < 3} />
          ))}
        </div>

        {/* Compliance Guarantee Strip */}
        <div className="glass-panel bg-white/90 rounded-3xl border border-white p-8 sm:p-12 shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            Backed by Complete Insurance & Sydney Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All services include comprehensive public liability insurance ($20M), certified operators, and safe wastewater handling practices. We inspect every project upon finish to guarantee your complete satisfaction.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-xs sm:text-sm shadow-md"
            >
              Get a Free Surface Quote
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl font-bold text-slate-800 glass-card hover:bg-white border border-slate-200 text-xs sm:text-sm"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
