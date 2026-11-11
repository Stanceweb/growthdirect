import React from "react";
import Price from "../../../../assets/Images/price.svg";
import "../PriceTable/price.css";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const PriceTable = () => {
  const Plans = [
    {
      id: 1,
      img: Price,
      plan: "Basic Plan",
      price: "$39",
      features: [
        "Unlimited Teams",
        "Custom Branding for team",
        "Unlimited Schedule",
        "Basic Anaytics for team",
      ],
    },
    {
      id: 2,
      img: Price,
      plan: "Standard Plan",
      price: "$99",
      features: [
        "Unlimited Teams",
        "Custom Branding for team",
        "Unlimited Schedule",
        "Basic Anaytics for team",
      ],
    },
    {
      id: 3,
      img: Price,
      plan: "Premium Plan",
      price: "$199",
      features: [
        "Unlimited Teams",
        "Custom Branding for team",
        "Unlimited Schedule",
        "Basic Anaytics for team",
      ],
    },
  ];
  return (
    <section className="Price min-h-screen p-10 flex flex-row overflow-hidden">
      <div className="left w-full lg:w-[40%] p-10 flex flex-col items-start gap-5">
        <span className="w-40 flex items-center justify-center py-2 tracking-widest font-medium bg-[#E34B1B] text-white rounded-full text-sm">
          PRICING TABLE
        </span>

        <h1 className="text-3xl lg:text-5xl font-bold leading-14">
          Choose your Right <br />
          Affordable Pricing
          <br />
          Plan
        </h1>

        <p className="text-lg text-gray-500 leading-9">
          Everyone with high and useful reward
          <br /> for his her trading, purchase and
          <br /> investment Our goal is to make the
        </p>
      </div>
      <div className="right w-full lg:w-[60%] flex flex-col items-start p-10 overflow-hidden">
        <div className="cards grid grid-rows-3 gap-10">
          {Plans.map((elem, idx) => {
            return (
              <div className="content flex flex-row items-start h-60 w-2xl border border-gray-300 rounded-2xl duration-500 hover:bg-[#1E443A] group">
                <div className="left relative flex flex-col items-center justify-center  w-[170px] h-full group-hover:text-white">
                  <div className="py-8 px-8 flex items-center justify-center rounded-full bg-[#F5F5F5] absolute -top-12 relative duration-500 group-hover:bg-[#E34B1B]  group-hover:rotate-y-180">
                    <img
                      src={elem.img}
                      className="group-hover:invert-100 "
                    />
                    <span className="h-6 w-6 bg-[#E34B1B] rounded-full absolute right-6 bottom-6 duartion-500 group-hover:bg-white/90  "></span>
                  </div>
                  <h2 className="font-bold text-lg">{elem.plan}</h2>
                  <span className="text-3xl font-bold ">{elem.price}</span>
                </div>

                <div className="right p-6 flex flex-row items-center gap-5 group">
                  <ul className="flex flex-col gap-4 mt-5 ">
                    {elem.features.map((feature, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-600 group-hover:text-white"
                        >
                          <FaCheck className="text-gray-500" />
                          {feature}
                        </li>
                      );
                    })}
                  </ul>

                  <button className="flex items-center justify-center text-white gap-1 w-50  h-12  rounded-full bg-[#063232] cursor-pointer group-hover:bg-white group-hover:text-black  ">
                    Get Started <FaAngleRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
