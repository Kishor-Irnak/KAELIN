"use client";

import { ArrowRight } from "lucide-react";

export default function ExpectationsSection() {
  return (
    <section className="bg-white py-24 text-[#1A2E22] border-t border-[#1A2E22]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2
              className="text-3xl md:text-5xl uppercase tracking-wider font-light mb-12 leading-tight"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              What You Can Expect <br />
              <span className="font-semibold text-lg tracking-widest block mt-4 text-[#1A2E22]/80">
                In Your Business Growth
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <span
                  className="text-4xl font-light text-[#1A2E22]/40"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                  }}
                >
                  01.
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                    More Revenue
                  </h3>
                  <p className="text-sm text-[#1A2E22]/70 leading-relaxed uppercase tracking-widest">
                    Skyrocket your sales with our high-conversion setup.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span
                  className="text-4xl font-light text-[#1A2E22]/40"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                  }}
                >
                  02.
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                    More Trust
                  </h3>
                  <p className="text-sm text-[#1A2E22]/70 leading-relaxed uppercase tracking-widest">
                    Build credibility with a premium, avant-garde design.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span
                  className="text-4xl font-light text-[#1A2E22]/40"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                  }}
                >
                  03.
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                    More Time
                  </h3>
                  <p className="text-sm text-[#1A2E22]/70 leading-relaxed uppercase tracking-widest">
                    We handle the tech, so you can focus on product and
                    marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Box */}
          <div className="border-t-4 border-[#1A2E22] bg-[#F3F1EB] p-12 shadow-sm relative">
            <h3
              className="text-2xl font-light uppercase tracking-widest mb-2"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Think No More
            </h3>
            <h4 className="text-3xl font-bold uppercase tracking-wider mb-6">
              Book A Free
              <br />
              Consultation
            </h4>

            <ul className="space-y-4 mb-8 text-sm uppercase tracking-widest text-[#1A2E22]/80 font-medium list-disc list-inside">
              <li>15 Minute Discovery</li>
              <li>Brand Analysis</li>
              <li>Design Strategy</li>
              <li>Conversion Audit</li>
              <li>Growth Roadmap</li>
              <li>Technical Consultation</li>
              <li>Actionable Insights</li>
            </ul>

            <a
              href="#contact"
              className="btn-premium inline-flex w-full justify-center items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all mt-4"
            >
              <span className="relative z-10">Book A Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
