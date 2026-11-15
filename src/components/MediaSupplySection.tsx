"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const MEDIA_SUPPLY_IMAGES = [
  {
    id: "ms-1",
    src: "/images/media_supply/03bfc9a7-c54d-4216-adae-007cd7338759.jpg",
    title: "Industrial Media Supply",
  },
  {
    id: "ms-2",
    src: "/images/media_supply/18a25def-8e38-42a4-814c-2ba1f90c255f.jpg",
    title: "Premium Print Substrates",
  },
  {
    id: "ms-3",
    src: "/images/media_supply/358522e5-900d-4e33-b5b0-2565fe5321fb.jpg",
    title: "Flex & Vinyl Roll Supply",
  },
  {
    id: "ms-4",
    src: "/images/media_supply/8bf2100c-fcba-4151-95d9-4e81edd43710.jpg",
    title: "High-Grade Printing Materials",
  },
  {
    id: "ms-5",
    src: "/images/media_supply/abab26df-68a1-4892-8b0d-d7fe96485ada.jpg",
    title: "Raw Material Warehouse & Distribution",
  },
  {
    id: "ms-6",
    src: "/images/media_supply/af2f12d8-9f26-46a4-aa36-1c2522b8964b.jpg",
    title: "Signage & Display Materials",
  },
  {
    id: "ms-7",
    src: "/images/media_supply/b5770af8-c575-4384-a0da-c1782c355a0e.jpg",
    title: "Commercial Media Stock",
  },
  {
    id: "ms-8",
    src: "/images/media_supply/d2f33699-cd0d-48b1-8491-3b66fc73c565.jpg",
    title: "Industrial Roll Inventory",
  },
];

export default function MediaSupplySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setSelectedIdx(idx);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + MEDIA_SUPPLY_IMAGES.length) % MEDIA_SUPPLY_IMAGES.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % MEDIA_SUPPLY_IMAGES.length);
    }
  };

  return (
    <section id="media-supply" className="bg-[#fafbfc] py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2.5px] bg-[#e31e24]" />
            <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
              Material & Substrate Inventory
            </span>
          </div>

          <h2 className="font-black leading-[1.08] tracking-tight text-gray-900 text-[34px] sm:text-[42px] lg:text-[48px]">
            MEDIA SUPPLY & <br />
            <span className="text-[#e31e24]">MATERIAL INVENTORY.</span>
          </h2>

          <p className="text-[16px] text-gray-500 leading-relaxed mt-4">
            Reliable supply of premium flex, vinyl, backlit films, acrylic sheets, and wide-format printing substrates for corporate branding and industrial-scale projects.
          </p>
        </div>

        {/* 8-Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_SUPPLY_IMAGES.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-[22px] overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-gray-200/80"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/75 transition-all duration-300" />

                {/* Eye Badge on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Eye size={18} />
                </div>

                {/* Title badge */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="text-[11px] font-bold tracking-widest text-[#e31e24] uppercase mb-1 block drop-shadow-sm">
                    Supply {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold text-[16px] leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <X size={26} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={MEDIA_SUPPLY_IMAGES[selectedIdx].src}
                alt={MEDIA_SUPPLY_IMAGES[selectedIdx].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-[12px] font-bold tracking-widest text-[#e31e24] uppercase block">
                {selectedIdx + 1} / {MEDIA_SUPPLY_IMAGES.length}
              </span>
              <p className="text-white text-lg font-semibold mt-1">
                {MEDIA_SUPPLY_IMAGES[selectedIdx].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
