import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Strata Pressure & Soft Cleaning Sydney | Body Corporate Maintenance",
  description:
    "Compliant strata common area washing: walkways, stairwells, underground carparks, and bin rooms. $20M insurance and WHS documentation. Call 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services/strata-cleaning",
  },
};

export default function StrataCleaningPage() {
  const service = SERVICES.find((s) => s.slug === "strata-cleaning");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      beforeAfterImages={{
        before: "/images/before-after.jpg",
        after: "/images/strata.jpg",
        beforeLabel: "Before • Grimy Common Areas",
        afterLabel: "After • Clean Strata Courtyard",
      }}
    />
  );
}
