"use client";

const plans = [
  {
    name: "Starter Store",
    badge: "Best for New Brands",
    price: "₹50,000",
    desc: "Perfect for new businesses entering ecommerce. Get a stunning, conversion-ready Shopify store.",
    features: [
      "Custom Theme Design",
      "Up to 100 Products",
      "Razorpay / UPI Integration",
      "Basic SEO Setup",
      "30 Days Support",
    ],
    cta: "Get Started",
    accent: false,
  },
  {
    name: "Growth Store",
    badge: "Most Popular",
    price: "₹90,000",
    desc: "For growing brands that need advanced features, integrations, and a premium experience.",
    features: [
      "Everything in Starter",
      "Unlimited Products",
      "Multi-currency & GST",
      "WhatsApp & CRM Integration",
      "Advanced Analytics Setup",
      "60 Days Priority Support",
    ],
    cta: "Choose Growth",
    accent: true,
  },
  {
    name: "Enterprise",
    badge: "Shopify Plus",
    price: "Custom",
    desc: "Large catalogues, B2B wholesale, ERP integration, and enterprise-grade infrastructure.",
    features: [
      "Everything in Growth",
      "Shopify Plus Setup",
      "Custom Checkout",
      "ERP / OMS Integration",
      "Dedicated Project Manager",
      "90 Days SLA Support",
    ],
    cta: "Talk to Us",
    accent: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#1A2E22] pt-24 pb-24 text-[#F3F1EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="border border-[#F3F1EB]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">
            Transparent Pricing
          </span>
          <h2
            className="reveal-text text-4xl md:text-5xl mt-6 mb-4 text-white"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            Store Plans for Every Budget.
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            No hidden costs. No surprises. Just world-class Shopify stores
            tailored to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.accent
                  ? "bg-[#F3F1EB] text-[#1A2E22]"
                  : "bg-white/5 border border-white/10 text-[#F3F1EB]"
              }`}
            >
              {plan.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1A2E22] text-[#F3F1EB] text-[10px] font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border border-[#F3F1EB]/20">
                    ★ Most Popular
                  </span>
                </div>
              )}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: plan.accent
                      ? "#1A2E22"
                      : "rgba(243,241,235,0.1)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke={plan.accent ? "#F3F1EB" : "#F3F1EB"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${plan.accent ? "bg-stone-200 text-[#1A2E22]" : "bg-white/10 text-white"}`}
                >
                  {plan.badge}
                </div>
              </div>

              <h3
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: plan.accent ? "inherit" : "inherit" }}
              >
                {plan.name}
              </h3>
              <p
                className={`text-xs mb-6 ${plan.accent ? "text-[#1A2E22]/60" : "text-white/50"}`}
              >
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span
                    className={`text-xs ml-1 ${plan.accent ? "text-[#1A2E22]/50" : "text-white/40"}`}
                  >
                    one-time
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#4ade80"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                  plan.accent
                    ? "bg-[#1A2E22] text-white hover:bg-[#1A2E22]/90"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>

              <p
                className={`text-center text-[10px] mt-4 ${plan.accent ? "text-[#1A2E22]/40" : "text-white/30"}`}
              >
                Limited spots available each month
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
