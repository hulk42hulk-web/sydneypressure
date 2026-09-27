"use client";

import React from "react";
import Link from "next/link";
import { Droplets, Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-sky-100 bg-gradient-to-b from-[#f8fcfd] via-white to-sky-50/40 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-r from-sky-100/40 via-cyan-100/30 to-sky-100/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-base font-extrabold tracking-tight text-slate-900 leading-tight">
                  SYDNEY <span className="text-sky-600">PRESSURE</span>
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Washing Service
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Sydney’s trusted pressure and soft washing specialists. Delivering high-calibre exterior restoration for residential homes, strata schemes, and commercial premises across Greater Sydney.
            </p>

            <div className="p-4 rounded-2xl glass-card bg-white/70 border border-sky-100/80 space-y-2.5 max-w-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Fully Insured & WHS Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
                <HeartHandshake className="w-4 h-4 text-sky-600" />
                <span>Biodegradable & Eco-Friendly Detergents</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-sky-600 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-sky-600 transition-colors">
                  About Our Business
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Contact & Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Core Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BUSINESS_INFO.phoneUrl}
                    className="font-bold text-slate-800 hover:text-sky-600 text-sm block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500">7 Days a Week</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Suburbs Strip */}
        <div className="mt-12 pt-8 border-t border-sky-100">
          <p className="text-xs font-semibold text-slate-700 mb-2">
            Primary Service Regions:
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_INFO.serviceSuburbs.map((suburb) => (
              <span
                key={suburb}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-600"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} {BUSINESS_INFO.legalName}. All rights reserved.
          </p>
          <p className="text-[11px]">
            Residential • Strata Body Corporate • Commercial Pressure Cleaning Sydney
          </p>
        </div>
      </div>
    </footer>
  );
}
