import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Admin/pages/Login";
import ProtectedRoute from "./Admin/layout/ProtectedRoutes";
import Dashboard from "./Admin/pages/Dashboard";
import AdminLayout from "./Admin/layout/AdminLayout";
import Service from "./Admin/pages/Service";
import Blogs from "./Admin/pages/Blogs";
import TeamMember from "./Admin/pages/TeamMember";
import Testimonials from "./Admin/pages/Testimonials";
import Inquiries from "./Admin/pages/Inquiries";
import User from "./Admin/pages/User";
import Category from "./Admin/pages/Category";
import Layout1 from "./User/layout/Layout1";
import Homepage1 from "./User/pages/Homepage1";
import Layout2 from "./User/layout/Layout2";
import Homepage2 from "./User/pages/Homepage2";
import Layout3 from "./User/layout/Layout3";
import Homepage3 from "./User/pages/Homepage3";
import Layout4 from "./User/layout/Layout4";
import Homepage4 from "./User/pages/Homepage4";
import Layout5 from "./User/layout/Layout5";
import Homepage5 from "./User/pages/Homepage5";
import Layout6 from "./User/layout/Layout6";
import Homepage6 from "./User/pages/Homepage6";
import Layout7 from "./User/layout/Layout7";
import Homepage7 from "./User/pages/Homepage7";
import Aboutus from "./User/pages/Aboutus";
import Faqs from "./User/pages/Faqs";
import Pricing from "./User/pages/Pricing";
import TeamList from "./User/pages/TeamList";
import TeamDetails from "./User/pages/TeamDetails";
import Testimonial2 from "./User/pages/Testimonial";
import Notfound from "./User/pages/Notfound";
import ServicePage from "./User/pages/ServicePage";
import ServiceDetails from "./User/pages/ServiceDetails";
import Portfolio from "./User/pages/Portfolio";
import PortfolioDetails from "./User/pages/PortfolioDetails";
import NewsGrid from "./User/pages/NewsGrid";
import NewsDetails from "./User/pages/NewsDetails";
import Contactus from "./User/pages/Contactus";
import ResearchInsights from "./User/pages/ResearchInsights";
import ServiceDetail from "./User/pages/ServiceDetail";
import ForInvestors from "./User/pages/ForInvestors";
import LegalCompliance from "./User/pages/LegalCompliance";
import Product from "./User/pages/Product";
import ProductDetails from "./User/pages/ProductDetails";
import Cart from "./User/pages/Cart";
import CheckOut from "./User/pages/CheckOut";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductSidebar from "./User/pages/ProductSidebar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Routes>
      {/* User Side Rounting */}
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Homepage1 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="research" element={<ResearchInsights />} />
        <Route path="investors" element={<ForInvestors />} />
        <Route path="legal" element={<LegalCompliance />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/error" element={<Notfound />} />

      <Route path="/homepage2" element={<Layout2 />}>
        <Route index element={<Homepage2 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/homepage3" element={<Layout3 />}>
        <Route index element={<Homepage3 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/homepage4" element={<Layout4 />}>
        <Route index element={<Homepage4 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/homepage5" element={<Layout5 />}>
        <Route index element={<Homepage5 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/homepage6" element={<Layout6 />}>
        <Route index element={<Homepage6 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      <Route path="/homepage7" element={<Layout7 />}>
        <Route index element={<Homepage7 />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial2 />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-details" element={<PortfolioDetails />} />
        <Route path="news-grid" element={<NewsGrid />} />
        <Route path="news-details" element={<NewsDetails />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="products" element={<Product sidebar={false} />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-sidebar" element={<ProductSidebar />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

      {/* Pages */}

      {/* Admin Side Routing */}
      {/* Login */}
      <Route path="/admin/login" element={<Login />} />

      {/*Protected  Admin Layout */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* 🔥 default redirect */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="categories" element={<Category />} />
        <Route path="services" element={<Service />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="team-members" element={<TeamMember />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="inquiries" element={<Inquiries />} />
      </Route>
    </Routes>
  );
}

export default App;
