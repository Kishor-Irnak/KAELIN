"use client";

const categories = [
  {
    title: "Fashion & Apparel",
    subtitle: "Boutique & D2C brands",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    tag: "Most Popular",
    active: true,
  },
  {
    title: "Electronics & Gadgets",
    subtitle: "Tech & consumer electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=600&auto=format&fit=crop",
    tag: "High AOV",
    active: false,
  },
  {
    title: "Furniture & Home Décor",
    subtitle: "Lifestyle & interior brands",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop",
    tag: "Premium Look",
    active: false,
  },
  {
    title: "Beauty & Wellness",
    subtitle: "Skincare, supplements & more",
    imageUrl:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
    tag: "",
    active: false,
  },
  {
    title: "Food & Grocery",
    subtitle: "FMCG & D2C food brands",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
    tag: "",
    active: false,
  },
  {
    title: "Sports & Fitness",
    subtitle: "Equipment & activewear",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    tag: "",
    active: false,
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 max-w-7xl mx-auto px-4">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h3
            className="reveal-text text-3xl mb-2"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            Every Category. Every Vision.
          </h3>
          <p className="text-sm text-[#1A2E22]/60">
            We build stores for all industries — premium-grade, always.
          </p>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`group cursor-pointer flex-shrink-0 ${cat.active ? "min-w-[280px]" : "min-w-[200px]"}`}
          >
            <div
              className={`w-full aspect-square rounded-2xl mb-4 relative overflow-hidden shadow-sm ${
                cat.active
                  ? "bg-[#1A2E22] shadow-2xl"
                  : "bg-white group-hover:shadow-xl transition-all border border-[#1A2E22]/5"
              }`}
            >
              <img
                src={cat.imageUrl}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  cat.active ? "opacity-50" : "group-hover:scale-105"
                }`}
                alt={cat.title}
              />
              {cat.active && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-white text-xs leading-relaxed">
                    <span className="font-semibold block mb-1">
                      {cat.title}
                    </span>
                    {cat.subtitle}
                  </p>
                </div>
              )}
              {!cat.active && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.tag && (
                    <span className="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                      {cat.tag}
                    </span>
                  )}
                </div>
              )}
            </div>
            <h4 className="font-medium text-sm">{cat.title}</h4>
            <p className="text-xs text-[#1A2E22]/50">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
