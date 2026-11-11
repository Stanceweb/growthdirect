import React, { useEffect, useRef, useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import TeamLeft from "../../assets/Images/team-details.jpg";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest, FaInstagram } from "react-icons/fa6";
import Contactus from "../components/Contactus";

const TeamDetails = () => {

  const progressRef = useRef(null);

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="Aboutus relative flex flex-col">
        
        {/* Banner */}
        <div className="container h-100 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
            alt=""
          />

          <img src={Pattern} className="absolute top-0 right-0" alt="" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/0 absolute top-0 flex flex-col py-30 px-30 gap-5">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">
              Team Details
            </h1>

            <div className="flex flex-row items-center gap-1">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Team Details
              </span>
            </div>
          </div>
        </div>

        {/* Team Details */}
        <div className="min-h-screen flex flex-row p-10 border-b border-gray-300">
          
          <div className="left w-full lg:w-[50%] p-10">
            <img src={TeamLeft} alt="" />
          </div>

          <div className="right w-full lg:w-[50%] flex flex-col px-10 py-18">
            
            <h1 className="text-4xl font-bold">Alen Hispro</h1>

            <span className="mt-3">Chief Attorney</span>

            <h3 className="text-3xl text-[#082E2C] mt-10 leading-12">
              I help my Clients Stand out and they help me <br />
              grow.
            </h3>

            <div className="flex flex-col mt-8 gap-2">
              <p className="text-lg font-bold">Email address</p>

              <span className="text-lg text-gray-500">
                Info@dealmaker-advisors.com
              </span>
            </div>

            <div className="flex flex-col mt-8 gap-2">
              <p className="text-lg font-bold">Phone Number</p>

              <span className="text-lg text-gray-500">
                +012-3456-789
              </span>
            </div>

            <div className="flex flex-col mt-8 gap-2">
              <p className="text-lg font-bold">Web address</p>

              <span className="text-lg text-gray-500">
                www.yourdomain.com
              </span>
            </div>

            <div className="mt-5 flex flex-row items-center justify-start gap-5 text-white text-xl">
              
              <span className="p-2 text-lg rounded-full bg-[#1A4137]">
                <RiTwitterXLine />
              </span>

              <span className="p-2 text-lg rounded-full bg-[#1A4137]">
                <FaFacebookF />
              </span>

              <span className="p-2 text-lg rounded-full bg-[#1A4137]">
                <FaPinterest />
              </span>

              <span className="p-2 text-lg rounded-full bg-[#1A4137]">
                <FaInstagram />
              </span>

            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div
          ref={progressRef}
          className="flex flex-row p-10"
        >

          {/* Left */}
          <div className="left w-full lg:w-[50%] p-10">
            
            <h1 className="text-4xl font-bold">
              Personal Experience
            </h1>

            <p className="text-lg leading-8 text-gray-600 mt-10">
              When an unknown printer took a galley of type and scrambled it to
              <br />
              make a type specimen book. It has survived not only five centuries
              <br />
              architecto dolorem ipsum quia
            </p>

          </div>

          {/* Right */}
          <div className="right w-full lg:w-[50%] p-10 flex flex-col gap-10">

            {/* Progress Item */}
            <div className="flex flex-col gap-3">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#082E2C]">
                  Latest Boat Experience
                </h3>

                <span className="text-xl font-medium text-[#082E2C]">
                  90%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#BED630] rounded-full transition-all duration-[2000ms]"
                  style={{
                    width: startAnimation ? "90%" : "0%",
                  }}
                ></div>
              </div>

            </div>

            {/* Progress Item */}
            <div className="flex flex-col gap-3">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#082E2C]">
                  Sailing Boat Experience
                </h3>

                <span className="text-xl font-medium text-[#082E2C]">
                  80%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#BED630] rounded-full transition-all duration-[2000ms]"
                  style={{
                    width: startAnimation ? "80%" : "0%",
                  }}
                ></div>
              </div>

            </div>

            {/* Progress Item */}
            <div className="flex flex-col gap-3">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#082E2C]">
                  Power Boat Experience
                </h3>

                <span className="text-xl font-medium text-[#082E2C]">
                  75%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#BED630] rounded-full transition-all duration-[2000ms]"
                  style={{
                    width: startAnimation ? "75%" : "0%",
                  }}
                ></div>
              </div>

            </div>

          </div>
        </div>

      </section>
      <Contactus />
    </>
  );
};

export default TeamDetails;