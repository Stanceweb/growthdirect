import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";

import TestRight from "../../../../assets/Images/testimonial-image5.jpg";
import LeftTest from "../../../../assets/Images/testimonial-three-icon.png";

const Testimonial = () => {
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
    <section className="Testimonial min-h-screen flex flex-row">
      <div className="left w-full lg:w-[50%]">
        <img src={TestRight} className="rounded-l-2xl" />
      </div>
      <div className="right w-full lg:w-[50%] p-10 flex flex-col items-start gap-5">
        <span
          className={`w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm`}
        >
          TESTIMONIAL
        </span>

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-3xl lg:text-5xl  leading-14">
            What Our Customers <br />
            Say <span className="font-normal">About US</span>
          </h1>

          {/* NAVIGATION BUTTONS */}
          <div className="flex gap-3 mt-10" >
            <button className="swiper-btn-prev w-14 h-14 rounded-full border bg-[#1A4137] text-white border-white/30 flex items-center justify-center hover:bg-[#C6D936] hover:text-black transition-all cursor-pointer text-3xl">
              ‹
            </button>

            <button className="swiper-btn-next w-14 h-14 rounded-full border bg-[#1A4137] text-white border-white/30 flex items-center justify-center hover:bg-[#C6D936] hover:text-black transition-all cursor-pointer text-3xl">
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
                <p className="text-xl leading-10 text-gray-500 border-b border-black/10 pb-5">
                  {elem.desc}
                </p>

                <div className="flex flex-row justify-between items-center mt-8">
                  <h1 className="font-bold text-xl">
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
    </section>
  );
};

export default Testimonial;
