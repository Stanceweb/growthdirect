import React from "react";
import LeftTest from "../../../../assets/Images/testimonial-three-icon.png";
import RightProfile from "../../../../assets/Images/testimonial-three-image.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import DualCircle from "../../../../assets/Images/dual-circle.png";
import "../../../../../src/App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = ({bgColor = "bg-[#1A4137]" , Color = "text-[#000]"   , bgColor2 = "bg-[#C6D936]"}) => {
  const Test = [
    {
      id: 1,
      name: "Robert J. Hare",
      occupation: "Business Owner",
      desc: `Ascend the mountain not to plant your flag, but to embrace the
      challenge, savour the journey, and marvel at the view. Climb
      to experience the world, not for the world to notice you.savour the journey, and marvel at the view. Climb
      to experience the world, not for the world to notice you. `,
    },

    {
      id: 2,
      name: "Kathryn Murphy",
      occupation: "Web Designer",
      desc: `Ascend the mountain not to plant your flag, but to embrace the
      challenge, savour the journey, and marvel at the view. Climb
      to experience the world, not for the world to notice you.savour the journey, and marvel at the view. Climb
      to experience the world, not for the world to notice you.`,
    },
  ];

  return (
    <section className="Testimonial min-h-screen flex flex-col p-4 lg:p-20">
      <div className={`container h-190 rounded-4xl w-full ${bgColor} flex`}>
        
        {/* LEFT */}
        <div className="left h-full w-full lg:w-[60%] flex flex-col px-10 py-10 lg:py-20 gap-8">
          <span className={`w-40 py-2 flex items-center justify-center ${bgColor2} ${Color} tracking-widest rounded-full font-semibold text-sm`}>
            TESTIMONIAL
          </span>

          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-3xl lg:text-5xl text-white leading-14">
              What Our Customers <br />
              Say <span className="font-normal">About US</span>
            </h1>

            {/* NAVIGATION BUTTONS */}
            <div className="flex gap-3">
              <button className="swiper-btn-prev w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl">
                ‹
              </button>

              <button className="swiper-btn-next w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl">
                ›
              </button>
            </div>
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            loop={true}
            className="w-full"
          >
            {Test.map((elem) => (
              <SwiperSlide key={elem.id}>
                <div>
                  <p className="text-2xl text-white leading-13 border-b border-white/20 pb-5">
                    {elem.desc}
                  </p>

                  <div className="flex flex-row justify-between items-center mt-8">
                    <h1 className="font-bold text-white text-xl">
                      {elem.name} /{" "}
                      <span className="text-sm font-normal">
                        {elem.occupation}
                      </span>
                    </h1>

                    <img src={LeftTest} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT */}
        <div className="right h-full w-full lg:w-[40%] py-30 px-10 relative overflow-hidden">
          <div className="container h-100 w-100 bg-white/20 rounded-4xl relative z-30">
            <img src={RightProfile} className="absolute -top-10 scale-120" />

            {/* QUOTE */}
            <div className={`absolute top-4 lg:p-20 -right-10 ${bgColor2} ${Color} w-20 h-20 rounded-full flex items-center justify-center text-4xl`}>
              <RiDoubleQuotesR />
            </div>

            <h2 className={`${bgColor2} ${Color} absolute -bottom-25 -rotate-5 text-4xl px-12 py-8 rounded-full font-bold`}>
              "Awesome Work"
            </h2>
          </div>

          <img
            src={DualCircle}
            className="absolute bottom-10 -right-20 -rotate-30 scale-110 animate-slow-spin"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;