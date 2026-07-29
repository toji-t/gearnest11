import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";
import RatingStars from "./RatingStars";
import Icon from "./Icon";
import { getCategory } from "../data/categories";

export default function ProductCard({ product }) {
  const category = getCategory(product.category);
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(100 - (product.price / product.originalPrice) * 100)
      : null;

  return (
    <article className="card-hover group bg-white rounded-2xl border border-slate-100 shadow-[var(--shadow-soft)] overflow-hidden flex flex-col">
      <Link to={`/products/${product.category}/${product.slug}`} className="block p-4 pb-0">
        <ProductVisual category={product.category} icon={category?.icon} className="aspect-[4/3] w-full" />
      </Link>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium tracking-wide uppercase text-slate-400">{product.brand}</p>
            <Link
              to={`/products/${product.category}/${product.slug}`}
              className="font-display font-semibold text-[17px] leading-snug text-navy hover:text-electric transition-colors"
            >
              {product.name}
            </Link>
          </div>
          {product.badges?.[0] && (
            <span className="shrink-0 text-[11px] font-semibold px-2 py-1 rounded-full bg-cyan-50 text-cyan-700 whitespace-nowrap">
              {product.badges[0]}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-500 leading-relaxed">{product.tagline}</p>

        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-semibold text-lg text-navy">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
            )}
            {discount && (
              <span className="text-xs font-semibold text-emerald-600">-{discount}%</span>
            )}
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1 text-sm font-semibold text-electric hover:text-cyan-600 transition-colors"
          >
            View deal <Icon name="arrowRight" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
