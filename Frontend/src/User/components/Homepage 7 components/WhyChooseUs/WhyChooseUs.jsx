import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import Service7 from "../../../../assets/Images/ServiceRight7.jpg";
import { circularProgressWithCount } from "../../../utils/animation";
import { MdArrowOutward } from "react-icons/md";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ServiceSvg from "../../../../assets/Images/ServiceRight7.svg"

const WhyChooseUs = () => {
  const circle1 = useRef(null);
  const text1 = useRef(null);
  const boxRef = useRef(null);

  const circle2 = useRef(null);
  const text2 = useRef(null);

  const [active, setActive] = useState("About Us");
  const [animate, setAnimate] = useState(false);

  const tabs = ["Our History ", "Our Mission", "Our Vision"];

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    circularProgressWithCount(circle1.current, text1.current, 95, boxRef.current);
    circularProgressWithCount(circle2.current, text2.current, 50, boxRef.current);
  });

  return () => ctx.revert();
}, []);


  return (
    <section className="Mission-Vision min-h-screen mt-20 w-full flex p-10">
      
      {/* LEFT */}
      <div className="left w-full lg:w-[60%] p-4 lg:p-20 flex flex-col gap-6">
        <button className="w-fit px-6 py-2 rounded-full tracking-widest font-bold bg-[#C6D936]">
          WHY CHOOSE US
        </button>

        <h1 className="text-3xl lg:text-5xl font-bold leading-14">
       Where Financial Wisdom <br/> Meets Exceptional Result
        </h1>

        {/* Tabs */}
        <div className="flex gap-10 border-b-2 border-gray-200 mt-6">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setAnimate(true);
                setTimeout(() => setAnimate(false), 300);
              }}
              className={`pb-3 font-semibold ${
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
           Set against the dreamy backdrop of Lake San Marcos, our resort offers a symphony of water, sky, and rolling landscapes. Indulge in a serene getaway, where every moment feels like a California postcard
          </p>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 font-bold">
          <p className="flex items-center gap-2"><FaCheck /> Private Equity Ventures</p>
          <p className="flex items-center gap-2"><FaCheck /> Global Real Estate Investment</p>
          <p className="flex items-center gap-2"><FaCheck /> Corporate Growth Capital</p>
          <p className="flex items-center gap-2"><FaCheck /> M&A and Exit planning</p>
        </div>

        <button className="mt-6 w-50 py-3 bg-[#1A4137] text-white cursor-pointer">
          Discover More
        </button>
      </div>

      {/* RIGHT */}
      <div className="right w-full lg:w-[40%] relative">
        <img src={Service7} className="h-full w-full object-cover rounded-3xl" />

        <div className="h-70 w-80 gap-5 backdrop-blur-2xl bg-white/10 absolute bottom-5 left-5 rounded-2xl flex flex-col items-center justify-center">
        <span  className="p-8 bg-[#C6D936] rounded-full">
          <img src={ServiceSvg} />
        </span>

        <p className="text-2xl text-white text-center font-bold">Best Business <br/> Consulting Awards</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;