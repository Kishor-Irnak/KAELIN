"use client";

import { ArrowRight, MonitorSmartphone } from "lucide-react";

export default function DiscoveryCallSection() {
  return (
    <section className="bg-white py-24 text-[#1A2E22] border-t border-[#1A2E22]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-5xl uppercase tracking-wider font-light mb-4 text-[#1A2E22]"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          Book Your Free
          <br />
          Consultation Call
        </h2>
        <p className="font-semibold text-sm md:text-base uppercase tracking-widest text-[#1A2E22]/60 mb-16">
          Are you ready to grow? Let&apos;s take your business to the next level
        </p>

        <div className="relative max-w-4xl mx-auto py-16">
          {/* Connecting dashed lines and pointers (hidden on small screens) */}
          <div className="hidden md:block absolute inset-0 max-w-2xl mx-auto">
            <svg className="absolute w-full h-full" style={{ left: 0, top: 0 }}>
              <path
                d="M 120 120 L 250 180"
                stroke="#1A2E22"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.2"
              />
              <path
                d="M 120 280 L 250 250"
                stroke="#1A2E22"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.2"
              />
              <path
                d="M 550 120 L 410 180"
                stroke="#1A2E22"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.2"
              />
              <path
                d="M 550 280 L 410 250"
                stroke="#1A2E22"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.2"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-0">
            {/* Left Points */}
            <div className="flex flex-col gap-16 md:w-1/3 text-center md:text-right">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1 text-[#1A2E22]">
                  Top-notch
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1A2E22]/50">
                  Developers & Engineers
                </p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1 text-[#1A2E22]">
                  World-Class
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1A2E22]/50">
                  Designers & Creatives
                </p>
              </div>
            </div>

            {/* Center Graphic */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-[#F3F1EB] rounded-full border border-[#1A2E22]/10 flex flex-col items-center justify-center p-8 relative shadow-sm">
              <MonitorSmartphone
                size={80}
                strokeWidth={1}
                className="text-[#1A2E22]/80"
              />
              <div className="absolute -bottom-4 bg-white border border-[#1A2E22]/20 shadow-sm rounded-full px-6 py-2 text-xs uppercase tracking-widest font-bold">
                E-Commerce
              </div>
            </div>

            {/* Right Points */}
            <div className="flex flex-col gap-16 md:w-1/3 text-center md:text-left">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1 text-[#1A2E22]">
                  Fastest
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1A2E22]/50">
                  Delivery Time (1 Week)
                </p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1 text-[#1A2E22]">
                  Outstanding
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1A2E22]/50">
                  Communication & Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <h3 className="text-xl md:text-2xl uppercase tracking-wider font-light mb-2 text-[#1A2E22]">
            15 Minute Rapid Discovery
          </h3>
          <p className="text-sm uppercase tracking-widest text-[#1A2E22]/50 mb-8 font-semibold">
            Your Business Catalyst
          </p>
          <a
            href="#contact"
            className="btn-premium inline-flex justify-center items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all"
          >
            <span className="relative z-10">Book A Call</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
