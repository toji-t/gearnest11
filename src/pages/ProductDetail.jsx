import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import RatingStars from "../components/RatingStars";
import ProductVisual from "../components/ProductVisual";
import ProductCard from "../components/ProductCard";
import { getProduct, getProductsByCategory } from "../data/products";
import { getCategory } from "../data/categories";
import { reviews } from "../data/reviews";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/products" replace />;

  const category = getCategory(product.category);
  const relatedReview = reviews.find((r) => r.productSlug === product.slug);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={product.name}
        description={`${product.name} by ${product.brand}: ${product.tagline}. See pricing, rating, and where to buy.`}
        path={`/products/${product.category}/${product.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          brand: product.brand,
          description: product.tagline,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
            url: product.affiliateUrl,
          },
        }}
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-4 text-sm text-slate-400 flex items-center gap-2">
        <Link to="/products" className="hover:text-navy transition-colors">Products</Link>
        <span>/</span>
        <Link to={`/products/${category?.slug}`} className="hover:text-navy transition-colors">{category?.name}</Link>
        <span>/</span>
        <span className="text-slate-600">{product.name}</span>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 grid lg:grid-cols-2 gap-12">
        <ProductVisual category={product.category} icon={category?.icon} className="aspect-square w-full" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-electric mb-2">{product.brand}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy text-balance">{product.name}</h1>
          <p className="mt-3 text-lg text-slate-500">{product.tagline}</p>

          <div className="mt-5">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-navy">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-slate-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          {product.badges?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700">
                  {b}
                </span>
              ))}
            </div>
          )}

          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-3.5 font-semibold text-white hover:from-blue-400 hover:to-cyan-400 transition-colors"
          >
            Check price on Amazon <Icon name="arrowRight" className="w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-slate-400">
            As an Amazon Associate, GearNest earns from qualifying purchases at no extra cost to you.
          </p>

          {relatedReview && (
            <Link
              to={`/reviews/${relatedReview.slug}`}
              className="mt-8 flex items-center gap-3 rounded-xl border border-slate-100 p-4 hover:border-electric transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-blue-50 text-electric flex items-center justify-center shrink-0">
                <Icon name="quote" className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">Read the full review</span>
                <span className="block text-sm text-slate-500">{relatedReview.title}</span>
              </span>
              <Icon name="arrowRight" className="w-4 h-4 ml-auto text-slate-300" />
            </Link>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
            <h2 className="font-display text-2xl font-semibold text-navy mb-8">You might also like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
