import React from "react";
import ContactLeft from "../../../../assets/Images/contact-six-bg.jpg";
import ContactRight from "../../../../assets/Images/contact-six-image.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
const ContactNow = () => {
  return (
    <section className="Contact min-h-screen flex flex-row mt-20">
      <div className="left w-full lg:w-[60%] relative flex items-start justify-center">
        <img src={ContactLeft} className="h-full w-full object-cover" />
        <div className="inset-0 absolute top-0 bg-[#063232] opacity-70"></div>

        <div className="conatent flex flex-col items-start justify-start absolute top-40 left-30 gap-3">
          <h1 className="text-3xl lg:text-6xl font-semibold text-white leading-16">
            We're here to guide you
            <br /> financial solution
          </h1>
          <p className="text-white text-[16px] leading-10 border-b border-white/10 pb-20">
            Our dedicated team is always ready and available to provide the
            support you need, whenever
            <br /> you need
            <br />
            it. We invite you to connect with us so we can discuss{" "}
          </p>
        <div className="flex flex-row mt-10 gap-22">
            <div className="flex flex-col gap-4">
                <span className="text-3xl lg:text-6xl text-white font-semibold">99%</span>
                <p className="text-lg text-white">Client Satisfaction</p>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-3xl lg:text-6xl text-white font-semibold">86<span className="text-3xl lg:text-5xl">+</span></span>
                <p className="text-lg text-white">Expert Team</p>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-3xl lg:text-6xl text-white font-semibold">80%</span>
                <p className="text-lg text-white">Product Design</p>
            </div>
        </div>
        </div>
      </div>

      <div className="right w-full lg:w-[40%] relative flex items-center justify-center ">
        <img src={ContactRight} className="h-full w-full object-cover" />

        <div className="h-50 w-50 flex flex-col items-center justify-center bg-white/30 backdrop-blur-xl gap-1 absolute rounded-full text-white font-semibold group ">
         <span className=" duration-500 group-hover:rotate-45 "><HiArrowUpRight /></span>
         <p className="text-center">Contact us<br/>Now</p>
        </div>
      </div>
    </section>
  );
};

export default ContactNow;
