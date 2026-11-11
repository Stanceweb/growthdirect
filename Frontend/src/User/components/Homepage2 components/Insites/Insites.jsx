import React from "react";
import { FaCheck } from "react-icons/fa6";
import DualCircle from "../../../../assets/Images/dual-circle.png";
import Insight1 from "../../../../assets/Images/insite1.svg";
import Insight2 from "../../../../assets/Images/insite2.svg";
import Insight3 from "../../../../assets/Images/insite3.svg";

const Insites = () => {
  return (
    <section className="insites w-[95%] py-10 lg:py-20 border bg-[#1A4137] mb-20 flex flex-row items-center  ml-20 rounded-l-4xl p-4 lg:p-20 relative gap-4 lg:p-20 overflow-hidden z-20">
      <div className="absolute -right-50 top-8">
        <img src={DualCircle} className=" animate-slow-spin " />
      </div>
      <div className="left flex flex-col gap-5">
        <span className="px-8 w-35 py-2 rounded-full bg-[#C6D936] text-sm font-semibold tracking-widest">
          INSIGHTS
        </span>

        <h1 className="text-3xl lg:text-5xl text-white font-bold">Company Insights </h1>

        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-3 text-lg text-white font-medium w-90">
            <FaCheck className="text-[#C6D936]" /> Empowering Your Team with
            Training
          </span>
          <span className="flex items-center gap-3 text-lg text-white font-medium w-90">
            <FaCheck className="text-[#C6D936]" /> Performance Proven Strategies
          </span>
        </div>
      </div>

      <div className="right flex items-start justify-center gap-4 lg:p-20">
        <div className="group h-60 w-60 flex flex-col items-start justify-center text-white duration-300 hover:bg-[#C6D936] p-10 rounded-xl hover:text-black cursor-pointer">
          <img
            src={Insight1}
            className="invert group-hover:invert-0 group-hover:animate-[spinZoom_.6s_ease-in-out] transition duration-700 mx-2"
          />
          <h1 className="font-bold text-3xl lg:text-5xl mt-5">150+</h1>
          <p className="font-semibold mx-1 mt-2 text-lg">Team member</p>
        </div>

        <div className="group h-60 w-60 flex flex-col items-start justify-center text-white duration-300 hover:bg-[#C6D936] p-10 rounded-xl hover:text-black cursor-pointer">
          <img
            src={Insight2}
            className="invert group-hover:invert-0 group-hover:animate-[spinZoom_.6s_ease-in-out] transition duration-700 mx-2"
          />
          <h1 className="font-bold text-3xl lg:text-5xl mt-5">17k+</h1>
          <p className="font-semibold mx-1 mt-2 text-lg">Complete project</p>
        </div>

        <div className="group h-60 w-60 flex flex-col items-start justify-center text-white duration-300 hover:bg-[#C6D936] p-10 rounded-xl hover:text-black cursor-pointer">
          <img
            src={Insight3}
            className="invert group-hover:invert-0 group-hover:animate-[spinZoom_.6s_ease-in-out] transition duration-700 mx-2"
          />
          <h1 className="font-bold text-3xl lg:text-5xl mt-5">15+</h1>
          <p className="font-semibold mx-1 mt-2 text-lg">Winning award</p>
        </div>
      </div>
    </section>
  );
};

export default Insites;
