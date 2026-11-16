"use client";

import Image from "next/image";
import { CheckCircle2, Cpu, Wrench, Factory, ShieldCheck, Printer, Cog } from "lucide-react";

const INFRA_HIGHLIGHTS = [
  "20 years of core experience",
  "Specialized and skilled manpower",
  "In-house printing setup",
  "3,000 sq. feet fabrication unit",
  "Complete In-house setup for Branding & advertising",
];

const MACHINERY = [
  {
    title: "ECO SOLVENT VERSA ART ValueJet",
    tag: "High-Resolution Eco Printing",
    desc: "Photorealistic indoor graphics, vinyls, translites, and precision corporate display printing.",
    icon: Printer,
  },
  {
    title: "SOLVENT MACHINE Wit-Color StarFire",
    tag: "High-Speed Industrial Outdoor",
    desc: "Heavy-duty outdoor flex, banners, hoarding prints with vibrant all-weather durability.",
    icon: Factory,
  },
  {
    title: "ROUTER & LASER 10 FT.",
    tag: "Computerized 2D/3D Fabrication",
    desc: "Precision acrylic, ACP sheet cutting, stainless steel (S.S.) fabrication, and bespoke 3D letters.",
    icon: Cog,
  },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="bg-white text-gray-900 py-14 lg:py-20 relative overflow-hidden border-t border-gray-100">
      

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff3b42] shadow-[0_0_8px_#ff3b42]" />
              <span className="text-[11px] font-bold text-[#ff4d52] tracking-[0.25em] uppercase">
                Plant, Machinery & Infrastructure
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black tracking-tight leading-[1.08] text-gray-900">
              Advanced In-House Production Setup.
            </h2>
            <p className="text-gray-500 text-[16px] sm:text-[17px] mt-4 leading-relaxed">
              Equipped with industrial-grade high-precision printing and computerized laser fabrication machinery to guarantee uncompromised quality and rapid turnaround.
            </p>
          </div>

          <div className="bg-white/5 border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 w-fit">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e31e24] to-[#b81419] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/20 flex-shrink-0">
              20+
            </div>
            <div>
              <div className="text-[14px] font-bold text-gray-900">Years of Core Experience</div>
              <div className="text-[12px] text-gray-500">Northern India's Trusted Media Plant</div>
            </div>
          </div>
        </div>

        {/* ── CORE SPECS & MACHINERY GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Capabilities Checklist & Unit Capacity Card */}
          <div className="bg-gray-50 rounded-[28px] p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff3b42] shadow-[0_0_8px_#ff3b42]" />
                <span className="text-[11px] font-bold text-[#ff4d52] tracking-[0.2em] uppercase">
                  Infrastructure Overview
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 tracking-tight">
                Complete In-House Setup for Branding & Advertising
              </h3>

              <ul className="space-y-4 mb-8">
                {INFRA_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[15px] sm:text-[16px] text-gray-700 font-semibold">
                    <CheckCircle2 size={20} className="text-[#ff383f] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stat Pill */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-xs sm:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <Wrench size={16} className="text-[#ff383f]" />
                Dedicated Fabrication Workshop
              </span>
              <span className="font-bold text-gray-900">3,000 Sq. Ft.</span>
            </div>
          </div>

          {/* RIGHT: Heavy Industrial Machinery Grid (3 Key Machines from user's brief) */}
          <div className="grid grid-cols-1 gap-5">
            {MACHINERY.map((mach, idx) => {
              const Icon = mach.icon;
              return (
                <div
                  key={mach.title}
                  className="bg-gray-50 rounded-[24px] p-6 sm:p-7 border border-gray-200 hover:border-[#e31e24]/50 transition-all duration-300 group shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
                >
                  {/* Permanent solid red container with white icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e31e24] to-[#b81419] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-[#ff4d52] tracking-wider uppercase block mb-1">
                      {mach.tag}
                    </span>
                    <h4 className="text-[19px] sm:text-[21px] font-black text-gray-900 group-hover:text-[#e31e24] transition-colors tracking-tight">
                      {mach.title}
                    </h4>
                    <p className="text-[13.5px] sm:text-[14px] text-gray-500 mt-1 leading-relaxed">
                      {mach.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
