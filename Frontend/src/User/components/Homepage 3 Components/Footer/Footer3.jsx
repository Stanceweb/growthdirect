import React from "react";
import middleShape from "../../../../assets/Images/cta-arry.png";
import rightShape from "../../../../assets/Images/cta-line.png";
import { GoArrowUpRight } from "react-icons/go";
import "../../../../../src/App.css";
import Logo from "../../../../assets/Images/logo-light.png";
import Logo2 from "../../../../assets/Images/logo-2.png"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer3 = ({bgColor = "bg-[#1A4137]" , Color = "text-[#000]" ,Color2="text-[#C6D936]", bgColor2 = "bg-[#C6D936]" , logo=Logo }) => {
  return (
    <footer className={`min-h-screen ${bgColor} p-4 lg:p-20 flex flex-col`}>
      <div className={`container h-80 rounded-2xl flex flex-row items-center w-full ${bgColor2} ${Color} p-4 lg:p-20 relative`}>
        <div className="flex flex-col">
          <h1 className={`font-bold text-3xl lg:text-5xl ${Color}leading-14`}>
            Looking For Professional <br />
            Business Consultant ?
          </h1>

          <p className={`${Color} mt-5`}>
            At vero eos et accusamus et iusto odio dignissimos ducimus quiy
            blanditiise <br />
            praesentium voluptatum deleniti atque corrupti dolorese
          </p>
        </div>

        <img src={middleShape} className="mx-20 animate-slideLR2" />

        <div className="absolute right-0 flex flex-col items-center">
          <img src={rightShape} />

          <button className="flex flex-row items-center absolute top-30 px-10 py-3 bg-white text-black rounded-2xl text-lg font-medium cursor-pointer  gap-3">
            Get Started Free <GoArrowUpRight />
          </button>

          <span className={`absolute top-44 ${Color}`}>No Credit card required</span>
        </div>
      </div>

      <div className="middle flex flex-row items-center justify-center gap-4 lg:p-20 p-4 lg:p-20 border-b border-white/20">
        <div className="flex flex-col items-start gap-3">
          <img src={logo} className="scale-100" />
          <p className="text-gray-400">
            At vero eos et accusamus iusto odio
            <br /> dignissimos ducimus blanditiise
          </p>
          <div className="flex items-center relative">
            <input
              type="email"
              className="py-4 px-8 w-80 rounded-xl bg-white"
              placeholder="Email Address "
            />
            <span className={`absolute right-2 cursor-pointer ${bgColor2} ${Color} p-3 rounded-xl`}>
              <GoArrowUpRight />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-white text-2xl">Resource</h2>
          <div className="mt-5 flex flex-col text-[16px] gap-5">
            <span className="font-medium text-white">Product</span>
            <span className="font-medium text-white">Service</span>
            <span className="font-medium text-white">About Us</span>
            <span className="font-medium text-white">Benefits</span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-white text-2xl">Quick Link</h2>
          <div className="mt-5 flex flex-col text-[16px] gap-5">
            <span className="font-medium text-white">Features</span>
            <span className="font-medium text-white">Pricing Plan</span>
            <span className="font-medium text-white">Best Program</span>
            <span className="font-medium text-white">Press Kit</span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-white text-2xl">Company</h2>
          <div className="mt-5 flex flex-col text-[16px] gap-5">
            <span className="font-medium text-white">About</span>
            <span className="font-medium text-white">Team Member</span>
            <span className="font-medium text-white">Review</span>
            <span className="font-medium text-white">Latest News</span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-white text-2xl">Contact</h2>
          <div className="mt-5 flex flex-col text-[16px] gap-5">
            <span className="font-medium text-white flex flex-row items-start gap-2 ">
              <IoLocationOutline className={`${Color2} text-xl mt-1`} />
              55 Main Street, 2nd Block <br /> Melbourne , Australia
            </span>
            <span className="font-medium text-white flex flex-row items-start gap-2 ">
              <MdOutlineMailOutline className={`${Color2} text-xl mt-1`} />
              support@gmail.com
            </span>
            <span className="font-medium text-white flex flex-row items-start gap-2 ">
              <IoCallOutline className={`${Color2} text-xl mt-1`} />
              +000 (123) 44 55
            </span>
          </div>
        </div>
      </div>


      <div className="flex flex-row items-center justify-between gap-180 mt-7 absolute bottom-6">
        <p className="flex items-center gap-2 text-white/40 z-20">Copyright <span><FaRegCopyright /></span> 2025 , <span className="text-white">Design</span>All Rights Reserved</p>


        <div className="flex flex-row gap-5 text-gray-400 font-medium">
            <span>Faqs</span>
            <span>Setting</span>
            <span>Privacy</span>
            <span>Contact </span>
        </div>
      </div>

       <div className="bottom-shape absolute left-0 bottom-0 ">
              <div className="h-60 w-25 bg-white/20"></div>
              <div className="h-25 w-60 bg-white/20 absolute left-0 bottom-0"></div>
        </div>
    </footer>
  );
};

export default Footer3;
