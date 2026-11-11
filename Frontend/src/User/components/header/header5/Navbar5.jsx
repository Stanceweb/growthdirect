import React, { useState, useEffect } from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import "../header4/navbar.css";
import { IoSearchOutline } from "react-icons/io5";

const Navbar5 = () => {
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
      className={`Navbar fixed top-0 left-0 right-0 z-50 w-full border-b border-black/20 text-black flex items-center justify-between transition-all duration-300 ${scrolled ? "h-22 bg-white shadow-md px-30" : "h-22 bg-white"}`}
    >
      <img src={Logo} className="px-10" />

      {/* Links */}
      <ul className="relative flex items-center justify-center gap-8 text-black">
        <Link className="homepage relative text-[16px] flex items-center justify-center gap-2">
          Home{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Home page dp */}
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
        <Link className="page relative text-[16px] flex items-center justify-center gap-2">
          Page{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Page dp */}
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
        <Link className="service relative  text-[16px] flex items-center justify-center gap-2">
          Services{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Service Drop down */}
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
        <Link className="portfolio relative text-[16px] flex items-center justify-center gap-2">
          Portfolio{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* Portfolio dp */}
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
        <Link className="news relative text-[16px] flex items-center justify-center gap-2">
          News{" "}
          <span className="text-[12px]">
            <FaAngleDown />
          </span>
          {/* News Drop down  */}
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

      {/* Search - always visible */}

      <span
        className={`search relative cursor-pointer text-3xl transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
      >
        <IoSearchOutline />
      </span>

      {/* Phone - hide on scroll */}
      <div
        className={`call flex gap-3 text-black transition-all duration-300 ${scrolled ? "hidden" : "flex"}`}
      >
        <span className="p-4 rounded-full bg-gray-200/60 text-xl font-bold">
          <IoMdCall />
        </span>
        <div className="content flex flex-col text-black">
          <span className="text-sm">PHONE :</span>
          <span className="font-bold">+234 803 708 0343</span>
        </div>
      </div>

      {/* Button - hide on scroll */}
      <button
        className={`flex items-center justify-center gap-2 cursor-pointer h-full w-50 bg-[#C6D936] transition-all duration-300 ${scrolled ? "hidden" : "flex"}`}
      >
        Get Quote Now
      </button>
    </section>
  );
};

export default Navbar5;
