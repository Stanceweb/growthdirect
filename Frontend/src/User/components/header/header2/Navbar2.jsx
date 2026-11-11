import React from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { TbAlignRight } from "react-icons/tb";

const Navbar2 = ({ hideTopbar }) => {
  return (
    <section className="Navbar h-22 w-full border-b border-gray-300 p-12 flex items-center justify-around bg-[#F8F5F2]">
      {/* Logo */}
      <img src={Logo} alt="" srcset="" />

      {/* Links */}
      {/* MENU */}
      <ul className="flex items-center gap-10">
        {/* HOME PAGE DROP DOWN  */}
        <Link className="homepage flex items-center gap-2 text-[16px] relative">
          Home <FaAngleDown className="text-[12px]" />
          <div
            className="home-dp absolute w-60  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
    transition-all duration-500 rounded-b-2xl"
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

        {/* PAGE DROP DOWN  */}

        <Link className="page flex items-center gap-2 text-[16px] relative">
          Page <FaAngleDown className="text-[12px]" />
          <div
            className="page-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
    transition-all duration-500 rounded-b-2xl"
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

        {/* SERVICE DROP DOWN */}

        <Link className="service flex items-center gap-2 text-[16px] relative">
          Services <FaAngleDown className="text-[12px]" />
          <div
            className="service-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
    transition-all duration-500 rounded-b-2xl"
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

        {/* PORTFOLIO DROP DOWN */}
        <Link className="portfolio flex items-center gap-2 text-[16px] relative">
          Portfolio <FaAngleDown className="text-[12px]" />
          <div
            className="portfolio-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
    transition-all duration-500 rounded-b-2xl"
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

        {/* NEWS DROP DOWN */}
        <Link className="news flex items-center gap-2 text-[16px] relative">
          News <FaAngleDown className="text-[12px]" />
          <div
            className="news-dp absolute w-50  bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-5 p-4 opacity-0 invisible translate-y-6
    transition-all duration-500 rounded-b-2xl"
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

      {!hideTopbar && (
        <div className="flex items-center px-6 gap-6">
          <div className="flex items-center px-6 gap-3">
            <button className="px-8 py-3  border rounded-full border-[#1A4137] cursor-pointer text-[#1A4137]  font-medium">
              Contact Now
            </button>
            <div className="flex flex-col">
              <span className="px-3 py-3  text-2xl text-[#1A4137] border rounded-full  duration-500 border-[#1A4137] bg-[#C6D936] hover:bg-[#1A4137] hover:text-white cursor-pointer">
                <TbAlignRight />
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar2;
