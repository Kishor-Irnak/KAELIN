"use client";

import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import QuoteSection from "@/components/landing/QuoteSection";
import CategoriesSection from "@/components/landing/CategoriesSection";
import ParallaxSection from "@/components/landing/ParallaxSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import PortfolioSection from "@/components/landing/PortfolioSection";

export default function Page() {
  useEffect(() => {
    // Footer parallax — initialized here so it runs after all components mount
    const initFooterParallax = async () => {
      if (typeof window === "undefined") return;
      let tries = 0;
      while (!(window as any).gsap && tries < 30) {
        await new Promise((r) => setTimeout(r, 200));
        tries++;
      }
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".parallax-footer-text",
        { y: "-20%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    };

    initFooterParallax();
  }, []);

  return (
    <div className="bg-[#F3F1EB] text-[#1A2E22]">
      <Navbar />
      <Hero />
      <QuoteSection />
      <PortfolioSection />
      <CategoriesSection />
      <ParallaxSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
