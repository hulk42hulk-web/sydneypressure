"use client";

import React from "react";
import { ShieldCheck, Leaf, Wrench, CheckCircle, MapPin } from "lucide-react";
import { TRUST_BADGES } from "@/lib/data";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  Wrench: Wrench,
  CheckCircle: CheckCircle,
  MapPin: MapPin,
};

export default function TrustBadges() {
  return (
    <div className="w-full">
      <div className="glass-panel rounded-2xl md:rounded-3xl p-3.5 sm:p-6 md:p-7 shadow-xl shadow-sky-950/5 border border-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 md:gap-6">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={badge.title}
                className="flex flex-row sm:flex-col items-center sm:text-center text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 sm:bg-transparent border border-sky-100/70 sm:border-0 gap-3 sm:gap-0 transition-all hover:bg-white/90"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center sm:mb-2.5 shadow-xs shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1 sm:w-full">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-relaxed sm:leading-normal sm:max-w-[190px] sm:mx-auto">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
