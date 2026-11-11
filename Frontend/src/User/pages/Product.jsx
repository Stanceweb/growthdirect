import React, { useContext, useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from "../../assets/Images/service-block-shape.png";
import {
  FaAngleRight,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Products from "../Data/ProductData";
import { CartContext } from "../Context/CartContext";

const Product = ({ sidebar }) => {
  const { addToCart } = useContext(CartContext);

  const Tabs = [
    "All",
    "Compass",
    "Reel",
    "Stearing",
    "Jacket",
    "Binocular",
  ];

  const [ActiveTab, setActiveTab] = useState("All");

  const FilterProducts =
    ActiveTab === "All"
      ? Products
      : Products.filter((elem) =>
          elem.category_id.includes(ActiveTab)
        );

  return (
    <>
      {/* Banner Section */}

      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img
            src={Pattern}
            className="absolute top-0 right-0"
          />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">
              Shop
            </h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}

      <div className="container min-h-screen py-10 lg:py-20 px-10 bg-[#f5f5f5]">

        {/* Tabs Only For Normal Shop Page */}

        {
          !sidebar && (

            <div className="flex items-center justify-center gap-10 mb-16">

              {
                Tabs.map((tab, index) => (

                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`font-semibold transition-all duration-300 border-b-3 pb-1 cursor-pointer
                  
                    ${
                      ActiveTab === tab
                        ? "text-[#0D3B36] border-[#BED034]"
                        : "text-gray-500 border-transparent"
                    }
                  `}
                  >

                    {tab}

                  </button>
                ))
              }

            </div>
          )
        }

        {/* Main Layout */}

        <div className="flex gap-10">

          {/* Sidebar */}

          {
            sidebar && (

              <div className="w-[25%]">

                {/* Search */}

                <div className="bg-white p-6 rounded-lg shadow-md">

                  <h1 className="text-2xl font-bold text-[#0D3B36] mb-6">
                    Search
                  </h1>

                  <div className="relative">

                    <input
                      type="text"
                      placeholder="Search Product..."
                      className="w-full border border-gray-300 px-4 py-4 outline-none rounded-md"
                    />

                    <FaSearch className="absolute top-5 right-4 text-gray-500" />

                  </div>

                </div>

                {/* Categories */}

                <div className="bg-white p-6 rounded-lg shadow-md mt-10">

                  <h1 className="text-2xl font-bold text-[#0D3B36] mb-6">
                    Categories
                  </h1>

                  <div className="flex flex-col gap-5">

                    {
                      Tabs.map((tab, index) => (

                        <button
                          key={index}
                          onClick={() => setActiveTab(tab)}
                          className={`text-left text-lg font-medium transition-all duration-300 cursor-pointer

                          ${
                            ActiveTab === tab
                              ? "text-[#BED034]"
                              : "text-gray-600"
                          }
                        `}
                        >

                          {tab}

                        </button>
                      ))
                    }

                  </div>

                </div>

                {/* Price Filter */}

                <div className="bg-white p-6 rounded-lg shadow-md mt-10">

                  <h1 className="text-2xl font-bold text-[#0D3B36] mb-6">
                    Filter By Price
                  </h1>

                  <input
                    type="range"
                    className="w-full accent-[#BED034]"
                  />

                  <div className="flex items-center justify-between mt-4">

                    <span className="text-gray-600">
                      $0
                    </span>

                    <span className="text-gray-600">
                      $500
                    </span>

                  </div>

                </div>

                {/* Popular Products */}

<div className="bg-white p-6 rounded-lg shadow-md mt-10">

  <h1 className="text-2xl font-bold text-[#0D3B36] mb-8">
    Popular Products
  </h1>

  <div className="flex flex-col gap-8">

    {
      Products.slice(0, 3).map((item) => (

        <div
          key={item.id}
          className="flex items-center gap-5 border-b border-gray-200 pb-6"
        >

          {/* Image */}

          <div className="w-24 h-24 bg-[#eef2fb] rounded-md flex items-center justify-center">

            <img
              src={item.img}
              className="w-16 object-contain"
            />

          </div>

          {/* Content */}

          <div>

            <h2 className="text-lg text-gray-600 hover:text-[#BED034] duration-300 cursor-pointer">

              {item.Heading}

            </h2>

            <p className="text-[#0D3B36] text-lg  mt-2">

              {item.price}

            </p>

          </div>

        </div>
      ))
    }

  </div>

</div>

              </div>
            )
          }

          {/* Product Cards */}

          <div
            className={
              sidebar
                ? "w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10"
            }
          >

            {
              FilterProducts.map((elem) => (

                <Link
                  to={`/product/${elem.id}`}
                  key={elem.id}
                  className="border border-[#0D3B36] rounded-md overflow-hidden bg-white group hover:border-[#BED034] transition-all duration-500"
                >

                  {/* Image Section */}

                  <div className="bg-[#eef2fb] h-[320px] flex items-center justify-center relative overflow-hidden">

                    <img
                      src={elem.img}
                      className="transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Hover Icons */}

                    <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">

                      <span className="h-10 w-10 rounded-full bg-[#1A4137] text-white flex items-center justify-center cursor-pointer duration-500 hover:bg-[#BED034] hover:text-[#1A4137]">

                        <FaHeart />

                      </span>

                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(elem);
                        }}
                        className="h-10 w-10 rounded-full bg-[#1A4137] text-white flex items-center justify-center cursor-pointer duration-500 hover:bg-[#BED034] hover:text-[#1A4137]"
                      >

                        <FaShoppingCart />

                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="py-8 flex flex-col items-center justify-center">

                    <h2 className="text-xl font-bold text-[#0D3B36]">
                      {elem.Heading}
                    </h2>

                    <p className="mt-2 text-gray-500 font-semibold">
                      {elem.price}
                    </p>

                    {/* Stars */}

                    <div className="flex items-center gap-1 text-[#FDB819] mt-4">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                    </div>

                  </div>

                </Link>
              ))
            }

          </div>

        </div>

      </div>
    </>
  );
};

export default Product;