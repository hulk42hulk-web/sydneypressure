"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, UploadCloud, X } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/data";

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
}

export default function QuoteForm({
  initialService = "",
  onSuccess,
  isCompact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || SERVICES[0].title,
    propertyType: "Residential",
    suburb: "",
    message: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for seamless UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Quote Request Received!</h3>
        <p className="text-slate-600 max-w-md text-sm leading-relaxed">
          Thank you, <strong className="text-slate-900">{formData.name || "there"}</strong>. Our Sydney cleaning specialists will review your property requirements and contact you within 2 business hours.
        </p>
        <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-sky-950 text-sm max-w-md w-full text-left space-y-1.5">
          <p className="font-semibold text-sky-900 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-sky-600" /> Need immediate assistance?
          </p>
          <p className="text-xs text-sky-800">
            Call us directly at{" "}
            <a href={BUSINESS_INFO.phoneUrl} className="font-bold underline text-sky-700">
              {BUSINESS_INFO.phone}
            </a>{" "}
            (7:00 AM – 9:00 PM, 7 days).
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFileName(null);
          }}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 underline pt-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Your Name *
          </label>
          <input
            id="quote-name"
            type="text"
            required
            placeholder="e.g. David Campbell"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            id="quote-phone"
            type="tel"
            required
            placeholder="e.g. 0412 345 678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            id="quote-email"
            type="email"
            required
            placeholder="david@example.com.au"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400"
          />
        </div>
        <div>
          <label htmlFor="quote-suburb" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Sydney Suburb *
          </label>
          <input
            id="quote-suburb"
            type="text"
            required
            placeholder="e.g. Bellevue Hill, Bondi, Balmain"
            value={formData.suburb}
            onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Service Required *
          </label>
          <select
            id="quote-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 bg-white/90"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title} {s.startingPrice ? `(${s.startingPrice})` : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-property" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Property Type *
          </label>
          <select
            id="quote-property"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 bg-white/90"
          >
            <option value="Residential">Residential Home / Villa</option>
            <option value="Strata Complex">Strata / Body Corporate</option>
            <option value="Commercial">Commercial / Retail / Industrial</option>
            <option value="Pre-Paint Prep">Pre-Painting Preparation</option>
          </select>
        </div>
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="quote-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Property Details & Surface Condition
          </label>
          <textarea
            id="quote-message"
            rows={3}
            placeholder="Tell us about the area size, surface type (concrete, sandstone, pavers, render), or specific stains..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full glass-input px-3.5 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 resize-none"
          ></textarea>
        </div>
      )}

      {/* File upload simulator for photo estimation */}
      <div className="pt-1">
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Optional Property Photos (Speeds up quote)
        </label>
        <div className="relative border-2 border-dashed border-sky-200/80 hover:border-sky-400 rounded-xl p-3.5 text-center transition-colors bg-white/40">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="file-upload"
          />
          {fileName ? (
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-sky-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{fileName}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFileName(null);
                }}
                className="text-slate-400 hover:text-red-500"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <UploadCloud className="w-4 h-4 text-sky-600" />
              <span>Click or drag photos of driveway / walls (Optional)</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-lg shadow-sky-600/20 active:scale-[0.99] transition-all duration-200 text-sm md:text-base cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Processing Quote Request...</span>
            </div>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Your Free Quote</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
        <span>✓ 100% Free & No Obligation</span>
        <span>•</span>
        <span>✓ Fast Response Within 2 Hrs</span>
        <span>•</span>
        <span>✓ Fully Insured</span>
      </div>
    </form>
  );
}
