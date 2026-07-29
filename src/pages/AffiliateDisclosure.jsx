import SEO from "../components/SEO";

export default function AffiliateDisclosure() {
  return (
    <>
      <SEO
        title="Affiliate Disclosure"
        description="GearNest's affiliate relationships and how they affect our content."
        path="/affiliate-disclosure"
      />
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-3">Affiliate Disclosure</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Amazon Associates</h2>
            <p>
              GearNest is a participant in the Amazon Services LLC Associates Program, an
              affiliate advertising program designed to provide a means for sites to earn
              advertising fees by advertising and linking to Amazon.com. As an Amazon Associate,
              GearNest earns from qualifying purchases.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">What this means for you</h2>
            <p>
              When you click a product link on GearNest and make a purchase, we may earn a small
              commission — at no additional cost to you. The price you pay is the same whether
              or not you use our link.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">How this affects our recommendations</h2>
            <p>
              Affiliate revenue supports the cost of testing, writing, and maintaining GearNest.
              It does not influence which products we choose to review, how we rate them, or what
              we recommend. We do not accept payment in exchange for a positive review, and no
              brand is given editorial approval over our content before it publishes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Other affiliate programs</h2>
            <p>
              In addition to Amazon Associates, GearNest may participate in other affiliate or
              referral programs with retailers and brands relevant to the products we cover. The
              same standards apply across all of them.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Questions</h2>
            <p>
              If you have any questions about our affiliate relationships, reach out at
              hello@gearnest.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
