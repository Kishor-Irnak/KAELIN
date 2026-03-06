"use client";

import { X, Check } from "lucide-react";

export default function AgencyComparisonSection() {
  return (
    <section className="bg-[#F3F1EB] py-24 text-[#1A2E22]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2
            className="text-4xl md:text-5xl uppercase tracking-wider font-light mb-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
            }}
          >
            Why We Stand Out
          </h2>
          <p className="font-semibold text-lg md:text-xl uppercase tracking-widest text-[#1A2E22]/80">
            A Better Way To Build Stores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] border border-[#1A2E22]/10 shadow-sm max-w-4xl mx-auto fade-up">
          {/* Traditional Agency */}
          <div className="bg-white p-12 relative flex flex-col justify-center">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8 text-center text-[#1A2E22]/60">
              Traditional Agency
            </h3>

            <ul className="space-y-6 stagger-grid">
              {[
                "Slow delivery (30-60 Days)",
                "Pre-made templates used",
                "High hidden fees & setup costs",
                "Poor communication & delays",
                "No post-launch technical support",
                "Basic unoptimized conversions",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-[#1A2E22]/60"
                >
                  <div className="min-w-6 min-h-6 bg-red-100/50 rounded-full flex items-center justify-center">
                    <X size={14} className="text-red-500" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Us / Scoop */}
          <div className="bg-[#1A2E22] text-[#F3F1EB] p-12 relative flex flex-col justify-center border-l-4 border-[#F3F1EB]">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8 text-center">
              Scoop Commerce
            </h3>

            <ul className="space-y-6 stagger-grid">
              {[
                "1-Week fast delivery",
                "100% Custom coded designs",
                "Transparent fixed pricing",
                "Daily updates & Slack support",
                "30 Days free post-launch support",
                "Cro-optimized user experience",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest"
                >
                  <div className="min-w-6 min-h-6 bg-[#F3F1EB] text-[#1A2E22] rounded-full flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
