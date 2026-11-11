import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../../../../assets/Images/about-three-image.jpg";
import AboutInfoImg from "../../../../assets/Images/about-three-info.png";
import "../../../../../src/App.css";
import { MdArrowOutward } from "react-icons/md";
import aboutInfo from "../../../../assets/Images/aboutInfo.png";
import Line from "../../../../assets/Images/about-two-line.png";

const Aboutus3 = () => {
  const sectionRef = useRef(null);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [start, setStart] = useState(false);

  // 👇 Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Counter logic
  useEffect(() => {
    if (!start) return;

    let interval1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 15) {
          clearInterval(interval1);
          return 15;
        }
        return prev + 1;
      });
    }, 80);

    let interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= 18) {
          clearInterval(interval2);
          return 18;
        }
        return prev + 1;
      });
    }, 80);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [start]);

  return (
    <section ref={sectionRef} className="About-us min-h-screen flex flex-row">
      <div className="left w-full lg:w-[50%] p-4 lg:p-20 relative flex flex-col">
        <img src={AboutImg} className="rounded-2xl" />
        <img
          src={AboutInfoImg}
          className="absolute top-0 left-0 animate-slow-spin2"
        />

        <span className="text-lg leading-8 text-gray-500 py-3">
          Consumers today increasingly rely on digital channels to research
          products...
        </span>

        <div className="flex items-center gap-10">
          <button className="flex items-center justify-center w-60 py-3 rounded-full bg-[#C6D936] font-medium gap-2 cursor-pointer text-sm text-[#0B2E25]">
            More About <MdArrowOutward />
          </button>

          <div className="flex items-center font-medium relative ">
            <img src={aboutInfo} className="scale-80" />
            <span className="w-100">10M+ Impact Across the World</span>
            <img src={Line} className="absolute right-0 bottom-2" />
          </div>
        </div>
      </div>

      <div className="right w-full lg:w-[50%] py-22">
        <span className="text-sm font-medium tracking-widest px-10 py-2 bg-[#C6D936] rounded-full">
          ABOUT US
        </span>

        <h1 className="font-bold text-3xl lg:text-5xl leading-14 mt-6">
          We Provide Brilliant Idea <br /> To Grow The{" "}
          <span className="font-normal">
            Consulting <br />
            Agency
          </span>
          Your Sharp Brand
        </h1>

        <div className="flex flex-row mt-5 items-center">
          {/* Counter 1 */}
          <div className="h-80 w-80 flex flex-col items-center justify-center border border-gray-300 rounded-full">
            <span className="text-[120px] flex items-center">
              {count1}
              <span className="text-3xl lg:text-7xl mt-10">+</span>
            </span>
            <span className="text-center text-xl text-gray-500">
              Experience Team <br /> Help you
            </span>
          </div>

          {/* Counter 2 */}
          <div className="h-80 w-80 flex flex-col items-center justify-center border border-gray-300 rounded-full -translate-x-10">
            <span className="text-[120px] flex items-center">
              {count2}
              <span className="text-3xl lg:text-5xl mt-10">M</span>
            </span>
            <span className="text-center text-xl text-gray-500">
              We helped to get <br /> companies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus3;