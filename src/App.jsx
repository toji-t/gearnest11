import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import BuyingGuides from "./pages/BuyingGuides";
import Blog from "./pages/Blog";
import AISkills2026 from "./pages/AISkills2026";
import StudentDeskSetup2026 from "./pages/StudentDeskSetup2026";
import GuideDetail from "./pages/GuideDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="products/:category/:slug" element={<ProductDetail />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="reviews/:slug" element={<ReviewDetail />} />
        <Route path="guides" element={<BuyingGuides />} />
        <Route path="guides/:slug" element={<GuideDetail />} />
        <Route path="blog" element={<Blog />} />
<Route path="blog/ai-skills-2026" element={<AISkills2026 />} />
<Route
  path="blog/student-desk-setup-2026"
  element={<StudentDeskSetup2026 />}
/>
<Route path="about" element={<About />} />
        
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
