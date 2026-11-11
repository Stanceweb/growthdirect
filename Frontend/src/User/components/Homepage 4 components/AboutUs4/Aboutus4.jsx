import React, { useRef } from "react";
import About1 from "../../../../assets/Images/about-four-image1.jpg";
import About2 from "../../../../assets/Images/about-four-image2.jpg";
import User1 from "../../../../assets/Images/about-four-users.png";
import Line from "../../../../assets/Images/Line.svg";
import { FaAngleRight } from "react-icons/fa6";
import user2 from "../../../../assets/Images/about-four-user.png";
import Sign from "../../../../assets/Images/about-four-sign.png";

const Aboutus4 = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 1) / rect.width) * 5;
    const rotateX = ((rect.height / 1 - y) / rect.height) * 5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <section className="Aboutus min-h-screen flex pb-20">
      
      {/* LEFT */}
      <div className="left w-full lg:w-[50%] flex items-center justify-center p-10 relative">

        {/* About1 */}
        <div
          ref={imgRef1}
          onMouseMove={(e) => handleMouseMove(e, imgRef1)}
          onMouseLeave={() => handleMouseLeave(imgRef1)}
          className="transition-all duration-200 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img src={About1} className="rounded-3xl" />
        </div>

        {/* About2 */}
        <div
          ref={imgRef2}
          onMouseMove={(e) => handleMouseMove(e, imgRef2)}
          onMouseLeave={() => handleMouseLeave(imgRef2)}
          className="absolute right-10 bottom-0 transition-all duration-200 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img src={About2} className="rounded-xl" />
        </div>

        <div className="container h-40 w-70 rounded-2xl bg-[#1A4137] absolute left-30 -bottom-10 flex flex-col items-center justify-center gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold flex flex-row items-end">
            25
            <span className="mt-2 text-3xl">+</span>
            <span className="text-sm pb-2 mx-2">
              years Experience
            </span>
          </h2>

          <div className="flex flex-row items-center gap-3 relative">
            <img src={User1} />

            <span className="text-sm text-white font-medium">
              5m+ Customer
            </span>

            <img
              src={Line}
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right w-full lg:w-[50%] p-12 flex flex-col items-start gap-6">
        <span className="text-sm font-medium tracking-widest px-10 py-2 bg-[#C6D936] rounded-full">
          ABOUT US
        </span>

        <h1 className="font-bold text-3xl lg:text-5xl leading-14">
          Ensure The Success Of Your
          <br />
          Business Venture...
        </h1>

        <p className="text-gray-500 text-lg leading-9">
          Business consulting is a dynamic and diverse field that
          plays a crucial role <br />
          in helping organizations succeed in today's competitive
          environment.
        </p>

        <div className="container flex flex-row items-center gap-4 lg:p-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-5xl font-bold">90%</h1>

            <h3 className="text-2xl font-semibold mt-3">
              Business Consulting
            </h3>

            <p className="text-gray-500">
              Strategy consultants work closely <br />
              with organizations to define
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-5xl font-bold">85%</h1>

            <h3 className="text-2xl font-semibold mt-3">
              Financial Planning
            </h3>

            <p className="text-gray-500">
              Financial consultants provide
              <br />
              expert financial planning
            </p>
          </div>
        </div>

        <p className="text-lg">
          <span className="underline font-bold cursor-pointer">
            +234 803 708 0343
          </span>{" "}
          Call Us ? or Book A Call ?
        </p>

        <div className="flex flex-row items-center gap-6">
          <button className="text-sm font-medium w-50 h-12 bg-[#C6D936] rounded-full text-[#1A4137] flex items-center justify-center gap-2 cursor-pointer">
            Get Started
            <FaAngleRight className="text-sm" />
          </button>

          <span className="p-1 border border-amber-500 rounded-full">
            <img src={user2} className="rounded-full" />
          </span>

          <img src={Sign} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus4;