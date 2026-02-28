"use client";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#1A2E22] text-[#F3F1EB] pt-32 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">
              The Agency
            </p>
            <p
              className="text-3xl mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              E-commerce stores that blend aesthetics with conversions.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="text-xs font-medium bg-[#F3F1EB] text-[#1A2E22] px-5 py-2.5 rounded-full hover:bg-white transition-colors"
              >
                Request a Proposal
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">
              Contact
            </p>
            <a
              href="mailto:hello@kaelinstore.in"
              className="block text-lg mb-2 hover:opacity-70 transition-opacity tracking-tight"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              hello@kaelinstore.in
            </a>
            <p className="text-sm text-[#F3F1EB]/60 mb-6">+91 98765 43210</p>
            <p className="text-[10px] text-[#F3F1EB]/40 leading-relaxed">
              Pan India · Remote-First
              <br />
              Serving brands across India
              <br />
              Shopify Partners
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">
                Explore
              </span>
              {["Services", "Categories", "Process", "Pricing"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#F3F1EB]/70 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">
                Social
              </span>
              {["Instagram", "LinkedIn", "Twitter", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-[#F3F1EB]/70 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F3F1EB]/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F3F1EB]/30">
          <span>© 2025 KaeLin Store. All rights reserved.</span>
          <span>Crafted with care for Indian brands</span>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="w-full text-center leading-none overflow-hidden border-t border-[#F3F1EB]/5">
        <h1
          className="text-[26vw] leading-[0.75] text-[#F3F1EB]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          KAELIN
        </h1>
      </div>
    </footer>
  );
}
