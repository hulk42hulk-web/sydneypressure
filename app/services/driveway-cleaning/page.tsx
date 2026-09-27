import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Driveway Cleaning & Sealing Sydney | Concrete & Paver Restoration",
  description:
    "Professional driveway pressure cleaning and protective sealing across Sydney. Exposed aggregate, concrete, and brick pavers from $250. Free quotes: 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services/driveway-cleaning",
  },
};

export default function DrivewayCleaningPage() {
  const service = SERVICES.find((s) => s.slug === "driveway-cleaning");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      beforeAfterImages={{
        before: "/images/before-after.jpg",
        after: "/images/driveway-sealed.jpg",
        beforeLabel: "Before • Grimy Concrete",
        afterLabel: "After • Cleaned & Sealed Driveway",
      }}
    />
  );
}
