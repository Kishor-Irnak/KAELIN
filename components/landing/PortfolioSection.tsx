"use client";

const projects = [
  {
    id: 1,
    name: "Kookai",
    url: "https://www.kookai.com.au/",
    imageUrl: "https://i.postimg.cc/Hxbbxwqx/kaelin-1.png",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    id: 2,
    name: "Australian Brand",
    url: "https://australian-brand.com/en",
    imageUrl: "https://i.postimg.cc/D0BJJB56/kaelin-2.png",
    span: "md:col-span-5",
  },
  {
    id: 3,
    name: "Luno",
    url: "https://lunolife.com/",
    imageUrl: "https://i.postimg.cc/cL8C0xqk/kaelin-3.png",
    span: "md:col-span-5",
  },
  {
    id: 4,
    name: "Kathe Brand",
    url: "https://kathebrand.com/",
    imageUrl: "https://i.postimg.cc/SNYkzgZn/kaelin-4.png",
    span: "md:col-span-6",
  },
  {
    id: 5,
    name: "Liiteguard",
    url: "https://www.liiteguard.com/",
    imageUrl: "https://i.postimg.cc/Pq2B7D6R/kaelin-5.png",
    span: "md:col-span-6",
  },
  {
    id: 6,
    name: "Lucky Wang",
    url: "https://www.luckywang.com/",
    imageUrl: "https://i.postimg.cc/wj0pCnMn/kaelin-6.png",
    span: "md:col-span-12 h-[380px]",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#F3F1EB]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col text-center items-center">
          <h2
            className="reveal-text text-4xl md:text-5xl uppercase tracking-wider font-light text-[#1A2E22]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
            }}
          >
            Amazing Portfolio
          </h2>
          <p className="text-xl md:text-2xl mt-4 text-[#1A2E22] font-semibold uppercase tracking-widest">
            Exclusive for avant-garde brands.
          </p>
          <div className="mt-8">
            <a
              href="#portfolio"
              className="btn-premium inline-flex items-center gap-2 border border-[#1A2E22] text-[#1A2E22] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-all"
            >
              <span className="relative z-10">View All</span>
            </a>
          </div>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.span} group relative rounded-2xl overflow-hidden cursor-pointer block`}
            >
              <img
                src={project.imageUrl}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                alt={project.name}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center translate-y-4 group-hover:translate-y-0 shadow-lg transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M7 7h10v10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom strip — full bleed stats */}
      <div className="mt-16 border-t border-b border-[#1A2E22]/5 bg-[#F3F1EB]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "250+", label: "Stores Launched" },
            { num: "12+", label: "Categories Served" },
            { num: "99", label: "Avg Lighthouse Score" },
            { num: "4 Wks", label: "Avg Delivery Time" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-light mb-1"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {num}
              </div>
              <div className="text-xs text-[#1A2E22]/50 uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
