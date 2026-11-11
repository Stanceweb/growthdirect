import React from "react";
import Team1 from "../../../../assets/Images/team-two-image1.jpg";
import Team2 from "../../../../assets/Images/team-two-image2.jpg";
import Team3 from "../../../../assets/Images/team-two-image3.jpg";
import Team4 from "../../../../assets/Images/team-two-image4.jpg";
import { IoShareSocialSharp } from "react-icons/io5";

const TeamMember = () => {
  const Team = [
    {
      id: 1,
      img: Team1,
      name: "Leslie Alexander",
      occupation: "DESIGNER",
    },
    {
      id: 2,
      img: Team2,
      name: "Darlene Robertson",
      occupation: "ADMIN",
    },
    {
      id: 3,
      img: Team3,
      name: "Darrell Steward",
      occupation: "FOUNDER",
    },
    {
      id: 4,
      img: Team4,
      name: "Arlene McCoy",
      occupation: "CEO & FOUNDER",
    },
  ];
  return (
    <section className="TeamMembers min-h-screen bg-[#051B05] flex flex-col items-center justify-start gap-10 p-4 lg:p-20">
      <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
        TEAM MEMBER
      </span>

      <h1 className="text-3xl lg:text-5xl text-white font-bold text-center leading-14 py-4">
        The Visionaries Driving <br /> Our Success
      </h1>

      <div className="flex flex-row items-center gap-5">
        {Team.map((elem, idx) => {
          return (
            <div className="w-80 flex flex-col gap-2 cursor-pointer">
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={elem.img}
                  className="w-full rounded-xl transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute bg-[#1A4137] text-white left-0 bottom-0 text-4xl p-2"><IoShareSocialSharp /></span>
                <div className="social-icons">
                    
                </div>
              </div>

              <h1 className="text-center text-xl text-white font-medium">
                {elem.name}
              </h1>

              <span className="text-center text-sm text-[#C6D936] font-medium">
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
