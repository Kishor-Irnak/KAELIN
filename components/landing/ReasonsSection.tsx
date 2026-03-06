"use client";

import {
  LayoutTemplate,
  Smartphone,
  Gauge,
  Map,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function ReasonsSection() {
  const reasons = [
    {
      icon: <LayoutTemplate size={24} strokeWidth={1.5} />,
      title: "Clean Design",
      desc: "Beautiful, minimalist layouts that elevate your brand narrative and product appeal.",
    },
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "Mobile First",
      desc: "Optimized for mobile shoppers first ensuring zero drop-offs on small screens.",
    },
    {
      icon: <Gauge size={24} strokeWidth={1.5} />,
      title: "Light Speed",
      desc: "We prioritize 90+ Lighthouse scores for blazing fast page loads and seamless flow.",
    },
    {
      icon: <Map size={24} strokeWidth={1.5} />,
      title: "Clear Roadmap",
      desc: "No missed deadlines. We operate with radical transparency on tracking and delivery.",
    },
    {
      icon: <Users size={24} strokeWidth={1.5} />,
      title: "CRO Focused",
      desc: "Every button and element is placed with a conversion mindset to maximize sales.",
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Secure & Scalable",
      desc: "Built on robust architectures that can handle high traffic bursts during your sales.",
    },
  ];

  return (
    <section className="bg-white py-24 text-[#1A2E22] border-t border-[#1A2E22]/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-5xl uppercase tracking-wider font-light mb-16 text-[#1A2E22] fade-up"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          A Few More Reasons <br className="hidden md:block" />
          <span className="font-semibold text-lg md:text-xl tracking-widest block mt-4 text-[#1A2E22]/80">
            Why Clients Love Us
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 stagger-grid">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A2E22]/5 flex items-center justify-center mb-6 text-[#1A2E22] group-hover:bg-[#1A2E22] group-hover:text-[#F3F1EB] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold uppercase tracking-wider text-base mb-3 text-[#1A2E22]">
                {item.title}
              </h3>
              <p className="text-sm uppercase tracking-widest text-[#1A2E22]/60 leading-relaxed px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
