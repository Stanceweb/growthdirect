import React from "react";
import { FiMail, FiChevronRight, FiChevronUp } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaVimeoV } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import Logo from "../../../../assets/Images/logo.png";
const Footer2 = () => {
  return (
    <footer className="bg-[#163F35] min-h-screen flex flex-col text-white relative overflow-hidden">
      {/* Top */}
      <div className="h-30 w-[84%] mx-auto flex flex-row items-center justify-around gap-2 border-b border-white/10">
        <div className="bg-[#C6D936] h-full w-80 flex items-center justify-center ">
          <img src={Logo} />
        </div>

        <h3 className="text-[28px] font-bold">Subscribe Newsletter</h3>

        <div className="flex items-center gap-8">
          <div className="w-[330px] h-[58px] border border-white/10 rounded-md flex items-center px-6 gap-3 ">
            <FiMail className="text-white/70" />
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent outline-none w-full placeholder:text-white/60"
            />
          </div>

          <button className="bg-[#C6D936] text-[#0D241C] font-semibold px-10 h-[58px] rounded-md flex items-center gap-3 font-medium cursor-pointer">
            Sign Up
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full flex flex-row ">
        <div className="left h-125 w-full lg:w-[50%] px-35 py-10 lg:py-20 border-r border-white/10 ">
          <h1 className="w-130 leading-14 text-3xl lg:text-5xl font-bold">
            Ready Discover More?
            <br /> Contact Us Today!
          </h1>
          <p className="mt-5 mx-2">
            No credit card requirement it’s full free for all
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="mt-5 mx-2 py-4 px-5 w-70 bg-white rounded-full text-black outline-0"
          />

          <button className="flex items-center gap-2 mt-5 mx-2 px-4 lg:px-20 text-black py-4 bg-[#C6D936] rounded-full cursor-pointer">
            Sign Up Now <FaAngleRight />
          </button>
        </div>
        <div className="right  h-125 w-full lg:w-[50%] p-4 lg:p-20 flex flex-row items-center gap-40 ">
          <div className="">
            <h1 className="text-2xl tracking-wide font-bold">Services</h1>

            <ul className="flex flex-col items-start gap-3 mt-5 text-white/40 font-semibold ">
              <li>Business Plan</li>
              <li>Growth Strategy</li>
              <li>Strategic planning</li>
              <li>Workflow Automation</li>
              <li>Lead Generation</li>
              <li>Financial Planning</li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <div className=" flex flex-col gap-3">
              <h1 className="text-2xl tracking-wide font-bold">Locations</h1>
              <p className="text-xl text-white/40 font-semibold mt-3">
                55 Main Street , 2nd block <br />
                Malborne , Australia{" "}
              </p>
            </div>

            <div className="mt-8 flex flex-col">
              <h1 className="text-2xl tracking-wide font-bold">Contact</h1>
              <p className="text-xl text-white/40 font-semibold mt-3">
                support@gmail.com
              </p>
              <span className="text-xl text-white font-semibold mt-2">
                +880 (123) 456 88
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[84%] mx-auto flex flex-row items-center justify-between border-t border-white/10">
      <p className="mt-6 text-white/40">Copyright ©2025, <span className="text-white">Business</span> All Rights Reserved</p>


      <div className="social-icons flex items-center gap-5 mt-6">
                        <span className=" h-full py-3 px-3 bg-white/30 rounded-full duration-300 hover:text-[#1A4137]"><FaFacebookF /></span>
        <span className="h-full py-3 px-3 bg-white/30 rounded-full duration-300 hover:text-[#1A4137]"><RiTwitterXLine /></span>
                        <span className="duration-300 py-3 px-3 bg-white/30 rounded-full hover:text-[#1A4137]">< FaVimeoV /></span>
                        <span className="h-full py-3 px-3 bg-white/30 rounded-full duration-300 hover:text-[#1A4137]"><FaPinterest /></span>
      </div>
      </div>
      {/* Bottom */}
    </footer>
  );
};

export default Footer2;