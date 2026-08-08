import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { to: "/products", label: "Products" },
  { to: "/reviews", label: "Reviews" },
  { to: "/guides", label: "Buying Guides" },
  { to: "/blog", label: "Magazine" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [links.length]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_0_rgba(15,23,42,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-navy text-lg">
          <span className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path
                d="M12 4a8 8 0 1 0 7.7 10h-6"
                fill="none"
                stroke="url(#hg)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0" stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          GearNest
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-electric" : "text-slate-600 hover:text-navy"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy text-white text-sm font-semibold px-4 py-2 hover:bg-slate-800 transition-colors"
          >
            <Icon name="search" className="w-4 h-4" />
            Browse gear
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-navy hover:bg-slate-100 transition-colors"
          >
            <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-2 py-3 rounded-lg text-sm font-medium ${
                  isActive ? "text-electric bg-blue-50" : "text-slate-600"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
