import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="card-hover group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-[var(--shadow-soft)]"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
        <Icon name={category.icon} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-navy group-hover:text-electric transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{category.tagline}</p>
      </div>
    </Link>
  );
}
