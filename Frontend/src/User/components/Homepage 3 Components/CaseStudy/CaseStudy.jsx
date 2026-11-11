import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import LeftShape from "../../../../assets/Images/growth-shape.png"
import Case1 from '../../../../assets/Images/case-three-image1.jpg'
import Case2 from '../../../../assets/Images/case-three-image2.jpg'
import Case3 from '../../../../assets/Images/case-three-image3.jpg'
import Case4 from '../../../../assets/Images/case-three-image4.jpg'
import '../../../../../src/App.css'
import { GoArrowUpRight } from "react-icons/go";



const CaseStudy = () => {
  return (
    <section className="CaseStudy min-h-screen flex flex-row">
      <div className="left w-full lg:w-[50%] bg-[#1A4137] p-4 lg:p-20 flex flex-col gap-8 relative">
        <img src={LeftShape} className="absolute left-0 z-20 animate-slideUpDown"/>
        <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
          CASE STUDIES
        </span>

        <h1 className="text-3xl lg:text-5xl font-bold text-white leading-14">
          Passionate About Help <br />
          You Achieve <span className="font-normal">Success</span>
        </h1>

        <p className="text-white leading-7 font-medium">
          Sed ut perspiciatis unde omnis iste natus voluptatem doloremque <br />
          laudantium totames aperiam eaque quaesy inventore a tetar bikal <br />{" "}
          architecto beatae vitae dicta.
        </p>

        <span className="text-white flex items-center gap-2 z-10">
          <span className="p-1 bg-[#C6D936] text-black rounded-full">
            <FaCheck className="" />{" "}
          </span>
          Real-time insights to drive results.
        </span>
        <span className="text-white flex items-center gap-2 z-10">
          <span className="p-1 bg-[#C6D936] text-black rounded-full">
            <FaCheck className="" />{" "}
          </span>
          Accept fast payments directly during meetings.
        </span>

        <button className="py-4 w-50 text-[#1A4137] bg-[#C6D936] rounded-full flex items-center justify-center gap-2 cursor-pointer z-10">
          View All Projects <FaAngleRight />
        </button>

        <div className="bottom-shape absolute left-0 bottom-0 ">
              <div className="h-60 w-25 bg-white/20"></div>
              <div className="h-25 w-60 bg-white/20 absolute left-0 bottom-0"></div>
        </div>
      </div>
     <div className="right w-full lg:w-[50%] flex flex-wrap">

  {/* Card 1 */}
  <div className="w-1/2 h-100 relative group overflow-hidden">
    <img src={Case1} className="w-full h-full object-cover" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-start justify-center p-5">
      <span className="text-black text-xl  bg-[#C6D936] py-4 px-4 rounded-full font-bold  text-left absolute right-5 top-10"><GoArrowUpRight /></span>
      <h2 className="text-white text-xl font-semibold bg-[#1A4137] py-2 px-10">HR Development</h2>
      <span className="text-black text-xl font-semibold bg-[#C6D936] py-1 px-10 text-left">ALL</span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-1/2 h-100 relative group overflow-hidden">
    <img src={Case2} className="w-full h-full object-cover" />

    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-start justify-center p-5">
     <span className="text-black text-xl  bg-[#C6D936] py-4 px-4 rounded-full font-bold  text-left absolute right-5 top-10"><GoArrowUpRight /></span>
      <h2 className="text-white text-xl font-semibold bg-[#1A4137] py-2 px-10">HR Development</h2>
      <span className="text-black text-xl font-semibold bg-[#C6D936] py-1 px-10 text-left">ALL</span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-1/2 h-100 relative group overflow-hidden">
    <img src={Case3} className="w-full h-full object-cover" />

   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-start justify-center p-5">
    <span className="text-black text-xl  bg-[#C6D936] py-4 px-4 rounded-full font-bold  text-left absolute right-5 top-10"><GoArrowUpRight /></span>
      <h2 className="text-white text-xl font-semibold bg-[#1A4137] py-2 px-10">HR Development</h2>
      <span className="text-black text-xl font-semibold bg-[#C6D936] py-1 px-10 text-left">ALL</span>
    </div>
  </div>

  {/* Card 4 */}
  <div className="w-1/2 h-100 relative group overflow-hidden">
    <img src={Case4} className="w-full h-full object-cover" />

   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-start justify-center p-5">
    <span className="text-black text-xl  bg-[#C6D936] py-4 px-4 rounded-full font-bold  text-left absolute right-5 top-10"><GoArrowUpRight /></span>
      <h2 className="text-white text-xl font-semibold bg-[#1A4137] py-2 px-10">HR Development</h2>
      <span className="text-black text-xl font-semibold bg-[#C6D936] py-1 px-10 text-left">ALL</span>
    </div>
  </div>

</div>
    </section>
  );
};

export default CaseStudy;
