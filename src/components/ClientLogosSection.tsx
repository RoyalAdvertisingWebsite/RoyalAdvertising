"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ClientLogoBrand = {
  name: string;
  image: string;
};

// All uploaded client logo files from public/images
const BRAND_LOGOS: ClientLogoBrand[] = [
  // ── Beverage & Refreshment Brands First ──
  { name: "Bisleri", image: "/images/bisleri.jpg" },
  { name: "Coca-Cola", image: "/images/Coca-Cola_logo.svg.webp" },
  { name: "Campa Cola", image: "/images/campa-cola.webp" },
  { name: "Campa Sure Water", image: "/images/campa-sure.webp" },
  { name: "Thums Up", image: "/images/thums-up.webp" },
  { name: "Coolberg", image: "/images/collberg.jpg" },
  { name: "Parag Milk Foods", image: "/images/parag.jpg" },
  { name: "Anik", image: "/images/anik.jpg" },
  { name: "Ananda", image: "/images/ananda.jpg" },

  // ── Corporate, Electronics & FMCG Brands ──
  { name: "Philips", image: "/images/Philips-Logo.wine.png" },
  { name: "Bajaj", image: "/images/Bajaj.jpg" },
  { name: "RSPL / RJPL", image: "/images/rjpl.png" },
  { name: "Prestige", image: "/images/prestige.png" },
  { name: "Dollar Industries", image: "/images/dollar.jpg" },
  { name: "Fena", image: "/images/fena.jpg" },
  { name: "Kamdhenu", image: "/images/kamdhenu.jpg" },
  { name: "Omron", image: "/images/omron.png" },
  { name: "Daenyx", image: "/images/daenyx.jpg" },
  { name: "GEM", image: "/images/gem.jpg" },
  { name: "Shalimar", image: "/images/shalimar.jpg" },
];

export default function ClientLogosSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="bg-[#fcfcfc] py-8 sm:py-10 lg:py-12 border-y border-gray-200/80 select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">

          {/* ── LEFT: Title & Chevron Left Arrow ── */}
          <div className="flex items-center justify-between w-full md:w-auto md:pr-8 lg:pr-10 md:border-r border-gray-300 flex-shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll clients left"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-4 h-[2px] bg-[#e31e24]" />
                  <span className="text-[10px] font-bold tracking-[0.22em] text-[#e31e24] uppercase">
                    Our Clients
                  </span>
                </div>
                <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] font-black tracking-tight text-gray-900 whitespace-nowrap">
                  Trusted by <span className="text-[#e31e24]">Leading Brands.</span>
                </h3>
              </div>
            </div>

            {/* Mobile-only right arrow */}
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll clients right"
              className="md:hidden text-gray-400 hover:text-gray-900 transition-colors p-1"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* ── MIDDLE: Real Image Logos Slider With Dividers ── */}
          <div className="relative flex-1 w-full overflow-hidden md:px-4">
            <div
              ref={sliderRef}
              className="flex items-center overflow-x-auto scroll-smooth no-scrollbar py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {BRAND_LOGOS.map((brand, i) => (
                <div
                  key={brand.name + i}
                  className="flex items-center justify-center flex-shrink-0 px-6 sm:px-8 lg:px-10 py-3 group cursor-pointer border-r border-gray-300 last:border-r-0"
                >
                  <div className="relative h-16 sm:h-20 lg:h-24 w-36 sm:w-44 lg:w-52 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 220px"
                      className="object-contain filter grayscale contrast-115 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Chevron Arrow for desktop ── */}
          <div className="hidden md:flex flex-shrink-0 pl-4">
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll clients right"
              className="text-gray-400 hover:text-gray-900 transition-colors p-1"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
