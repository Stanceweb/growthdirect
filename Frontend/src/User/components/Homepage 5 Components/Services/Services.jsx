import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

import Service1 from "../../../../assets/Images/service-one-image1.jpg";
import Service2 from "../../../../assets/Images/service-one-image2.jpg";
import Service3 from "../../../../assets/Images/service-one-image3.jpg";
import Service4 from "../../../../assets/Images/service-one-image4.jpg";

import Shape from "../../../../assets/Images/banner-five-shape.png"
const Services = () => {
  const [active, setActive] = useState(0);

  const services = [
    {
      id: "01",
      title: "Risk Identification & Assessment",
      description:
        "We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.",
      image: Service1,
    },
    {
      id: "02",
      title: "Business Valuation And Financial Forecasting",
      description:
        "We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.",
      image: Service2,
    },
    {
      id: "03",
      title: "Budgeting & Saving Strategies",
      description:
        "We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.",
      image: Service3,
    },
    {
      id: "04",
      title: "Tax-Efficient Investment And Planning",
      description:
        "We develop customized strategies that incorporate tactics proven to deliver outstanding results testing.",
      image: Service4,
    },
  ];

  return (
    <section className="Services min-h-screen bg-[#022c2c] overflow-hidden flex flex-col items-center">

      {/* Top */}
      <span className="bg-[#C6D936] px-10 py-2 rounded-full text-sm tracking-[3px] font-semibold mt-20">
        SERVICE AREA
      </span>

      <h1 className="text-[60px] font-bold text-white text-center leading-[75px] mt-5">
        Delivering Comprehensive Global
        <br />
        Financial Solutions
      </h1>

      {/* Accordion */}
      <div className="w-full h-[720px] flex mt-20">

        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`relative transition-all duration-700 ease-in-out border-r border-white/10 overflow-hidden cursor-pointer
            ${active === index ? "w-[52%]" : "w-[16%]"}`}
          >

            {/* Grid */}
          

            {/* Active */}
            {active === index ? (
              <div className="relative z-10 h-full flex">

                {/* Left Content */}
                <div className="w-[42%] h-full flex flex-col justify-between px-4 py-8">

                  <div>

                    {/* Number + Desc */}
                    <div className="flex flex-row items-start gap-10">

                      <h1 className="text-[120px] leading-none font-bold text-white">
                        {item.id}
                      </h1>

                      <p className="text-lg text-[#d6d6d6] mt-10 w-100 absolute left-50">
                        {item.description}
                      </p>

                    </div>

                    {/* Title */}
                      <h2
                  className="text-white font-bold text-xl leading-[55px] text-center absolute bottom-10"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.title}
                </h2>

                  </div>

                <img src={Shape} className="absolute top-30 left-30" />
                </div>

                {/* Image */}
                <div className="w-full lg:w-[30%] h-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full lg:w-[30%] h-full object-cover absolute right-0"
                  />
                </div>
              </div>
            ) : (
              /* Inactive */
              <div className="relative z-10 h-full flex flex-col items-center justify-between py-14">

                {/* Number */}
                <h1
                  className="text-[120px] leading-none font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                  }}
                >
                  {item.id}
                </h1>

                {/* Vertical Text */}
                <h2
                  className="text-white font-bold text-xl leading-[55px] text-center"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;