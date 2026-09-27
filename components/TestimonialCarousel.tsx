"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative glass-card bg-white/85 p-6 sm:p-10 md:p-12 rounded-3xl border border-white shadow-xl shadow-sky-950/5">
        {/* Decorative Quote Icon */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-sky-200 pointer-events-none">
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 opacity-40 rotate-180" />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-xs font-bold text-slate-700">5.0 Star Verified Review</span>
        </div>

        {/* Review Quote */}
        <p className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic min-h-[90px]">
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Customer Info */}
        <div className="mt-8 pt-6 border-t border-sky-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3" />
                <span>{item.date}</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {item.suburb}, Sydney • <span className="text-sky-700 font-medium">{item.service}</span>
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full glass-card hover:bg-white flex items-center justify-center text-slate-700 hover:text-sky-600 border border-slate-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full glass-card hover:bg-white flex items-center justify-center text-slate-700 hover:text-sky-600 border border-slate-200 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === i ? "w-8 bg-sky-600" : "w-2 bg-sky-200 hover:bg-sky-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
