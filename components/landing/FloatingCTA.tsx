"use client";

import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Show button after 400px of scroll
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        show ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="flex items-center gap-2 bg-[#1A2E22] text-[#F3F1EB] px-6 py-4 rounded-full shadow-2xl hover:bg-opacity-90 transition-all group scale-100 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#2E8B7A] flex items-center justify-center -ml-2 group-hover:rotate-12 transition-transform">
          <MessageSquare size={16} className="text-[#F3F1EB]" />
        </div>
        <span className="text-sm font-bold uppercase tracking-wider">Book Consultation</span>
        <div className="bg-[#F3F1EB]/20 w-8 h-8 rounded-full flex items-center justify-center -mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </div>
      </a>
    </div>
  );
}
