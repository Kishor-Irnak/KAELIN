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
          {/* Left: Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
            <a
              href="#services"
              className="hover:text-[#1A2E22] transition-colors"
            >
              Services
            </a>
            <a
              href="#categories"
              className="hover:text-[#1A2E22] transition-colors"
            >
              Categories
            </a>
            <a
              href="#process"
              className="hover:text-[#1A2E22] transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#1A2E22]"
            >
              <path
                d="M20.5 7.5C19.5 5 17 3 12 3C6.5 3 3 6.5 3 12C3 17.5 6.5 21 12 21C17 21 19.5 19 20.5 16.5"
                stroke="#1A2E22"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 12H16M13 9L16 12L13 15"
                stroke="#1A2E22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-xl font-medium tracking-tighter uppercase"
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
            {["#services", "#categories", "#process", "#contact"].map(
              (href, i) => (
                <a
                  key={i}
                  href={href}
                  className="block text-sm font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] py-1 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </a>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
