"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "/images/before-after.jpg",
  afterImage = "/images/driveway-sealed.jpg",
  beforeLabel = "Before Washing",
  afterLabel = "After Restoration",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden glass-card border border-white shadow-xl p-1.5 sm:p-2.5 select-none">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Background layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After pressure cleaning restoration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
          {/* After Tag */}
          <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-10 glass-pill px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-sky-900 bg-white/90 shadow-sm flex items-center gap-1 border border-sky-300/70 pointer-events-none">
            <Sparkles className="w-3 h-3 text-sky-600 shrink-0" />
            <span className="sm:hidden">After</span>
            <span className="hidden sm:inline">{afterLabel}</span>
          </div>
        </div>

        {/* Before Image (Foreground layer clipped to sliderPosition) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}>
            <Image
              src={beforeImage}
              alt="Before pressure cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          </div>
          {/* Before Tag */}
          <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10 glass-pill px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-800 bg-white/90 shadow-sm border border-slate-300/80 pointer-events-none">
            <span className="sm:hidden">Before</span>
            <span className="hidden sm:inline">{beforeLabel}</span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Draggable Button Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-sky-500 shadow-xl flex items-center justify-center text-sky-700 pointer-events-auto hover:scale-110 active:scale-95 transition-transform duration-150">
            <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>

      <div className="pt-2 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] sm:text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Drag slider to compare</span>
        <span className="text-[10px] sm:text-[11px] text-sky-700 font-medium">100% Real Pressure Washing Results</span>
      </div>
    </div>
  );
}
