import React, { useState } from "react";
import Servicebg from "../../../../assets/Images/service-four-shape.png";
import { FaAngleRight, FaCheck } from "react-icons/fa6";

import about1 from "../../../../assets/Images/service-three-icon1.svg";
import about2 from "../../../../assets/Images/about2.svg";
import about3 from "../../../../assets/Images/service-icon3.svg";
import about4 from "../../../../assets/Images/about4.svg";
import about5 from "../../../../assets/Images/service-three-icons3.svg";

const Service = () => {
  // null = sab close
  const [active, setActive] = useState(null);

  const services = [
    {
      id: "01",
      title: "Business Strategy",
      icon: about1,
      desc:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns.",
    },
    {
      id: "02",
      title: "Strategic Planning",
      icon: about2,
      desc:
        "Strategic planning helps organizations define goals, improve productivity, and achieve long-term sustainable business growth.",
    },
    {
      id: "03",
      title: "Marketing & Branding",
      icon: about3,
      desc:
        "We craft strong brand identities and marketing campaigns that increase visibility, engagement, and customer trust.",
    },
    {
      id: "04",
      title: "Sales Consulting",
      icon: about4,
      desc:
        "Our sales consulting services improve sales performance, optimize customer relationships, and maximize revenue generation.",
    },
    {
      id: "05",
      title: "Financial Consulting",
      icon: about5,
      desc:
        "Financial consultants provide budgeting, forecasting, and investment strategies for better business decisions.",
    },
  ];

  return (
    <section className="Service min-h-screen bg-[#F8F5F2] relative flex flex-row overflow-hidden">
      
      {/* BG SHAPE */}
      <img
        src={Servicebg}
        className="absolute h-full object-cover"
      />

      {/* LEFT */}
      <div className="left w-full lg:w-[50%] px-4 lg:px-20 py-30 z-30 flex flex-col items-start gap-8">
        
        <span className="text-sm font-medium tracking-widest px-10 py-2 bg-[#C6D936] rounded-full">
          SERVICES
        </span>

        <h1 className="text-3xl lg:text-5xl font-bold leading-14">
          Solutions Drive Business <br />
          Sustain Growth
        </h1>

        <p className="text-gray-500 leading-8">
          Business consulting is a dynamic and multifaceted field
          that plays a pivotal
          <br />
          role in helping organizations thrive in today's
          competitive landscape.
        </p>

        <div className="flex flex-row items-center gap-10">
          <p className="flex items-center gap-2 font-semibold text-lg">
            <FaCheck />
            Optimized Sprint Planning
          </p>

          <p className="flex items-center gap-2 font-semibold text-lg">
            <FaCheck />
            Incremental Delivery Approach
          </p>
        </div>

        <div className="flex flex-row items-center gap-10">
          <p className="flex items-center gap-2 font-semibold text-lg">
            <FaCheck />
            Continuous Improvement
          </p>

          <p className="flex items-center gap-2 font-semibold text-lg">
            <FaCheck />
            Delivering Innovative
          </p>
        </div>

        <button className="text-sm font-medium w-50 h-12 bg-[#C6D936] rounded-full text-[#1A4137] flex items-center justify-center gap-2 cursor-pointer">
          View All Services
          <FaAngleRight className="text-sm" />
        </button>
      </div>

      {/* RIGHT */}
      <div className="right w-full lg:w-[50%] p-4 lg:p-20 z-20 mt-5x">
        
        <div className="border border-black/10 rounded-3xl overflow-hidden bg-[#F8F5F2]">

          {services.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                setActive(active === idx ? null : idx)
              }
              className={`transition-all duration-500 cursor-pointer
              ${
                active === idx
                  ? "bg-[#173F35] rounded-3xl mx-2 my-2"
                  : "border-b border-black/10"
              }`}
            >
              
              {/* TOP */}
              <div className="flex items-center justify-between px-8 py-5">
                
                {/* LEFT CONTENT */}
                <div className="flex items-center gap-6">
                  
                  {/* ICON */}
                  <img
                    src={item.icon}
                    className={`w-14 h-14 object-contain transition-all duration-300 ${
                      active === idx
                        ? "invert brightness-0 invert-100"
                        : ""
                    }`}
                  />

                  {/* TEXT */}
                  <div>
                    <h2
                      className={`text-2xl font-semibold transition-all duration-300 ${
                        active === idx
                          ? "text-white"
                          : "text-[#0E2218]"
                      }`}
                    >
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        active === idx
                          ? "max-h-60 opacity-100 mt-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-white/90 text-lg leading-10">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* NUMBER */}
                <span
                  className={`text-xl font-bold transition-all duration-300 ${
                    active === idx
                      ? "text-white"
                      : "text-[#0E2218]"
                  }`}
                >
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;