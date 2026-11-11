import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homepage1Banner from "../../assets/Images/banner-image1.jpg";
import homepage2Banner from "../../assets/Images/banner-image2.jpg";
import homepage3Banner from "../../assets/Images/banner-image3.jpg";
import BannerShape from "../../assets/Images/banner-shape.png";
import bannerArray from "../../assets/Images/banner-arry.png";
import "../../../src/App.css";
import About1 from "../components/Homepage1 Components/Aboutus/About1";
import Services from "../components/Homepage1 Components/All-Services/Services";
import MissionVision from '../components/Homepage1 Components/MissionVision/MissionVision';
import GrowthRate from "../components/Homepage1 Components/GrowthRate/GrowthRate";
import Processing from "../components/Homepage1 Components/ProcessingSec/Processing";
import CaseStudy from "../components/Homepage1 Components/CashStudy/CaseStudy";
import Strategy from "../components/Homepage1 Components/Strategy/Strategy";
import Consultant from "../components/Homepage1 Components/Consultant/Consultant";
import Faqs from "../components/Homepage1 Components/FAQS/Faqs";
import Testimonial from "../components/Homepage1 Components/Testimonials/Testimonial";
import Blog from "../components/Homepage1 Components/Blogs/Blog";

const Homepage1 = () => {;
  const HeroSec = [
    {
      id: 1,
      title: "SEC-REGISTERED NGX ADVISORS",
      heading: (
        <>
          <span className="font-bold">Strategic Wealth</span>
          <br />
          <span className="font-light">Management &</span>
          <br /> <span className="font-bold">Portfolio Advisory</span>
        </>
      ),
      btn: "Speak with an Advisor",
      btnTo: "/contact-us",
      rightPara: (
        <>
          <span>
            Preserving Capital &<br /> Maximizing Yield for
            <br /> Discerning Mandates
          </span>
        </>
      ),
      img: homepage1Banner,
    },
    {
      id: 2,
      title: "CORPORATE FINANCE & AUDITS",
      heading: (
        <>
          <span className="font-bold">Expert Corporate</span>
          <br />
          <span className="font-light">Restructuring &</span>
          <br /> <span className="font-bold">Debt Recovery Services</span>
        </>
      ),
      btn: "Explore Our Services",
      btnTo: "/service",
      rightPara: (
        <>
          <span>
            Forensic Audits and<br /> Bank Charges Recovery
            <br /> for SMEs & Corporates
          </span>
        </>
      ),
      img: homepage2Banner,
    },
    {
      id: 3,
      title: "TRUSTED FINANCIAL GUIDANCE",
      heading: (
        <>
          <span className="font-bold">Preserving Capital</span>
          <br />
          <span className="font-light">& Maximizing Yield</span>
          <br /> <span className="font-bold">in Volatile Markets</span>
        </>
      ),
      btn: "Read Our Insights",
      btnTo: "/research",
      rightPara: (
        <>
          <span>
            100% Confidential<br /> Mandates & specialized
            <br /> Advisory Practices
          </span>
        </>
      ),
      img: homepage3Banner,
    },
  ];

  const [index, setIndex] = useState(0);
  const current = HeroSec[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HeroSec.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    
  <section className="Homepage h-[70vh] lg:h-[calc(100vh-136px)] w-full relative overflow-hidden w-full max-w-[100vw]">
      <img src={current.img} fetchPriority="high" loading="eager" decoding="sync" rel="preload" as="image" className="block h-full w-full object-cover object-center" />

      <img src={BannerShape} className="absolute top-0 right-0 hidden lg:block" />
      <img
        src={bannerArray}
        className="absolute top-50 left-10 opacity-100 z-50 animate-slideLR hidden md:block"
        />
      <div
        className="absolute top-0 left-0 h-full w-full 
        bg-gradient-to-r 
        from-[#1A4137]/90 
        via-[#1A4137]/60 
        to-transparent 
        z-0"
        ></div>

      <div data-aos="fade-up" className="absolute top-0 left-0 h-full w-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-10 text-white">
        <div className="max-w-full lg:w-[90%] md:max-w-full lg:w-[70%] lg:max-w-full lg:w-[60%] ml-2 sm:ml-4 md:ml-10">
          <p  className="font-bold text-[#C6D936] underline opacity-full text-xs sm:text-sm md:text-base">
            {current.title}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight">{current.heading}</h1>
          <Link to={current.btnTo} className="inline-block mt-4">
            <button className="px-5 sm:px-6 py-3 min-h-[44px] bg-[#C6D936] text-black font-medium cursor-pointer text-sm sm:text-base">
              {current.btn}
            </button>
          </Link>
        </div>

        <div  className="absolute right-4 sm:right-10 md:right-20 lg:right-30 bottom-10 sm:bottom-20 md:bottom-30 lg:bottom-50 hidden sm:block">
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-[20px]">{current.rightPara}</p>
        </div>
      </div>

    </section>
   <About1 />
    <Services />
    <MissionVision />
    <GrowthRate  />
    <Processing />
    <CaseStudy />
    <Strategy />
    <Consultant />
    <Faqs />
    <Testimonial />
    <Blog />
  </>
  );
};

export default Homepage1;
