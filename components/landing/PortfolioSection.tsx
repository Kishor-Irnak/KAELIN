"use client";

const projects = [
  {
    id: 1,
    name: "Aura Luxe",
    category: "Fashion & Apparel",
    tag: "D2C Brand",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    size: "large", // spans 2 rows
  },
  {
    id: 2,
    name: "Stackd Electronics",
    category: "Electronics & Gadgets",
    tag: "Tech Store",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 3,
    name: "Terra Home",
    category: "Furniture & Home Décor",
    tag: "Lifestyle",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 4,
    name: "Petal Skincare",
    category: "Beauty & Wellness",
    tag: "Skincare Brand",
    imageUrl:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 5,
    name: "Crunch & Sip",
    category: "Food & Grocery",
    tag: "FMCG D2C",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 6,
    name: "KineticGear",
    category: "Sports & Fitness",
    tag: "Equipment Store",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">
              Our Work
            </span>
            <h2
              className="reveal-text text-4xl md:text-6xl mt-5 leading-tight font-light"
              style={{ fontFamily: "var(--font-newsreader), serif" }}
            >
              Stores we&apos;ve built.
            </h2>
          </div>
          <p className="text-sm text-[#1A2E22]/50 max-w-xs mt-4 md:mt-0 leading-relaxed">
            Every store is crafted from scratch — no templates, no shortcuts.
            Replace these with your actual store screenshots when ready.
          </p>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          {/* Row 1: Large left (col 7) + Small right stack (col 5) */}
          <div className="md:col-span-7 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[0].imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={projects[0].name}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Always-visible subtle label */}
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium block mb-1">
                  {projects[0].tag}
                </span>
                <h3
                  className="text-white text-2xl"
                  style={{ fontFamily: "var(--font-newsreader), serif" }}
                >
                  {projects[0].name}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {projects[0].category}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M7 7h10v10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Category pill always visible */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                {projects[0].category}
              </span>
            </div>
          </div>

          {/* Row 1, right top */}
          <div className="md:col-span-5 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[1].imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={projects[1].name}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                {projects[1].category}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {projects[1].name}
              </h3>
              <p className="text-white/60 text-xs mt-1">{projects[1].tag}</p>
            </div>
          </div>

          {/* Row 2, right bottom */}
          <div className="md:col-span-5 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[2].imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={projects[2].name}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                {projects[2].category}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {projects[2].name}
              </h3>
              <p className="text-white/60 text-xs mt-1">{projects[2].tag}</p>
            </div>
          </div>

          {/* Row 3: Two equal columns */}
          <div className="md:col-span-6 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[3].imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={projects[3].name}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                {projects[3].category}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {projects[3].name}
              </h3>
              <p className="text-white/60 text-xs mt-1">{projects[3].tag}</p>
            </div>
          </div>

          <div className="md:col-span-6 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[4].imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={projects[4].name}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-medium bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                {projects[4].category}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {projects[4].name}
              </h3>
              <p className="text-white/60 text-xs mt-1">{projects[4].tag}</p>
            </div>
          </div>

          {/* Row 4: Full-width panoramic */}
          <div className="md:col-span-12 h-[380px] group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={projects[5].imageUrl}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              alt={projects[5].name}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium mb-2">
                {projects[5].tag}
              </span>
              <h3
                className="text-white text-3xl md:text-5xl font-light mb-2"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                {projects[5].name}
              </h3>
              <p className="text-white/50 text-sm">{projects[5].category}</p>
            </div>
            <div className="absolute top-8 right-8">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M7 7h10v10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — full bleed stats */}
      <div className="mt-16 border-t border-b border-[#1A2E22]/5 bg-[#F3F1EB]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "50+", label: "Stores Launched" },
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
