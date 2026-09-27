"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, Sparkles } from "lucide-react";
import { useQuote } from "./QuoteContext";
import QuoteForm from "./QuoteForm";

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedService } = useQuote();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Free Quote"
      className="fixed inset-0 z-50 overflow-y-auto p-2 sm:p-6 bg-slate-900/40 backdrop-blur-md flex justify-center items-start sm:items-center animate-in fade-in duration-200"
    >
      {/* Background click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={closeQuoteModal} />

      {/* Glassmorphic Modal Box */}
      <div className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl glass-panel bg-white/95 border border-white p-4 sm:p-8 shadow-2xl shadow-sky-950/20 z-10 my-3 sm:my-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-sky-100 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-[10px] sm:text-xs font-semibold mb-1.5 border border-sky-200/60">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>Fast Sydney Service</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
              Request Your Free Quote
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              100% transparent pricing • No obligation
            </p>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 sm:mt-5">
          <QuoteForm
            initialService={selectedService}
            onSuccess={() => {
              // keep modal open to show success state
            }}
          />
        </div>
      </div>
    </div>
  );
}
