"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CustomEcommerceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      if (typeof window === "undefined") return;
      // Wait for GSAP to load
      let tries = 0;
      while (!(window as any).gsap && tries < 20) {
        await new Promise((r) => setTimeout(r, 200));
        tries++;
      }
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      const ctx = gsap.context(() => {
        // Animate headings fading up
        gsap.fromTo(
          ".animate-fade-up",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );

        // Cards animating in with a bounce stagger
        gsap.fromTo(
          ".stat-card",
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".stagger-grid",
              start: "top 90%",
            },
          }
        );

        // Number counter animation
        const numbers = gsap.utils.toArray(".stat-number");
        numbers.forEach((el: any) => {
          const targetValue = parseFloat(el.getAttribute("data-value") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          if (targetValue > 0) {
            gsap.fromTo(
              el,
              { innerHTML: 0 },
              {
                innerHTML: targetValue,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: ".stagger-grid",
                  start: "top 85%",
                },
                snap: { innerHTML: 1 },
                onUpdate: function () {
                  el.innerHTML =
                    Math.round(this.targets()[0].innerHTML) + suffix;
                },
              }
            );
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F3F1EB] py-12 md:py-24 px-4 text-[#1A2E22] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="animate-fade-up text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
          }}
        >
          Want a custom
          <br />
          <span className="font-semibold">e-commerce</span>
          <br />
          website
          <br />
          <span className="font-semibold">in just 1 week?</span>
        </h2>

        <p className="animate-fade-up text-sm md:text-base mb-8 tracking-widest uppercase">
          Book your call now, secure your spot!
        </p>

        <div className="animate-fade-up">
          <a
            href="#contact"
            className="btn-premium inline-flex items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all"
          >
            <span className="relative z-10">Book A Call</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 md:mt-24 border-t border-b border-[#1A2E22]/10 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1A2E22]/10 stagger-grid">
          
          <div className="stat-card group flex flex-col items-center text-center px-4 pt-4 md:pt-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#1A2E22] group-hover:border-[#1A2E22] group-hover:scale-110 group-hover:shadow-2xl">
              <span className="stat-number text-2xl font-light transition-colors duration-500 group-hover:text-[#F3F1EB]" data-value="2" data-suffix="X">
                0X
              </span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2 transition-colors duration-300">
              Sales
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#1A2E22]/90">
              Conversion Rate
            </p>
          </div>

          <div className="stat-card group flex flex-col items-center text-center px-4 pt-8 md:pt-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#1A2E22] group-hover:border-[#1A2E22] group-hover:scale-110 group-hover:shadow-2xl">
              <span className="stat-number text-xl font-light transition-colors duration-500 group-hover:text-[#F3F1EB]" data-value="100" data-suffix="">
                0
              </span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2 transition-colors duration-300">
              Perfect
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#1A2E22]/90">
              Lighthouse Score
            </p>
          </div>

          <div className="stat-card group flex flex-col items-center text-center px-4 pt-8 md:pt-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 border border-[#1A2E22]/20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#1A2E22] group-hover:border-[#1A2E22] group-hover:scale-110 group-hover:shadow-2xl">
              <span className="stat-number text-xl font-light transition-colors duration-500 group-hover:text-[#F3F1EB]" data-value="1" data-suffix="W">
                0W
              </span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2 transition-colors duration-300">
              1 Week
            </h3>
            <p className="text-sm text-[#1A2E22]/60 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#1A2E22]/90">
              Fast Delivery
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
