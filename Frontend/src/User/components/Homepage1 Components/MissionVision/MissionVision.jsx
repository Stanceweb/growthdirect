import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Choose from "../../../../assets/Images/choose-image1.jpg";
import { circularProgressWithCount } from "../../../utils/animation";
import { MdArrowOutward } from "react-icons/md";
import { useLayoutEffect } from "react";
import gsap from "gsap";


const MissionVision = () => {
  const circle1 = useRef(null);
  const text1 = useRef(null);
  const boxRef = useRef(null);

  const circle2 = useRef(null);
  const text2 = useRef(null);

  const [active, setActive] = useState("About Us");
  const [animate, setAnimate] = useState(false);

  const tabs = ["About Us", "Our Mission", "Our Vision"];

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    circularProgressWithCount(circle1.current, text1.current, 95, boxRef.current);
    circularProgressWithCount(circle2.current, text2.current, 50, boxRef.current);
  });

  return () => ctx.revert();
}, []);


  return (
    <section className="Mission-Vision w-full mt-12 lg:mt-20 lg:min-h-screen flex flex-col lg:flex-row p-4 lg:p-10">
      
      {/* LEFT */}
      <div className="left w-full lg:w-[60%] p-2 sm:p-6 lg:p-20 flex flex-col gap-6">
        <span data-aos= "fade-right" className="w-fit px-6 py-3 lg:py-2 rounded-full tracking-widest font-bold bg-[#C6D936] inline-block">
          MISSION VISION
        </span>

        <h1 data-aos= "fade-right" className="text-3xl lg:text-5xl font-bold leading-tight lg:leading-14">
          We Handle Capital Complexities,
          <br />
          So You Can Focus on
          <br />
          Institutional Growth.
        </h1>

        {/* Tabs */}
        <div className="flex gap-6 sm:gap-10 border-b-2 border-gray-200 mt-6">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setAnimate(true);
                setTimeout(() => setAnimate(false), 300);
              }}
              className={`pt-2 pb-3 whitespace-nowrap font-semibold ${
                active === item
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`mt-6 transition-all duration-300 ${
            animate ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <p className="text-gray-600 leading-7">
            DealMaker Financial Advisors is a registered investment advisory firm providing expert guidance across portfolio advisory and corporate finance in the NGX ecosystem.
          </p>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 font-bold">
          <p className="flex items-center gap-2"><FaCheck /> SEC-Registered Advisory</p>
          <p className="flex items-center gap-2"><FaCheck /> Corporate Debt Restructuring</p>
          <p className="flex items-center gap-2"><FaCheck /> Capital Market Research</p>
          <p className="flex items-center gap-2"><FaCheck /> NGX Portfolio Management</p>
        </div>

        <Link to="/about-us" className="mt-6 w-full lg:w-[50%]">
          <button className="w-full py-3 min-h-[44px] bg-[#1A4137] text-white cursor-pointer">
            Discover More
          </button>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="right w-full lg:w-[40%] h-[320px] sm:h-[400px] lg:h-auto mt-10 lg:mt-0 relative">
        <img src={Choose} className="h-full w-full object-cover" />

        {/* 🔥 PROGRESS BOX */}
        <div ref={boxRef} className="absolute -bottom-10 left-0 lg:-left-20 bg-[#C6D936] p-6 lg:p-8 w-full max-w-[320px]">

          {/* FIRST */}
          <div className="flex items-center gap-4">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="35" stroke="#d9e26a" strokeWidth="6" fill="none" />
              <circle
                ref={circle1}
                cx="50"
                cy="50"
                r="35"
                stroke="black"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <span className="absolute left-17.5 text-2xl"><MdArrowOutward /></span>
            <div>
              <h1 ref={text1} className="text-3xl font-bold">₦50B+</h1>
              <p className="font-semibold">Assets Under Advisory</p>
            </div>
          </div>

          {/* LINE */}
          <div className="border-t border-[#b7c92d] my-6"></div>

          {/* SECOND */}
          <div className="flex items-center gap-4">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="35" stroke="#d9e26a" strokeWidth="6" fill="none" />
              <circle
                ref={circle2}
                cx="50"
                cy="50"
                r="35"
                stroke="black"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <span className="absolute left-17.5 text-2xl"><MdArrowOutward /></span>
            <div>
              <h1 ref={text2} className="text-3xl font-bold">98%</h1>
              <p className="font-semibold">Client Retention Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;