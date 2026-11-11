import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import ChooseRightShape from "../../../../assets/Images/choose-four-shape.png"
import '../../../../../src/App.css'
import Profile from '../../../../assets/Images/choose-four-image.png'
import CircleBtn from '../../../../assets/Images/choose-four-circle-btn.png';
import ChooseInfo from '../../../../assets/Images/banner-two-info2.png';
import Funface from '../../../../assets/Images/funface-four-shape.png'
const Choose = () => {
  return (
    <>
    <section className="Choose min-h-screen bg-[#1A4137] p-4 lg:p-20 flex flex-col overflow-hidden relative">
      <div className="heading flex flex-row items-center justify-between border-b pb-10 border-white/20">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium tracking-widest w-50 flex items-center justify-center py-2 bg-[#C6D936] rounded-full">
            WHY CHOOSE US
          </span>
          <h1 className="font-bold text-white text-3xl lg:text-5xl leading-14">
            Build A Thriving Community And <br />
            Unlock Limitless Possibilities.
          </h1>
        </div>

        <button className="text-sm font-medium w-50 h-12 bg-[#C6D936] rounded-full text-[#1A4137] flex items-center justify-center gap-2 cursor-pointer">
          Get Started
          <FaAngleRight className="text-sm" />
        </button>
      </div>
      <div className="middle-container flex flex-row">
        <div className="left w-full lg:w-[60%] p-10 flex flex-col gap-8">
          <div className="flex flex-row gap-3">
            <div className="h-45 rounded-xl w-full lg:w-[50%] bg-white/5 p-10 flex flex-col gap-3">
              <h3 className="text-2xl text-white font-bold">Headquarter -</h3>
              <p className="text-white leading-8 ">
                2715 Ash Dr. San Jose , South Dakota <br />
                83475
              </p>
            </div>
            <div className="h-45 w-full lg:w-[50%] bg-[#C6D936] flex flex-col gap-3 rounded-xl p-10">
              <h3 className="text-2xl  font-bold">Email Us -</h3>
              <p className="">yourtheam@gmail.com</p>
              <p className="">helptheam@gmail.com</p>
            </div>
          </div>

          <div className="conatainer h-60 w-4xl bg-white/5 rounded-xl p-10 ">
            <h3 className="text-2xl text-white font-bold">
              The Advantages of Connecting with Us:
            </h3>

            <div className="flex flex-row gap-4 lg:p-20 p-2">
              <div className="flex flex-col items-start gap-6 mt-3 relative">
                <p className="flex items-center gap-2 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10 absolute -left-8">
                    <FaCheck />
                  </span>
                  Guiding Your Business Success
                </p>

                <p className="flex flex-row items-center gap-10 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10 absolute -left-8">
                    <FaCheck />
                  </span>
                  Evaluate Issues Hindering Your Progress
                </p>

                <p className="flex items-center gap-2 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10 absolute -left-8">
                    <FaCheck />
                  </span>
                  Strategic Insights for Business Growth
                </p>
              </div>
              <div className="flex flex-col items-start gap-5 mt-3 relative">
                <p className="flex items-center gap-2 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10">
                    <FaCheck />
                  </span>
                  Available 24/7 to Assist You Anytime
                </p>

                <p className="flex items-center gap-2 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10">
                    <FaCheck />
                  </span>
                  Expert Consultants Expertise
                </p>

                <p className="flex items-center gap-2 text-sm text-white ">
                  <span className="p-2 rounded-full text-[10px] bg-white/10">
                    <FaCheck />
                  </span>
                  Free Consultation to Collaboration
                </p>
              </div>
            </div>
          </div>

              <div className="bottom-shape absolute left-0 bottom-0 ">
                     <div className="h-60 w-25 bg-white/20"></div>
                    <div className="h-25 w-60 bg-white/20 absolute left-0 bottom-0"></div>
        </div>
        </div>
        <div className="right w-full lg:w-[40%] p-10 relative">
          <img src={ChooseRightShape} className="animate-slow-spin2 px-3 scale-110 absolute " />
          <img src={Profile} className="absolute -top-15 scale-88 right-0"/>
          <img src={CircleBtn} className="absolute top-50 right-30"/>
          <img src={ChooseInfo} className="absolute top-0 -right-20 animate-slideLR2" />
        </div>
      </div>


    </section>
     <div className="container flex items-stretch justify-between px-10 py-10 lg:py-16 mt-5">
  
  {/* Left Heading */}
  <h1 className="font-bold text-3xl lg:text-5xl leading-[1.1] text-[#06210B]">
    We Help Real <br />
    People Do More <br />
    Business Plan
  </h1>

  {/* Box 1 */}
  <div className="flex flex-col justify-start items-start border-r border-black/10 pr-16 min-h-[260px]">
    <img src={Funface} alt="" className="mb-8" />

    <h1 className="font-bold text-3xl lg:text-5xl leading-none text-[#06210B]">
      90%
    </h1>

    <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
      Clients Satisfactions
    </p>
  </div>

  {/* Box 2 */}
  <div className="flex flex-col justify-start items-start border-r border-black/10 px-4 lg:px-16 min-h-[260px]">
    <img src={Funface} alt="" className="mb-8" />

    <h1 className="font-bold text-3xl lg:text-5xl leading-none text-[#06210B]">
      40%
    </h1>

    <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
      Decrease Expense
    </p>
  </div>

  {/* Box 3 */}
  <div className="flex flex-col justify-start items-start pl-16 min-h-[260px]">
    <img src={Funface} alt="" className="mb-8" />

    <h1 className="font-bold text-3xl lg:text-5xl leading-none text-[#06210B]">
      7M
    </h1>

    <p className="text-[22px] font-semibold mt-5 text-[#06210B]">
      Money Flow Users
    </p>
  </div>

</div>
    </>
  );
}; 

export default Choose;
