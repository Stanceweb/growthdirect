import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutImg1 from "../../../../assets/Images/about-image1.jpg";
import AboutImg2 from "../../../../assets/Images/about-image2.jpg";
import aboutInfo from "../../../../assets/Images/about-info.png";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { LiaPencilRulerSolid } from "react-icons/lia";
import Aboutuser from '../../../../assets/Images/about-user.png'
import Sign from '../../../../assets/Images/signature.png'
import { motion } from "framer-motion";

const About1 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const maxMove = 10;

    const x = Math.max(
      Math.min((e.clientX - (rect.left + rect.width / 2)) / 50, maxMove),
      -maxMove,
    );

    const y = Math.max(
      Math.min((e.clientY - (rect.top + rect.height / 2)) / 50, maxMove),
      -maxMove,
    );

    setPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="Aboutus w-full py-8 lg:min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row items-center justify-center gap-10"
    >
      {/* LEFT SIDE */}
      <div className="left relative h-[400px] lg:h-[600px] w-full lg:w-[40%] mt-10 lg:mt-0 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
        {/* ✅ AboutImg1 with effect */}
        <div className="relative h-[96%] w-[96%] group overflow-hidden rounded-xl">
          <img
            src={AboutImg1}
            className="h-full w-full object-cover transition-all duration-500"
            style={{
              transform: `translate(${-pos.x}px, ${-pos.y}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />

          {/* B/W overlay */}
          <div
            className="absolute top-0 left-0 w-full h-0 
                          bg-black/30 backdrop-grayscale 
                          group-hover:h-full 
                          transition-all duration-1000"
          ></div>
        </div>

        {/* SMALL FLOATING BOX */}
        <div
          className="absolute h-[160px] w-[140px] sm:h-[200px] sm:w-[180px] lg:h-[320px] lg:w-[280px] bg-white rounded-xl -bottom-8 right-2 lg:-bottom-20 lg:-right-10 p-2 shadow-lg"
          style={{
            transform: `translate(${-pos.x}px, ${-pos.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="relative h-full w-full group overflow-hidden rounded-lg">
            <img
              src={AboutImg2}
              className="h-full w-full object-cover transition-all duration-500"
            />

            {/* B/W overlay */}
            <div
              className="absolute top-0 left-0 w-full h-0 
                            bg-black/30 backdrop-grayscale 
                            group-hover:h-full 
                            transition-all duration-1000"
            ></div>
          </div>

          {/* INFO IMAGE */}
          <img
            src={aboutInfo}
            className="absolute top-[120px] -left-[120px] rounded-xl animate-slideLR hidden lg:block"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div  className="right h-full w-full lg:w-1/2 relative px-4 lg:px-20 py-4 flex flex-col items-start justify-start gap-4">
        <span className="bg-[#C6D936] px-10 py-2 rounded-full tracking-widest font-bold">
          ABOUT US
        </span>
        <p data-aos="fade-right" className="text-3xl lg:text-5xl font-bold leading-tight lg:leading-14">
          The SEC-Registered Advisors <br />
          Behind Your Financial Success
        </p>

        <span data-aos="fade-left" className="text-gray-600 leading-7">
          DealMaker Financial Advisors is a premier investment advisory firm in Nigeria, <br className="hidden lg:inline" /> providing expert NGX portfolio management and corporate finance solutions.
        </span>

        {/* Creative Solution  */}
        <div data-aos="fade-right"  className="creative-solution flex flex-row gap-1 cursor-pointer group">
          <span
            className="text-3xl lg:text-7xl transform transition duration-500 
                   group-hover:rotate-y-[360deg]"
          >
            <HiOutlineLightBulb />
          </span>

          <div className="creative-content flex flex-col gap-2">
            <span className="text-xl font-semibold">Strategic Wealth Advisory</span>
            <p className="text-gray-600 leading-7">
              In today's volatile capital markets, the need <br className="hidden lg:inline" />
              for objective, research-backed financial guidance is critical.
            </p>
          </div>
        </div>

        {/*Corporate Restructuring */}
        <div data-aos="fade-left" className="creative-solution flex flex-row gap-1 cursor-pointer group">
          <span
            className="text-3xl lg:text-7xl transform transition duration-500 
                   group-hover:rotate-y-[360deg]"
          >
            <LiaPencilRulerSolid />
          </span>

          <div className="creative-content flex flex-col gap-2">
            <span className="text-xl font-semibold">Actionable Solutions</span>
            <p className="text-gray-600 leading-7">
              We optimize enterprise liquidity through forensic bank audits,
              <br className="hidden lg:inline" /> expert tax advisory, and professional debt recovery.
            </p>
          </div>
        </div>

        {/* Client Wealth Preservation */}
        <div className="bussiness-success w-full">
          <div className="flex items-center justify-between w-full lg:w-[600px]">
            <span className="text-xl font-semibold">Business Success</span>
            <span className="text-xl font-semibold text-[#07504d]">75%</span>
          </div>

          {/* Track (background line) */}
          <div className="w-full lg:w-[600px] h-3 mt-3 lg:mt-5 bg-gray-300 rounded-full overflow-hidden">
            {/* Fill (progress) */}
            <div className="h-full w-[75%] bg-[#07504d] rounded-full"></div>
          </div>
        </div>



        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-6 lg:gap-50 mt-6 lg:mt-12 w-full">
           <Link to="/service" className="w-full sm:w-60">
             <button className="py-4 w-full bg-[#1A4137] text-white font-medium cursor-pointer">Find Services</button>
           </Link>

           <div className="user flex flex-row items-center justify-center gap-4">
            <div className=" px-1 py-1 w-15 rounded-full bg-[#C6D936]">
                <img src={Aboutuser} className="rounded-full" /> 
            </div>

                <div className="user-info flex flex-col gap-2">
                  <span className="text-[#07504d]">Founder</span>
                </div>
           </div>
        </div>
        
      </div>
    </section>
  );
};

export default About1;
