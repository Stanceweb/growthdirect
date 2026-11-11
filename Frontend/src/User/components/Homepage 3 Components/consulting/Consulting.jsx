import React from "react";
import consultBG from "../../../../assets/Images/consult-bg.jpg";
import consultShape from "../../../../assets/Images/consult-shape.png";
import "../../../../../src/App.css";
import { MdArrowOutward } from "react-icons/md";

const Consulting = ({
  bgColor = "bg-[#C6D936]",
  textColor = "text-[#000]",
  textColor2 = "text-[#1A4137]",
  bgColor2 = "bg-[#1A4137]",
  gradientFrom = "from-[#1A4137]/100",
  gradientVia = "via-[#1A4137]/80",
  gradientTo = "to-transparent",
   showGradient = true
}) => {
  return (
    <section className="relative w-full min-h-[550px] w-full flex items-start justify-center relative overflow-hidden">
      <div className="h-[500px] w-full relative">
        <img src={consultBG} className="h-full w-full object-cover" />
        {
  showGradient && (
    <div
      className={`absolute top-0 left-0 h-full w-full 
      bg-gradient-to-r 
      ${gradientFrom}
      ${gradientVia}
      ${gradientTo}
      z-0`}
    ></div>
  )
}

        <img
          src={consultShape}
          className="absolute top-0 -left-40 animate-slow-spin2"
        />

        <div className="content absolute top-30 left-110 flex flex-col  items-center gap-5 justify-center ">
          <span
            className={`w-40 py-2 flex items-center justify-center ${bgColor} ${textColor} tracking-widest rounded-full font-semibold text-sm `}
          >
            CONSULTING
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold text-center leading-14 text-white">
            The Future Of Corporate And <br />
            Business Solution
          </h1>

          <div className="btn flex flex-row items-center gap-5 ">
            <button
              className={`px-8 py-4 ${bgColor2} rounded-full flex items-center gap-2 text-white`}
            >
              Discover More <MdArrowOutward />
            </button>
            <button
              className={`px-8 py-4 ${bgColor} rounded-full flex items-center gap-2 ${textColor2} font-medium`}
            >
              Get A Quote <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
