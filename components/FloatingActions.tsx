"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2 sm:gap-2.5 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card bg-white/95 border border-slate-200/80 shadow-md text-slate-600 hover:text-sky-600 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={BUSINESS_INFO.phoneUrl}
        aria-label="Call Sydney Pressure Washing Service"
        className="pointer-events-auto group flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full glass-card bg-white/95 border border-sky-300 shadow-lg shadow-sky-950/10 text-slate-800 hover:text-sky-600 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 text-white flex items-center justify-center shadow-xs shrink-0">
          <Phone className="w-4 h-4" />
        </div>
        <div className="hidden md:block text-left pr-1">
          <span className="block text-[9px] uppercase font-bold text-slate-400 leading-none">
            Call Direct
          </span>
          <span className="text-xs font-extrabold text-slate-900 leading-tight">
            {BUSINESS_INFO.phone}
          </span>
        </div>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-105 active:scale-95 border border-emerald-400"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 fill-white" />
        </div>
        <div className="hidden md:block text-left pr-1">
          <span className="block text-[9px] uppercase font-bold text-emerald-100 leading-none">
            WhatsApp
          </span>
          <span className="text-xs font-bold leading-tight">
            Fast Response
          </span>
        </div>
      </a>
    </div>
  );
}
