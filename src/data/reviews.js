export const reviews = [
  {
    slug: "aerowave-pro-14-review",
    productSlug: "aerowave-pro-14",
    title: "Aerowave Pro 14 Review: The Thin-and-Light We Actually Recommend",
    excerpt:
      "After three weeks of daily use, the Pro 14's OLED panel and 11-hour battery make it the easiest laptop recommendation we've made all year.",
    category: "laptops",
    author: "Maya Chen",
    date: "2026-06-18",
    readTime: "9 min read",
    rating: 4.7,
    pros: [
      "Stunning 3K OLED display with true blacks",
      "Genuinely all-day battery life",
      "Fanless silence during everyday tasks",
    ],
    cons: [
      "Only two USB-C ports",
      "Webcam is merely average",
    ],
    verdict:
      "If you want a 14-inch laptop that disappears into your bag and still turns heads on the desk, the Aerowave Pro 14 is the one to buy.",
  },
  {
    slug: "keyforge-tkl-review",
    productSlug: "keyforge-tkl",
    title: "Keyforge TKL Review: Gasket-Mount Feel Without the Custom-Build Hassle",
    excerpt:
      "Keyforge packed a genuinely premium typing experience into a board that's ready to use the moment it's out of the box.",
    category: "keyboards",
    author: "Diego Ramirez",
    date: "2026-05-30",
    readTime: "7 min read",
    rating: 4.8,
    pros: [
      "Deep, cushioned gasket-mount typing feel",
      "Hot-swap sockets support 3 and 5-pin switches",
      "Software is clean and genuinely useful",
    ],
    cons: [
      "Stock stabilizers need a light lube job",
      "No wireless option yet",
    ],
    verdict:
      "For under $150, this is the most convincing case yet for skipping a custom keyboard build entirely.",
  },
  {
    slug: "auralis-anc-2-review",
    productSlug: "auralis-anc-2",
    title: "Auralis ANC 2 Review: The Noise-Cancelling Headphones to Beat",
    excerpt:
      "Auralis closes the gap with the segment leaders on ANC performance while pulling ahead on sound signature.",
    category: "headphones",
    author: "Priya Nair",
    date: "2026-07-02",
    readTime: "8 min read",
    rating: 4.7,
    pros: [
      "Class-leading active noise cancellation",
      "Warm, detailed sound out of the box",
      "30-hour battery with ANC on",
    ],
    cons: [
      "Case is bulkier than competitors",
      "Touch controls are occasionally finicky",
    ],
    verdict:
      "Unless you're locked into an ecosystem, the Auralis ANC 2 is the pair we'd tell a friend to buy today.",
  },
  {
    slug: "clarion-27-qhd-review",
    productSlug: "clarion-27-qhd",
    title: "Clarion 27 QHD Review: The Monitor Most Desks Actually Need",
    excerpt:
      "165Hz, accurate color out of the box, and a price that undercuts the competition by $50 or more.",
    category: "monitors",
    author: "Sam Okafor",
    date: "2026-06-05",
    readTime: "6 min read",
    rating: 4.6,
    pros: [
      "Accurate color out of the box (measured ΔE < 2)",
      "165Hz feels smooth for work and casual gaming",
      "Slim bezels, sturdy stand with full ergonomic adjustment",
    ],
    cons: [
      "No USB-C with power delivery",
      "Speakers are an afterthought",
    ],
    verdict:
      "This is the monitor we point people to when they ask 'what should I actually buy' without a six-paragraph caveat.",
  },
  {
    slug: "haloedge-13-review",
    productSlug: "haloedge-13",
    title: "Haloedge 13 Review: Flagship Cameras, Sensible Size",
    excerpt:
      "Haloedge resisted the urge to chase a bigger screen and delivered the best compact flagship camera system we've tested.",
    category: "smartphones",
    author: "Maya Chen",
    date: "2026-07-14",
    readTime: "10 min read",
    rating: 4.7,
    pros: [
      "Best-in-class computational photography",
      "Genuinely one-handed usable size",
      "Five years of confirmed software updates",
    ],
    cons: [
      "Battery life is good, not great",
      "Charging speed trails rivals",
    ],
    verdict:
      "For anyone who misses compact flagships, the Haloedge 13 is the phone you've been waiting for.",
  },
  {
    slug: "pulsecore-controller-review",
    productSlug: "pulsecore-controller",
    title: "Pulsecore Controller Review: Drift-Proof Sticks Change Everything",
    excerpt:
      "Hall-effect sticks aren't a gimmick — after two months of hard use, there's zero measurable drift.",
    category: "gaming",
    author: "Diego Ramirez",
    date: "2026-06-27",
    readTime: "5 min read",
    rating: 4.5,
    pros: [
      "Hall-effect sticks show no drift after heavy use",
      "Low-latency wireless dongle included",
      "Comfortable for long sessions",
    ],
    cons: [
      "Companion app is basic",
      "Slightly heavier than stock controllers",
    ],
    verdict:
      "If stick drift has ever ruined a controller for you, this is the upgrade that finally fixes it.",
  },
];

export const getReview = (slug) => reviews.find((r) => r.slug === slug);
