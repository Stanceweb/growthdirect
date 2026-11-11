import React, { useState } from "react";
import strategyBG from "../../../../assets/Images/strategy-image.jpg";
import strategyInfo from "../../../../assets/Images/strategy-info.png";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Globle from '../../../../assets/Images/stategy-globe.png';
import info from '../../../../assets/Images/strategy-info.png';

const Strategy = () => {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "Data-Driven Market Research",
      desc: "We leverage proprietary research models and NGX data analytics to uncover undervalued assets.",
    },
    {
      title: "Risk Mitigation & Compliance",
      desc: "Every mandate is executed with strict adherence to SEC regulations and rigorous risk-management protocols.",
    },
    {
      title: "Tailored Portfolio Structuring",
      desc: "We construct high-yield, resilient investment portfolios customized to your institutional or retail goals.",
    },
    {
      title: "Corporate Finance Advisory",
      desc: "From enterprise valuation to debt recovery, we provide strategic financial guidance for business scaling.",
    },
  ];

  return (
    <section className="Business-Stratagy h-auto lg:h-[130vh] py-10 lg:py-0 w-full flex flex-col lg:flex-row items-center justify-center bg-[#F1F1F2] relative">
      <div className="left w-full lg:w-[50%]">
        <img
          src={strategyBG}
          alt=""
          className="h-[40vh] lg:h-[100vh] w-full object-cover"
        />

        <img src={info} className="absolute bottom-60 left-100 hidden lg:block"/>


      </div>
      <div className="right w-full lg:w-[50%] px-4 lg:px-10 mt-6 lg:mt-0">
        <span className="w-fit px-6 py-3 lg:py-2 rounded-full tracking-widest tracking-widest font-bold bg-[#C6D936] inline-block">
          INVESTMENT STRATEGY
        </span>

        <h3 className="font-bold text-3xl lg:text-5xl leading-tight lg:leading-14 px-2 py-5">
          Driving Growth Through
          <br /> Strategic Capital Allocation
          <br /> & NGX Expertise.
        </h3>

        <img src={Globle} className="absolute h-150 w-130 -right-70 top-30 animate-slow-spin2 opacity-50 z-10 pointer-events-none hidden lg:block" />

        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all duration-300 cursor-pointer ${
              active === index ? "bg-[#FFF]/100" : "bg-transparent"
            }`}
          onClick={() => setActive(active === index ? null : index)}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#0E2A1F]">
                {item.title}
              </h3>

              {active === index ? (
                <FiChevronDown className="text-xl text-[#0E2A1F]" />
              ) : (
                <FiChevronRight className="text-xl text-[#0E2A1F]" />
              )}
            </div>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              {item.desc && (
                <p className="text-gray-500 leading-7">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
