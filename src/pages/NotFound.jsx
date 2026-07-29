import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <section className="mesh-navy min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
          <span className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-6">
            <Icon name="search" className="w-7 h-7 text-cyan-300" />
          </span>
          <p className="font-display text-6xl font-semibold text-white/20 mb-2">404</p>
          <h1 className="font-display text-3xl font-semibold text-white text-balance">
            This page wandered off the shelf
          </h1>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have moved. Let's get you back to
            something useful.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white hover:from-blue-400 hover:to-cyan-400 transition-colors"
            >
              Back to home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Browse gear
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
