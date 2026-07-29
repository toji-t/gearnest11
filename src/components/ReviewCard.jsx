import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";
import RatingStars from "./RatingStars";
import { getCategory } from "../data/categories";

export default function ReviewCard({ review, compact = false }) {
  const category = getCategory(review.category);

  return (
    <article className="card-hover group bg-white rounded-2xl border border-slate-100 shadow-[var(--shadow-soft)] overflow-hidden flex flex-col">
      <Link to={`/reviews/${review.slug}`} className="block p-4 pb-0">
        <ProductVisual category={review.category} icon={category?.icon} className="aspect-[16/10] w-full" />
      </Link>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-xs font-semibold tracking-wide uppercase text-electric">{category?.name}</p>
        <Link
          to={`/reviews/${review.slug}`}
          className="font-display font-semibold text-lg leading-snug text-navy hover:text-electric transition-colors"
        >
          {review.title}
        </Link>
        {!compact && <p className="text-sm text-slate-500 leading-relaxed">{review.excerpt}</p>}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 text-sm text-slate-400">
          <RatingStars rating={review.rating} />
          <span>{review.readTime}</span>
        </div>
      </div>
    </article>
  );
}
