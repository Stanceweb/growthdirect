import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Team1 from "../../../../assets/Images/team-three-image1.jpg";
import Team2 from "../../../../assets/Images/team-three-image2.jpg";
import Team3 from "../../../../assets/Images/team-three-image3.jpg";
import Team4 from "../../../../assets/Images/team-three-image4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import TeamBg from '../../../../assets/Images/team-three-text.png'

const TeamMember = ({
    bgColor = "bg-[#C6D936]",
    Color = "text-[#000]",
    heading=(
      <>
      The Visionaries Driving <br/>
      Our Success
      </>
    ),
    button = "Get Started",
    showButton = true,
    CenterHeading = false,
}) => {
  const Team = [
    {
      id: 1,
      image: Team1,
      name: "Ronald Richards",
      occupation: "CEO & Founder",
    },
    {
      id: 2,
      image: Team2,
      name: "Marvin McKinney",
      occupation: "Senior Manager",
    },
    {
      id: 3,
      image: Team3,
      name: "Kathryn Murphy",
      occupation: "Web Designer",
    },
    {
      id: 4,
      image: Team4,
      name: "Dianne Russell",
      occupation: "Junior Manager",
    },
  ];
  return (
    <section className="TeamMember  min-h-screen w-full relative p-4 lg:p-20 flex flex-col relative bg-[#F0F7F3]">
       <img src={TeamBg} className="absolute bottom-0 left-0" />
      {/* Heading */}
      <div className={`heading w-full z-30 ${
        CenterHeading?"flex flex-col items-center justify-center text-center":"flex flex-row items-center justify-between"
      }`}>

       <div
  className={`left-head flex flex-col ${
    CenterHeading ? "items-center text-center" : ""
  }`}
>
          <span className={`w-40 py-2 flex items-center justify-center ${bgColor}  ${Color} tracking-widest rounded-full font-semibold text-sm`}>
            TEAM MEMBER
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-14">
            {heading}
          </h1>
        </div>

       {showButton && (
  <div className="right-head flex flex-col mt-5">
    <button className="py-4 px-10 text-[#1A4137] bg-[#C6D936] rounded-full flex items-center gap-2 cursor-pointer">
      {button} <FaAngleRight />
    </button>
  </div>
)}
      </div>

      {/* team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-30">
        {Team.map((elem, idx) => {
          return (
            <div className="mt-10 flex flex-col items-center group">
              {/* 🔥 Wrapper (important) */}
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={elem.image}
                  className="rounded-xl transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="social-icons flex flex-row absolute bottom-50 bg-[#E24C1C] px-6 py-3 rounded-xl duration-500 text-white gap-5 opacity-0 group-hover:opacity-100 ">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaXTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>

              <h3 className="text-2xl font-semibold mt-3">{elem.name}</h3>

              <span className="text-[#1A4137] font-semibold">
                {elem.occupation}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamMember;
