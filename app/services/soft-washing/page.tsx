import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "House Exterior Soft Washing Sydney | Render, Weatherboard & Siding",
  description:
    "Gentle low-pressure soft washing for Sydney homes. Eliminates mould, moss, and algae without damage to render, weatherboards, or paint. Call 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/services/soft-washing",
  },
};

export default function SoftWashingPage() {
  const service = SERVICES.find((s) => s.slug === "soft-washing");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      beforeAfterImages={{
        before: "/images/before-after.jpg",
        after: "/images/softwash.jpg",
        beforeLabel: "Before • Mildew & Algae",
        afterLabel: "After • Clean Softwashed Siding",
      }}
    />
  );
}
