import React from "react";
import ServiceBg from "../../../../assets/Images/service-bg.jpg";
import ServiceShape from "../../../../assets/Images/service-shape.png";
import Service1 from "../../../../assets/Images/service-7-1.svg";
import Service2 from "../../../../assets/Images/service-7-2.svg";
import Service3 from "../../../../assets/Images/service-7-3.svg";
import Service4 from "../../../../assets/Images/service-7-4.svg";
import { GoArrowUpRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Service = () => {
  const ServiceData = [
    {
      id: 1,
      svg: Service1,
      heading: "Business Consulting",
    },
    {
      id: 2,
      svg: Service2,
      heading: "Invest Propose",
    },
    {
      id: 3,
      svg: Service3,
      heading: "Accounting",
    },
    {
      id: 4,
      svg: Service4,
      heading: "Career Development",
    },
  ];

  return (
    <section className="Service min-h-screen">
      <div className="relative min-h-screen w-full overflow-hidden rounded-[30px]">
        {/* IMAGE */}
        <img
          src={ServiceBg}
          alt=""
          className="h-full w-full object-cover absolute"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#144443]/90"></div>

        {/* SHAPE */}
        <img src={ServiceShape} className="absolute left-0 top-0 opacity-30" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center pt-5">
          {/* TAG */}
          <span className="bg-[#C6D936] px-8 py-3 font-semibold tracking-widest text-sm rounded-full">
            SERVICE AREA
          </span>

          {/* HEADING */}
          <h1 className="text-3xl lg:text-5xl text-center text-white font-bold leading-14 mt-3">
            Institutional-Grade Portfolio <br />
            Management Services
          </h1>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  p-10">
            {ServiceData.map((elem) => {
              return (
                <div className="h-[480px] w-[330px] border border-white/20 rounded-[40px] p-10 flex flex-col justify-between duration-500 group">
                  {/* TOP */}
                  <div>
                    {/* ICON */}
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-lime-300 to-[#2E9085] flex items-center justify-center">
                      <img
                        src={elem.svg}
                        alt=""
                        className="h-10 w-10 object-contain group-hover:rotate-y-360 duration-900"
                      />
                    </div>

                    {/* TITLE */}
                    <h2 className="text-white text-3xl font-bold leading-tight mt-10">
                      {elem.heading}
                    </h2>

                    {/* TEXT */}
                    <p className="text-gray-300 text-lg leading-8 mt-8">
                      We promise cost-effective business consulting solutions
                      designed to help you lower expenses and boost profits.
                    </p>
                  </div>

                  {/* ARROW */}
                  <div>
                    <GoArrowUpRight className="text-white text-4xl" />
                  </div>
                </div>
              );
            })}

            <div className="w-[700px] h-20 rounded-full flex flex-row items-center gap-3 px-3 border border-white/10 mx-80">
              <span className="p-4 bg-[#C6D936] text-4xl rounded-full">
                <MdBolt />
              </span>
              <p className="text-white text-lg flex items-center gap-2 font-semibold">
                We Strive To Lead The way In The business{" "}
                <span className="flex items-center justify-center gap-1 underline text-[#C6D936] cursor-pointer">
                  Know All Features{" "}
                  <IoIosArrowRoundForward className="text-4xl mt-1 cursor-pointer " />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
