"use client";

import { useEffect } from "react";

export default function Hero() {
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
      gsap.registerPlugin(ScrollTrigger);

      // Split text reveal
      const revealEls = document.querySelectorAll(".reveal-text");
      revealEls.forEach((el: Element) => {
        const element = el as HTMLElement;
        const text = element.innerText;
        const words = text.split(" ");
        let html = "";
        words.forEach((word) => {
          html += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
        });
        element.innerHTML = html;
        const wordSpans = element.querySelectorAll(".word");
        gsap.to(wordSpans, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.04,
        });
      });

      // CTA reveal
      gsap.to("#hero-cta", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      // Badge reveal
      gsap.to("#hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Parallax images
      document
        .querySelectorAll(".parallax-wrapper")
        .forEach((wrapper: Element) => {
          const img = wrapper.querySelector(".parallax-img");
          if (img) {
            gsap.fromTo(
              img,
              { y: "-10%" },
              {
                y: "10%",
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }
        });

      // Fade up elements
      gsap.utils.toArray(".fade-up-element").forEach((el: unknown) => {
        const element = el as Element;
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    };
    init();
  }, []);

  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Trust Badge */}
      <div
        id="hero-badge"
        className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 translate-y-4"
      >
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover"
              alt="Client"
            />
          ))}
        </div>
        <span className="text-xs font-medium tracking-wide uppercase text-[#1A2E22]/60">
          50+ Shopify Stores Built Across India
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1
          className="reveal-text text-5xl md:text-7xl leading-[1.1] font-light tracking-tight mb-6"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          Your Dream Shopify Store, Built for India.
        </h1>
        <p className="text-lg text-[#1A2E22]/70 max-w-xl mx-auto leading-relaxed">
          We craft premium Shopify storefronts for every category — fashion,
          electronics, furniture, and beyond.{" "}
          <span className="md:block">
            Starting from ₹50,000. Launched in weeks.
          </span>
        </p>
        <div className="mt-8 opacity-0 translate-y-4" id="hero-cta">
          <a
            href="#contact"
            className="inline-block bg-[#1A2E22] text-[#F3F1EB] px-8 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#1A2E22]/10"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">
        {/* Left Image */}
        <div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop"
            className="w-full h-[120%] object-cover parallax-img"
            alt="Fashion Shopify Store"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="text-xs font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Mobile-First Design
            </p>
          </div>
        </div>

        {/* Middle Card */}
        <div className="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1A2E22]/5">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F3F1EB] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9Z"
                    stroke="#1A2E22"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#1A2E22]/20"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 8H18M6 12H14M6 16H10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3
              className="text-2xl mb-1"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              Premium Architecture
            </h3>
            <p className="text-xs text-[#1A2E22]/60">
              Extreme focus on conversion rate (CRO).
            </p>
          </div>
          <div className="space-y-3 mt-8">
            {[
              { label: "Platform", value: "Shopify & Shopify Plus" },
              { label: "Design", value: "Custom UI/UX" },
              { label: "Delivery", value: "2–4 Weeks" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between text-xs border-b border-gray-100 pb-2 last:border-0"
              >
                <span className="text-gray-500">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
            className="w-full h-[120%] object-cover parallax-img"
            alt="Shopify Store Analytics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
            <p
              className="text-xl leading-tight"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              Designs that turn visitors into loyal customers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
