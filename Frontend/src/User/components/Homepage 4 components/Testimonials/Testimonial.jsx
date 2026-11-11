import React from "react";
import Hero from "../../../../assets/Images/testimonial-four-hero.png";
import Map from "../../../../assets/Images/testimonial-four-map.png";
import icon from "../../../../assets/Images/testimonial-four-icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonial = () => {
  return (
    <section className="testimonials min-h-screen bg-[#1A4137] relative flex items-center justify-center p-50 overflow-hidden">
      
      <img src={Map} className="absolute" />

      <Swiper
        slidesPerView={1}
        loop={true}
        className="w-full z-10"
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <div className="container h-110 w-250 flex flex-col items-center justify-start p-10 gap-3 -translate-y-10 mx-auto z-30">
              
              <img src={icon} className="" />

              <p className="text-3xl font-medium text-white text-center leading-16">
                Ascend the mountain not to plant your flag , but to embrace <br />
                the challange , savour the journey , and marvel at the view . <br />
                Climb to experience the world , not for the world to notice <br />
                you. This is why they stand out with exceptional.
              </p>

              <div className="btn flex flex-row gap-5">
                <div className="flex flex-col items-center justify-center w-60 h-20 rounded-full bg-white/20">
                  <span className=" text-xl text-white font-bold">
                    Leslie Alexander
                  </span>
                  <p className="text-sm text-white/80 font-medium">
                    Business Owner
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-60 h-20 rounded-full bg-white/20">
                  <span className=" text-xl text-white font-bold">
                    Robert.J.Hare
                  </span>
                  <p className="text-sm text-white/80 font-medium">
                    Sr.Product Manager
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-60 h-20 rounded-full bg-white/20">
                  <span className=" text-xl text-white font-bold">
                    Ralph Edwards
                  </span>
                  <p className="text-sm text-white/80 font-medium">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={Hero} className="absolute scale-100 " />
    </section>
  );
};

export default Testimonial;