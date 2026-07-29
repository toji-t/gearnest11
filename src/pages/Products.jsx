import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import { categories, getCategory } from "../data/categories";
import { products } from "../data/products";

const sorts = [
  { value: "popular", label: "Most popular" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" },
];

export default function Products() {
  const { category: categorySlug } = useParams();
  const activeCategory = categorySlug ? getCategory(categorySlug) : null;
  const [sort, setSort] = useState("popular");

  const list = useMemo(() => {
    let result = categorySlug ? products.filter((p) => p.category === categorySlug) : products;
    result = [...result];
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "popular") result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [categorySlug, sort]);

  const title = activeCategory ? `${activeCategory.name} — Best ${activeCategory.name} to Buy` : "All Products";
  const description = activeCategory
    ? `Compare the best ${activeCategory.name.toLowerCase()} of 2026, ranked by our editors on performance, value, and real-world testing.`
    : "Browse every product GearNest has tested and recommends, across laptops, headphones, gaming gear, and more.";

  return (
    <>
      <SEO title={title} description={description} path={activeCategory ? `/products/${activeCategory.slug}` : "/products"} />

      <section className="mesh-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <p className="text-sm font-semibold text-cyan-300 mb-2">
            {activeCategory ? activeCategory.name : "Full catalog"}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
            {activeCategory ? activeCategory.name : "All products"}
          </h1>
          <p className="mt-3 text-white/60 max-w-xl">
            {activeCategory ? activeCategory.tagline : "Everything we've tested, in one place."}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              !activeCategory
                ? "bg-navy text-white border-navy"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/products/${c.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory?.slug === c.slug
                  ? "bg-navy text-white border-navy"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-slate-500">{list.length} products</p>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <Icon name="filter" className="w-4 h-4" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-slate-200 py-1.5 pl-2 pr-7 text-sm focus-visible:outline-2 focus-visible:outline-electric"
            >
              {sorts.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {list.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500">No products found in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
