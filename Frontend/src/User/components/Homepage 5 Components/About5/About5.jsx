import React, { useEffect, useRef, useState } from "react";
import AboutLeft from "../../../../assets/Images/about-01.png";
import Aboutuser from "../../../../assets/Images/about-user.png";
import Sign from "../../../../assets/Images/signature.png";
import Bulb from "../../../../assets/Images/bulb.svg";
import Rural from "../../../../assets/Images/Rural.svg";

const About5 = () => {

  // Counter State
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Scroll Detect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Counter Animation
  useEffect(() => {
    if (!startCount) return;

    let start = 3;
    const end = 15;

    const duration = 2500;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startCount]);

  return (
    <section className="Aboutus min-h-screen flex flex-row gap-3 p-10 ">
      <div className="left w-full lg:w-[50%] p-10">
        <img src={AboutLeft} className="h-full w-full object-cover" />
      </div>

      <div className="right w-full lg:w-[50%]  p-10 flex flex-col items-start gap-4">
        <span className="bg-[#C6D936] px-10 py-2 rounded-full text-sm tracking-widest font-semibold">
          ABOUT US
        </span>

        <h1 className="text-3xl lg:text-5xl font-bold leading-14">
          The Journey Behind Our <br />
          Finance Success
        </h1>

        <p className="text-lg leading-9 text-gray-600">
          Business consulting is a dynamic and diverse field that plays a
          crucial
          <br /> role in helping organizations succeed competitive
        </p>

        <div className="flex flex-row w-full border-t border-b border-gray-300 ">
          
          <div
            ref={counterRef}
            className="flex flex-col border-r pr-10 border-gray-300"
          >
            <p className="text-[120px] font-medium ">
              {count}
              <span className="text-[100px]">+</span>
            </p>

            <span className="text-lg text-gray-600 px-3 -translate-y-8">
              Year of Experience
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 px-8">
            
            <div className="creative-solution flex flex-row gap-2 cursor-pointer group">
              <span
                className="text-3xl lg:text-7xl transform transition duration-500 
            group-hover:rotate-y-[360deg]"
              >
                <img src={Bulb} />
              </span>

              <div className="creative-content flex flex-col gap-2">
                <span className="text-lg font-semibold">
                  Creative Solutions
                </span>

                <p className="text-lg text-gray-600">
                  On the other hand, we denounce
                </p>
              </div>
            </div>

            <div className="creative-solution flex flex-row gap-4 cursor-pointer group">
              <span
                className="text-3xl lg:text-7xl transform transition duration-500 
                               group-hover:rotate-y-[360deg]"
              >
                <img src={Rural} />
              </span>

              <div className="creative-content flex flex-col gap-2">
                <span className="text-lg font-semibold">
                  Actionable Solutions
                </span>

                <p className="text-lg text-gray-600">
                  Innovation is the key to staying
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-10 mt-12">
          <button className="py-4 w-60 bg-[#1A4137] text-white font-medium cursor-pointer">
            Know More
          </button>

          <div className="user flex flex-row items-center justify-center gap-4">
            <div className=" px-1 py-1 w-15 rounded-full bg-[#C6D936]">
              <img src={Aboutuser} className="rounded-full" />
            </div>

            <div className="user-info flex flex-col gap-2">
              <span className="text-[#07504d]">Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About5;