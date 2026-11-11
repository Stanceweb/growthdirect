import React from "react";
import contactShape from "../../../../assets/Images/contact-shape.png";
import Contact from "../../../../assets/Images/contact.svg";
import Contact2 from "../../../../assets/Images/contact2.svg";
import profile from "../../../../assets/Images/contact-profile.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Contactus = () => {
  return (
    <section className="Contact-us min-h-screen bg-[#F8F5F2] flex relative overflow-hidden">
      {/* left shape */}
      <img src={contactShape} alt="" className="absolute left-0 top-0 z-10" />

      {/* Left Content */}
      <div className="left w-1/2 relative z-20 pl-20 pt-24 flex flex-col items-start gap-6">
        {/* Badge */}
        <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
          CONTACT US
        </span>

        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl leading-14 font-bold text-[#08210F]">
          Let's Work Together
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 ">
          We condemn with rightful anger and, like those who have
          <br />
          been misled and corrupted by allurements.
        </p>

        {/* Contact Items */}
        <div className="flex flex-col gap-8">
          {/* Call */}
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <img src={Contact} alt="" className="w-10" />
            </div>

            <div>
              <p className="text-xl font-semibold text-[#1D3427] mb-2">
                Call For Inquiry
              </p>

              <span className="text-2xl font-bold text-[#234738]">
                +00 (002) 896 22
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <img src={Contact2} alt="" className="w-10" />
            </div>

            <div>
              <p className="text-xl font-semibold text-[#1D3427]">
                Send Us Email
              </p>

              <span className="text-2xl font-bold text-[#234738]">
                theme@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right w-1/2 flex flex-col items-center relative">
        <img src={profile} className="scale-80 absolute right-0 bottom-0" />

        <div className="container w-170 h-130 bg-white shadow-xl absolute right-30 top-4 lg:p-20 flex flex-col items-center justify-start p-10  ">
          <h1 className="text-3xl font-bold">Need Help For Project!</h1>
          <p className="text-gray-500 text-lg mt-5">
            let's collaborate and create something amazing together!
          </p>

          <div className="flex flex-row mt-6 gap-5">
            <div className="flex flex-row relative ">
              <input
                type=" text"
                placeholder="Your Name"
                className="w-70 py-3 px-4 border border-gray-200 rounded-lg placeholder:text-black  focus:outline-1 outline-[#C6D936]"
              />
              <FaRegUser className="absolute top-4 right-8 text-gray-600" />
            </div>
            <div className="flex flex-row relative ">
              <input
                type="email"
                placeholder="Email Address"
                className="w-70 py-3 px-4 border border-gray-200 rounded-lg placeholder:text-black  focus:outline-1 outline-[#C6D936]"
              />
              <MdOutlineMailOutline className="absolute top-4 right-8 text-gray-600" />
            </div>
          </div>

          <select className="py-3 w-144  px-4 border border-gray-200 rounded-lg  mt-6  focus:outline-1 outline-[#C6D936] appearance-none">
            <option className="font-semibold text-sm text-gray-600">Choose Our Service</option>
            <option className="text-sm text-gray-600 hover:bg-gray-200 focus:bg-gray-300">UI/UX Design</option>
            <option className="text-sm text-gray-600 hover:bg-gray-200 focus:bg-gray-300">Web Developer</option>
            <option className="text-sm text-gray-600 hover:bg-gray-200 focus:bg-gray-300">Marketing Manager</option>
            <option className="text-sm text-gray-600 hover:bg-gray-200 focus:bg-gray-300">Web Designer</option>
            <option className="text-sm text-gray-600 hover:bg-gray-200 focus:bg-gray-300">Financial Advice</option>
          </select>

          <textarea
            rows={5}
            className="w-144  px-4 py-3 border border-gray-200 rounded-lg  focus:outline-1 outline-[#C6D936] mt-6 placeholder:text-black"
            placeholder="Write a Message"
          ></textarea>

          <button className="py-3 px-6 rounded-full text-white bg-[#1A4137] mt-6 flex items-center gap-2 cursor-pointer ">Send Message Us <FaAngleRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
