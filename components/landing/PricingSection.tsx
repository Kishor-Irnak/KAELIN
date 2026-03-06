"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#F3F1EB] py-24 text-[#1A2E22] border-t border-[#1A2E22]/10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-light mb-4">
            Pricing Plans
          </h2>
          <p className="font-semibold text-lg md:text-xl uppercase tracking-widest text-[#1A2E22]/80">
            No Hidden Fee
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-grid">
          {/* E-Commerce Plan */}
          <div className="bg-white rounded-[2rem] p-10 border border-[#1A2E22] shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <div className="mb-8">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                E-Commerce
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light">₹50,000</span>
                <span className="text-[#1A2E22]/60 font-medium uppercase tracking-widest text-sm">
                  / Onetime
                </span>
              </div>
            </div>

            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                {[
                  "Custom Shopify Theme Design",
                  "Up to 100 Products Setup",
                  "Razorpay / UPI Integration",
                  "Basic SEO Setup & Meta Tags",
                  "Responsive Mobile Friendly Design",
                  "30 Days Post-Launch Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#1A2E22] rounded-full p-0.5">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[#1A2E22]/80 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn-premium block w-full py-4 text-center rounded-full bg-[#1A2E22] text-[#F3F1EB] uppercase tracking-widest text-sm font-semibold transition-colors"
            >
              <span className="relative z-10">Choose Plan</span>
            </a>
          </div>

          {/* Corporate Plan */}
          <div className="bg-[#1A2E22] text-[#F3F1EB] rounded-[2rem] p-10 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="mb-8 relative">
              <div className="absolute top-0 right-0 bg-[#F3F1EB] text-[#1A2E22] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                Ultimate
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light">₹90,000</span>
                <span className="text-[#F3F1EB]/60 font-medium uppercase tracking-widest text-sm">
                  / Onetime
                </span>
              </div>
            </div>

            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in E-Commerce plan",
                  "Unlimited Products & Categories",
                  "Multi-currency & GST Setup",
                  "WhatsApp Chat & CRM Integration",
                  "Advanced Analytics & Meta Pixel",
                  "60 Days Priority Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#F3F1EB] rounded-full p-0.5">
                      <Check
                        size={12}
                        className="text-[#1A2E22]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-[#F3F1EB]/80 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn-premium btn-premium-light block w-full py-4 text-center rounded-full bg-[#F3F1EB] text-[#1A2E22] uppercase tracking-widest text-sm font-semibold transition-colors"
            >
              <span className="relative z-10">Choose Plan</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
