"use client";

import { UserPlus, Briefcase, MessagesSquare } from "lucide-react";

export default function AvailableHiringSection() {
  return (
    <section className="bg-white py-24 text-[#1A2E22]">
      <div className="max-w-6xl mx-auto px-4 text-center border-t border-[#1A2E22]/10 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mb-24">
          <h2
            className="text-3xl md:text-5xl uppercase tracking-wider font-light"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
            }}
          >
            We Are Available
          </h2>
          <span className="text-[#1A2E22]/20 text-3xl md:text-5xl font-light">
            |
          </span>
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider font-bold text-[#1A2E22]/20">
            We Are Hiring
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F3F1EB] flex items-center justify-center mb-6 text-[#1A2E22]">
              <UserPlus size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-base mb-3 text-[#1A2E22]">
              Join The Team
            </h3>
            <p className="text-sm uppercase tracking-widest text-[#1A2E22]/60 leading-relaxed px-4">
              Looking for top-tier developers and ambitious designers.
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 md:mt-0">
            <div className="w-16 h-16 rounded-full bg-[#F3F1EB] flex items-center justify-center mb-6 text-[#1A2E22]">
              <Briefcase size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-base mb-3 text-[#1A2E22]">
              New Projects
            </h3>
            <p className="text-sm uppercase tracking-widest text-[#1A2E22]/60 leading-relaxed px-4">
              We are accepting new projects for next month. Book your spot
              today.
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 md:mt-0">
            <div className="w-16 h-16 rounded-full bg-[#F3F1EB] flex items-center justify-center mb-6 text-[#1A2E22]">
              <MessagesSquare size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-base mb-3 text-[#1A2E22]">
              Partner With Us
            </h3>
            <p className="text-sm uppercase tracking-widest text-[#1A2E22]/60 leading-relaxed px-4">
              Are you an agency? Use our white-label services to scale faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
