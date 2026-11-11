import React, { useState } from "react";
import Service1 from "../../../../assets/Images/service-icon1.svg";
import Service2 from "../../../../assets/Images/service-icon2.svg";
import Service3 from "../../../../assets/Images/service-icon3.svg";
import Service4 from "../../../../assets/Images/service-icon4.svg";
import Service5 from "../../../../assets/Images/service-icons5.svg";
import videoImg from "../../../../assets/Images/service-three-image.jpg";
import "../../../../../src/App.css";
import { FaCheck } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import ServiceShape from "../../../../assets/Images/service-three-shape.png";

const Services = () => {
  const [openVideo, setopenVideo] = useState(false);
  return (
    <section className="screen min-h-screen bg-[#F8F5F2] -translate-y-50 flex flex-row items-center justify-center p-4 lg:p-20 gap-10">
      <img src={ServiceShape} className="absolute bottom-0 -z-50" />
      <div className="left w-full lg:w-[50%] p-4 lg:p-20 mt-20">
        <div className="bg-[#EEE9E9] flex flex-col items-center gap-10 p-4 lg:p-20">
          <div className="bg-white p-6 w-100 flex flex-row items-center gap-3 duration-200 hover:bg-[#C6D936] rounded-xl group">
            <img
              src={Service1}
              className="h-12 w-12 group-hover:rotate-y-[360deg] duration-500"
            />
            <p className="text-xl text-[#1A4137] font-bold">
              Business Strategy
            </p>
          </div>

          <div className="bg-white p-6 w-100 flex flex-row items-center gap-3 duration-200 hover:bg-[#C6D936] rounded-xl group">
            <img
              src={Service2}
              className="h-12 w-12 group-hover:rotate-y-[360deg] duration-500"
            />
            <p className="text-xl text-[#1A4137] font-bold">
              Financial Consulting
            </p>
          </div>

          <div className="bg-white p-6 w-100 flex flex-row items-center gap-3 duration-200 hover:bg-[#C6D936] rounded-xl group">
            <img
              src={Service3}
              className="h-12 w-12 group-hover:rotate-y-[360deg] duration-500"
            />
            <p className="text-xl text-[#1A4137] font-bold">
              Marketing & Branding
            </p>
          </div>
          <div className="bg-white p-6 w-100 flex flex-row items-center gap-3 duration-200 hover:bg-[#C6D936] rounded-xl group">
            <img
              src={Service4}
              className="h-12 w-12 group-hover:rotate-y-[360deg] duration-500"
            />
            <p className="text-xl text-[#1A4137] font-bold">Sales Consulting</p>
          </div>
          <div className="bg-white p-6 w-100 flex flex-row items-center gap-3 duration-200 hover:bg-[#C6D936] rounded-xl group">
            <img
              src={Service5}
              className="h-12 w-12 group-hover:rotate-y-[360deg] duration-500"
            />
            <p className="text-xl text-[#1A4137] font-bold">Human Resources</p>
          </div>
        </div>
      </div>

      <div className="right w-full lg:w-[50%] mt-20 flex flex-col gap-7">
        <span className="px-8 w-35 py-2 rounded-full bg-[#C6D936] text-sm font-semibold tracking-widest">
          SERVICES
        </span>

        <p className="text-3xl lg:text-5xl leading-16 font-bold">
          We Helping You Unlock <br />
          The Opportunities,
          <br /> Success.
        </p>

        <span className="text-lg leading-8 text-gray-500">
          Exploring alternatives such as social media advertising, influencer{" "}
          <br /> partnerships email marketing, & SEO optimization can help
          diversify your
          <br /> reach
        </span>

        <div className="container flex flex-row gap-8 relative">
          <img src={videoImg} className="rounded-xl" />

          <div className="absolute z-50 top-25 left-15 flex items-center justify-center w-20 h-20">
            <span className="absolute w-20 h-20 rounded-full border border-[#C6D936] pulse1  z-[-9999]"></span>

            <span className="absolute w-16 h-16 rounded-full border border-[#C6D936] pulse2 z-[-9999]"></span>

            <span className="absolute w-12 h-12 rounded-full border border-[#C6D936] pulse3  z-[-9999]"></span>

            <button
              onClick={() => setopenVideo(true)}
              className="relative z-10 text-sm border p-3 rounded-full flex items-center justify-center cursor-pointer bg-[#C6D936]"
            >
              <FaPlay />
            </button>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-xl leading-9">
              With an innovative approach <br />
              to problem-solving, we <br />
              recognize solutions as a <br />
              driving force
            </h3>

            <span className="flex items-center gap-3 text-gray-500 font-medium w-90 mt-2">
              <FaCheck />
              Enhance Operational Efficiency
            </span>
            <span className="flex items-center gap-3 text-gray-500 font-medium w-90 mt-2">
              <FaCheck />
              Designing Tailored Solutions
            </span>
            <span className="flex items-center gap-3 text-gray-500 font-medium w-90 mt-2">
              <FaCheck />
              Dedicated Team member
            </span>
            <span className="flex items-center gap-3 text-gray-500 font-medium w-90 mt-2">
              <FaCheck />
              Delivering Exceptional Value
            </span>
          </div>
        </div>
      </div>

      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center mt-50">
          <button
            onClick={() => setopenVideo(false)}
            className="absolute top-8 right-10 text-white text-4xl cursor-pointer"
          >
            ×
          </button>

          <div className="w-full h-full max-w-full lg:w-[90%]">
            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mt-30 ml-50"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
