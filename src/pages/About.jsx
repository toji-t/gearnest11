import SEO from "../components/SEO";
import Icon from "../components/Icon";

const values = [
  {
    icon: "shield",
    title: "Independent by default",
    body: "We buy or borrow the products we test, and no brand gets a preview of our verdict before it publishes.",
  },
  {
    icon: "spark",
    title: "Hands-on, always",
    body: "If we haven't spent real time with a product, it doesn't get a badge, a ranking, or a recommendation.",
  },
  {
    icon: "check",
    title: "Clear about money",
    body: "Some links on GearNest are affiliate links. That never decides what we recommend — see our disclosure for the full picture.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="GearNest is an independent tech media brand building honest reviews and buying guides — with plans to grow into a full lifestyle and product brand."
        path="/about"
      />

      <section className="mesh-navy">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <p className="text-sm font-semibold text-cyan-300 mb-2">About GearNest</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
            Built for people who'd rather buy once than buy twice
          </h1>
          <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
            GearNest started with a simple frustration: most tech coverage online is either a
            reworded spec sheet or an ad in disguise. We wanted something in between —
            opinionated, honest, and genuinely useful.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-100 p-6 shadow-[var(--shadow-soft)]">
              <span className="w-10 h-10 rounded-lg bg-blue-50 text-electric flex items-center justify-center mb-4">
                <Icon name={v.icon} className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-navy mb-2">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="prose-content space-y-5 text-slate-600 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-navy">Where we're headed</h2>
          <p>
            Today, GearNest focuses on tech: laptops, keyboards, mice, headphones, gaming gear,
            monitors, smartphones, and accessories. Every product page, review, and guide is built
            around a simple question — is this actually worth your money?
          </p>
          <p>
            Over time, we're expanding GearNest into a broader lifestyle brand covering clothing,
            fashion, accessories, and home products, all held to the same standard: curated,
            tested, and chosen because it's genuinely good, not because it's trending.
          </p>
          <h2 className="font-display text-2xl font-semibold text-navy pt-4">How we make money</h2>
          <p>
            GearNest is supported primarily through the Amazon Associates program and other
            affiliate partnerships. When you buy something through a link on our site, we may earn
            a small commission — at no extra cost to you. It never influences which products we
            recommend or how we rate them. Full details are in our{" "}
            <a href="/affiliate-disclosure" className="text-electric underline underline-offset-2">
              affiliate disclosure
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
