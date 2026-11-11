import React from "react";
import { Link } from "react-router-dom";
import Case1 from "../../../../assets/Images/case-image1.jpg";
import Case2 from "../../../../assets/Images/case-image2.jpg";
import Case3 from "../../../../assets/Images/case-image3.jpg";
import Case4 from "../../../../assets/Images/case-image4.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useMediaQuery from "../../../utils/useMediaQuery";

import "swiper/css";

const CaseStudy = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const caseCards = [
    {
      id: 1,
      backGroudImg: Case4,
      category: "Corporate Finance",
      para: "Debt Restructuring for FMCG Leader",
    },
    {
      id: 2,
      backGroudImg: Case1,
      category: "Portfolio Advisory",
      para: "Optimizing High-Net-Worth Portfolios",
    },
    {
      id: 3,
      backGroudImg: Case2,
      category: "Bank Charges Audit",
      para: "Recovering ₦2.5B for Tech Startup",
    },
    {
      id: 4,
      backGroudImg: Case3,
      category: "Asset Valuation",
      para: "M&A Valuation for Logistics Firm",
    },
     // 🔥 duplicate
  {
    id: 5,
    backGroudImg: Case4,
    category: "Corporate Finance",
    para: "Debt Restructuring for FMCG Leader",
  },
  {
    id: 6,
    backGroudImg: Case1,
    category: "Portfolio Advisory",
    para: "Optimizing High-Net-Worth Portfolios",
  },
  ];

  return (  
    <section className="Case-study w-full py-10 lg:py-0 lg:min-h-screen  p-4 lg:p-10 flex flex-col items-center justify-start">
      <span  data-aos= "fade-up" className="w-fit px-6 py-3 lg:py-2 rounded-full tracking-widest tracking-widest font-bold bg-[#C6D936] inline-block">
        CASE STUDY
      </span>

      <h3  data-aos= "fade-up" className="text-center text-3xl lg:text-5xl font-bold leading-tight lg:leading-14 mt-6 lg:mt-10">
        Proven Track Record
        <br />
        in the Nigerian Capital Market.
      </h3>

     <div className="w-full mt-5 cursor-pointer">
        
<Swiper
  slidesPerView={1} breakpoints={{768: {slidesPerView: 2}, 1024: {slidesPerView: 4}}}
  spaceBetween={isDesktop ? 2 : 16}
  loop={true}
  /* Desktop runs as a continuous marquee; on smaller screens that leaves every
     card half off-screen, so step through one readable slide at a time. */
  speed={isDesktop ? 5000 : 700}
  autoplay={{
    delay: isDesktop ? 0 : 3500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
>
          {caseCards.map((elem, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Link
                  to="/service"
                  data-aos= "zoom-in"
                  aria-label={`View services related to ${elem.para}`}
                  className="relative flex items-start justify-center group"
                >
                  <img
                    src={elem.backGroudImg}
                    className="w-full h-[340px] lg:h-[450px] object-cover transition-all duration-300 group-hover:grayscale"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-50 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <FiArrowUpRight className="text-2xl text-[#1A4137] transition-all duration-300 group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* content-1 */}
                  <div
                    className={`content-1 absolute left-4 right-4 lg:left-10 lg:right-auto w-auto lg:w-70 py-5 lg:py-10 bg-white/90 px-4 lg:px-3 rounded-xl 
                    ${idx === 1 || idx === 3 ? "bottom-8 lg:bottom-20" : "bottom-6 lg:bottom-10"} 
                    transition-all duration-300 group-hover:opacity-0`}
                  >
                    <p className="font-semibold text-[#1A4137]">{elem.category}</p>
                    <p className="font-semibold text-[20px] lg:text-[22px] leading-7 lg:leading-8">
                      {elem.para}
                    </p>
                  </div>

                  {/* content-2 */}
                  <div
                    className="content-2 absolute bottom-0 left-0 w-full h-[70%] p-6 
                    bg-gradient-to-t from-[#1A4137]/100 via-[#1A4137]/80 to-transparent 
                    text-white opacity-0 transition-all duration-300 group-hover:opacity-100 
                    flex flex-col justify-end"
                  >
                    <p className="font-semibold">{elem.category}</p>
                    <p className="font-semibold text-[24px]">{elem.para}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default CaseStudy;