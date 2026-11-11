import React from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from '../../assets/Images/service-block-shape.png'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CaseStudy from "../components/Homepage1 Components/CashStudy/CaseStudy";

const Portfolio = () => {
  return (
    <>
      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Case Study</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
               Case Study
              </span>
            </div>
          </div>
        </div>
      </section>
      <CaseStudy />
    </>
  );
};

export default Portfolio;
