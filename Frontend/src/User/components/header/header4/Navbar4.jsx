import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../../assets/Images/logo-light.png";
import LogoDark from "../../../../assets/Images/logo.png"; // add dark logo if you have it
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import "../header4/navbar.css";

const Navbar4 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Placeholder to prevent layout jump when navbar becomes fixed */}
      <div className="h-22" />

      <section
        className={`Navbar fixed top-0 left-0 right-0 z-50 h-22 w-full flex items-center justify-between transition-all duration-500
    ${
      scrolled
        ? "bg-white shadow-lg border-b border-gray-100 translate-y-0 opacity-100 px-30"
        : "bg-[#1A4137] border-b border-white/20 translate-y-0 opacity-100"
    }`}
      >
        {/* Menu - only show when NOT scrolled */}
        {!scrolled && (
          <p className="relative text-white flex items-center justify-center gap-2 text-xl font-medium px-5 cursor-pointer">
            <AiOutlineMenu className="text-xl" />
            Menu
          </p>
        )}

        {/* Logo */}

        <img
          src={scrolled ? LogoDark : Logo}
          alt="DealMaker"
          className={`transition-all duration-500 ${scrolled ? "" : ""}`}
        />

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

                  <Link
                    to="/checkout"
                    className="px-6 py-4 hover:text-[#1A4137]"
                  >
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

        {/* Call section - only when NOT scrolled */}
        {!scrolled && (
          <div className="call flex gap-3 text-white">
            <span className="p-4 rounded-full bg-white/10 text-xl font-bold">
              <IoMdCall />
            </span>
            <div className="content flex flex-col text-white">
              <span className="text-sm">PHONE :</span>
              <span className="font-bold">+234 803 708 0343</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {!scrolled && (
          <button
            className={`flex items-center justify-center gap-2 cursor-pointer transition-all duration-500
            ${
              scrolled
                ? "h-11 px-6 rounded-full bg-[#C6D936] text-gray-900 font-semibold text-sm"
                : "h-full w-50 bg-[#C6D936]"
            }`}
          >
            Get Quote Now
          </button>
        )}
      </section>
    </>
  );
};

export default Navbar4;
