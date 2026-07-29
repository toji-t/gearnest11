import { useState } from "react";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

const reasons = [
  { icon: "mail", title: "General questions", body: "hello@gearnest.com" },
  { icon: "spark", title: "Partnerships & PR", body: "partners@gearnest.com" },
  { icon: "shield", title: "Corrections", body: "corrections@gearnest.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend (e.g. Formspree, a Cloudflare Worker,
    // or an email API) before launch — this is a front-end-only placeholder.
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the GearNest team for questions, partnerships, or corrections."
        path="/contact"
      />

      <section className="mesh-navy">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 text-center">
          <p className="text-sm font-semibold text-cyan-300 mb-2">Get in touch</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
            We read every message
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-[var(--shadow-soft)]">
              <span className="w-10 h-10 rounded-lg bg-blue-50 text-electric flex items-center justify-center shrink-0">
                <Icon name={r.icon} className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-navy">{r.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 text-center">
              <span className="inline-flex w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mb-4">
                <Icon name="check" className="w-6 h-6" />
              </span>
              <h2 className="font-display font-semibold text-lg text-navy">Message sent</h2>
              <p className="text-sm text-slate-500 mt-2">Thanks for reaching out — we'll reply within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus-visible:outline-2 focus-visible:outline-electric"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus-visible:outline-2 focus-visible:outline-electric"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus-visible:outline-2 focus-visible:outline-electric resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Send message <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
