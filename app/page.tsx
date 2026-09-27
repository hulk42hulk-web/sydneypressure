import React from "react";
import HeroSection from "@/sections/HeroSection";
import TrustBarSection from "@/sections/TrustBarSection";
import ServicesGridSection from "@/sections/ServicesGridSection";
import ResidentialSection from "@/sections/ResidentialSection";
import StrataSection from "@/sections/StrataSection";
import CommercialSection from "@/sections/CommercialSection";
import SoftWashingEducationSection from "@/sections/SoftWashingEducationSection";
import BiodegradableSection from "@/sections/BiodegradableSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import PricingPreviewSection from "@/sections/PricingPreviewSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ServiceAreaSection from "@/sections/ServiceAreaSection";
import FaqSection from "@/sections/FaqSection";
import CtaBannerSection from "@/sections/CtaBannerSection";

export const metadata = {
  title: "Sydney Pressure Washing Service | Pressure & Soft Washing Sydney",
  description:
    "Professional exterior pressure cleaning and biodegradable soft washing for residential, strata, and commercial properties across Sydney. 100% satisfaction guarantee. Call 0413 708 416.",
  alternates: {
    canonical: "https://www.sydneypressure.com.au/",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <TrustBarSection />
      <ServicesGridSection />
      <ResidentialSection />
      <StrataSection />
      <CommercialSection />
      <SoftWashingEducationSection />
      <BiodegradableSection />
      <WhyChooseUsSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}
