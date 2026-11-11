import React from "react";
import Video from "../../../../assets/Images/HowitWorks.mp4";
import Shape from "../../../../assets/Images/steps-pattarn-shape.png";
import Img1 from "../../../../assets/Images/how1.svg";
import Img2 from "../../../../assets/Images/how2.svg";
import Img3 from "../../../../assets/Images/how3.svg";
import arrowLine from '../../../../assets/Images/steps-line.png'

const HowItWorks = () => {
  const HowData = [
    {
      id: "01",
      img: Img1,
      heading: "Innovative Planning",
    },
    {
      id: "02",
      img: Img2,
      heading: "Integration Services",
    },
    {
      id: "03",
      img: Img3,
      heading: "Business Profit",
    },
  ];

  return (
    <section className="HowItWorks min-h-screen bg-[#f5f5f2] p-8 relative">
      
      {/* VIDEO CONTAINER */}
      <div className="relative w-full h-screen overflow-hidden rounded-[40px]">

        {/* VIDEO */}
        <video
          src={Video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#164545]/50"></div>

        {/* GRID SHAPE */}
        <img
          src={Shape}
          alt=""
          className="absolute top-0 right-0 h-full object-cover opacity-40"
        />

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-start p-4 lg:p-20 text-center px-5 z-10">
          
          <button className="w-fit px-8 py-3 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
            HOW IT WORKS
          </button>

          <h1 className="text-center text-white text-3xl lg:text-5xl font-bold leading-tight mt-5">
            Inspiring Innovation & Setting
            <br />
            In Your Industry
          </h1>
        </div>

        {/* CARDS */}
        <div className="absolute  bottom-40 left-1/2 -translate-x-1/2 flex items-center gap-80 z-20">

          {HowData.map((elem) => (
            <div
              key={elem.id}
              className={`
                relative w-56 h-56 rounded-full flex flex-col items-center justify-center group duration-300
                ${
                  elem.id === "02"
                    ? "bg-[#1A4137]"
                    : "bg-[#C6D936] hover:bg-[#1A4137]"
                }
              `}
            >

              {/* IMAGE */}
              <img
                src={elem.img}
                alt=""
                className="w-20 h-20 object-contain duration-700 group-hover:rotate-y-[360deg] group-hover:invert"
              />

              {/* NUMBER */}
              <span className="absolute -right-8 bottom-10 h-20 w-20 flex items-center justify-center shadow-2xl bg-white rounded-full text-2xl font-bold text-[#1A4137]">
                {elem.id}
              </span>

              {/* HEADING */}
              <h2 className="absolute -bottom-16 text-center font-bold text-2xl w-72 text-white">
                {elem.heading}
              </h2>

            </div>
          ))}
<img src={arrowLine} className='absolute left-75 top-30' />
  <img src={arrowLine} className='absolute right-700 top-30' />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;