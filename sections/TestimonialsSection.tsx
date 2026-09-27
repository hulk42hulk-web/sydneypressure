"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 relative mesh-bg-accent overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-sky-500" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Sydney Property Owners{" "}
            <span className="text-gradient-cyan">Say About Our Work</span>
          </h2>

          <div className="flex items-center justify-center gap-1 text-amber-500 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-2">
              5.0 Star Rating Across Sydney
            </span>
          </div>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
