import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mesh-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="spark" className="w-4 h-4 text-cyan-300" />
              </span>
              GearNest
            </Link>
            <p className="mt-4 text-sm text-white/55 max-w-xs leading-relaxed">
              Discover better tech. Choose smarter gear. Independent reviews and buying
              guides for the products worth your money.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link to={`/products/${c.slug}`} className="text-sm text-white/65 hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link to="/reviews" className="text-sm text-white/65 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/guides" className="text-sm text-white/65 hover:text-white transition-colors">Buying Guides</Link></li>
              <li><Link to="/products" className="text-sm text-white/65 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/about" className="text-sm text-white/65 hover:text-white transition-colors">About GearNest</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm text-white/65 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-white/65 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-sm text-white/65 hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} GearNest. All rights reserved.</p>
          <p>As an Amazon Associate, GearNest earns from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
