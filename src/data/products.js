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
    affiliateUrl:
      "https://www.amazon.com/dp/B0DGHMNQ5Z?tag=gearnest-20",
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
    affiliateUrl:
      "https://www.amazon.com/dp/B0CZRHF639?tag=gearnest-20",
    featured: true,
  },

  {
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "mice",
    price: 99,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 20000,
    tagline:
      "Premium wireless mouse with precision tracking and productivity features",
    image: "",
    badges: ["Best Value"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Logitech+MX+Master+3S&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "logitech-g915-tkl",
    name: "Logitech G915 TKL Lightspeed",
    brand: "Logitech",
    category: "keyboards",
    price: 229,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 12000,
    tagline:
      "Premium low-profile wireless gaming keyboard with LIGHTSPEED performance",
    image: "",
    badges: ["Best Performance"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Logitech+G915+TKL+Lightspeed&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "macbook-air-m4",
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
    affiliateUrl:
      "https://www.amazon.com/dp/B0GX78S7QQ?tag=gearnest-20",
    featured: true,
  },

  {
    slug: "lg-ultragear-27-oled",
    name: "LG UltraGear 27 OLED Gaming Monitor",
    brand: "LG",
    category: "monitors",
    price: 899,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 9000,
    tagline:
      "Premium OLED gaming monitor with ultra-fast refresh rate and stunning visuals",
    image: "",
    badges: ["Best Performance"],
    affiliateUrl:
      "https://www.amazon.com/s?k=LG+UltraGear+27+OLED+Gaming+Monitor&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "smartphones",
    price: 1299,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 25000,
    tagline:
      "Premium flagship smartphone with advanced camera, AI features, and powerful performance",
    image: "",
    badges: ["Editor's Pick"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Samsung+Galaxy+S25+Ultra&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "asus-rog-strix-g16",
    name: "ASUS ROG Strix G16 Gaming Laptop",
    brand: "ASUS",
    category: "laptops",
    price: 1499,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 12000,
    tagline:
      "High-performance gaming laptop with powerful graphics and fast display",
    image: "",
    badges: ["Best Performance"],
    affiliateUrl:
      "https://www.amazon.com/s?k=ASUS+ROG+Strix+G16+Gaming+Laptop&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "sony-alpha-a6700",
    name: "Sony Alpha a6700 Mirrorless Camera",
    brand: "Sony",
    category: "accessories",
    price: 1398,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 8000,
    tagline:
      "Powerful mirrorless camera with advanced autofocus for creators and photographers",
    image: "",
    badges: ["Editor's Pick"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Sony+Alpha+a6700+Mirrorless+Camera&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "accessories",
    price: 399,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 15000,
    tagline:
      "Premium smartwatch with health tracking, fitness features, and seamless iPhone integration",
    image: "",
    badges: ["Editor's Pick"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Apple+Watch+Series+10&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "apple-ipad-pro-m4",
    name: "Apple iPad Pro M4",
    brand: "Apple",
    category: "accessories",
    price: 999,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 12000,
    tagline:
      "Powerful M4 tablet with a stunning display for creators, work, and entertainment",
    image: "",
    badges: ["Best Performance"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Apple+iPad+Pro+M4&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "asus-rog-rapture-gt-be98",
    name: "ASUS ROG Rapture GT-BE98 WiFi 7 Router",
    brand: "ASUS",
    category: "accessories",
    price: 699,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 5000,
    tagline:
      "Premium WiFi 7 router built for gaming, streaming, and high-speed homes",
    image: "",
    badges: ["Best Performance"],
    affiliateUrl:
      "https://www.amazon.com/s?k=ASUS+ROG+Rapture+GT-BE98+WiFi+7+Router&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "ring-video-doorbell-pro-2",
    name: "Ring Video Doorbell Pro 2",
    brand: "Ring",
    category: "accessories",
    price: 249,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 30000,
    tagline:
      "Advanced smart doorbell with HD video, motion detection, and home security features",
    image: "",
    badges: ["Best Value"],
    affiliateUrl:
      "https://www.amazon.com/s?k=Ring+Video+Doorbell+Pro+2&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "lg-c4-oled-tv",
    name: "LG C4 OLED 4K Smart TV",
    brand: "LG",
    category: "accessories",
    price: 1399,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 15000,
    tagline:
      "Premium OLED 4K TV with stunning picture quality, gaming features, and smart streaming",
    image: "",
    badges: ["Editor's Pick"],
    affiliateUrl:
      "https://www.amazon.com/s?k=LG+C4+OLED+4K+Smart+TV&tag=gearnest-20",
    featured: true,
  },

  {
    slug: "dji-osmo-pocket-3",
    name: "DJI Osmo Pocket 3 Creator Combo",
    brand: "DJI",
    category: "accessories",
    price: 669,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 12000,
    tagline:
      "Pocket-sized 4K creator camera with gimbal stabilization for videos and vlogging",
    image: "",
    badges: ["Editor's Pick"],
    affiliateUrl:
      "https://www.amazon.com/s?k=DJI+Osmo+Pocket+3+Creator+Combo&tag=gearnest-20",
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
    affiliateUrl:
      "https://www.amazon.com/dp/B0CJ4TPLRM?tag=gearnest-20",
    featured: true,
  },
];

export const getProduct = (slug) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);


   
