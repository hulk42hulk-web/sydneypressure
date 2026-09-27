import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, Wrench, HeartHandshake, MapPin, Clock, ArrowRight, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Our Business | Sydney Pressure Washing Service",
  description:
    "Learn about Sydney Pressure Washing Service. Professional exterior cleaning, biodegradable soft washing, full insurance coverage, and customer satisfaction across Sydney.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/about",
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Leaf,
      title: "Bio-Friendly Approach",
      desc: "We aim to use bio-friendly, biodegradable detergents where appropriate to ensure safe outcomes for your family, pets, and landscaping while eradicating deep grime.",
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured & Compliant",
      desc: "Our business operates with complete public liability insurance coverage, providing total protection for residential homeowners, commercial tenants, and strata schemes.",
    },
    {
      icon: Wrench,
      title: "Surface-Specific Equipment",
      desc: "We match the exact cleaning tool—from high-pressure rotary surface sweepers to low-pressure soft wash applicators—to the exact substrate being cleaned.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      desc: "We are firmly committed to delivering a high quality service. We inspect finished surfaces carefully to ensure you are completely satisfied with the results.",
    },
  ];

  return (
    <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 mesh-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5 text-sky-500" />
            <span>Sydney Exterior Cleaning Professionals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            About Sydney Pressure{" "}
            <span className="text-gradient-cyan">Washing Service</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Specializing in high-pressure surface restoration and biodegradable soft washing for residential, strata, and commercial properties across Greater Sydney.
          </p>
        </div>

        {/* Narrative Section with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-sky-200/30 rounded-3xl blur-2xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-white shadow-2xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Sydney Pressure Washing Service professional equipment in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 glass-panel bg-white/95 p-4 rounded-2xl border border-white shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>Based in Bellevue Hill, NSW</span>
                </div>
                <p className="text-xs text-slate-600">
                  Centrally situated at 103A Birriga Road to service the Eastern Suburbs, Inner West, City CBD, and Lower North Shore rapidly.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              Delivering Higher Standards of Exterior Restoration
            </h2>

            <p>
              At Sydney Pressure Washing Service, we understand that your outdoor surfaces represent both significant financial investment and the first impression of your property. Weathering from salt air, humidity, traffic soot, and organic fungal growth can dull exterior finishes over time.
            </p>

            <p>
              Rather than blasting everything with raw high pressure—which risks gouging soft sandstone, stripping timber fibres, or penetrating window seals—our methodology combines specialized variable-pressure washing with gentle, biodegradable chemical soft washing.
            </p>

            <p>
              This surface-specific balance allows us to lift stubborn stains, eliminate mould spores at their root, and achieve results that remain clean up to four times longer than basic water blasting alone.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl glass-card bg-sky-50/60 border border-sky-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    Operating Hours: {BUSINESS_INFO.operatingHours}
                  </strong>
                  Our flexible appointment windows include early mornings, evenings, and weekends to suit busy residential families and commercial operations.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Our Service Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              The fundamental principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl glass-card bg-white/80 border border-white hover:border-sky-300 transition-all duration-200 shadow-md space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-white/90 border border-white text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <h3 className="text-2xl font-black text-slate-900">
            Speak Directly with Our Sydney Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Ready to arrange a surface inspection or receive an upfront quotation? We are here to help 7 days a week.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 text-xs sm:text-sm"
            >
              Contact Us Online
            </Link>
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="px-7 py-3.5 rounded-xl font-bold text-slate-800 glass-card hover:bg-white border border-slate-200 text-xs sm:text-sm"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
