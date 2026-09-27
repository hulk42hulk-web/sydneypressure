import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Residential Pressure Cleaning Sydney | Driveways, Patios & Decks",
  description:
    "Professional residential pressure washing across Sydney. Driveways, pool surrounds, sandstone, and decks. Biodegradable detergents & fully insured. Free quote: 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services/residential-pressure-cleaning",
  },
};

export default function ResidentialPressureCleaningPage() {
  const service = SERVICES.find((s) => s.slug === "residential-pressure-cleaning");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      beforeAfterImages={{
        before: "/images/before-after.jpg",
        after: "/images/hero.jpg",
        beforeLabel: "Before • Grimy Pavers",
        afterLabel: "After • Restored Surface",
      }}
    />
  );
}
