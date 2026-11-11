import React, { useContext , useState} from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from "../../assets/Images/service-block-shape.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import {
  FaAngleRight,
  FaAngleDown,
  FaAngleUp
} from "react-icons/fa6";

const CheckOut = () => {
  const [activePayment, setActivePayment] =
  useState("card");

  const { cartItem } = useContext(CartContext);

  // Cart Subtotal
  const subtotal = cartItem.reduce(
    (total, item) =>
      total + Number(item.price.replace("$", "")) * item.quantity,

    0,
  );

  // Shipping
  const shipping = 70;

  // Final Total
  const finalTotal = subtotal + shipping;

  return (
    <>
      <section className="Checkout relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Checkout</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Checkout
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form */}

      <div className="container p-10 min-h-screen flex flex-row gap-10">
        {/* Left */}

        <div className="Left w-full lg:w-[50%] p-10">
          <h1 className="text-3xl tracking-wide font-bold">Billing Details</h1>

          <div className="flex flex-row mt-10 gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">First Name</label>

              <input
                type="text"
                placeholder="First Name"
                className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">Last Name</label>

              <input
                type="text"
                placeholder="Last Name"
                className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-600 text-lg">Company Name</label>

            <input
              type="text"
              placeholder="Company Name"
              className="outline-0 border border-gray-300 px-4 py-3 w-full bg-[#F4F5F8] rounded-lg placeholder:text-sm"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-600 text-lg">Email Address</label>

            <input
              type="text"
              placeholder="Email Address"
              className="outline-0 border border-gray-300 px-4 py-3 w-full bg-[#F4F5F8] rounded-lg placeholder:text-sm"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-600 text-lg">Address</label>

            <input
              type="text"
              placeholder="Street Address"
              className="outline-0 border border-gray-300 px-4 py-3 w-full bg-[#F4F5F8] rounded-lg placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Apartment, suite, unit etc.(optional)"
              className="outline-0 border border-gray-300 px-4 py-3 w-full bg-[#F4F5F8] rounded-lg placeholder:text-sm mt-2"
            />
          </div>

          <div className="flex flex-row mt-4 gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">City</label>

              <input
                type="text"
                placeholder="City"
                className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">State/province</label>

              <select className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm">
                <option>Select Country</option>
                <option>Australia</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row mt-4 gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">Zip/Postal Code</label>

              <input
                type="text"
                placeholder="Zip/Postal Code"
                className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-600 text-lg">Country</label>

              <select className="outline-0 border border-gray-300 px-4 py-3 w-80 bg-[#F4F5F8] rounded-lg placeholder:text-sm">
                <option>Select Country</option>
                <option>Australia</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="Right w-full lg:w-[50%] p-10">
          <h1 className="text-3xl tracking-wide font-bold">
            Additional Information
          </h1>

          <div className="flex flex-col mt-10">
            <label className="text-gray-600 text-lg">
              Order notes(optional)
            </label>

            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="outline-0 border border-gray-300 px-4 py-3 w-full h-40 bg-[#F4F5F8] rounded-lg placeholder:text-sm resize-none"
            />
          </div>
        </div>
      </div>

      {/* Order Table */}

      <div className="container px-4 lg:px-20 pb-20">
        <h1 className="text-4xl font-bold text-[#0D3B36] mb-10">Your Order</h1>

        <table className="w-full border border-gray-300">
          {/* Table Head */}

          <thead>
            <tr>
              <th className="border border-gray-300 p-6 text-left text-2xl">
                Photo
              </th>

              <th className="border border-gray-300 p-6 text-left text-2xl">
                Product Name
              </th>

              <th className="border border-gray-300 p-6 text-left text-2xl">
                Total
              </th>
            </tr>
          </thead>

          {/* Table Body */}

          <tbody>
            {cartItem.map((item) => (
              <tr key={item.id}>
                {/* Image */}

                <td className="border border-gray-300 p-6">
                  <img
                    src={item.img}
                    alt=""
                    className="w-24 h-24 object-contain"
                  />
                </td>

                {/* Product */}

                <td className="border border-gray-300 p-6 text-xl">
                  {item.Heading} x {item.quantity}
                </td>

                {/* Total */}

                <td className="border border-gray-300 p-6 text-xl">
                  ${Number(item.price.replace("$", "")) * item.quantity}.00
                </td>
              </tr>
            ))}

            {/* Subtotal */}

            <tr>
              <td className="border border-gray-300 p-6 text-xl font-medium">
                Cart Subtotal
              </td>

              <td className="border border-gray-300 p-6"></td>

              <td className="border border-gray-300 p-6 text-xl">
                ${subtotal}.00
              </td>
            </tr>

            {/* Shipping */}

            <tr>
              <td className="border border-gray-300 p-6 text-xl font-medium">
                Shipping and Handling
              </td>

              <td className="border border-gray-300 p-6"></td>

              <td className="border border-gray-300 p-6 text-xl">
                ${shipping}.00
              </td>
            </tr>

            {/* Final Total */}

            <tr>
              <td className="border border-gray-300 p-6 text-xl font-semibold">
                Order Total
              </td>

              <td className="border border-gray-300 p-6"></td>

              <td className="border border-gray-300 p-6 text-xl font-semibold">
                ${finalTotal}.00
              </td>
            </tr>
          </tbody>
        </table>

        {/* Button */}

        <button className="mt-10 px-10 py-4 bg-[#0D3B36] text-white font-medium hover:bg-[#BED034] hover:text-[#0D3B36] duration-500 cursor-pointer">
          Place Order
        </button>
      </div>

      {/* Payment Method Section */}

{/* Payment Method Section */}

<div className="p-4 lg:p-20">

  <h1 className="text-4xl font-bold text-[#0D3B36] mb-10">
    Choose a Payment Method
  </h1>

  {/* Credit Card */}

  <div className="border border-gray-300">

    {/* Header */}

    <div
      onClick={() => setActivePayment("card")}
      className="flex items-center justify-between px-8 py-6 bg-[#F5F5F5] cursor-pointer"
    >

      <h2 className="text-2xl font-semibold text-[#0D3B36]">
        Credit Card / Debit Card
      </h2>

      {
        activePayment === "card"
          ? <FaAngleUp className="text-2xl" />
          : <FaAngleDown className="text-2xl" />
      }

    </div>

    {/* Content */}

    {
      activePayment === "card" && (

        <div className="p-8 flex flex-col gap-6">

          <div className="flex gap-6">

            <input
              type="text"
              placeholder="Name on the Card"
              className="w-1/2 bg-[#F5F5F5] border border-gray-300 px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-1/2 bg-[#F5F5F5] border border-gray-300 px-5 py-4 outline-none"
            />

          </div>

          <div className="flex gap-6">

            <input
              type="text"
              placeholder="Expiry Date"
              className="w-1/4 bg-[#F5F5F5] border border-gray-300 px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Security Code"
              className="w-1/4 bg-[#F5F5F5] border border-gray-300 px-5 py-4 outline-none"
            />

            <button className="px-10 py-4 bg-[#0D3B36] text-white font-medium hover:bg-[#BED034] hover:text-[#0D3B36] duration-500 cursor-pointer">

              Make Payment

            </button>

          </div>

        </div>
      )
    }

  </div>

  {/* Direct Bank Transfer */}

  <div className="border border-gray-300 mt-6">

    {/* Header */}

    <div
      onClick={() => setActivePayment("bank")}
      className="flex items-center justify-between px-8 py-6 bg-[#F5F5F5] cursor-pointer"
    >

      <h2 className="text-2xl font-semibold text-[#0D3B36]">
        Direct Bank Transfer
      </h2>

      {
        activePayment === "bank"
          ? <FaAngleUp className="text-2xl" />
          : <FaAngleDown className="text-2xl" />
      }

    </div>

    {/* Content */}

    {
      activePayment === "bank" && (

        <div className="p-8">

          <p className="text-gray-600 text-lg leading-9">

            Make your payment directly into our bank account.
            Please use your Order ID as the payment
            reference. Your order won’t be shipped until
            the funds have cleared in our account.

          </p>

        </div>
      )
    }

  </div>

  {/* Cheque Payment */}

  <div className="border border-gray-300 mt-6">

    <div
      onClick={() => setActivePayment("cheque")}
      className="flex items-center justify-between px-8 py-6 bg-[#F5F5F5] cursor-pointer"
    >

      <h2 className="text-2xl font-semibold text-[#0D3B36]">
        Cheque Payment
      </h2>

      {
        activePayment === "cheque"
          ? <FaAngleUp className="text-2xl" />
          : <FaAngleDown className="text-2xl" />
      }

    </div>

    {
      activePayment === "cheque" && (

        <div className="p-8">

          <p className="text-gray-600 text-lg leading-9">

            Please send your cheque to our official office address.
            Your order will be processed after cheque clearance.

          </p>

        </div>
      )
    }

  </div>

  {/* Other Payment */}

  <div className="border border-gray-300 mt-6">

    <div
      onClick={() => setActivePayment("other")}
      className="flex items-center justify-between px-8 py-6 bg-[#F5F5F5] cursor-pointer"
    >

      <h2 className="text-2xl font-semibold text-[#0D3B36]">
        Other Payment
      </h2>

      {
        activePayment === "other"
          ? <FaAngleUp className="text-2xl" />
          : <FaAngleDown className="text-2xl" />
      }

    </div>

    {
      activePayment === "other" && (

        <div className="p-8">

          <p className="text-gray-600 text-lg leading-9">

            Other payment methods will be available soon.

          </p>

        </div>
      )
    }

  </div>

</div>
    </>
  );
};

export default CheckOut;
