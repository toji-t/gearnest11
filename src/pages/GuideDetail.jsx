import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import { guides } from "../data/guides";
import { getProduct } from "../data/products";
import { getCategory } from "../data/categories";

export default function GuideDetail() {
const { slug } = useParams();

const guide = guides.find(
  (item) => item.slug.trim() === slug.trim()
);

if (!guide) {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
      <h1 className="text-3xl font-semibold text-navy">
        Guide not found
      </h1>
      <p className="mt-3 text-slate-500">
        Requested slug: {slug}
      </p>
    </div>
  );
}

    const category = getCategory(guide.category);

  const picks = Array.isArray(guide.picks)
    ? guide.picks
        .map((s) => getProduct(s))
        .filter(Boolean)
    : [];

  const sections = Array.isArray(guide.sections)
    ? guide.sections
    : [];

  return (
    <>
      <SEO
        title={guide.title}
        description={guide.excerpt}
        path={`/guides/${guide.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.excerpt,
          datePublished: guide.date,
        }}
      />

      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <div className="text-sm text-slate-400 flex items-center gap-2 mb-6">
          <Link to="/guides" className="hover:text-navy transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-slate-600">{category?.name}</span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-electric bg-blue-50 rounded-full px-3 py-1.5">
          <Icon name={category?.icon} className="w-3.5 h-3.5" />
          {category?.name} Guide
        </span>

        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-navy text-balance">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">{guide.excerpt}</p>
        <p className="mt-4 text-sm text-slate-400">
          Updated {new Date(guide.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {guide.readTime}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl font-semibold text-navy mb-3">{s.heading}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {picks.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-navy mb-6">Our picks</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {picks.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}

        <p className="mt-10 text-xs text-slate-400">
          Affiliate disclosure: GearNest may earn a commission from links in this guide. Read our{" "}
          <Link to="/affiliate-disclosure" className="underline hover:text-navy">
            affiliate disclosure
          </Link>
          .
        </p>
      </article>
    </>
  );
}
