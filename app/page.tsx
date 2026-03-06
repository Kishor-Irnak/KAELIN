"use client";

import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ProcessSection from "@/components/landing/ProcessSection";
import Footer from "@/components/landing/Footer";
import CustomEcommerceSection from "@/components/landing/CustomEcommerceSection";
import ExpectationsSection from "@/components/landing/ExpectationsSection";
import AgencyComparisonSection from "@/components/landing/AgencyComparisonSection";
import DiscoveryCallSection from "@/components/landing/DiscoveryCallSection";
import ReasonsSection from "@/components/landing/ReasonsSection";
import ConsultationFormSection from "@/components/landing/ConsultationFormSection";
import FaqSection from "@/components/landing/FaqSection";
import AvailableHiringSection from "@/components/landing/AvailableHiringSection";
import PricingSection from "@/components/landing/PricingSection";

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
      <CustomEcommerceSection />
      <PortfolioSection />
      <PricingSection />
      <ExpectationsSection />
      <AgencyComparisonSection />
      <DiscoveryCallSection />
      <ProcessSection />
      <ReasonsSection />
      <ConsultationFormSection />
      <FaqSection />
      <AvailableHiringSection />
      <Footer />
    </div>
  );
}
