import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import GrowthBg from "../../../../assets/Images/growth-bg.jpg";
import gsap from "gsap";
import { circularProgressWithCount } from "../../../utils/animation";
import GrowthShape from  '../../../../assets/Images/growth-shape.png'

const GrowthRate = () => {
  const sectionRef = useRef(null);

  const c1 = useRef(null);
  const t1 = useRef(null);

  const c2 = useRef(null);
  const t2 = useRef(null);

  const c3 = useRef(null);
  const t3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      circularProgressWithCount(c1.current, t1.current, 90, sectionRef.current);
      circularProgressWithCount(c2.current, t2.current, 95, sectionRef.current);
      circularProgressWithCount(c3.current, t3.current, 75, sectionRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section

      ref={sectionRef}
      className="Growth-Rate mt-6 relative flex flex-col lg:h-screen w-full overflow-hidden items-start justify-center"
    >
      {/* BACKGROUND */}
      <img src={GrowthBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute top-0 left-0 h-full w-full z-0 bg-[#1A4137]/70"></div>     
   <div
  className="absolute top-0 left-0 w-full h-full z-0
  bg-gradient-to-r 
  from-[#0f2f2a]/90 
  via-[#0f2f2a]/0 
  to-transparent"
/>
<img src={GrowthShape} className="absolute top-30 animate-slideUpDown " />

      {/* CONTENT */}
      <div className="content relative lg:absolute p-4 py-10 lg:py-16 lg:p-20 w-full z-10">
        <span data-aos= "fade-right" className="w-fit px-6 py-3 lg:py-1 rounded-full tracking-widest tracking-widest font-bold bg-[#C6D936] inline-block">
          PROVEN METRICS
        </span>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b gap-6 lg:gap-0 border-white/20 pb-6">
          <h1 data-aos= "fade-right" className="text-3xl lg:text-5xl text-white font-bold leading-tight lg:leading-14 py-3">
            Maximizing Portfolio Returns & <br />
            Ensuring Regulatory Compliance.
          </h1>

          <Link to="/research" data-aos= "fade-left">
            <button className="mt-6 px-6 py-3 min-h-[44px] bg-white text-black cursor-pointer">
              Discover More
            </button>
          </Link>
        </div>

        {/* 🔥 PROGRESS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 text-white">

          {/* CARD 1 */}
          <div className="flex items-center gap-5">
            <div data-aos= "fade-up" className="relative">
              <svg width="110" height="110">
                <circle
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#fff"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  ref={c1}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t1}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 data-aos= "fade-up" className="font-bold text-lg">Client Retention</h2>
              <p data-aos= "fade-up" className="text-gray-300 leading-7 mt-2">
                Long-term trusted relationships built on proven results.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center gap-5">
            <div data-aos= "fade-up" className="relative">
              <svg width="110" height="110">
                <circle cx="55" cy="55" r="45" stroke="#fff" strokeWidth="7" fill="none" />
                <circle
                  ref={c2}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t2}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 data-aos= "fade-up" className="font-bold text-lg">Successful Audits</h2>
              <p data-aos= "fade-up" className="text-gray-300 leading-7 mt-2">
                Flawless track record in forensic bank charges recovery.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-5">
            <div data-aos= "fade-up" className="relative">
              <svg width="110" height="110">
                <circle cx="55" cy="55" r="45" stroke="#fff" strokeWidth="7" fill="none" />
                <circle
                  ref={c3}
                  cx="55"
                  cy="55"
                  r="45"
                  stroke="#C6D936"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
              </svg>

              <span
                ref={t3}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
              >
                0%
              </span>
            </div>

            <div>
              <h2 data-aos= "fade-up" className="font-bold text-lg">Asset Growth</h2>
              <p data-aos= "fade-up" className="text-gray-300 leading-7 mt-2">
                Consistent year-over-year capital appreciation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthRate;