import React from "react";
import About1 from "../../../../assets/Images/about-seven-image1.jpg";
import About2 from "../../../../assets/Images/about-seven-image2.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import user2 from "../../../../assets/Images/about-four-user.png";
import Sign from "../../../../assets/Images/about-four-sign.png";

const About7 = () => {
  return (
    <section className="about7 min-h-screen flex flex-row p-10 ">
      <div className="left w-full lg:w-[50%] relative border-r border-gray-300  ">
        <img
          src={About1}
          className="rounded-2xl duration-300 hover:grayscale-100"
        />
        <div className="h-82 w-72 bg-white shadow-2xl rounded-xl flex items-center justify-center absolute bottom-0 right-5">
          <img
            src={About2}
            className=" rounded-2xl duration-300 hover:grayscale-100 "
          />
        </div>
      </div>

      <div className="right w-full lg:w-[50%]  px-8  flex flex-col gap-5">
        <span className="bg-[#C6D936] w-40 flex items-center justify-center py-2 font-medium tracking-widest text-sm rounded-full">
          ABOUT US
        </span>
        <h1 className="text-3xl lg:text-5xl font-bold w-full leading-16">
          Ensure The Success Of Your <br />
          Business Venture...
        </h1>

        <p className="text-lg text-gray-500 leading-9">
          Consumers today increasingly rely on digital channels to research
          products. We analyze brands and their offerings, engaging with them
          accordingly. Meanwhile, 51% of consumers. We strive to develop
          real-world
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10 mt-3 border-b pb-10 border-gray-300">
          <p className="flex items-center gap-3 text-gray-600">
            <FaCheck />
            Growing Net Sales In Year 2024
          </p>

          <p className="flex items-center gap-3 text-gray-600">
            <FaCheck />
            Skilled Creative Team
          </p>

          <p className="flex items-center gap-3 text-gray-600">
            <FaCheck />
            Business Consultancy
          </p>

          <p className="flex items-center gap-3 text-gray-600">
            <FaCheck />
            We Offer You Solution
          </p>
        </div>
          <div className="flex flex-row items-center gap-6">
                  <button className="text-sm font-medium w-50 h-12 bg-[#1A4137] text-white flex items-center justify-center gap-2 cursor-pointer">
                    Find Services
                    <FaAngleRight className="text-sm" />
                  </button>
        
                  <span className="p-1 border border-amber-500 rounded-full">
                    <img src={user2} className="rounded-full" />
                  </span>
        
                  <img src={Sign} alt="" />
                </div>
      </div>
    </section>
  );
};

export default About7;
