"use client";

const services = [
  {
    tag: "Most Requested",
    title: "Custom Shopify Store Setup",
    desc: "End-to-end store build — design, development, product upload, and launch-ready configuration.",
    time: "2–3 Weeks",
  },
  {
    tag: "",
    title: "Store Redesign & Migration",
    desc: "Migrate from WooCommerce, Wix, or any platform to Shopify without losing your SEO or data.",
    time: "2 Weeks",
  },
  {
    tag: "",
    title: "Performance Optimization",
    desc: "Speed audit, CRO analysis, A/B testing, and mobile optimization for your existing Shopify store.",
    time: "1 Week",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1A2E22]/10 pb-6">
        <h2
          className="reveal-text text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          Our Services
        </h2>
        <div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {["Store Setup", "Redesign", "Migration", "Optimization"].map(
            (tab, i) => (
              <button
                key={i}
                className={`whitespace-nowrap pb-1 transition-colors ${
                  i === 0
                    ? "text-[#1A2E22] border-b-2 border-[#1A2E22]"
                    : "text-[#1A2E22]/40 hover:text-[#1A2E22]"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Service List */}
        <div className="space-y-0">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`group py-8 border-b border-[#1A2E22]/10 cursor-pointer ${i > 0 ? "opacity-60 hover:opacity-100 transition-opacity" : ""}`}
            >
              {svc.tag && (
                <span className="inline-block px-2 py-0.5 rounded border border-[#1A2E22]/20 text-[10px] uppercase tracking-wider mb-2">
                  {svc.tag}
                </span>
              )}
              <h3
                className="text-3xl group-hover:text-[#1A2E22]/70 transition-colors"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {svc.title}
              </h3>
              <p className="text-sm text-[#1A2E22]/60 mt-2">{svc.desc}</p>
              <div className="mt-4 flex gap-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-200">
                <span>{svc.time} delivery</span>
                <span>•</span>
                <a href="#contact" className="underline underline-offset-2">
                  Get a quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          <div className="parallax-wrapper rounded-2xl overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop"
              className="w-full h-[120%] object-cover parallax-img"
              alt="Store Design"
            />
          </div>
          <div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
              className="w-full h-[120%] object-cover parallax-img"
              alt="Analytics Dashboard"
            />
          </div>
        </div>
      </div>

      {/* Subtle pricing note */}
      <p className="mt-12 text-xs text-[#1A2E22]/40 font-medium tracking-wide">
        Investment starts from{" "}
        <span className="text-[#1A2E22]/60">₹50,000</span> — custom quote
        provided after discovery call.
      </p>

      {/* Features Pills */}
      <div className="mt-4 flex flex-wrap gap-3">
        {[
          "Shopify Partners",
          "GST Invoice",
          "Indian Payment Gateway",
          "Free 30-Day Support",
          "Razorpay / Paytm Integration",
          "WhatsApp Integration",
        ].map((label) => (
          <span
            key={label}
            className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="currentColor"
                fillOpacity="0.1"
              />
            </svg>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
