"use client";

const testimonials = [
  {
    type: "text",
    title: "Sales Doubled in 3 Months",
    quote:
      '"Since launching our new Shopify store, our conversion rate jumped 45%. The mobile experience is exactly what our customers needed. Highly recommend!"',
    metric: "45%",
    metricLabel: "Increase in Sales",
    name: "Priya S.",
    role: "Founder, Fashion Brand, Mumbai",
  },
  {
    type: "video",
    quote:
      '"The store redesign didn\'t just improve aesthetics — it positioned our brand as premium in the Indian market. Orders from Tier 2 cities exploded."',
    name: "Rahul M.",
    role: "Head of E-commerce, Pune",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "text",
    title: "Lightning Fast & Beautiful",
    quote:
      '"The team delivered incredibly clean code. Our store loads in under 1.5s now. The post-launch WhatsApp support has been absolutely vital."',
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop",
    ],
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    name: "Anjali R.",
    role: "CEO, Electronics Store, Bengaluru",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F3F1EB] pt-24 pb-24">
      <div className="text-center mb-16 px-4">
        <span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">
          Real Results
        </span>
        <h2
          className="reveal-text text-3xl md:text-4xl mt-6 mb-4"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          Stores that sell. Clients that trust.
        </h2>
        <p className="text-[#1A2E22]/60 text-sm">
          See how we've helped Indian brands build world-class Shopify stores.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5">
          <div className="flex gap-1 text-[#1A2E22] mb-4 text-xs">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <h4
            className="text-lg mb-2"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            {testimonials[0].title}
          </h4>
          <p className="text-sm text-[#1A2E22]/70 leading-relaxed mb-6">
            {testimonials[0].quote}
          </p>
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1A2E22]/5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">
                {testimonials[0].metric}
              </span>
              <span className="text-[10px] text-[#1A2E22]/50">
                {testimonials[0].metricLabel}
              </span>
            </div>
            <div className="text-xs text-[#1A2E22]/50 text-right">
              <div className="font-medium">{testimonials[0].name}</div>
              <div>{testimonials[0].role}</div>
            </div>
          </div>
        </div>

        {/* Card 2 - Video Style */}
        <div className="bg-[#1A2E22] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
          <img
            src={testimonials[1].imageUrl}
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
            alt="Testimonial"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1A2E22] transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5"
              >
                <path d="M5 3L19 12L5 21V3Z" />
              </svg>
            </div>
            <p
              className="text-xl leading-snug mb-2"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              {testimonials[1].quote}
            </p>
            <p className="text-xs text-white/70">
              {testimonials[1].name}, {testimonials[1].role}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5 flex flex-col">
          <div className="mb-4">
            <h4
              className="text-lg mb-2"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              {testimonials[2].title}
            </h4>
            <p className="text-sm text-[#1A2E22]/70">{testimonials[2].quote}</p>
          </div>
          <div className="mt-auto">
            <div className="flex gap-2 mb-4 overflow-hidden">
              {testimonials[2].images?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-16 h-16 rounded-lg object-cover"
                  alt="Project"
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[2].avatar}
                className="w-8 h-8 rounded-full"
                alt="User"
              />
              <div className="text-xs">
                <div className="font-bold">{testimonials[2].name}</div>
                <div className="text-[#1A2E22]/50">{testimonials[2].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
