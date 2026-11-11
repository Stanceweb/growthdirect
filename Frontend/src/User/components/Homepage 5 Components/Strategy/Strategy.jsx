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
      title: "Ensure Business Continuity",
      desc: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
    },
    {
      title: "Browser Safety & Protection",
      desc: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
    },
    {
      title: "Cutting-Edge IT Solutions",
      desc: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
    },
    {
      title: "Expert Guidance & Assistance",
      desc: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
    },
  ];

  return (
    <section className="Business-Stratagy h-[130vh] w-full flex flex-row items-center justify-center bg-[#F1F1F2] relative">
      <div className="left w-full lg:w-[50%]">
        <img
          src={strategyBG}
          alt=""
          className=" w-full object-cover"
        />

        <img src={info} className="absolute bottom-60 left-100"/>


      </div>
      <div className="right w-full lg:w-[50%] px-10 py-15.5 bg-[#063232]">
        <button className="w-fit px-6 py-2 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
          BUSINESS STRATEGY 
        </button>

        <h3 className="font-bold text-3xl lg:text-5xl leading-14 px-2 py-5 text-white">
          Financial Success Through <br/> Tailored Strategies
        </h3>

        <img src={Globle} className="absolute h-150 w-130 -right-70 top-30 animate-slow-spin2 opacity-50 z-10 pointer-events-none" />

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
             <h3
  className={`text-[22px] font-semibold ${
    active === index ? "text-gray-500" : "text-white"
  }`}
>
                {item.title}
              </h3>

              {active === index ? (
                <FiChevronDown className="text-xl text-white" />
              ) : (
                <FiChevronRight className="text-xl text-white" />
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
