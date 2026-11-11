import React, { useState } from "react";
import BannerLeft from "../../assets/Images/banner-1-3.png";
import BannerMiddle from "../../assets/Images/banner-1-2.png";
import BannerBg from "../../assets/Images/home6-banne-pattern.png";
import BannerRight from "../../assets/Images/banner-11-1.png";
import "../../../src/App.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Aboutus6 from "../components/Homepage6 Components/AboutUs6/Aboutus6";
import Services from "../components/Homepage 3 Components/Services3/Services";
import Service from "../components/Homepage6 Components/Services/Service";
import Consulting from "../components/Homepage 3 Components/consulting/Consulting";
import Expertize from "../components/Homepage6 Components/Expertise/Expertize";
import Consultant from "../components/Homepage6 Components/Consultant/Consultant";
import PriceTable from "../components/Homepage6 Components/PriceTable/PriceTable";
import TeamMember from "../components/Homepage 3 Components/TeamMember/TeamMember";
import Testimonial from "../components/Homepage 3 Components/Testimonial/Testimonial";
import Blogs from "../components/Homepage 3 Components/News&Blogs/Blogs"
const Homepage6 = () => {
  const [openVideo, setopenVideo] = useState(false);
  return (
    <>
      <section className="Homepage6 min-h-screen relative w-full bg-[linear-gradient(to_right,#1C4A2F_0%,#1C4A2F_0%,#063232_30%,#063232_100%)] overflow-hidden">
        <div className="content  flex flex-row items-center justify-between relative">
          <div className="left relative w-[600px] h-[600px] flex flex-col items-start justify-start z-20">
            <img
              src={BannerLeft}
              alt=""
              className="absolute top-4 lg:p-20 -left-20 z-20 animate-slideUpDown"
            />

            <h1 className="text-8xl text-white font-bold translate-x-20 mt-40">
              Insurance <br />
              Consulting <br />
              <span className="font-normal">Agency</span>
            </h1>

            <div className="flex flex-row gap-10 px-4 lg:px-20 mt-10">
              <button className="flex flex-row items-center bg-[#063232] py-3 px-12 gap-1 text-white border border-white rounded-full cursor-pointer">
                Get Started <FaAngleRight />
              </button>

              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={() => setopenVideo(true)}
                  className="p-4 text-lg text-white/80 rounded-full bg-[#063232] cursor-pointer"
                >
                  <FaPlay />
                </button>

                <p className="text-white font-semibold">Watch Video</p>
              </div>
            </div>
          </div>

          <img src={BannerBg} className="absolute right-0 top-0" />
          <div className="middle">
            <img
              src={BannerMiddle}
              className="absolute right-122 top-4 lg:p-20  object-cover h-155 w-100 z-20"
            />
          </div>

          <div className="right flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img
                src={BannerRight}
                className="absolute right-50 object-cover"
              />
              <div className="content flex flex-col absolute right-40 gap-3">
                <p className="text-3xl lg:text-7xl text-white">27+</p>
                <span className="text-lg text-white">
                  Years of <br />
                  Experience
                </span>
              </div>
            </div>

            <p className="absolute right-10 text-white text-lg bottom-0">
              Interiox Architects is a comprehensive design <br />
              firm specializing in architecture, master
              <br /> planning, urban design, interior architecture,
              <br /> space planning, and programming. Our
              <br /> portfolio features
            </p>
          </div>
        </div>

        {openVideo && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
            <button
              onClick={() => setopenVideo(false)}
              className="absolute top-10 right-10 text-white text-3xl lg:text-5xl cursor-pointer"
            >
              ×
            </button>

            <div className="w-full flex justify-center">
              <iframe
                width="1000"
                height="500"
                src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        )}

        <h1 className="flex items-center justify-center text-center text-[250px] text-white/5 font-bold tracking-wide absolute -bottom-30 left-50 ">
          DealMaker
        </h1>
      </section>
      <Aboutus6 />
      <Service />
      <Consulting
        bgColor="bg-[#E24B1B]"
        bgColor2="bg-white/30"
        textColor="text-[#fff]"
        textColor2="text-[#fff]"
        showGradient={true}
        gradientFrom="from-[#063232]/90"
        gradientVia="via-[#063232]/90"
        gradientTo="to-[#063232]/90"
      />
      <Expertize />
      <Consultant />
      <PriceTable />
     <TeamMember
  bgColor="bg-[#E24B1B]"
  Color="text-[#fff]"
  heading={
    <>
      Meet Our Expert Team 
       <br />
      Member
    </>
  }
  showButton={false}
  CenterHeading={true}
/>
<Testimonial 
bgColor="bg-[#063232]"
bgColor2="bg-[#E24B1B]"
 Color="text-[#fff]"
/>
<Blogs 
bgColor2="bg-[#E24B1B]"
 Color="text-[#fff]"
 />
    </>
  );
};

export default Homepage6;
