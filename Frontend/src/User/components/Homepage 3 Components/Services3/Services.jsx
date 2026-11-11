import React from "react";
import Insight1 from "../../../../assets/Images/insite1.svg";
import Insight2 from "../../../../assets/Images/insite2.svg";
import Insight3 from "../../../../assets/Images/insite3.svg";
import Insight4 from "../../../../assets/Images/insite4.svg";
import { FaAngleRight } from "react-icons/fa6";
import icon1 from '../../../../assets/Images/service-three-icon1.svg'
import icon2 from '../../../../assets/Images/service-three-icon2.svg'
import icon3 from '../../../../assets/Images/service-three-icons3.svg'
import BannerShape from '../../../../assets/Images/service-block-shape.png'

const Services = () => {
    const services = [
        {
            id:1,
            icon:icon1,
            heading:"Business Planning",
        },
        {
            id:2,
            icon:icon2,
            heading:"Marketing & Branding",
        },
        {
            id:3,
            icon:icon3,
            heading:"Sales Consulting"
        }
    ]
  return (
    <section className="service w-full flex flex-col items-center justify-center gap-4 lg:p-20 pb-30">
      <div className="w-7xl h-70 bg-[#C6D936] rounded-3xl flex flex-row items-center justify-around">
        <div className="flex flex-col items-start gap-2">
          <img src={Insight1} className="" />
          <span className="font-bold text-3xl lg:text-5xl">150+</span>
          <span className="font-medium text-xl">Team Member</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <img src={Insight2} className="" />
          <span className="font-bold text-3xl lg:text-5xl">150k</span>
          <span className="font-medium text-xl">Complete project</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <img src={Insight3} className="" />
          <span className="font-bold text-3xl lg:text-5xl">10+</span>
          <span className="font-medium text-xl">Winning award</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <img src={Insight4} className="" />
          <span className="font-bold text-3xl lg:text-5xl">600+</span>
          <span className="font-medium text-xl">Client review</span>
        </div>
      </div>

      <div className="heading flex flex-row items-center gap-150 z-30">
        <div className="left-head flex flex-col">
          <span className="w-30 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
            SERVICES
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-14">
          Empower Your Business<br />
            To Succeed & Grow.
          </h1>
        </div>

        <div className="right-head flex flex-col mt-5">
         <button className="py-4 px-10 bg-[#1A4137] rounded-full text-white flex items-center gap-2 cursor-pointer">More Services <FaAngleRight /></button>
        </div>
      </div>
      <div className="flex flex-row relative">
        {services.map((elem ,idx)=>{
            return(
                <div className="flex flex-col items-center justify-start gap-2 h-120 w-110 p-10 bg-white border-r border-gray-300 relative hover:bg-[#C6D936] group"> 
                <img src={BannerShape} className="absolute left-20 top-0 " />
                <div className="bg-[#C6D936] rounded-full h-30 w-30 flex items-center justify-center z-30 group-hover:bg-[#1A4137] ">
                     <img src={elem.icon} className="scale-60 duration-500  group-hover:invert-100 group-hover:rotate-y-[360deg]" />
                </div>

                <p className="text-2xl font-semibold mt-3">{elem.heading}</p>
                <p className="text-center text-[16px] text-gray-500 w-100 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, vitae! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>

                <button className="px-8 py-3 border border-gray-100 rounded-full mt-6 group-hover:bg-[#051b05] group-hover:text-white group-hover:border-0">Learn More</button>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Services;
