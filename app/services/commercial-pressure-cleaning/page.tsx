import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Commercial Pressure Cleaning Sydney | Warehouses, Docks & Forecourts",
  description:
    "Commercial high-output pressure cleaning in Sydney. Industrial degreasing for warehouses, loading docks, retail aprons, and petrol stations. Call 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services/commercial-pressure-cleaning",
  },
};

export default function CommercialPressureCleaningPage() {
  const service = SERVICES.find((s) => s.slug === "commercial-pressure-cleaning");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      beforeAfterImages={{
        before: "/images/before-after.jpg",
        after: "/images/commercial.jpg",
        beforeLabel: "Before • Heavy Oil & Grime",
        afterLabel: "After • Clean Commercial Apron",
      }}
    />
  );
}
