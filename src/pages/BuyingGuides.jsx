import SEO from "../components/SEO";
import GuideCard from "../components/GuideCard";
import { guides } from "../data/guides";

export default function BuyingGuides() {
  return (
    <>
      <SEO
        title="Buying Guides"
        description="GearNest buying guides break down what actually matters before you spend — laptops, keyboards, headphones, monitors, and more."
        path="/guides"
      />

      <section className="mesh-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <p className="text-sm font-semibold text-cyan-300 mb-2">Shop smarter</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
            Buying guides
          </h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Skip the spec-sheet rabbit hole. These guides explain what actually matters before
            you spend your money.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>
    </>
  );
}
