"use client";

import React from "react";

interface CTAButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "outline";
}

export default function CTAButton({ 
  text = "Book Free Consultation", 
  className = "",
  variant = "primary"
}: CTAButtonProps) {
  const baseStyles = "btn-premium inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg group";
  
  const variants = {
    primary: "bg-[#1A2E22] text-[#F3F1EB] hover:shadow-[#1A2E22]/20",
    outline: "bg-transparent border border-[#1A2E22] text-[#1A2E22] hover:bg-[#1A2E22] hover:text-[#F3F1EB]"
  };

  return (
    <a
      href="#contact"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className="ml-2 group-hover:translate-x-1 transition-transform"
      >
        <path
          d="M5 12H19M13 6L19 12L13 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
