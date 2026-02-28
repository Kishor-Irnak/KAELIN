"use client";

export default function QuoteSection() {
  return (
    <section className="py-24 px-4 bg-white border-y border-[#1A2E22]/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="reveal-text text-3xl md:text-5xl leading-tight font-light text-[#1A2E22] tracking-tight"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          "It's not just a store. It's your brand&apos;s digital home — designed
          to turn every visitor into a lifelong customer."
        </h2>
      </div>
    </section>
  );
}
