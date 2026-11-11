import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import Team1 from "../../../../assets/Images/team-three-image1.jpg";
import Team2 from "../../../../assets/Images/team-four-image2.jpg";
import Team3 from "../../../../assets/Images/team-three-image3.jpg";

const TeamMember = () => {
  const Team = [
    {
      id: 1,
      img: Team1,
      name: "Ronald Richard",
      occupation: "CEO & Founder",
    },
    {
      id: 2,
      img: Team2,
      name: "Kristin Watson",
      occupation: "CEO & Founder",
    },
    {
      id: 3,
      img: Team3,
      name: "Kathryn Murphy",
      occupation: "CEO & Founder",
    },
  ];

  return (
    <section className="TeamMember min-h-screen p-10 bg-[#f5f5f2]">
      
      {/* HEADING */}
      <div className="heading flex items-center justify-between">

        <div className="flex flex-col">
          <span className="w-50 py-2 bg-[#C6D936] rounded-full font-semibold tracking-widest flex items-center justify-center">
            TEAM MEMBER
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold leading-14 mt-5">
            Meet Our Expert Team
            <br />
            Members
          </h1>
        </div>

        <button className="px-10 py-4 bg-[#C6D936] rounded-full flex items-center cursor-pointer gap-2 font-medium hover:bg-[#1B4948] hover:text-white duration-300">
          More Services
          <FaAngleRight />
        </button>

      </div>

      {/* TEAM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {Team.map((elem) => {
          return (
            <div
              key={elem.id}
              className="bg-white rounded-[30px] p-8 overflow-hidden group"
            >

              {/* IMAGE WRAPPER */}
              <div className="overflow-hidden rounded-[30px]">
                <img
                  src={elem.img}
                  alt=""
                  className="w-full h-[420px] object-cover rounded-[30px] duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-5 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  {elem.name}
                </h1>

                <p className="text-lg font-medium text-[#1B4948]">
                  {elem.occupation}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default TeamMember;