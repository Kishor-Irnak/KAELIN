"use client";

export default function ParallaxSection() {
  return (
    <section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
        className="absolute inset-0 w-full h-[120%] object-cover parallax-img"
        alt="Conversion-focused store design"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-[#1A2E22]/60 to-transparent opacity-90 z-0" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h2
          className="reveal-text text-white text-4xl md:text-6xl mb-12 text-center"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          Conversion lives in the <br /> details of experience.
        </h2>

        {/* Glass Metrics Card */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl translate-y-12 opacity-0 fade-up-element">
          <div className="flex justify-between items-center mb-6">
            <div className="text-white/80 text-xs uppercase tracking-wider">
              Success Metrics
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="space-y-6">
            {[
              {
                label: "Performance Score",
                value: "99/100",
                pct: "99%",
                color: "from-green-200 to-green-400",
              },
              {
                label: "Average Load Time",
                value: "< 1.5s",
                pct: "95%",
                color: "from-emerald-200 to-emerald-400",
              },
              {
                label: "Mobile Conversion Rate",
                value: "+42%",
                pct: "80%",
                color: "from-teal-200 to-teal-400",
              },
            ].map(({ label, value, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between text-white text-sm mb-2">
                  <span>{label}</span>
                  <span className="text-green-300">{value}</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${color}`}
                    style={{ width: pct }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex -space-x-3">
              {[
                <svg
                  key="a"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>,
                <svg
                  key="b"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 20h8M12 18v2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>,
                <svg
                  key="c"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="5"
                    y="2"
                    width="14"
                    height="20"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 18h.01"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
            <div className="text-right">
              <div
                className="text-white text-lg"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                Speed & Scale
              </div>
              <div className="text-white/60 text-[10px]">
                Continuous SEO Optimization
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
