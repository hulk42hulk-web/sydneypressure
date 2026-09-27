"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, Eye, SlidersHorizontal, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useQuote } from "@/components/QuoteContext";

interface GalleryItem {
  id: string;
  title: string;
  category: "before-after" | "driveways" | "softwash" | "commercial" | "pool-deck" | "sandstone";
  categoryLabel: string;
  image: string;
  suburb: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Sandstone Patio Grime Eradication",
    category: "before-after",
    categoryLabel: "Before & After",
    image: "/images/before-after.jpg",
    suburb: "Bellevue Hill",
    description: "Deep organic black mold and slippery algae lifted from historic outdoor pavers.",
  },
  {
    id: "g2",
    title: "Exposed Aggregate Driveway Clean & Seal",
    category: "driveways",
    categoryLabel: "Driveways",
    image: "/images/driveway-sealed.jpg",
    suburb: "Vaucluse",
    description: "Rotary surface cleaning followed by protective wet-look sealing coat.",
  },
  {
    id: "g3",
    title: "Luxury Residence Architectural Soft Wash",
    category: "softwash",
    categoryLabel: "Exterior Soft Washing",
    image: "/images/softwash.jpg",
    suburb: "Mosman",
    description: "Gentle low-pressure foam wash for render, timber cladding, and eaves.",
  },
  {
    id: "g4",
    title: "Strata Complex Pavers & Pool Surround",
    category: "commercial",
    categoryLabel: "Commercial & Strata",
    image: "/images/strata.jpg",
    suburb: "Double Bay",
    description: "Anti-slip surface restoration for apartment building common pool area.",
  },
  {
    id: "g5",
    title: "Travertine Pool Coping & Outdoor BBQ Apron",
    category: "pool-deck",
    categoryLabel: "Pool Areas & Decks",
    image: "/images/pool.jpg",
    suburb: "Bondi",
    description: "Slip-free travertine wash with non-toxic solutions safe for swimming water.",
  },
  {
    id: "g6",
    title: "Commercial Warehouse Apron & Loading Bay",
    category: "commercial",
    categoryLabel: "Commercial & Strata",
    image: "/images/commercial.jpg",
    suburb: "Inner West Industrial",
    description: "High-temperature degreasing for heavy vehicle tyre rubber and fuel residues.",
  },
  {
    id: "g7",
    title: "Sydney Heritage Brick & Sandstone Courtyard",
    category: "sandstone",
    categoryLabel: "Sandstone & Brick",
    image: "/images/sandstone.jpg",
    suburb: "Paddington",
    description: "Mortar-safe wash returning natural warm honey hues to Victorian brickwork.",
  },
  {
    id: "g8",
    title: "High-Pressure Rotary Driveway Treatment",
    category: "driveways",
    categoryLabel: "Driveways",
    image: "/images/hero.jpg",
    suburb: "Rose Bay",
    description: "Zero-streak rotary surface wash eliminating years of vehicular traffic stains.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { openQuoteModal } = useQuote();

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "before-after", label: "Before & After" },
    { id: "driveways", label: "Driveways" },
    { id: "softwash", label: "House Soft Wash" },
    { id: "commercial", label: "Strata & Commercial" },
    { id: "sandstone", label: "Sandstone & Brick" },
    { id: "pool-deck", label: "Pools & Patios" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28 mesh-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-extrabold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Sydney Exterior Cleaning Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Our Work & Before/After{" "}
            <span className="text-gradient-cyan">Gallery</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore authentic transformations delivered across Sydney homes, strata complexes, and commercial properties.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 scale-105"
                    : "glass-pill text-slate-700 hover:text-sky-700 hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Interactive Comparison Slider Section */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-700">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Restoration Comparison</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Slide to Compare: Weathered vs Restored Sandstone & Concrete
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after.jpg"
              afterImage="/images/sandstone.jpg"
              beforeLabel="Before • Embedded Grime"
              afterLabel="After • Restored Stone"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden glass-card-interactive bg-white/80 border border-white p-2.5 cursor-pointer shadow-lg hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-sky-900 bg-white/85 shadow-sm">
                  {item.categoryLabel}
                </div>

                {/* Suburb Tag */}
                <div className="absolute top-3 right-3 glass-pill px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-700 bg-white/85 shadow-sm">
                  {item.suburb}, Sydney
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-sky-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white text-sky-700 flex items-center justify-center shadow-xl">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel bg-white/90 border border-white text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <h3 className="text-2xl font-black text-slate-900">
            Want Similar Results on Your Property?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Send us a few quick photos of your driveway, sandstone walls, or house exterior and receive a fast, free quotation.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-md shadow-sky-600/20 text-xs sm:text-sm cursor-pointer"
            >
              <span>Get Your Free Photo Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-panel bg-white/95 rounded-3xl border border-white p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-100">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  {selectedImage.categoryLabel} • {selectedImage.suburb}, Sydney
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
                {selectedImage.description}
              </p>
              <button
                onClick={() => {
                  const title = selectedImage.title;
                  setSelectedImage(null);
                  openQuoteModal(title);
                }}
                className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 text-xs shadow-md shadow-sky-600/20 cursor-pointer"
              >
                Quote This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
