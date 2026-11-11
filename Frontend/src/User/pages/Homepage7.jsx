import React from "react";
import Mainimg from "../../assets/Images/banner-seven-image.jpg";
import Shape from "../../assets/Images/banner-seven-bg-shape.png";
import Logo from "../../assets/Images/logo.png";
import User1 from "../../assets/Images/banner-user1.png"
import User2 from "../../assets/Images/banner-user2.png"
import User3 from "../../assets/Images/banner-user3.png"
import Recept from "../../assets/Images/recept.jpg"
import About7 from "../components/Homepage 7 components/Aboutus7/About7";
import Service from "../components/Homepage 7 components/Services/Service";
import WhyChooseUs from "../components/Homepage 7 components/WhyChooseUs/WhyChooseUs";
import Brand from "../components/Homepage 3 Components/Branding Swiper/Brand";
import CaseStudy from "../components/Homepage1 Components/CashStudy/CaseStudy";
import Faqs from "../components/Homepage2 components/Faqs2/Faqs2"
import HowItWorks from "../components/Homepage 7 components/HowItWorks/HowItWorks";
import TeamMember from "../components/Homepage 7 components/TeamMember/TeamMember";
import Testimonial from "../components/Homepage 7 components/Testimonials/Testimonial";
import Blog from "../components/Homepage1 Components/Blogs/Blog";
const Homepage7 = () => {
  return (
    <>
    <section className="Homepage7 min-h-screen">
      {/* HERO CONTAINER */}
      <div className="relative rounded-[40px] min-h-screen ">
        {/* MAIN IMAGE */}
        <img
          src={Mainimg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3b33]/80 via-[#0f3b33]/50 to-transparent rounded-3xl"></div>

        {/* GRID SHAPE */}
        <img src={Shape} alt="" className="absolute top-0 left-0" />

        {/* TOP LEFT CUSTOM SHAPE */}
        <div className="absolute top-0 left-0 z-20 flex items-start">
          {/* WHITE LOGO BOX */}
          <div className="bg-[#F5F3EF] px-10 py-8 rounded-br-[40px] relative z-10">
            <img src={Logo} alt="" className="scale-120" />
          </div>

          {/* TOP LEFT CURVE */}
          <div className="relative w-10 h-10">
            <div
              className="absolute w-full h-full rounded-tl-[25px]"
              style={{
                boxShadow: "-10px -10px 0 #F5F3EF",
              }}
            />
          </div>
        </div>

        {/* BOTTOM RIGHT CUSTOM CURVE */}
        <div className="absolute bottom-0 right-0 z-20">
          <div className="relative w-10 h-10">
            <div
              className="absolute w-full h-full rounded-br-[25px]"
              style={{
                boxShadow: "10px 10px 0 #F5F3EF",
              }}
            />
          </div>
        </div>
        <div className="contant absolute bottom-30 left-20 flex flex-col">
          <h1 className="text-white text-3xl lg:text-7xl font-bold leading-22 border-b border-white/10 pb-10">
            <span className="font-normal">Redefining</span> business
            <br />
            Strategy fot the <span className="font-normal">modern era </span>
          </h1>

          <div className="flex flex-row items-center justify-center mt-10 "> 
                <img src={User1} className="border-2 border-white rounded-full"/>
                <img src={User2} className="border-2 border-white rounded-full -translate-x-5"/>
                <img src={User3} className="border-2 border-white rounded-full -translate-x-10"/>
                <div className="p-5 rounded-full bg-[#C6D936] border-2 border-white -translate-x-16">30k</div>

                <p className="text-lg text-white font-medium -translate-x-10 border-r border-white/50 pr-10">our <span className="font-bold">30k</span> Satisfaction <br/>Clients</p>

          <div className="flex flex-col gap-2 border-r border-white/50 pr-10">
            <p className="text-4xl text-white font-bold ">90%</p>
             <span className="text-white text-xl font-bold">Business Consulting</span>
          </div>

          <div className="flex flex-col gap-2 pl-10">
            <p className="text-4xl text-white font-bold ">85%</p>
             <span className="text-white text-xl font-bold">Financial Planning</span>
          </div>
          </div>
        </div>

        <img src={Recept} className="absolute right-10 top-40 rounded-3xl" />
      </div>
    </section>
    <About7 />
    <Service />
    <div className="">
    <WhyChooseUs />
    <Brand />
    </div>
    <CaseStudy />
    <Faqs />
    <HowItWorks />
    <TeamMember />
    <Testimonial />
    <Blog />
    </>
  );
};

export default Homepage7;
