"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#F3F1EB] py-12 md:py-24 text-[#1A2E22] border-t border-[#1A2E22]/10"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-light mb-4">
            Pricing
          </h2>
          <p className="font-semibold text-lg md:text-xl uppercase tracking-widest text-[#1A2E22]/80">
            No rigid themes. Custom stores that convert.
          </p>
        </div>

        <div className="bg-[#1A2E22] text-[#F3F1EB] rounded-[3rem] p-10 md:p-16 border border-[#1A2E22] shadow-xl text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6">
              Custom Shopify Store
            </h3>

            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <span className="text-[#F3F1EB]/60 font-medium uppercase tracking-widest text-sm">
                Starting from
              </span>
              <span className="text-6xl md:text-8xl font-light">
                ₹50,000
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto text-left mb-12">
              {[
                "100% Custom Design & Layout",
                "Conversion-Optimized User Flows",
                "Advanced Page Loading Speeds",
                "Mobile-First Responsive Setup",
                "Payment & Logistics Integration",
                "Post-Launch Technical Support",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#F3F1EB] rounded-full p-[3px]">
                    <Check
                      size={14}
                      className="text-[#1A2E22]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#F3F1EB]/90 md:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-premium btn-premium-light inline-block w-full md:w-auto px-16 py-5 text-center rounded-full bg-[#F3F1EB] text-[#1A2E22] uppercase tracking-widest text-base font-semibold transition-transform hover:scale-105"
            >
              <span className="relative z-10">Book Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
