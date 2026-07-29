import { useState } from "react";
import Icon from "./Icon";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitted

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your email provider (e.g. Mailchimp, ConvertKit) at launch.
    setStatus("submitted");
  }

  return (
    <section className="relative overflow-hidden rounded-3xl mesh-navy px-6 py-14 sm:px-14 sm:py-16 text-white">
      <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
          <Icon name="mail" className="w-5 h-5" />
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-balance">
          Get the pick of the week, every Friday
        </h2>
        <p className="text-white/60 max-w-md">
          One email. The best deal, one honest review, and nothing you don't need.
        </p>

        {status === "submitted" ? (
          <p className="mt-2 inline-flex items-center gap-2 text-cyan-300 font-medium">
            <Icon name="check" className="w-5 h-5" /> You're on the list — check your inbox to confirm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full px-5 py-3 bg-white/10 border border-white/15 placeholder:text-white/40 text-white focus:bg-white/15 focus:outline-none focus-visible:outline-2 focus-visible:outline-cyan-300 transition-colors"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-white/35">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
