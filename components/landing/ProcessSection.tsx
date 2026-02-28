"use client";

// SVG icons for each step — no emojis
const StepIcons = [
  // 01 Discovery — phone/chat
  <svg key="01" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 12h8M8 8h5M6 20L9.5 17H19a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h1v3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // 02 Design — pen/ruler
  <svg key="02" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // 03 Development — code brackets
  <svg key="03" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M16 18l6-6-6-6M8 6L2 12l6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // 04 Launch — arrow up-right
  <svg key="04" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 17L17 7M7 7h10v10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

const steps = [
  {
    num: "01",
    title: "Free Discovery Call",
    desc: "We understand your brand, products, target audience, and business goals. No obligations.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Our designers craft a custom UI/UX wireframe tailored to your category and brand identity.",
  },
  {
    num: "03",
    title: "Development & Setup",
    desc: "We build your store with clean code — products, payments, shipping, and all integrations.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We go live and provide hands-on support for 30–90 days so you hit the ground running.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">
          Our Process
        </span>
        <h2
          className="reveal-text text-4xl md:text-5xl mt-6"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          From idea to launch <br className="hidden md:block" /> in 4 simple
          steps.
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="group relative">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] right-0 h-px bg-[#1A2E22]/10 z-0" />
            )}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#1A2E22]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A2E22] group-hover:border-[#1A2E22] text-[#1A2E22] group-hover:text-[#F3F1EB] transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-[#1A2E22]/10">
                {StepIcons[i]}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A2E22]/30 mb-2">
                {step.num}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[#1A2E22]/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
