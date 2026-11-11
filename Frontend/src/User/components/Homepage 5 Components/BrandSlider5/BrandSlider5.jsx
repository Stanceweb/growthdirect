import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Client1 from "../../../../assets/Images/Clients-1.png";
import Client2 from "../../../../assets/Images/Clients-2.png";
import Client3 from "../../../../assets/Images/Clients-3.png";
import Client4 from "../../../../assets/Images/Clients-4.png";
import Client5 from "../../../../assets/Images/Clients-5.png";

const BrandSlider5 = () => {
  const brands = [Client1, Client2, Client3, Client4, Client5, Client3 , Client4 ];

  return (
    <section className="BrandSlider p-10 relative flex items-center justify-center">
      <div className="container flex lg:flex-row flex-col items-center justify-between py-10 rounded-2xl w-full border border-gray-300 px-10 gap-10 overflow-hidden">
        
        {/* Left Content */}
        <p className="text-lg font-bold flex items-end justify-end gap-3 leading-8 lg:border-r border-gray-300 lg:pr-10 whitespace-nowrap">
          Trusted By <br /> Top Companies
          <span className="text-[#C7D635] font-bold -translate-y-1">
            <GoArrowUpRight />
          </span>
        </p>

        {/* Brand Slider */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="w-full"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={brand}
                    alt={`brand-${index}`}
                    className="object-contain w-auto h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default BrandSlider5;