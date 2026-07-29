// Categories are namespaced by `vertical` so GearNest can expand beyond tech
// (clothing, home, beauty, lifestyle...) later without restructuring routes.
// Adding a new vertical is just: add entries here + a matching `products` array.

export const verticals = [
  { slug: "tech", label: "Tech & Gear", active: true },
  { slug: "lifestyle", label: "Lifestyle", active: false },
  { slug: "home", label: "Home", active: false },
  { slug: "fashion", label: "Fashion & Accessories", active: false },
];

export const categories = [
  {
    slug: "laptops",
    name: "Laptops",
    vertical: "tech",
    tagline: "Power, portability, and everything in between",
    icon: "laptop",
  },
  {
    slug: "keyboards",
    name: "Keyboards",
    vertical: "tech",
    tagline: "Mechanical, low-profile, and wireless boards",
    icon: "keyboard",
  },
  {
    slug: "mice",
    name: "Mice",
    vertical: "tech",
    tagline: "Precision pointing for work and play",
    icon: "mouse",
  },
  {
    slug: "headphones",
    name: "Headphones",
    vertical: "tech",
    tagline: "Studio sound, ANC, and everyday comfort",
    icon: "headphones",
  },
  {
    slug: "gaming",
    name: "Gaming",
    vertical: "tech",
    tagline: "Consoles, controllers, and battle stations",
    icon: "gamepad",
  },
  {
    slug: "monitors",
    name: "Monitors",
    vertical: "tech",
    tagline: "Color-accurate, high-refresh, ultrawide",
    icon: "monitor",
  },
  {
    slug: "smartphones",
    name: "Smartphones",
    vertical: "tech",
    tagline: "Flagships, foldables, and budget standouts",
    icon: "phone",
  },
  {
    slug: "accessories",
    name: "Accessories",
    vertical: "tech",
    tagline: "Cables, cases, docks, and small essentials",
    icon: "accessory",
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
