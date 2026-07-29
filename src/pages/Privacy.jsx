import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How GearNest collects, uses, and protects your information."
        path="/privacy-policy"
      />
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-3">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Information we collect</h2>
            <p>
              GearNest collects information you provide directly, such as your name and email
              address when you subscribe to our newsletter or contact us. We also collect
              limited technical data automatically — like browser type, device type, and pages
              visited — through standard analytics tools, to understand how the site is used.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">How we use your information</h2>
            <p>
              We use the information we collect to operate and improve GearNest, respond to
              inquiries, send newsletter content you've opted into, and understand aggregate
              site usage. We do not sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Cookies and tracking</h2>
            <p>
              GearNest may use cookies and similar technologies for analytics and to remember
              your preferences. You can control cookies through your browser settings; disabling
              them may affect some site functionality.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Third-party links</h2>
            <p>
              Our site contains affiliate links to third-party retailers, including Amazon. We
              are not responsible for the privacy practices of those sites — please review their
              own privacy policies before providing any information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Your choices</h2>
            <p>
              You can unsubscribe from our newsletter at any time using the link in any email we
              send. To request access to, correction of, or deletion of your personal
              information, contact us at privacy@gearnest.com.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy mb-2">Changes to this policy</h2>
            <p>
              We may update this policy periodically. Material changes will be reflected by an
              updated "last updated" date at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
