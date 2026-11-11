import React, { useState } from "react";
import "../Aboutus2/about.css";
import Brand1 from "../../../../assets/Images/brand-image1.png";
import aboutLeft from "../../../../assets/Images/about-two-image.jpg";
import Info2 from "../../../../assets/Images/banner-two-info2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import about1 from "../../../../assets/Images/featureicons1.svg";
import about2 from "../../../../assets/Images/featuredicon.svg";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import aboutInfo from '../../../../assets/Images/aboutInfo.png';
import Line from '../../../../assets/Images/about-two-line.png';

import "swiper/css";

const Aboutus2 = () => {
  // Same logo repeat
  const brands = Array(8).fill(Brand1);

  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // subtle tilt
    const rotateY = (x - centerX) / 80;
    const rotateX = -(y - centerY) / 80;

    setTilt({
      rotateX,
      rotateY,
    });
  };

  const resetTilt = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
    });
  };

  return (
    <section className="About-us w-full p-4 lg:p-20 flex flex-col items-center justify-start ">
      <p className="text-sm font-semibold relative">1K + BRANDS TRUST US</p>

      <div className="w-full lg:w-[90%] mt-20">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={50}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {brands.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`brand-${index}`}
                className="w-32 mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="left relative w-full lg:w-[50%] flex justify-center">
          {/* Behind background block */}
          <div className="absolute top-10 left-16 w-[520px] h-[620px] bg-[#ECE9E4] rounded-xl  -z-10"></div>

          <div
            className="relative perspective-[1000px]"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <img
              src={aboutLeft}
              alt=""
              className="relative z-10 rounded-xl w-[500px] duration-300 ease-out will-change-transform"
              style={{
                transform: `
        rotateX(${tilt.rotateX}deg)
        rotateY(${tilt.rotateY}deg)
        scale3d(1.02,1.02,1.02)
      `,
                transformStyle: "preserve-3d",
              }}
            />
          </div>

          {/* Floating card top-left */}
          <div className="absolute -left-8 top-4 lg:p-16">
            <img src={Info2} alt="" srcset="" />
          </div>

          {/* Experience box bottom-left */}
          <div className="absolute -left-2 -bottom-20 bg-[#C6D936] flex flex-col items-start justify-start px-12 py-10 rounded-xl z-20">
            <h1 className="text-3xl lg:text-6xl font-bold">10+</h1>
            <span className="mx-2 font-semibold text-sm underline">
              Year of Experience
            </span>
          </div>
        </div>

        <div className="right pb-60 relative w-full lg:w-[50%]  flex flex-col items-start justify-start gap-6 mt-40">
          <span className="px-10 py-2 rounded-full bg-[#C6D936] text-sm font-semibold">
            ABOUT US
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold leading-14">
            Unlock the Right Strategies, <br /> Support,And Expertise
          </h2>

          <span className="text-gray-600 text-sm w-xl  bg-gray-200 p-5 leading-7 rounded-xl">
            We approached DealMaker for a complex project involving website
            design, <br /> which required attention to various aspects such as
            layout, graphics, and <br />
            content experience.
          </span>

          <div className="container flex gap-4 ">
            <div className="flex items-center gap-6">
              <div className="bg-[#C6D936] p-1 rounded-xl">
                <img
                  src={about1}
                  className=" p-4 rounded-xl duration-1000 hover:rotate-y-360 scale-110 cursor-pointer"
                />
              </div>

              <div className="about-1 flex flex-col text-lg font-semibold">
                <span>
                  Building Credibility <br />
                  Proven Success
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-[#C6D936] p-1 rounded-xl">
                <img
                  src={about2}
                  className=" p-4 rounded-xl duration-1000 hover:rotate-y-360 scale-110 cursor-pointer"
                />
              </div>

              <div className="about-1 flex flex-col text-lg font-semibold">
                <span>
                  Ensuring Efficiency,
                  <br /> Superior Results.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-15  ">
            <span className="flex items-center gap-3 text-lg">
              <FaCheck /> Business Consultancy
            </span>
            <span className="flex items-center gap-3 text-lg">
              <FaCheck /> Skilled Creative Team
            </span>
          </div>

          <div className="flex items-center gap-4 lg:p-20">
            <button className="flex items-center justify-center px-10 py-4 rounded-full bg-[#1A4137] text-white gap-2 cursor-pointer">
              More About <FaAngleRight />
            </button>
              

              <div className="flex items-center font-medium relative ">
              <img src={aboutInfo} className="scale-80" />
              <span>10M+ Impact Across the World</span>
              <img src={Line} className="absolute right-0 bottom-2" />
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus2;
