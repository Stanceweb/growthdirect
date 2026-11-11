import React, { useState } from "react";
import "../../../src/App.css";
import BannerShape from "../../assets/Images/banner-two-shape.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import circleBg from "../../assets/Images/banner-two-circle.png";
import profileImg from "../../assets/Images/banner-two-image.png";
import Shape from "../../assets/Images/banner-two-star.png";
import Aboutus2 from "../components/Homepage2 components/Aboutus2/Aboutus2";
import Info1 from "../../assets/Images/banner-two-info1.png";
import Info2 from "../../assets/Images/banner-two-info2.png";
import Info3 from "../../assets/Images/banner-two-info3.png";
import Insites from "../components/Homepage2 components/Insites/Insites";
import Services from "../components/Homepage2 components/services/Services";
import Testimonials from "../components/Homepage2 components/Testimonials/Testimonials";
import HowitWork from "../components/Homepage2 components/How it Work/HowitWork";
import Faqs2 from "../components/Homepage2 components/Faqs2/Faqs2";
import Gallary from "../components/Homepage2 components/Gallary/Gallary";
import Features from "../components/Homepage2 components/Features/Features";
import Statics from "../components/Homepage2 components/Statics/Statics";
import TeamMember from "../components/Homepage2 components/Team Member/TeamMember";
import Contactus from "../components/Homepage2 components/Contact us/Contactus";
import Blogs from "../components/Homepage2 components/Blogs/Blogs";

const Homepage2 = () => {
  const [openVideo, setopenVideo] = useState(false);

  // Mouse parallax state
  const [move, setMove] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / 35;
    const y = (e.clientY - rect.top - rect.height / 2) / 35;

    setMove({
      x,
      y,
    });
  };

  const handleMouseLeave = () => {
    setMove({
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <section className="Homepage min-h-screen w-full flex flex-row items-center justify-center relative bg-[#F8F5F2]">
        {/* LEFT */}
        <div className="left h-full w-full lg:w-[50%] relative flex items-center justify-start p-30">
          <img src={BannerShape} className="absolute left-0 top-10" />

          <div className="content flex flex-col items-start gap-3 z-30">
            <p className="w-60 py-2 font-semibold text-sm bg-[#C6D936] flex items-center justify-center rounded-full">
              Innovation and Creativity
            </p>

            <h1 className="text-3xl lg:text-7xl leading-20">
              <span className="font-bold">Business</span>Consultant <br />
              <span className="font-bold">& Growth Solution</span>
            </h1>

            <p className="text-lg font-medium text-gray-500">
              DealMaker is the place where early adopters and innovation
              enthusiasts
              <br />
              discover vibrant, imaginative technology before it reaches
            </p>

            <div className="bottom flex items-center gap-10">
              <button className="flex items-center justify-center px-10 py-3 rounded-full bg-[#1A4137] text-white gap-2 cursor-pointer">
                Get Started <FaAngleRight />
              </button>

              <div className="relative flex items-center justify-center w-20 h-20">
                <span className="absolute w-20 h-20 rounded-full border border-gray-300 pulse1  z-[-9999]"></span>

                <span className="absolute w-16 h-16 rounded-full border border-gray-300 pulse2 z-[-9999]"></span>

                <span className="absolute w-12 h-12 rounded-full border border-gray-300 pulse3  z-[-9999]"></span>

                <button
                  onClick={() => setopenVideo(true)}
                  className="relative z-10 text-sm border p-3 rounded-full flex items-center justify-center cursor-pointer bg-white"
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

        {/* RIGHT */}
        <div
          className="right h-full w-full lg:w-[50%] p-30 flex items-center justify-center relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={circleBg} className="animate-slow-spin scale-125" />

          <img
            src={profileImg}
            className="absolute left-20 scale-90 animate-slideLR"
          />

          <img
            src={Shape}
            className="absolute top-4 lg:p-20 left-0 animate-zizo will-change-transform "
          />

          <img
            src={Shape}
            className="absolute top-4 lg:p-20 right-10 animate-zizo will-change-transform "
          />

          {/* Mouse Parallax Images */}

          <img
            src={Info1}
            className="z-30 absolute left-10 bottom-10 duration-300 ease-out"
            style={{
              transform: `translate(${move.x}px, ${move.y}px)`,
            }}
          />

          <img
            src={Info2}
            className="z-30 absolute top-50 right-20 duration-300 ease-out"
            style={{
              transform: `translate(${move.x * 1.3}px, ${move.y * 1.3}px)`,
            }}
          />

          <img
            src={Info3}
            className="z-30 absolute right-10 bottom-10 duration-300 ease-out"
            style={{
              transform: `translate(${move.x * 0.8}px, ${move.y * 0.8}px)`,
            }}
          />
        </div>
      </section>

      <Aboutus2 />
      <Insites />
      <Services />
      <div className="mt-[-110px] pb-30">
        <Testimonials />
      </div>
      <HowitWork />
      <Faqs2 />
      <Gallary />
      <Features />
      <Statics />
      <TeamMember />
      <Contactus />
      <Blogs />
    </>
  );
};

export default Homepage2;
