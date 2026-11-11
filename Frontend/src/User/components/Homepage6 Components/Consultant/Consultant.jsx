import React from "react";
import ConsultantImg from "../../../../assets/Images/professional-image.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import consultant1 from '../../../../assets/Images/consultent1.svg'
import consultant2 from '../../../../assets/Images/consultent2.svg'
const Consultant = () => {
  return (
    <section className="Consultant min-h-screen flex flex-row mt-20 pb-20">
      <div className="left w-full lg:w-[50%] bg-[#063232] px-46 py-10 flex flex-col items-start gap-4 relative">
        <span className="w-50 flex items-center justify-center py-2 tracking-widest font-medium bg-[#E34B1B] text-white rounded-full text-sm">
          WE ARE DEALMAKER
        </span>

        <h2 className="text-3xl lg:text-5xl text-white font-bold leading-14">Passionate About <br/>Help You Achieve <br/><span className="font-normal">Professionals</span></h2>

        <p className="w-120 leading-10 text-white text-lg">Sed ut perspiciatis unde omnis iste natus voluptatem<br/> doloremque laudantium totames aperiam eaque<br/> quaesy inventore a tetar bikal architecto beatae vitae<br/> dicta.</p>

        <p className="flex flex-row items-center text-white gap-2"><span className="rounded-full bg-white/10 p-1"><FaCheck /></span>Real-time insights to drive results.</p>
        <p className="flex flex-row items-center text-white gap-2 mt-2"><span className="rounded-full bg-white/10 p-1"><FaCheck /></span>Accept fast payments directly during meetings.</p>

        <button className="flex items-center px-8 py-4 bg-[#E34B1B] text-white rounded-full text-sm mt-10 cursor-pointer z-10">View All Projects <FaAngleRight /></button>

        <div className="h-60 w-22 bg-white/20 absolute left-0 bottom-0"></div>
        <div className="h-22 w-60 bg-white/20 absolute left-0 bottom-0"></div>
      </div>
      <div className="right w-full lg:w-[50%] relative">
        <img src={ConsultantImg} className="h-full w-full object-cover" />

            <div className="flex flex-row bg-white/5 w-xl h-40 backdrop-blur-2xl absolute bottom-0"> 

                <div className="flex flex-row items-center justify-center p-10 gap-5">
                    <span className="p-3 bg-white rounded-full">
                    <img src={consultant1} className="h-6 w-6 duration-500 hover:rotate-y-360" />
                    </span>
                    <div className="flex flex-col items-start">
                        <p className="text-3xl font-bold text-white">20k+</p>
                        <span className="text-sm text-white tracking-widest">Happy User</span>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center p-4 lg:p-20 gap-5">
                    <span className="p-3 bg-white rounded-full">
                    <img src={consultant2} className="h-6 w-6 duration-500 hover:rotate-y-360" />
                    </span>
                    <div className="flex flex-col items-start">
                        <p className="text-3xl font-bold text-white">100+</p>
                        <span className="text-sm text-white tracking-widest">Award Winer</span>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Consultant;
