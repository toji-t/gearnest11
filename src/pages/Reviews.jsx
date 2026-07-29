import { useState, useMemo } from "react";
import SEO from "../components/SEO";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";
import { categories } from "../data/categories";

export default function Reviews() {
  const [filter, setFilter] = useState("all");

  const list = useMemo(
    () => (filter === "all" ? reviews : reviews.filter((r) => r.category === filter)),
    [filter]
  );

  return (
    <>
      <SEO
        title="Reviews"
        description="Hands-on GearNest reviews of the laptops, headphones, keyboards, and gaming gear worth your money — pros, cons, and a clear verdict."
        path="/reviews"
      />

      <section className="mesh-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <p className="text-sm font-semibold text-cyan-300 mb-2">Hands-on testing</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">Reviews</h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Every review is written after real, hands-on time with the product — pros, cons, and a
            straight verdict.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === "all" ? "bg-navy text-white border-navy" : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === c.slug ? "bg-navy text-white border-navy" : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </section>
    </>
  );
}
