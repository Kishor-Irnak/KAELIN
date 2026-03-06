"use client";

import { useEffect } from "react";

const DATA = [
  "https://i.postimg.cc/Hxbbxwqx/kaelin-1.png",
  "https://i.postimg.cc/D0BJJB56/kaelin-2.png",
  "https://i.postimg.cc/cL8C0xqk/kaelin-3.png",
  "https://i.postimg.cc/SNYkzgZn/kaelin-4.png",
  "https://i.postimg.cc/Pq2B7D6R/kaelin-5.png",
  "https://i.postimg.cc/wj0pCnMn/kaelin-6.png",
  "https://i.postimg.cc/FRSwH6r6/kaelin-7.png",
  "https://i.postimg.cc/MprLbwvz/kaelin-8.png",
  "https://i.postimg.cc/vH02by7W/kaelin-9.png",
  "https://i.postimg.cc/pTQk7MXB/kaelin-10.png",
];

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
    <section className="relative w-full overflow-hidden">
      {/* Background 3D Carousel */}
      <div className="absolute inset-x-0 -top-16 md:-top-32 h-[800px] md:h-[1000px] z-0 pointer-events-none flex items-center justify-center opacity-30 select-none overflow-hidden scale-110 md:scale-100">
        <div
          className="scene"
          style={{
            WebkitMask:
              "linear-gradient(90deg, transparent, white 20% 80%, transparent)",
            mask: "linear-gradient(90deg, transparent, white 20% 80%, transparent)",
            perspective: "35em",
            display: "grid",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="a3d"
            style={
              {
                "--n": DATA.length,
                display: "grid",
                placeSelf: "center",
                transformStyle: "preserve-3d",
                animation: "ry 32s linear infinite",
              } as React.CSSProperties
            }
          >
            {DATA.map((url, i) => (
              <img
                key={i}
                className="card-bg"
                src={url}
                alt="hero bg"
                style={{ "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes ry { to { transform: rotateY(1turn); } }
          .a3d { animation: ry 32s linear infinite; }
          .card-bg {
             --w: 18em; 
             --ba: calc(1turn / var(--n));
             grid-area: 1 / 1;
             width: var(--w);
             aspect-ratio: 7 / 10;
             object-fit: cover;
             border-radius: 1.5em;
             backface-visibility: hidden;
             transform: rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 1em) / tan(0.5 * var(--ba))));
          }
          @media (prefers-reduced-motion: reduce) {
            .a3d { animation-duration: 128s; }
          }
        `,
          }}
        />
      </div>

      {/* Glow Behind Text to improve readability against dark images */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(243,241,235,0.95)_0%,rgba(243,241,235,0.5)_30%,rgba(243,241,235,0)_60%)]"></div>

      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            250+ Shopify Stores Built Across India
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1
            className="reveal-text text-5xl md:text-7xl leading-[1.1] font-light tracking-tight mb-6"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            Want a Custom Ecommerce Website <br className="hidden md:block" />{" "}
            in Just 1 Week?
          </h1>
          <p className="text-lg text-[#1A2E22]/70 max-w-2xl mx-auto leading-relaxed">
            Yesssss! Your dream website! <br className="hidden md:block" />
            All you need to do is tell us your requirements and we create a
            website that will give you more brand visibility and sales!
          </p>
          <div className="mt-8 opacity-0 translate-y-4" id="hero-cta">
            <a
              href="#contact"
              className="btn-hero-premium inline-flex items-center justify-center bg-[#1A2E22] text-[#F3F1EB] px-10 py-4 rounded-full text-[15px] uppercase tracking-widest font-bold transition-all"
            >
              <span className="relative z-10 w-full text-center">
                Book Free Consultation
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
