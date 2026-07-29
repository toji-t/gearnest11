export const guides = [
  {
    slug: "best-laptops-2026",
    title: "Best Laptops of 2026: A Buying Guide for Every Budget",
    excerpt:
      "From ultraportables to creator powerhouses, here's how to pick the right laptop without falling for spec-sheet noise.",
    category: "laptops",
    date: "2026-07-10",
    readTime: "12 min read",
    sections: [
      {
        heading: "Start with how you'll actually use it",
        body: "Most buyers overspend on specs they'll never touch. Before comparing chips, decide whether your days lean toward writing and browsing, creative work, or heavier compute — that answer narrows the field faster than any benchmark chart.",
      },
      {
        heading: "Screen quality matters more than resolution",
        body: "A well-calibrated 1440p panel will look better day-to-day than a poorly tuned 4K one. Look for accurate color out of the box and a brightness rating that holds up outdoors.",
      },
      {
        heading: "Battery life claims are optimistic — budget accordingly",
        body: "Manufacturer battery estimates are measured under best-case conditions. As a rule of thumb, expect real-world battery life to land 20 to 30 percent below the advertised number.",
      },
    ],
    picks: ["aerowave-pro-14", "corevolt-x16", "driftbook-air"],
  },
  {
    slug: "mechanical-keyboard-buying-guide",
    title: "How to Choose a Mechanical Keyboard You Won't Want to Replace",
    excerpt:
      "Switches, layouts, and mounting styles explained — plus what actually matters versus what's just marketing.",
    category: "keyboards",
    date: "2026-06-22",
    readTime: "9 min read",
    sections: [
      {
        heading: "Switch type sets the feel, not the sound",
        body: "Linear switches feel smooth and consistent, tactile switches offer a bump you can feel mid-press, and clicky switches add an audible click. Sound is largely a byproduct of the case and mounting style, not the switch alone.",
      },
      {
        heading: "Mounting style is the most underrated spec",
        body: "Gasket-mount and other cushioned designs soften every keystroke, which is why two boards with identical switches can feel completely different to type on.",
      },
      {
        heading: "Hot-swap sockets future-proof your purchase",
        body: "A hot-swappable board lets you try new switches without soldering, which matters more than most first-time buyers realize once they discover switch variety exists.",
      },
    ],
    picks: ["keyforge-tkl", "slimtype-k2"],
  },
  {
    slug: "noise-cancelling-headphones-guide",
    title: "Noise-Cancelling Headphones: What's Worth Paying For",
    excerpt:
      "ANC quality has converged at the top of the market — here's where your money actually buys a better experience.",
    category: "headphones",
    date: "2026-05-15",
    readTime: "8 min read",
    sections: [
      {
        heading: "ANC quality has a ceiling — and most flagships hit it",
        body: "Once you're shopping in the premium tier, the noise-cancellation difference between competitors is small. Comfort, sound signature, and app features are where the real differentiation lives now.",
      },
      {
        heading: "Fit determines comfort more than padding material",
        body: "A lighter headphone with a slightly firmer clamp can be more comfortable over long sessions than a heavier one with plush pads, especially for glasses wearers.",
      },
    ],
    picks: ["auralis-anc-2", "tonecase-buds"],
  },
  {
    slug: "gaming-monitor-buying-guide",
    title: "Gaming Monitor Buying Guide: Refresh Rate, Resolution, and Panel Type",
    excerpt:
      "A practical framework for balancing refresh rate against resolution based on your GPU and your games.",
    category: "monitors",
    date: "2026-06-01",
    readTime: "10 min read",
    sections: [
      {
        heading: "Match resolution to your GPU, not your budget",
        body: "A 4K panel paired with a mid-range GPU often means turning down settings to hit a playable frame rate — a 1440p monitor frequently delivers a better real-world experience for the same hardware.",
      },
      {
        heading: "Refresh rate gains taper off past 165Hz",
        body: "The jump from 60Hz to 144Hz is dramatic. The jump from 165Hz to 240Hz is real but subtle, and matters most in competitive, fast-paced titles.",
      },
    ],
    picks: ["clarion-27-qhd", "widescape-ultra"],
  },
];

export const getGuide = (slug) => guides.find((g) => g.slug === slug);
