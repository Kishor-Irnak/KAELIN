"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "For our standard E-Commerce package, we deliver within 1 week after the discovery phase. More complex Corporate or Enterprise builds typically take 2-4 weeks depending on integrations requested.",
    },
    {
      q: "Do you use pre-made templates?",
      a: "Absolutely not. We code every design from scratch to ensure your store matches your precise brand identity and achieves perfect Lighthouse performance scores.",
    },
    {
      q: "What e-commerce platforms do you support?",
      a: "We actively specialize in Shopify, Next.js Commerce, and WooCommerce depending on what architecture best fits your business goals.",
    },
    {
      q: "What is your pricing model?",
      a: "We have transparent flat-fee pricing starting at ₹50,000 one-time for Starter Stores, with no hidden monthly retainers unless you request ongoing custom development.",
    },
    {
      q: "Will my store be mobile-friendly and optimized for SEO?",
      a: "Yes. Every website we build adopts a 'mobile-first' strategy and comes pre-configured with on-page SEO best practices for faster indexing.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, we include 30-90 days of free technical support (depending on your plan) to ensure your team is perfectly comfortable managing the site.",
    },
  ];

  return (
    <section className="bg-white py-24 text-[#1A2E22] border-t border-[#1A2E22]/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-5xl uppercase tracking-wider font-light mb-16"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="text-left space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#1A2E22]/10 transition-colors ${openIndex === i ? "bg-[#F3F1EB] rounded-2xl border-none p-6" : "py-6 px-2"}`}
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold uppercase tracking-wider text-sm md:text-base pr-8">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[#1A2E22]/70 text-sm leading-relaxed tracking-wide">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
