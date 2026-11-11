import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Obj1 from "../../../../assets/Images/objective-icon1.png";
import Obj2 from "../../../../assets/Images/objective-icon2.png";
import Obj3 from "../../../../assets/Images/objective-icon3.png";
import ObjIcon from "../../../../assets/Images/ObjectiveIcon.svg";
import Shape from "../../../../assets/Images/objective-triangle.png";
import Thumbnail from "../../../../assets/Images/about-three-image2.jpg";

const Objective = () => {
  const tabs = ["About", "Mission", "Vision"];
  const [activeTab, setActiveTab] = useState("About");
  const [openVideo, setOpenVideo] = useState(false);

  const getTitle = () => {
    if (activeTab === "About") return "Project Score";
    if (activeTab === "Mission") return "Mission Success";
    if (activeTab === "Vision") return "Vision Success";
  };

  return (
    <section className="Objective min-h-screen w-full relative p-4 lg:p-20 flex flex-col">
      
      {/* Heading */}
      <div className="heading flex flex-row items-center gap-150 z-30">
        <div className="left-head flex flex-col">
          <span className="w-30 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm">
            OBJECTIVE
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-14">
            Strength Your Business
            <br />
            For Enduring Success.
          </h1>
        </div>

        <div className="right-head flex flex-col mt-5">
          <button className="py-4 px-10 text-[#1A4137] bg-[#C6D936] rounded-full flex items-center gap-2 cursor-pointer">
            Get Started <FaAngleRight />
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-row p-4 lg:p-20 gap-10">

        {/* LEFT (UNCHANGED) */}
        <div className="left h-120 w-full lg:w-[50%] bg-white shadow-2xl rounded-xl p-4 lg:p-16 flex flex-col gap-4 relative">
          <p className="text-2xl font-bold leading-9">
            The Best IT & Technology Agency to <br /> Accelerate Your Business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7">
            <div className="flex flex-col items-start gap-2 border-r border-gray-300">
              <img src={Obj1} className="h-16 w-18" />
              <span className="text-[18px] font-medium">Corporate</span>
            </div>

            <div className="flex flex-col items-start gap-2 border-r border-gray-300">
              <img src={Obj2} className="h-16 w-18" />
              <span className="text-[18px] font-medium">Business IT</span>
            </div>

            <div className="flex flex-col items-start gap-2">
              <img src={Obj3} className="h-16 w-18" />
              <span className="text-[18px] font-medium">Server Hosting</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full shadow-2xl flex items-center justify-center">
              <img src={ObjIcon} className="p-4" />
            </div>
            <span className="text-lg">
              Consult With it Advisor?{" "}
              <span className="underline cursor-pointer">Click Now</span>
            </span>
          </div>

          <img src={Shape} className="absolute left-5 bottom-5" />
        </div>

        {/* RIGHT (FIXED LIKE SCREENSHOT) */}
        <div className="right h-120 w-full lg:w-[50%] bg-white shadow-2xl rounded-xl p-10 flex flex-col">

          {/* Tabs */}
          <div className="flex gap-10 border-b border-gray-300 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-md font-semibold text-lg ${
                  activeTab === tab
                    ? "bg-[#1A4137] text-white"
                    : "text-[#1A4137]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex gap-8 mt-6">

            {/* Image + Play */}
            <div className="relative w-[45%]">
              <img
                src={Thumbnail}
                className="rounded-xl w-full h-[220px] object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setOpenVideo(true)}
                  className="bg-[#1A4137] text-white p-5 rounded-full shadow-lg"
                >
                  <FaPlay />
                </button>
              </div>
            </div>

            {/* Text */}
            <div className="w-[55%] flex flex-col gap-4">
              <ul className="text-gray-600 text-lg space-y-3">
                <li>Technology Growth</li>
                <li>Customer Oriented Program</li>
                <li>Dedicated Team member</li>
                <li>Customer Oriented Program</li>
              </ul>
            </div>

          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-lg">
                {getTitle()}
              </span>
              <span className="font-semibold text-lg">75%</span>
            </div>

            <div className="w-full h-[3px] bg-gray-300">
              <div className="h-[3px] bg-[#C6D936] w-[75%]"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-8 right-10 text-white text-4xl"
          >
            ×
          </button>

          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Objective;