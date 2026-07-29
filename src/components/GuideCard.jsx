import { Link } from "react-router-dom";
import Icon from "./Icon";
import { getCategory } from "../data/categories";

export default function GuideCard({ guide }) {
  const category = getCategory(guide.category);

  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="card-hover group relative flex flex-col justify-between rounded-2xl p-6 bg-navy text-white overflow-hidden min-h-[220px]"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-300">
          <Icon name={category?.icon} className="w-4 h-4" />
          {category?.name} Guide
        </span>
        <span className="text-xs text-white/50">{guide.readTime}</span>
      </div>
      <div className="relative">
        <h3 className="font-display font-semibold text-xl leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
          {guide.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">{guide.excerpt}</p>
      </div>
      <div className="relative flex items-center gap-1.5 text-sm font-semibold text-white mt-4">
        Read the guide <Icon name="arrowRight" className="w-4 h-4" />
      </div>
    </Link>
  );
}
