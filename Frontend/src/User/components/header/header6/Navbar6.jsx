import React, { useState, useEffect } from "react";
import Logo2 from "../../../../assets/Images/logo-2.png";
import LogoDark from "../../../../assets/Images/logo.png"; // add dark logo if you have it
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Navbar6 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`Navbar6 fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center justify-between
  ${
    scrolled
      ? "w-full rounded-none h-22 px-30 bg-white shadow-lg border-b border-gray-200"
      : "w-[92%] top-8 rounded-full h-18 px-10 bg-[#063232] border border-white/20"
  }`}
    >
      {/* Logo */}
      <img src={scrolled ? LogoDark : Logo2} alt="" />

      {/* Links */}
      <ul
        className={`relative flex items-center justify-center gap-8 transition-colors duration-500
            ${scrolled ? "text-gray-800" : "text-white"}`}
      >
        {/* Home Page Drop down */}
        <Link className="homepage relative text-[16px] flex items-center justify-center gap-2 transition-colors">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          <div
            className="home-dp absolute w-60  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/"
            >
              Home Page 1
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage2"
            >
              Home Page 2
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage3"
            >
              Home Page 3
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage4"
            >
              Home Page 4
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage5"
            >
              Home Page 5
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage6"
            >
              Home Page 6
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/homepage7"
            >
              Home Page 7
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/single-style"
            >
              Single Style
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/dark-style"
            >
              Dark Style{" "}
            </Link>
            <Link
              className="duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/RTL-style"
            >
              RTL Style
            </Link>
          </div>
        </Link>

        {/* Page Drop down */}
        <Link className="page relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          {scrolled ? "Pages" : "Page"}{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          <div
            className="page-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/about-us"
            >
              About
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/faqs"
            >
              Faq
            </Link>
            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/pricing"
            >
              Pricing
            </Link>
            <div className="relative group w-full border-b border-gray-200 pb-2">
              {/* MAIN MENU */}
              <Link
                className="flex items-center justify-between duration-100 hover:translate-x-2 hover:text-[#1A4137]"
                to="/team"
              >
                Team
                <FaAngleRight />
              </Link>

              {/* SUB MENU */}
              <div
                className="
              absolute left-full top-0
              w-60 bg-white shadow-2xl
              opacity-0 invisible
              translate-x-5
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-x-0
              transition-all duration-300
              flex flex-col
              z-50 mx-4
            "
              >
                <Link
                  to="/teamlist"
                  className="px-6 py-4 border-b border-gray-200 hover:text-[#1A4137]"
                >
                  Team List
                </Link>

                <Link
                  to="/team-details"
                  className="px-6 py-4 hover:text-[#1A4137]"
                >
                  Team Details
                </Link>
              </div>
            </div>
            <div className="relative group w-full border-b border-gray-200 pb-2">
              {/* MAIN MENU */}
              <Link
                className="flex items-center justify-between duration-100 hover:translate-x-2 hover:text-[#1A4137]"
                to="/shop"
              >
                Shop
                <FaAngleRight />
              </Link>

              {/* SUB MENU */}
              <div
                className="
               absolute left-full top-0
               w-60 bg-white shadow-2xl
               opacity-0 invisible
               translate-x-5
               group-hover:opacity-100
               group-hover:visible
               group-hover:translate-x-0
               transition-all duration-300
               flex flex-col
               z-50 mx-4
             "
              >
                <Link
                  to="/products"
                  className="px-6 py-4 border-b border-gray-200 hover:text-[#1A4137]"
                >
                  Products
                </Link>

                <Link
                  to="/product-sidebar"
                  className="px-6 py-4 border-b border-gray-200 hover:text-[#1A4137]"
                >
                  Products With Sidebar
                </Link>

                <Link
                  to="/product/1"
                  className="px-6 py-4 border-b border-gray-200 hover:text-[#1A4137]"
                >
                  Product Details
                </Link>

                <Link
                  to="/cart"
                  className="px-6 py-4 border-b border-gray-200 hover:text-[#1A4137]"
                >
                  Cart
                </Link>

                <Link to="/checkout" className="px-6 py-4 hover:text-[#1A4137]">
                  Checkout
                </Link>
              </div>
            </div>

            <Link
              className="w-full border-b border-gray-200 pb-1 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/testimonial"
            >
              Testimonials
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/error"
            >
              404
            </Link>
          </div>
        </Link>

        {/* Service Drop Down */}
        <Link className="service relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          <div
            className="service-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/service"
            >
              Services
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/service-details"
            >
              Services details
            </Link>
          </div>
        </Link>

        {/* Portfolio Drop Down */}
        <Link className="portfolio relative text-[16px] flex items-center justify-center gap-2  transition-colors">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          <div
            className="portfolio-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/portfolio-details"
            >
              Portfolio details
            </Link>
          </div>
        </Link>

        {/* News Drop down  */}
        <Link className="news relative text-[16px] flex items-center justify-center gap-2 transition-colors">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          <div
            className="news-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
transition-all duration-500 rounded-b-2xl text-black"
          >
            <Link
              className="w-full border-b border-gray-300 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/news-grid"
            >
              News Grid
            </Link>
            <Link
              className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]"
              to="/news-details"
            >
              News details
            </Link>
          </div>
        </Link>
        <Link to="/contact-us" className="text-[16px]">
          Contact
        </Link>
      </ul>

      {!scrolled && (
        <div className="btn translate-x-8">
          <button className="bg-[#E34B1B] px-10 py-4 rounded-full text-white cursor-pointer">
            Get Quote Now
          </button>
        </div>
      )}
    </section>
  );
};

export default Navbar6;
