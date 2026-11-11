import React from "react";
import Brand1 from "../../../../assets/Images/brand-two-image1.png";
import Brand2 from "../../../../assets/Images/brand-two-image2.png";
import Brand3 from "../../../../assets/Images/brand-two-image3.png";
import Brand4 from "../../../../assets/Images/brand-two-image4.png";
import Brand5 from "../../../../assets/Images/brand-two-image5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Brand = () => {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5,Brand3];

  return (
    <section className="brands px-10 pb-30">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={3000} // smooth continuous feel
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // optional (remove if drag chahiye)
      >
        {brands.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={img}
                className="h-12 object-contain transition duration-500 filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brand;