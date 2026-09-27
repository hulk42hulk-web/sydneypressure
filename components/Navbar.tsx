"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Droplets, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { useQuote } from "./QuoteContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 lg:px-8 pt-2 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? "bg-white/96 backdrop-blur-2xl py-2 px-3 sm:px-6 border border-sky-100/90 shadow-lg shadow-sky-950/5"
            : "bg-white/92 backdrop-blur-xl py-2.5 sm:py-3 px-3 sm:px-6 border border-white shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-1 sm:gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-0.5 shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="block text-xs sm:text-base font-extrabold tracking-tight text-slate-900 leading-tight">
                SYDNEY <span className="text-sky-600">PRESSURE</span>
              </span>
              <span className="block text-[9px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Washing Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-sky-700 bg-sky-100/70 border border-sky-200/60 shadow-xs"
                      : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <span className="hidden xl:inline text-slate-500 font-normal">Call</span>
              <span className="whitespace-nowrap">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger & Quote Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={() => openQuoteModal()}
              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 shadow-xs cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-white/80 border border-slate-200/60 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-7xl mx-auto px-1">
          <div className="p-4 rounded-2xl bg-white/98 backdrop-blur-2xl border border-sky-200/80 shadow-2xl space-y-3 animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-sky-700 bg-sky-50 font-bold border border-sky-200/50"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sky-200 text-sky-700 bg-sky-50 font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-xs shadow-md shadow-sky-600/20"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
