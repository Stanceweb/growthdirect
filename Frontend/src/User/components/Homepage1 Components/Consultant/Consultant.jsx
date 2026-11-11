import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";
import teamShape from '../../../../assets/Images/team-shape.png'

import profile1 from "../../../../assets/Images/team-image1.jpg";
import profile2 from "../../../../assets/Images/team-image2.jpg";
import profile3 from "../../../../assets/Images/team-image3.jpg";
import profile4 from "../../../../assets/Images/team-image4.jpg";

const Consultant = () => {
  const Consultant = [
    {
      id: "1",
      profilePhoto: profile1,
      Name: "Emeka Odili",
      occupation: "Chief Investment Officer",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "2",
      profilePhoto: profile2,
      Name: "Aisha Bello",
      occupation: "Head of Corporate Finance",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "3",
      profilePhoto: profile3,
      Name: "Chuka Nnamdi",
      occupation: "Lead Portfolio Manager",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
    {
      id: "4",
      profilePhoto: profile4,
      Name: "Christian Isaac",
      occupation: "Founder & CEO",
      plusIcon: <FaPlus />,
      facebook: <TiSocialFacebook />,
      instargram: <IoLogoInstagram />,
      linkedin: <RiLinkedinFill />,
      Be: <FaBehance />,
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="Consultant w-full mt-10 py-10 lg:py-0 lg:min-h-screen flex flex-col items-center p-4 lg:p-20 relative overflow-hidden ">
      
      {/* BUTTON */}
      <span className="w-fit px-6 py-3 lg:py-2 rounded-full tracking-widest tracking-widest font-bold bg-[#C6D936] inline-block">
        LEADERSHIP TEAM
      </span>

      {/* HEADING */}
      <h1 className="text-center text-3xl lg:text-5xl font-bold leading-tight lg:leading-14 py-3">
        Guided by Market Experts
        <br />
        & Seasoned Analysts
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-6 lg:gap-6 w-full max-w-3xl lg:max-w-none lg:items-center lg:justify-center">
        {Consultant.map((elem, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="group relative h-auto lg:h-[460px] w-full lg:max-w-[300px] shadow-xl rounded-2xl overflow-hidden mt-2 lg:mt-8"
            >
              {/* IMAGE */}
              <img
                src={elem.profilePhoto}
                className="h-[160px] sm:h-[220px] lg:h-[320px] w-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#1A4137] via-[#1A4137]/70 to-transparent transition duration-500 ${
                  isOpen ? "opacity-100" : "opacity-0"
                } lg:group-hover:opacity-100`}
              ></div>

              {/* SOCIAL ICONS */}
              <div
                className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 transition duration-500 z-10 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                } lg:group-hover:opacity-100 lg:group-hover:translate-x-0`}
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label={`${elem.Name} on Facebook`} className="bg-white h-10 w-10 sm:h-11 sm:w-11 rounded-full text-sm sm:text-base flex items-center justify-center hover:bg-[#C6D936] transition-colors">{elem.facebook}</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label={`${elem.Name} on Instagram`} className="bg-white h-10 w-10 sm:h-11 sm:w-11 rounded-full text-sm sm:text-base flex items-center justify-center hover:bg-[#C6D936] transition-colors">{elem.instargram}</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label={`${elem.Name} on LinkedIn`} className="bg-white h-10 w-10 sm:h-11 sm:w-11 rounded-full text-sm sm:text-base flex items-center justify-center hover:bg-[#C6D936] transition-colors">{elem.linkedin}</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label={`${elem.Name} on Behance`} className="bg-white h-10 w-10 sm:h-11 sm:w-11 rounded-full text-sm sm:text-base flex items-center justify-center hover:bg-[#C6D936] transition-colors">{elem.Be}</a>
              </div>

              {/* CONTENT */}
              <div
                className={`content py-3 px-3 sm:py-6 sm:px-6 bg-white relative z-10 transition duration-500 ${
                  isOpen ? "bg-transparent" : ""
                } lg:group-hover:bg-transparent`}
              >
                <p
                  className={`text-base sm:text-xl lg:text-2xl font-semibold leading-snug transition duration-500 ${
                    isOpen ? "text-white" : ""
                  } lg:group-hover:text-white`}
                >
                  {elem.Name}
                </p>
                <p
                  className={`font-medium text-[#1A4137] text-xs sm:text-sm lg:text-[16px] mt-0.5 transition duration-500 ${
                    isOpen ? "text-white" : ""
                  } lg:group-hover:text-white`}
                >
                  {elem.occupation}
                </p>
              </div>

              {/* PLUS BUTTON */}
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-label={isOpen ? `Hide social links for ${elem.Name}` : `Show social links for ${elem.Name}`}
                aria-expanded={isOpen}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 bg-[#1A4137] text-white h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full cursor-pointer transition duration-300 lg:group-hover:bg-[#C6D936] lg:group-hover:text-black data-[open=true]:bg-[#C6D936] data-[open=true]:text-black"
                data-open={isOpen}
              >
                <span
                  className={`transition duration-300 block ${
                    isOpen ? "rotate-45" : ""
                  } lg:group-hover:rotate-45`}
                >
                  {elem.plusIcon}
                </span>
              </button>
            </div>
          );
        })}
      </div>

<img src={teamShape} className="absolute bottom-0 -left-30 animate-slideLR hidden lg:block"/>
    </section>
  );
};

export default Consultant;