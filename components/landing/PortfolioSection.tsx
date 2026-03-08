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
    <section id="portfolio" className="pb-12 pt-4 md:pb-24 md:pt-12 bg-[#F3F1EB]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-4 md:mb-12">
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
              <div className="absolute inset-0 bg-black/10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/30 md:bg-white/20 backdrop-blur-md border border-white/30 md:border-white/40 flex items-center justify-center translate-y-0 md:translate-y-4 group-hover:translate-y-0 shadow-lg transition-all duration-300">
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

      {/* Stats Section with Premium Floating Card Effect */}
      <div className="mt-20 md:mt-32 mb-8 md:mb-16 relative perspective-1000">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 bg-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl rounded-[2rem] py-12 px-6 md:py-16 md:px-12 border border-[#1A2E22]/5 overflow-hidden relative group">
            
            {/* Subtle animated gradient background inside the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/10 opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-105" />

            {[
              { num: "250+", label: "Stores Launched" },
              { num: "12+", label: "Categories Served" },
              { num: "99", label: "Avg Lighthouse Score" },
              { num: "4 Wks", label: "Avg Delivery Time" },
            ].map(({ num, label }) => (
              <div 
                key={label} 
                className="text-center relative z-10 transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                <div
                  className="text-4xl md:text-5xl lg:text-[56px] font-light mb-3 md:mb-4 text-[#1A2E22] transition-colors duration-500 hover:text-[#2E8B7A]"
                  style={{ fontFamily: "var(--font-newsreader), serif", letterSpacing: "-0.02em" }}
                >
                  {num}
                </div>
                <div className="text-[10px] md:text-xs text-[#1A2E22]/50 font-bold uppercase tracking-[0.2em] md:tracking-[0.25em]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
