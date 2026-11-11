import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Process1 from '../../../../assets/Images/process1.jpg'
import Process2 from '../../../../assets/Images/process2.jpg'
import '../Process/process.css'

const tabs = [
  {
    id: 1,
    title: "Business Analysis",
  },
  {
    id: 2,
    title: "Business Strategy",
  },
  {
    id: 3,
    title: "Final Execution",
  },
];

const Process = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="Process min-h-screen flex flex-col items-center justify-start bg-[#F5F5F5] py-24 overflow-hidden">

      {/* Top Tag */}
      <span className="text-sm font-semibold tracking-widest px-10 py-2 bg-[#C6D936] rounded-full">
        PROCESS
      </span>

      {/* Heading */}
      <h1 className="text-3xl lg:text-5xl font-bold text-center mt-6 leading-[1.3] text-[#06210B]">
        Ensure The Success Of
        <br />
        Your Business Venture
      </h1>

      {/* Tabs */}
      <div className="container mx-auto px-10 mt-24">

        <div className="relative flex items-center justify-center gap-40 border-b border-black/10 pb-10">

          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative cursor-pointer"
            >
              <h2
                className={`text-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-[#06210B]"
                    : "text-gray-500"
                }`}
              >
                {tab.title}
              </h2>

              {/* Active Line */}
              {activeTab === tab.id && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[65px] w-[280px] h-[2px] bg-[#06210B]" />
              )}

              {/* Number Circle */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[52px] w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#1B4332] text-white border-[#1B4332]"
                    : "bg-white text-[#1B4332] border-black/10"
                }`}
              >
                0{tab.id}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
       <div
  key={activeTab}
  className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-20 items-center p-10 animate-fade"
>

          {/* Left Content */}
          <div>

            <h1 className="text-3xl lg:text-5xl leading-[1.1] font-bold text-[#06210B]">
              Essential Features for
              <br />
              Time Management
            </h1>

            <p className="text-lg leading-8 text-gray-600 mt-10">
              Sed ut perspiciatis unde omnis iste natus voluptatem<br/>
              accusantium doloremque laudantium totamto aperiame eaque<br/>
              ipsa quae ab illo inventore veritatis
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-14">

              <div className="flex items-center gap-4">
                <FaCheck className="text-[#06210B] text-xl" />
                <h3 className="text-lg font-semibold text-[#06210B]">
                  Optimized Sprint Planning
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <FaCheck className="text-[#06210B] text-xl" />
                <h3 className="text-lg font-semibold text-[#06210B]">
                  Incremental Delivery Approach
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <FaCheck className="text-[#06210B] text-xl" />
                <h3 className="text-lg font-semibold text-[#06210B]">
                  Continuous Improvement
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <FaCheck className="text-[#06210B] text-xl" />
                <h3 className="text-lg font-semibold text-[#06210B]">
                  Delivering Innovative
                </h3>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="right relative flex justify-center">

            {/* Background Circle */}
            <div className="absolute w-[400px] h-[500px] rounded-full bg-black/5  -translate-y-50 rotate-45" />

                <img src={Process1} className="absolute -top-40 left-0" />
                <img src={Process2} className="absolute " />
           
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;