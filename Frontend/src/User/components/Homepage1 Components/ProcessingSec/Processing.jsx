import React from "react";
import { Link } from "react-router-dom";
import './processing.css'
import DualCircle from '../../../../assets/Images/dual-circle.png'
const Processing = () => {
    const cards = [
        {
            id:"01",
            heading:"Market Research",
            para:"Deep NGX market intelligence and macroeconomic insights."
        },
        {
             id:"02",
            heading:"Portfolio Strategy",
            para:"Tailored capital allocation models for optimal risk-adjusted returns."
        },
        {
            id:"03",
            heading:"Corporate Finance",
            para:"Restructuring enterprise debt and optimizing liquidity."
        },
        {
            id:"04",
            heading:"Execution & Audits",
            para:"Flawless execution of mandates and forensic bank audits."
        }
    ]
  return (
    <section className="Processing w-full mt-10 py-10 lg:py-0 lg:min-h-screen flex flex-col items-center justify-start p-4 lg:p-10 overflow-hidden bg-[#F1F1F2] relative">
      <span data-aos= "fade-up" className="w-fit px-6 py-3 lg:py-2 rounded-full tracking-widest tracking-widest font-bold bg-[#C6D936] inline-block">
        HOW IT WORKS
      </span>

      <h1  data-aos= "fade-up" className="text-center text-3xl lg:text-5xl font-bold leading-tight lg:leading-14 py-4">
        Analyze, Strategize, & Execute
        <br />
        Your Capital Market Goals.
      </h1>


      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-4 lg:py-20 lg:px-20 gap-10 lg:gap-2  items-center justify-center border border-gray-300 border-dashed w-full gap-2 rounded-xl">
        <img src={DualCircle} className="absolute left-[-15%] animate-slow-spin hidden lg:block"/>
        {cards.map(( elem  , idx)=>{
          return(
             <div
              data-aos= "zoom-out"
      key={idx}
      className={`content flex flex-col gap-2 ml-0 lg:ml-10 relative ${
        idx !== cards.length - 1 ? "after-line" : ""
      }`}
    >
            <p className="text-3xl lg:text-6xl stroke-text">{elem.id}</p><br className="hidden lg:block"/>
            <p className="text-2xl font-semibold">{elem.heading}</p> 
            <p className="text-gray-600 leading-7">{elem.para}</p>
          </div>
          )
        })}
      </div>

      <h3 className="mt-10 lg:mt-12 text-center text-lg lg:text-xl font-semibold px-2">Preserve Capital, Maximize Yields, and Invest with Confidence. <Link to="/contact-us" className="text-[#0C6460] underline duration-400 hover:tracking-wider cursor-pointer whitespace-nowrap inline-flex items-center min-h-[44px]">Consult Now</Link></h3>
    </section>
  );
};

export default Processing;
