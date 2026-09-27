import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import { BUSINESS_INFO } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sydneypressure.com.au"),
  title: {
    default: "Sydney Pressure Washing Service | Pressure & Soft Washing Sydney",
    template: "%s | Sydney Pressure Washing Service",
  },
  description:
    "Sydney Pressure Washing Service specializes in high or soft pressure washing using biodegradable materials. Affordable pricing across Eastern Suburbs, Inner West, City & North Shore.",
  keywords: [
    "Sydney pressure washing",
    "soft washing Sydney",
    "driveway cleaning Sydney",
    "strata pressure cleaning Sydney",
    "commercial exterior cleaning Sydney",
    "Bellevue Hill pressure washing",
    "pre-paint soft washing",
    "sandstone cleaning Sydney",
  ],
  authors: [{ name: "Sydney Pressure Washing Service" }],
  creator: "Sydney Pressure Washing Service",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.sydneypressure.com.au/",
    siteName: "Sydney Pressure Washing Service",
    title: "Sydney Pressure Washing Service | Pressure & Soft Washing Sydney",
    description:
      "Professional pressure cleaning & biodegradable soft washing for residential, strata, and commercial properties. Free quotes: 0413 708 416.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sydney Pressure Washing Service in action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Pressure Washing Service | Pressure & Soft Washing Sydney",
    description:
      "Sydney Pressure Washing Service specializes in high or soft pressure washing using biodegradable materials.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: "https://www.sydneypressure.com.au/",
    logo: "https://www.sydneypressure.com.au/images/hero.jpg",
    image: "https://www.sydneypressure.com.au/images/hero.jpg",
    description:
      "Professional high-pressure and soft washing services using biodegradable detergents across Greater Sydney.",
    telephone: BUSINESS_INFO.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: "103A Birriga Road",
      addressLocality: "Bellevue Hill",
      addressRegion: "NSW",
      postalCode: "2023",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.8863,
      longitude: 151.2547,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/sydneypws/",
      "https://www.facebook.com/profile.php?id=100071327521489",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#f8fcfd] text-slate-900 overflow-x-hidden selection:bg-sky-500 selection:text-white">
        <QuoteProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
