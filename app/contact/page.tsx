import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Free Quote | Sydney Pressure Washing Service",
  description:
    "Request a free quote for pressure cleaning and soft washing in Sydney. Call 0413 708 416 or message on WhatsApp. Bellevue Hill, Eastern Suburbs, Inner West & Lower North Shore.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 mesh-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Fast No-Obligation Quotes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Let&apos;s Get Your Property{" "}
            <span className="text-gradient-cyan">Looking Its Best.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Fill in your property details below for an upfront quote, or contact our Sydney specialists directly via phone or WhatsApp.
          </p>
        </div>

        {/* 3 Contact Method Quick Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {/* Card 1: Call */}
          <a
            href={BUSINESS_INFO.phoneUrl}
            className="p-6 rounded-3xl glass-card-interactive bg-white/80 border border-white hover:border-sky-300 shadow-md text-left flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Call Directly
              </span>
              <span className="block text-lg font-black text-slate-900 mt-0.5">
                {BUSINESS_INFO.phone}
              </span>
              <span className="text-xs text-slate-500">
                Mon–Sun 7:00 AM – 9:00 PM
              </span>
            </div>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-card-interactive bg-white/80 border border-white hover:border-emerald-300 shadow-md text-left flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Chat on WhatsApp
              </span>
              <span className="block text-lg font-black text-slate-900 mt-0.5">
                Instant Chat
              </span>
              <span className="text-xs text-slate-500">
                Send photos for quick estimation
              </span>
            </div>
          </a>

          {/* Card 3: Service HQ */}
          <div className="p-6 rounded-3xl glass-card bg-white/80 border border-white shadow-md text-left flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200/80 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
                Sydney Depot HQ
              </span>
              <span className="block text-sm font-bold text-slate-900 mt-0.5">
                Bellevue Hill, NSW 2023
              </span>
              <span className="text-xs text-slate-500">
                Servicing all Greater Sydney
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Quote Form on Left, Map & Areas on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Quote Form Container */}
          <div className="lg:col-span-7 glass-panel bg-white/90 rounded-3xl border border-white p-6 sm:p-10 shadow-2xl">
            <div className="border-b border-sky-100 pb-5 mb-6">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Online Quotation Request
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                Tell Us About Your Property
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Receive a transparent, customized quote tailored to your surface needs within 2 business hours.
              </p>
            </div>

            <QuoteForm />
          </div>

          {/* Right Column: Google Maps & Region Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Card */}
            <div className="glass-card bg-white/85 rounded-3xl border border-white p-4 shadow-xl overflow-hidden space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200/80">
                <iframe
                  title="Sydney Pressure Washing Service Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.272183204908!2d151.246471!3d-33.886326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad910c2e3dd7%3A0x5017d681632bc50!2sBellevue%20Hill%20NSW%202023!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 text-xs text-slate-600 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {BUSINESS_INFO.legalName}
                    </strong>
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Open: {BUSINESS_INFO.operatingHours}</span>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sky-700 hover:underline">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas Summary Box */}
            <div className="glass-card bg-white/80 rounded-3xl border border-white p-6 shadow-lg space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Primary Coverage Zones
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We service all suburbs within:
              </p>
              <ul className="space-y-1.5 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>Eastern Suburbs (Bellevue Hill, Bondi, Rose Bay, Vaucluse)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>Inner West (Balmain, Leichhardt, Newtown, Glebe)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>Sydney City & CBD</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>Lower North Shore (Mosman, Neutral Bay, North Sydney)</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Fully Insured & WHS Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
