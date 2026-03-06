"use client";

import { ArrowRight } from "lucide-react";

export default function ConsultationFormSection() {
  return (
    <section
      id="contact"
      className="bg-[#F3F1EB] py-24 text-[#1A2E22] border-t border-[#1A2E22]/10"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-5xl uppercase tracking-wider font-light mb-4 fade-up"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          Book Your Free
          <br />
          Consultation Call
        </h2>

        <div className="bg-white rounded-[2rem] p-12 mt-16 shadow-sm border border-[#1A2E22]/10 relative overflow-hidden fade-up">
          {/* subtle background graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3F1EB] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

          <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 relative z-10 text-[#1A2E22]">
            Grow Your Brand Fast
          </h3>

          <form
            className="relative z-10 text-left space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#1A2E22]/70">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#F3F1EB] border-none rounded-lg p-4 text-sm outline-none focus:ring-2 focus:ring-[#1A2E22]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#1A2E22]/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#F3F1EB] border-none rounded-lg p-4 text-sm outline-none focus:ring-2 focus:ring-[#1A2E22]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2E22]/70">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full bg-[#F3F1EB] border-none rounded-lg p-4 text-sm outline-none focus:ring-2 focus:ring-[#1A2E22]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2E22]/70">
                What do you need?
              </label>
              <select className="w-full bg-[#F3F1EB] border-none rounded-lg p-4 text-sm outline-none focus:ring-2 focus:ring-[#1A2E22] text-[#1A2E22]/70">
                <option>Select an option</option>
                <option>New E-Commerce Store</option>
                <option>Store Migration</option>
                <option>Custom Development</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-premium mt-8 w-full flex justify-center items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-8 py-5 rounded-lg text-sm uppercase tracking-widest font-semibold transition-all"
            >
              <span className="relative z-10">Get A Quote</span>
              <ArrowRight size={16} className="relative z-10" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
