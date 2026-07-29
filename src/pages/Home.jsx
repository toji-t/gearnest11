import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import GuideCard from "../components/GuideCard";
import Newsletter from "../components/Newsletter";
import ProductVisual from "../components/ProductVisual";
import { categories } from "../data/categories";
import { getFeaturedProducts } from "../data/products";
import { reviews } from "../data/reviews";
import { guides } from "../data/guides";

const whyItems = [
  {
    icon: "shield",
    title: "Tested, not templated",
    body: "Every recommendation comes from real hands-on time — we don't rewrite spec sheets and call it a review.",
  },
  {
    icon: "spark",
    title: "No pay-to-rank",
    body: "Placement is never for sale. Our badges reflect what we'd tell a friend, not who advertises the most.",
  },
  {
    icon: "filter",
    title: "Curated, not exhaustive",
    body: "We'd rather point you to five great options than bury you in fifty mediocre ones.",
  },
  {
    icon: "check",
    title: "Updated as gear changes",
    body: "Guides get revisited as new products launch, so you're never reading last year's advice.",
  },
];

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 4);
  const latestReviews = reviews.slice(0, 3);
  const latestGuides = guides.slice(0, 2);

  return (
    <>
      <SEO
        description="GearNest is your premium destination for in-depth tech reviews, buying guides, and product comparisons — laptops, headphones, gaming gear, and more."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GearNest",
          url: "https://www.gearnest.com/",
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden mesh-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Icon name="spark" className="w-3.5 h-3.5" /> Independent tech reviews
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-white text-balance">
              Discover better tech.
              <br />
              <span className="gradient-text">Choose smarter gear.</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-lg leading-relaxed">
              Hands-on reviews, honest comparisons, and buying guides that cut through
              spec-sheet noise — so you buy the right thing once.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white hover:from-blue-400 hover:to-cyan-400 transition-colors"
              >
                Browse gear <Icon name="arrowRight" className="w-4 h-4" />
              </Link>
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Read buying guides
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-white/50 text-sm">
              <div>
                <p className="font-display text-2xl font-semibold text-white">120+</p>
                <p>Products reviewed</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="font-display text-2xl font-semibold text-white">8</p>
                <p>Gear categories</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="font-display text-2xl font-semibold text-white">100%</p>
                <p>Independent testing</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-5 w-full max-w-md">
                <ProductVisual category="laptops" icon="laptop" className="aspect-square translate-y-6" />
                <ProductVisual category="headphones" icon="headphones" className="aspect-square" />
                <ProductVisual category="gaming" icon="gamepad" className="aspect-square" />
                <ProductVisual category="smartphones" icon="phone" className="aspect-square translate-y-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-electric mb-2">Shop by category</p>
            <h2 className="font-display text-3xl font-semibold text-navy text-balance">
              Find the right gear, faster
            </h2>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-electric transition-colors">
            View all <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-electric mb-2">Reader favorites</p>
              <h2 className="font-display text-3xl font-semibold text-navy text-balance">
                Popular products right now
              </h2>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-electric transition-colors">
              View all <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST REVIEWS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-electric mb-2">Fresh off the bench</p>
            <h2 className="font-display text-3xl font-semibold text-navy text-balance">
              Latest reviews
            </h2>
          </div>
          <Link to="/reviews" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-electric transition-colors">
            View all <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestReviews.map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </section>

      {/* BUYING GUIDES */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-cyan-300 mb-2">Don't know where to start?</p>
              <h2 className="font-display text-3xl font-semibold text-white text-balance">
                Buying guides
              </h2>
            </div>
            <Link to="/guides" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
              View all <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY GEARNEST */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold text-electric mb-2">Why GearNest</p>
          <h2 className="font-display text-3xl font-semibold text-navy text-balance">
            A tech media brand built around trust
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((item) => (
            <div key={item.title} className="text-center flex flex-col items-center gap-3 px-2">
              <span className="w-12 h-12 rounded-xl bg-blue-50 text-electric flex items-center justify-center">
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-display font-semibold text-navy">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <Newsletter />
      </section>
    </>
  );
}
