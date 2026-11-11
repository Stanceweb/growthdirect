import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import BannerShape from "../../assets/Images/banner-five-shape.png"
import BannerImg from "../../assets/Images/banner-five-image.jpg"
import BrandSlider5 from "../components/Homepage 5 Components/BrandSlider5/BrandSlider5";
import About5 from "../components/Homepage 5 Components/About5/About5";
import Services from "../components/Homepage 5 Components/Services/Services";
import MissionVision from "../components/Homepage1 Components/MissionVision/MissionVision"
import GrowthRate from "../components/Homepage1 Components/GrowthRate/GrowthRate";
import CaseStudy from "../components/Homepage1 Components/CashStudy/CaseStudy";
import Processing from "../components/Homepage1 Components/ProcessingSec/Processing";
import Faqs from "../components/Homepage1 Components/FAQS/Faqs"
import Consultent from "../components/Homepage 5 Components/Consultant/Consultent";
import Strategy from "../components/Homepage 5 Components/Strategy/Strategy";
import Testimonial from "../components/Homepage 5 Components/Testimonial/Testimonial";
import ContactNow from "../components/Homepage 5 Components/Contact/ContactNow";
import Blogs from "../components/Homepage2 components/Blogs/Blogs";


const Homepage5 = () => {
  const [openVideo, setopenVideo] = useState(false);
  return (
    <>
      <section className="Homepage5 min-h-screen flex flex-row gap-3 p-10 mt-22">
        <div className="left relative w-full lg:w-[50%] bg-[#063232] rounded-3xl flex flex-col items-start px-18 justify-center gap-6">
          <img src={BannerShape} className="absolute top-10" />
          <h1 className="text-3xl lg:text-6xl text-white leading-18">
            Next Generation <br />{" "}
            <span className="font-bold">Corporate & Finance</span>
            <br />
            <span className="font-bold">Consulting</span> Agency
          </h1>

          <p className="text-lg text-white/50 font-medium">
            DealMaker is the destination where early adopters & innovation
            <br />
            enthusiasts discover cutting-edge technology before mainstream.
          </p>

          <div className="flex flex-row items-start justify-start mt-10 gap-6">
            <button className="px-12 py-3 font-medium bg-[#C6D936] rounded-full cursor-pointer">
              Get Started
            </button>

            <div className="flex flex-row items-center justify-center gap-2">
              <button
                onClick={() => setopenVideo(true)}
                className="p-4 text-lg text-white/80 rounded-full bg-white/10 cursor-pointer"
              >
                <FaPlay />
              </button>

              <p className="text-white font-semibold">Watch Video</p>
            </div>
          </div>

          {/* VIDEO MODAL */}
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

          <div className="py-26 px-10 bg-white/20 absolute right-0 bottom-0"></div>
          <div className="py-10 px-26 bg-white/20 absolute right-0 bottom-0"></div>
        </div>

        <div className="right w-full lg:w-[50%] rounded-3xl relative flex items-start justify-center">
          <img src={BannerImg} className="h-full w-full object-cover rounded-3xl" />
        </div>
      </section>
      <BrandSlider5 />
      <About5 />
      <Services />
      <MissionVision />
      <GrowthRate />
      <CaseStudy />
      <Processing />
      <Faqs />
      <Consultent />
      <Strategy />
      <Testimonial />
      <ContactNow />
      <Blogs />
    </>
  );
};

export default Homepage5;
