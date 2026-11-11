import React from "react";
import team1 from "../../../../assets/Images/team-five-image1.jpg";
import team2 from "../../../../assets/Images/team-five-image2.jpg";
import team3 from "../../../../assets/Images/team-five-image3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Consultent = () => {
  const TeamData = [
    {
      id: 1,
      img: team1,
      name: "Madison Loren",
      occupation: "Chief Executive",
    },
    {
      id: 2,
      img: team2,
      name: "Esther Howard",
      occupation: "CEO & Founder",
    },
    {
      id: 3,
      img: team3,
      name: "Jenny Wilson",
      occupation: "Web Designer",
    },
  ];
  return (
    <section className="Consultant min-h-screen flex flex-col p-10">
      <div className="heading flex flex-row items-center justify-center gap-60">
        <div className="flex flex-col gap-4">
          <span className="bg-[#C6D936] w-50 py-2 rounded-full text-sm tracking-wider font-semibold mt-20 flex items-center justify-center">
            TOP CONSULTANT
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold leading-14">
            Enhance Your Experience <br />
            With Expert Consulting
          </h1>
        </div>

        <p className="flex items-end justify-end text-lg mt-30 leading-10 text-gray-500 ">
          Stratify provides a comprehensive range of consultancy and
          <br /> training services for data consultation, focusing on strategic
          <br /> business solutions and effective training methods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {TeamData.map((elem, idx) => {
          return (
            <div className="group cursor-pointer relative flex items-center justify-center ">
              <img src={elem.img} />

              <div className="flex flex-col items-center justify-center gap-2 absolute bottom-10 bg-white px-30 py-10 duration-600 rounded-xl group-hover:py-14 group-hover:bg-white/20 group-hover:backdrop-blur-2xl group-hover:text-white text-center">
                <h1 className="text-xl font-bold tracking-wider group-hover:text-white">
                  {elem.name}
                </h1>
                <span className="text-lg text-gray-500 group-hover:text-white">
                  {elem.occupation}
                </span>

                <div className="social-icons translate-y-10 flex flex-row text-xl text-white gap-5 opacity-0 group-hover: opacity-100  ">
                  <span>
                    <FaFacebookF />
                  </span>

                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Consultent;
