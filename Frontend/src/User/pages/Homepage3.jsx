import React, { useState } from "react";
import Hero1 from "../../assets/Images/banner-three-image1.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import '../../../src/App.css'
import Aboutus3 from "../components/Homepage 3 Components/Aboutus3/Aboutus3";
import Services from "../components/Homepage 3 Components/Services3/Services";
import Consulting from "../components/Homepage 3 Components/consulting/Consulting";
import Objective from "../components/Homepage 3 Components/Objective/Objective";
import CaseStudy from "../components/Homepage 3 Components/CaseStudy/CaseStudy";
import Brand from "../components/Homepage 3 Components/Branding Swiper/Brand";
import PriceCard from "../components/Homepage 3 Components/Pricing/PriceCard";
import TeamMember from "../components/Homepage 3 Components/TeamMember/TeamMember";
import Testimonial from "../components/Homepage 3 Components/Testimonial/Testimonial";
import Blogs from "../components/Homepage 3 Components/News&Blogs/Blogs";
const Homepage3 = () => {

  const [openVideo, setopenVideo] = useState(false);
  return (
    <>
      <section className="Homepage min-h-screen w-full flex flex-row items-center justify-center ">
        <div className="relative translate-x-20 -translate-y-12">
          <img src={Hero1} className="rounded-2xl" />

          <div
            className="absolute top-0 left-0 h-full w-full rounded-2xl 
  bg-gradient-to-r from-[#06251e]/100 via-[#0B2E25]/70 to-transparent"
          />

          <div className="content absolute top-4 lg:p-20  p-4 lg:p-20">
            <h1 className="text-white text-3xl lg:text-7xl font-bold leading-22">
              {" "}
              <span className="font-normal">
                Next Generation
                <br />
              </span>{" "}
              Corporate & Business <br /> Consulting Agency
            </h1>

            <p className="capitalize mx-3 text-white/70 font-medium text-lg leading-8 py-5">
              DealMaker is the destination where early adopters & innovation
              enthusiasts <br /> discover cutting-edge technology before
              mainstream.Get started Image
            </p>

            <div className="flex flex-row items-center gap-4 lg:p-20 ">
              <button className="mx-3 bg-[#C6D936] py-4 px-10 rounded-full text-sm font-medium text-[#0B2E25] flex items-center gap-2 cursor-pointer">
                Get Started <FaAngleRight />
              </button>

              <div className="relative flex items-center justify-center w-20 h-20">
                <span className="absolute w-20 h-20 rounded-full border border-gray-300 pulse1  z-0"></span>

                <span className="absolute w-16 h-16 rounded-full border border-gray-300 pulse2 z-0"></span>

                <span className="absolute w-12 h-12 rounded-full border border-gray-300 pulse3  z-0"></span>

                <button
                  onClick={() => setopenVideo(true)}
                  className="relative z-10 text-sm p-5 rounded-full flex items-center justify-center cursor-pointer bg-white"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* VIDEO MODAL */}
        {openVideo && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
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
      <Aboutus3 />
      <Services />
      <Consulting />
      <Objective />
      <Brand />
      <CaseStudy />
      <PriceCard />
      <TeamMember />
      <Testimonial />
      <Blogs />
    </>
  );
};

export default Homepage3;
