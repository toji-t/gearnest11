import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import RatingStars from "../components/RatingStars";
import ProductVisual from "../components/ProductVisual";
import { getReview } from "../data/reviews";
import { getProduct } from "../data/products";
import { getCategory } from "../data/categories";

export default function ReviewDetail() {
  const { slug } = useParams();
  const review = getReview(slug);

  if (!review) return <Navigate to="/reviews" replace />;

  const product = getProduct(review.productSlug);
  const category = getCategory(review.category);

  return (
    <>
      <SEO
        title={review.title}
        description={review.excerpt}
        path={`/reviews/${review.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: { "@type": "Product", name: product?.name },
          author: { "@type": "Person", name: review.author },
          reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
          datePublished: review.date,
        }}
      />

      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <div className="text-sm text-slate-400 flex items-center gap-2 mb-6">
          <Link to="/reviews" className="hover:text-navy transition-colors">Reviews</Link>
          <span>/</span>
          <span className="text-slate-600">{category?.name}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy text-balance">
          {review.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="font-medium text-slate-700">{review.author}</span>
          <span>·</span>
          <time dateTime={review.date}>
            {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <span>·</span>
          <span>{review.readTime}</span>
        </div>

        <div className="mt-6">
          <RatingStars rating={review.rating} size="md" />
        </div>

        <img
  src={product.image}
  alt={product.name}
  className="w-full aspect-[16/9] object-contain rounded-2xl bg-white mt-10 mb-10"
/>

        <p className="text-lg text-slate-600 leading-relaxed">{review.excerpt}</p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <h2 className="font-display font-semibold text-emerald-800 flex items-center gap-2 mb-4">
              <Icon name="check" className="w-5 h-5" /> What we liked
            </h2>
            <ul className="space-y-2.5">
              {review.pros.map((pro) => (
                <li key={pro} className="text-sm text-slate-600 flex items-start gap-2">
                  <Icon name="check" className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <h2 className="font-display font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <Icon name="close" className="w-5 h-5" /> Where it falls short
            </h2>
            <ul className="space-y-2.5">
              {review.cons.map((con) => (
                <li key={con} className="text-sm text-slate-600 flex items-start gap-2">
                  <Icon name="close" className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl mesh-navy p-8">
          <h2 className="font-display text-xl font-semibold text-white mb-3">The verdict</h2>
          <p className="text-white/70 leading-relaxed">{review.verdict}</p>
        </div>

        {product && (
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-slate-100 p-6">
            <ProductVisual category={product.category} icon={category?.icon} className="w-28 h-28 shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-slate-400">{product.brand}</p>
              <p className="font-display font-semibold text-lg text-navy">{product.name}</p>
              <p className="text-slate-500 text-sm mt-1">{product.tagline}</p>
            </div>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Check price <Icon name="arrowRight" className="w-4 h-4" />
            </a>
          </div>
        )}

        <p className="mt-8 text-xs text-slate-400">
          Affiliate disclosure: GearNest may earn a commission from links on this page. This does not
          affect our editorial opinions. Read our{" "}
          <Link to="/affiliate-disclosure" className="underline hover:text-navy">
            affiliate disclosure
          </Link>
          .
        </p>
      </article>
    </>
  );
}
