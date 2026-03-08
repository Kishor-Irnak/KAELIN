"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F3F1EB]/95 backdrop-blur-md shadow-sm border-b border-[#1A2E22]/5"
          : "bg-[#F3F1EB]/80 backdrop-blur-md border-b border-[#1A2E22]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "Pricing", href: "#pricing" },
              { label: "Why Us", href: "#reasons" },
              { label: "FAQs", href: "#faq" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hover:text-[#1A2E22] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
            <img 
              src="/KAELIN/favicon-32x32.png" 
              alt="KaeLin Icon" 
              className="h-6 md:h-7 w-auto object-contain"
            />
            <span
              className="text-xl font-medium tracking-tighter uppercase text-[#1A2E22]"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              KaeLin
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="text-sm font-medium hidden md:block text-[#1A2E22]/70 hover:text-[#1A2E22] transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group"
            >
              Get Started
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* Mobile menu */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#1A2E22] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1A2E22] transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1A2E22] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-[#1A2E22]/5 space-y-3">
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "Pricing", href: "#pricing" },
              { label: "Why Us", href: "#reasons" },
              { label: "FAQs", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                className="block text-sm font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] py-1 transition-colors"
                onClick={(e) => {
                  setMenuOpen(false);
                  if (href !== "#contact") {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
