// Sample catalog. In production this would come from a CMS or a feed
// synced with the Amazon Product Advertising API. `affiliateUrl` is a
// placeholder — wire up real Amazon Associates tracking IDs before launch.

export const products = [
  {
    slug: "airpods-4",
    name: "Apple AirPods 4", 
    brand: "Apple",
    category: "headphones",
    price: 89.64,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 10000,
    tagline:
      "All-new AirPods with rich sound, personalized spatial audio, and a comfortable open-ear design",
    image: "/products/airpods-4.jpg",
    badges: ["Popular"],
     affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
    featured: false,
  },

  {
    slug: "soundcore-q20i",
    name: "Anker Soundcore Q20i",
    brand: "Anker Soundcore",
    category: "headphones",
    price: 74.88,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 25000,
    tagline:
      "Affordable wireless headphones with hybrid active noise cancellation and customizable sound",
    image: "/products/soundcore-q20i.jpg",
    badges: ["Best Value"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
    featured: true,
  },

 {
slug: "shokz-opendots-air",
name: "Shokz OpenDots Air",
brand: "Shokz",
category: "headphones",
price: 199,
originalPrice: null,
rating: 4.7,
reviewCount: 12000,
tagline: "Stylish clip-on open-ear headphones with a secure fit, rich sound, and up to 36 hours of battery life",
image: "/products/shokz-opendots-air.jpg",
badges: ["Trending"],
affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
featured: true,
},


  {
slug: "mchose-mix-87",
name: "MCHOSE MIX 87 Mechanical Gaming Keyboard",
brand: "MCHOSE",
category: "keyboards",
price: 99.99,
originalPrice: null,
rating: 4.7,
reviewCount: 5000,
tagline: "Compact 87-key mechanical gaming keyboard with adjustable performance and a modern wireless design",
image: "/products/mchose-mix-87.jpg",
badges: ["Trending"],
affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
featured: true,
},


  {
    slug: "macbook-air-m5"
    name: "Apple MacBook Air 15-inch with M5 chip: 32GB Memory, 512GB SSD - Midnight",
    brand: "Apple",
    category: "laptops",
    price: 1199,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 18000,
    tagline:
      "Powerful M4 performance in a thin, lightweight laptop built for everyday work",
    image: "/products/macbook-air.jpg",
    badges: ["Editor's Pick"],
    affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
    featured: true,
  },

  {
  slug: "lg-ultragear-27gx704a-b",
  name: "LG UltraGear 27GX704A-B 27\" QHD OLED Gaming Monitor",
  brand: "LG",
  category: "monitors",
  price: 429.96,
  originalPrice: 799.99,
  rating: 4.6,
  reviewCount: 320,
  tagline: "27-inch QHD OLED gaming monitor with 240Hz refresh rate, 0.03ms response time, and TrueBlack 400 HDR",
  image: "/products/lg-ultragear-27gx704a-b.jpg",
  badges: ["OLED"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

{
  slug: "samsung-galaxy-s25-ultra",
  name: "Samsung Galaxy S25 Ultra",
  brand: "Samsung",
  category: "smartphones",
  price: 1049.99,
  originalPrice: 1299.99,
  rating: 4.8,
  reviewCount: 25000,
  tagline: "Premium Galaxy AI flagship with a 200MP camera, titanium design, Snapdragon 8 Elite, and built-in S Pen",
  image: "/products/samsung-galaxy-s25-ultra.jpg",
  badges: ["Editor's Pick"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},


{
  slug: "asus-rog-strix-g16-g615jmr",
  name: "ASUS ROG Strix G16 (2025) Gaming Laptop - RTX 5060, Core i7-14650HX",
  brand: "ASUS",
  category: "laptops",
  price: 1393.00,
  originalPrice: 1599.99,
  rating: 4.5,
  reviewCount: 210,
  tagline: "16\" FHD+ 165Hz gaming laptop with NVIDIA GeForce RTX 5060, Intel Core i7-14650HX, 16GB DDR5, and 1TB PCIe Gen4 SSD",
  image: "/products/asus-rog-strix-g16-g615jmr.jpg",
  badges: ["New"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
  slug: "canon-eos-r50-v",
  name: "Canon EOS R50 V Mirrorless Camera",
  brand: "Canon",
  category: "accessories",
  price: 546.10,
  originalPrice: null,
  rating: 4.8,
  reviewCount: 5000,
  tagline: "Compact mirrorless camera with advanced autofocus, 4K video, and creator-focused features",
  image: "/products/canon-eos-r50-v.jpg",
  badges: ["Trending"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
  slug: "apple-watch-series-11-42mm-jet-black",
  name: "Apple Watch Series 11 [GPS 42mm] Smartwatch - Jet Black Aluminum Case with Black Sport Band",
  brand: "Apple",
  category: "accessories",
  price: 279.00,
  originalPrice: 399.00,
  rating: 4.7,
  reviewCount: 5400,
  tagline: "42mm GPS smartwatch with Jet Black aluminum case, Sleep Score, always-on display, and advanced health monitoring",
  image: "/products/apple-watch-series-11-42mm-jet-black.jpg",
  badges: ["Best Seller"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

{
  slug: "apple-ipad-pro-m4",
  name: "Apple iPad Pro 11-inch (M4)",
  brand: "Apple",
  category: "accessories",
  price: 1545.17,
  originalPrice: null,
  rating: 4.8,
  reviewCount: 18000,
  tagline: "Ultra-thin iPad Pro powered by the M4 chip with an Ultra Retina XDR display and Apple Intelligence support",
  image: "/products/apple-ipad-pro-m4.jpg",
  badges: ["Editor's Pick"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
  slug: "asus-rog-rapture-gt-be98-pro",
  name: "ASUS ROG Rapture GT-BE98 Pro",
  brand: "ASUS",
  category: "accessories",
  price: 684.99,
  originalPrice: 799.99,
  rating: 4.7,
  reviewCount: 5000,
  tagline: "Quad-band WiFi 7 gaming router with dual 10G ports, AI Mesh, advanced security, and ultra-fast multi-gig performance",
  image: "/products/asus-rog-rapture-gt-be98-pro.jpg",
  badges: ["Best Performance"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
  slug: "ring-battery-doorbell-2026",
  name: "Ring Battery Doorbell (Newest Model)",
  brand: "Ring",
  category: "accessories",
  price: 199.98,
  originalPrice: null,
  rating: 4.8,
  reviewCount: 15000,
  tagline: "Premium smart battery doorbell with Retinal 2K video, wide-angle view, enhanced zoom, two-way talk, and Alexa integration",
  image: "/products/ring-battery-doorbell-2026.jpg",
  badges: ["Editor's Pick"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
  slug: "lg-c2-oled-42",
  name: "LG C2 OLED evo 42-inch 4K Smart TV",
  brand: "LG",
  category: "accessories",
  price: 959.00,
  originalPrice: 1299.99,
  rating: 4.8,
  reviewCount: 15000,
  tagline: "42-inch OLED evo 4K Smart TV with Dolby Vision, Dolby Atmos, HDMI 2.1, NVIDIA G-SYNC, and a9 Gen5 AI Processor",
  image: "/products/lg-c2-oled-42.jpg",
  badges: ["Editor's Pick"],
  affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

 {
  slug: "dji-osmo-pocket-3",
  name: "DJI Osmo Pocket 3 Creator Combo",
  brand: "DJI",
  category: "accessories",
  price: 567.99,
  originalPrice: null,
  rating: 4.8,
  reviewCount: 12000,
  tagline: "Pocket-sized 4K creator camera with a 1-inch CMOS sensor, 3-axis gimbal stabilization, ActiveTrack 6.0, and DJI Mic 2 for professional vlogging",
  image: "/products/dji-osmo-pocket-3.jpg",
  badges: ["Editor's Pick"],
 affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
  featured: true,
},

  {
    slug: "logitech-lightspeed-wireless-mouse",
    name: "Logitech LIGHTSPEED Wireless Gaming Mouse",
    brand: "Logitech",
    category: "mice",
    price: 108.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviewCount: 12000,
    tagline:
      "Customizable LIGHTSPEED wireless gaming mouse with high-performance tracking",
    image: "/products/logitech-lightspeed.jpg",
    badges: ["Best Value"],
affiliateUrl: "https://www.amazon.com/dp/B0G4SWDH8P?tag=gearnest11-20",
    featured: true,
  },
];

export const getProduct = (slug) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);


   
