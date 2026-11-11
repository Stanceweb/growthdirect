import React from "react";
import Static1 from "../../../../assets/Images/strategy-two-image.jpg";
import Static2 from "../../../../assets/Images/strategy-two-chart.png";
import "../Statics/static.css";
const Statics = () => {
  return (
    <section className="Statics min-h-screen flex flex-row ">
      <div className="left w-full lg:w-[50%]  p-4 lg:p-20 flex flex-col gap-8 ">
        <span className="w-30 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
          STATISTIC
        </span>

        <h1 className="text-3xl lg:text-5xl font-bold leading-14">
          Fuel Your Business for
          <br /> Long-Term Success
        </h1>

        <p className="text-lg text-gray-500 relative px-2">
          An invasive species in many parts of the world, originally from <br />{" "}
          Asia, known for its large head and rapid growth.
        </p>

        <img src={Static2} />
      </div>
      <div className="right w-full lg:w-[50%] bg-green-400 relative">
        <img src={Static1} className="h-full w-full object-cover" />

        <div className="content-box flex flex-row items-center absolute bottom-0 left-10 p-10 gap-10">
          <div className="content-1 h-50 w-70  bg-[#1A4137] rounded-xl text-white py-10 px-5 flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Headquarter -</h3>
            <span className="text-lg">
              2972 Westheimer Rd. Santa
              <br />
              Ana, Illinois 85486
            </span>
          </div>
          <div className="content-1 h-50 w-70  bg-[#C6D936] rounded-xl text-[#1A4137] py-10 px-5 flex flex-col gap-5">
             <h3 className="text-2xl font-bold">Email Us -</h3>
             <div className="flex flex-col">
            <span className="text-lg">yourcontact@dealmaker-advisors.com</span>
            <span className="text-lg">themeyou@example.com</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;
