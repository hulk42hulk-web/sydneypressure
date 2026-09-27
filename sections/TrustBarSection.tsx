"use client";

import React from "react";
import TrustBadges from "@/components/TrustBadges";

export default function TrustBarSection() {
  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TrustBadges />
    </section>
  );
}
