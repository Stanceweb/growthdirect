import React from "react";
import Expert1 from "../../../../assets/Images/Expertise1.svg";
import Expert2 from "../../../../assets/Images/Expertise2.svg";
import Expert3 from "../../../../assets/Images/Expertise3.svg";
import Expert4 from "../../../../assets/Images/Expertise4.svg";
import '../Expertise/expert.css'
import { MdBolt } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Expertize = () => {
  const Expertise = [
    {
      id: 1,
      svg: Expert1,
      heading: "Risk Assessment & Analysis",
      para: "Estimating the financial impact of uncovered risks",
    },
    {
      id: 2,
      svg: Expert2,
      heading: "Policy Selection & Procurement",
      para: "Estimating the financial impact of uncovered risks",
    },
    {
      id: 3,
      svg: Expert3,
      heading: "Ongoing Review & Risk Management",
      para: "Estimating the financial impact of uncovered risks",
    },
    {
      id: 4,
      svg: Expert4,
      heading: "Benefits of Insurance Consulting",
      para: "Estimating the financial impact of uncovered risks",
    },
  ];

  return (
    <section className="Expertize min-h-screen flex flex-col items-center  p-10">
      <div className="heading flex flex-row items-center justify-between gap-90 p-10">
        <div className="flex flex-col">
          <span className="w-40 flex items-center justify-center py-2 tracking-widest font-medium bg-[#E34B1B] text-white rounded-full text-sm">
            OUR EXPERTISE
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold leading-14">
            We provide consulting
            <br />
            to strategic growth.
          </h1>
        </div>

        <div className="flex flex-col items-start gap-3">
          <p className="text-gray-500 text-lg leading-9">
            Insurance consulting is a specialized service that provides <br />
            expert advice and strategic guidance to individuals
          </p>
        </div>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-26 p-10">
        {Expertise.map((elem , idx )=>{
            return(
               <div className="content flex flex-col items-start gap-3 relative min-h-[200px] group">
                         <img src={elem.svg} className="duration-500 group-hover:-translate-x-3" />
                         <h3 className="text-xl font-bold w-60 text-black/90">{elem.heading}</h3>
                         <div className="h-1 w-1 bg-black absolute -bottom-0.5">

                         </div>
                         <p className="absolute -bottom-20 w-80 text-lg text-gray-500">{elem.para}</p>
                </div>
            )
        })}
      </div>

      <div className="w-[700px] h-20 rounded-full bg-[#063232] flex flex-row items-center gap-3 px-3 mt-30">
            <span className="p-4 bg-white text-4xl rounded-full"><MdBolt /></span>
            <p className="text-white text-lg flex items-center gap-2 font-semibold">We Strive To Lead The way In The business <span className="flex items-center justify-center gap-1 underline text-[#E34B1B] cursor-pointer">Know All Features <IoIosArrowRoundForward className="text-4xl mt-1 cursor-pointer "/></span></p>
      </div>
    </section>
  );
};

export default Expertize;
