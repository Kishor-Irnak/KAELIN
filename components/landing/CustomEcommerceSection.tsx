"use client";

import { ArrowRight } from "lucide-react";

export default function CustomEcommerceSection() {
  return (
    <section className="bg-[#F3F1EB] py-24 px-4 text-[#1A2E22]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          Want a custom
          <br />
          <span className="font-semibold">e-commerce</span>
          <br />
          website
          <br />
          <span className="font-semibold">in just 1 week?</span>
        </h2>

        <p className="text-sm md:text-base mb-8 tracking-widest uppercase">
          Book your call now, secure your spot!
        </p>

        <a
          href="#contact"
          className="btn-premium inline-flex items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all"
        >
          <span className="relative z-10">Book A Call</span>
          <ArrowRight size={16} className="relative z-10" />
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-24 border-t border-b border-[#1A2E22]/10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1A2E22]/10">
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <div className="w-16 h-16 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-light">2X</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2">
              Sales
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest">
              Conversion Rate
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-16 h-16 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-xl font-light">100</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2">
              Perfect
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest">
              Lighthouse Score
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-16 h-16 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-xl font-light">1W</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2">
              1 Week
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest">
              Fast Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
