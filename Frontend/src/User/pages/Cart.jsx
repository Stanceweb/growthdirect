import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import {
  FaAngleRight,
  FaPlus,
  FaMinus,
  FaTimes,
  FaArrowRight,
  FaTrash,
  FaAngleDown,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const navigate = useNavigate();
  return (
    <>
      {/* Banner Section */}

      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Cart</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Cart
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Section */}

      <div className="container min-h-screen py-10 lg:py-20 px-10">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            {/* Table Head */}

            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 "></th>

                <th className="border border-gray-300 p-4 text-left text-lg font-semibold">
                  Photo
                </th>

                <th className="border border-gray-300 p-4 text-left text-lg font-semibold">
                  Product Name
                </th>

                <th className="border border-gray-300 p-4 text-left text-lg font-semibold">
                  Price
                </th>

                <th className="border border-gray-300 p-4 text-left text-lg font-semibold">
                  Quantity
                </th>

                <th className="border border-gray-300 p-4 text-left text-lg font-semibold">
                  Total
                </th>
              </tr>
            </thead>

            {/* Table Body */}

            <tbody>
              {cartItem.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-xl font-semibold"
                  >
                    <Link
                      to="/products"
                      className="underline text-blue-600 flex items-center text-center text-sm font-normal"
                    >
                      Product page
                      <FaArrowRight />
                    </Link>
                    Cart Is Empty
                  </td>
                </tr>
              ) : (
                cartItem.map((item) => (
                  <tr key={item.id}>
                    {/* Remove Button */}

                    <td className="border border-gray-300 p-6">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="h-4 w-4 rounded-full flex items-center justify-center text-red-600 cursor-pointer"
                      >
                        <span className="translate-x-8 text-xl">
                          <FaTrash />
                        </span>
                      </button>
                    </td>

                    {/* Product Image */}

                    <td className="border border-gray-300 p-2">
                      <img
                        src={item.img}
                        alt=""
                        className="w-28 h-28 object-contain"
                      />
                    </td>

                    {/* Product Name */}

                    <td className="border border-gray-300 p-4">
                      <h2 className="text-xl text-[#0D3B36]">{item.Heading}</h2>
                    </td>

                    {/* Price */}

                    <td className="border border-gray-300 p-6">{item.price}</td>

                    {/* Quantity */}

                    <td className="border border-gray-300 p-2">
                      <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit">
                        <div className="flex flex-row">
                          <button
                            onClick={() => decrementQuantity(item.id)}
                            className=" px-2 py-1 border-t border-white text-sm"
                          >
                            <FaMinus />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            onClick={() => incrementQuantity(item.id)}
                            className=" px-2 text-sm"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* Total */}

                    <td className="border border-gray-300 p-6">
                      ${Number(item.price.replace("$", "")) * item.quantity}.00
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="border border-gray-300 p-6">
                  <div className="flex items-center justify-between">
                    {/* Coupon Input */}

                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="border border-gray-300 px-5 py-3 outline-none"
                      />

                      <button className="bg-[#0D3B36] text-white px-6 py-3 cursor-pointer">
                        Apply Coupon
                      </button>
                    </div>

                    {/* Update Cart */}

                    <button className="bg-[#0D3B36] text-white px-6 py-3 cursor-pointer ">
                      Update Cart
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="p-10 flex flex-row gap-4 lg:p-20">
            {/* Shipping Section */}

            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-[#0D3B36]">
                Calculate Shipping
              </h1>

              {/* Select */}

              <select className="w-full bg-[#F5F5F5] border border-gray-300 py-4 px-4 mt-8 outline-none">
                <option>Select Country</option>
                <option>Australia</option>
                <option>UK</option>
                <option>USA</option>
                <option>India</option>
              </select>

              {/* Inputs */}

              <input
                type="text"
                placeholder="State/Country"
                className="w-full bg-[#F5F5F5] border border-gray-300 py-4 px-4 mt-6 outline-none"
              />

              <input
                type="text"
                placeholder="Postcode/Zip"
                className="w-full bg-[#F5F5F5] border border-gray-300 py-4 px-4 mt-6 outline-none"
              />

              {/* Button */}

              <button className="mt-6 px-10 py-4 bg-[#0D3B36] text-white font-medium hover:bg-[#BED034] hover:text-[#0D3B36] duration-500 cursor-pointer">
                Update Totals
              </button>
            </div>

            {/* Cart Totals */}

            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-[#0D3B36] mb-8">
                Cart Totals
              </h1>

              {/* Table */}

              <div className="border border-gray-300">
                {/* Subtotal */}

                <div className="flex items-center justify-between border-b border-gray-300">
                  <h2 className="w-1/2 p-6 text-xl font-medium">
                    Cart Subtotal
                  </h2>

                  <span className="w-1/2 p-6 border-l border-gray-300 text-xl">
                    $
                    {cartItem.reduce(
                      (total, item) =>
                        total +
                        Number(item.price.replace("$", "")) * item.quantity,

                      0,
                    )}
                    .00
                  </span>
                </div>

                {/* Shipping */}

                <div className="flex items-center justify-between border-b border-gray-300">
                  <h2 className="w-1/2 p-6 text-xl font-medium">
                    Shipping & Handling
                  </h2>

                  <span className="w-1/2 p-6 border-l border-gray-300 text-xl">
                    $70.00
                  </span>
                </div>

                {/* Order Total */}

                <div className="flex items-center justify-between">
                  <h2 className="w-1/2 p-6 text-xl font-semibold">
                    Order Total
                  </h2>

                  <span className="w-1/2 p-6 border-l border-gray-300 text-xl font-semibold">
                    $
                    {cartItem.reduce(
                      (total, item) =>
                        total +
                        Number(item.price.replace("$", "")) * item.quantity,

                      70,
                    )}
                    .00
                  </span>
                </div>
              </div>

              {/* Checkout Button */}

              <button
                onClick={() => navigate("/checkout")}
                className="mt-8 px-10 py-4 bg-[#0D3B36] text-white font-medium hover:bg-[#BED034] hover:text-[#0D3B36] duration-500 cursor-pointer"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
