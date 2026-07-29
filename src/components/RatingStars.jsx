export default function RatingStars({ rating, reviewCount, size = "sm" }) {
  const dim = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.max(0, Math.min(1, rating - (i - 1)));
          return (
            <span key={i} className="relative inline-block">
              <svg viewBox="0 0 20 20" className={`${dim} text-slate-200 fill-current`}>
                <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8L10 1.5z" />
              </svg>
              <span
                className="absolute inset-0 overflow-hidden text-electric fill-current"
                style={{ width: `${fill * 100}%` }}
              >
                <svg viewBox="0 0 20 20" className={`${dim} text-[#3B82F6] fill-current`}>
                  <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8L10 1.5z" />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      <span className="text-sm font-medium text-slate-700">{rating.toFixed(1)}</span>
      {reviewCount != null && (
        <span className="text-sm text-slate-400">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
