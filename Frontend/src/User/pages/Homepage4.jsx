import React, { useRef, useState } from "react";

import BannerShape from "../../assets/Images/banner-four-bg-shape.png";
import LeftShape from "../../assets/Images/banner-four-shape.png";

import Banner1 from "../../assets/Images/banner-four-image.jpg";
import Banner2 from "../../assets/Images/banner-four-image2.jpg";
import Banner3 from "../../assets/Images/banner-four-image3.jpg";

import { FaPlay } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/effect-fade";
import Brand from "../components/Homepage 3 Components/Branding Swiper/Brand";
import Aboutus4 from "../components/Homepage 4 components/AboutUs4/Aboutus4";
import Service from "../components/Homepage 4 components/Services/Service";
import Choose from "../components/Homepage 4 components/Choose/Choose";
import Process from "../components/Homepage 4 components/Process/Process";
import Pricing from "../components/Homepage 4 components/Pricing/Pricing";
import Testimonial from "../components/Homepage 4 components/Testimonials/Testimonial";
import Blogs from "../components/Homepage2 components/Blogs/Blogs";

import BlogShape from "../../assets/Images/blog-four-shape.png";
import GetInTouch from "../components/Homepage 4 components/GetInTouch/GetInTouch";

const Homepage4 = () => {
  const [openVideo, setopenVideo] = useState(false);

  // SWIPER REF
  const swiperRef = useRef(null);

  return (
    <>
      <section className="Homepage4 w-full min-h-screen bg-[#1A4137] flex flex-col items-center justify-start p-4 lg:p-20 relative overflow-hidden">
        {/* SHAPES */}
        <img src={BannerShape} className="absolute right-0 top-0" />

        <img src={LeftShape} className="absolute left-0" />

        {/* CONTENT */}
        <div className="Content flex flex-col items-center z-30">
          <h1 className="text-[80px] font-bold text-white text-center leading-22">
            Make Sure Your Business <br />
            Online <span className="font-light">Succeeds</span>
          </h1>

          <p className="text-center text-lg font-medium text-gray-300 mt-8">
            DealMaker is where early adopters and innovation seekers discover
            dynamic, imaginative
            <br /> technology before it hits the mainstream.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row items-center gap-10 mt-8">
            <button className="px-8 py-3 bg-[#C6D936] rounded-full font-medium cursor-pointer">
              Free Consultation
            </button>

            <div className="flex flex-row items-center gap-2">
              <button
                onClick={() => setopenVideo(true)}
                className="p-4 text-xl text-white/80 rounded-full bg-white/10 cursor-pointer"
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
        </div>
      </section>

      {/* IMAGE FADE SWIPER */}
      <div className="container p-30  -mt-60 relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          // SWIPER INSTANCE
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // FADE EFFECT
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          className="rounded-4xl overflow-hidden"
        >
          <SwiperSlide>
            <img
              src={Banner1}
              className="w-full rounded-4xl object-cover"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={Banner2}
              className="w-full rounded-4xl object-cover"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={Banner3}
              className="w-full rounded-4xl object-cover"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className="navigate-btn absolute top-40 -translate-y-1/2 left-10 right-10 z-30 flex items-center justify-between">
          {/* PREV BUTTON */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-white text-2xl p-5 border border-white/20 rounded-full cursor-pointer  backdrop-blur-sm hover:bg-[#C6D936] hover:text-black duration-500"
          >
            <GoArrowLeft style={{ fontWeight: "bolder" }} />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-white text-2xl p-5 border border-white/20 rounded-full cursor-pointer  backdrop-blur-sm hover:bg-[#C6D936] hover:text-black duration-500"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 pb-10">
        <div className="border-b border-black/20">
          <Brand />
        </div>
      </div>
      <Aboutus4 />
      <Service />
      <Choose />
      <Process />
      <Pricing />
      <Testimonial />
      <div className="relative">

        <img src={BlogShape} className="absolute bottom-0" />
        <div className=" z-50">
          <Blogs />
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Homepage4;
