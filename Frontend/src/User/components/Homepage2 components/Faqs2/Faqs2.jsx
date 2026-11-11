import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { circularProgressWithCount } from "../../../utils/animation";
import faqImg from "../../../../assets/Images/faq-two-image.jpg";
import faqImgShape from "../../../../assets/Images/faq-two-image-shape.png";
import Info2 from '../../../../assets/Images/banner-two-info2.png'
import '../../../../../src/App.css'

const Faqs2 = () => {
  const sectionRef = useRef(null);

  const [active, setActive] = useState("03");

  const progressRefs = [
    { circle: useRef(null), text: useRef(null) },
    { circle: useRef(null), text: useRef(null) },
    { circle: useRef(null), text: useRef(null) },
  ];

  const FAQData = [
    {
      percent: 90,
      heading: "Scalable Solutions",
      desc: "Driving Business Forward with Trusted Strategies",
    },
    {
      percent: 85,
      heading: "Automation Features",
      desc: "Always Available, Always On, No Downtime",
    },
    {
      percent: 80,
      heading: "24/7 Support",
      desc: "Stopping Problems In Their Tracks Variable",
    },
  ];

  const faqItems = [
    {
      id: "03",
      title: "Transforming Lives",
      desc: "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
    },
    {
      id: "01",
      title: "One Program at a Time",
      desc: "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
    },
    {
      id: "02",
      title: "Through Proven Programs",
      desc: "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
    },
  ];

  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // subtle tilt
    const rotateY = (x - centerX) / 80;
    const rotateX = -(y - centerY) / 80;

    setTilt({
      rotateX,
      rotateY,
    });
  };

  const resetTilt = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      FAQData.forEach((item, index) => {
        circularProgressWithCount(
          progressRefs[index].circle.current,
          progressRefs[index].text.current,
          item.percent,
          sectionRef.current,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="Faqs relative h-[650px] mb-[600px] w-full bg-[#F8F5F2] rounded-b-[13%] p-30"
    >
      {/* Progress Top */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-16">
        {FAQData.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <div className="relative">
              <svg width="150" height="150">
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  stroke="#ffffff"
                  strokeWidth="12"
                  fill="none"
                />

                <circle
                  ref={progressRefs[index].circle}
                  cx="75"
                  cy="75"
                  r="60"
                  stroke="#C6D936"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  transform="rotate(-90 75 75)"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-[#1A4137] flex items-center justify-center">
                  <span
                    ref={progressRefs[index].text}
                    className="text-white text-3xl font-bold"
                  >
                    0%
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f241e] mb-5">
                {item.heading}
              </h2>

              <p className="text-gray-500 text-lg w-60 leading-8">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Overflow Section */}
      <div className="container mx-auto flex items-end justify-between">
        {/* Left Image */}
        <div
          className="w-1/2 absolute top-100 perspective-[1000px]"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <img
            src={faqImg}
            className="max-w-[600px] rounded-[40px] grayscale-100"
            style={{
              transform: `
        rotateX(${tilt.rotateX}deg)
        rotateY(${tilt.rotateY}deg)
        scale3d(1.02,1.02,1.02)
      `,
              transformStyle: "preserve-3d",
             }}
          />


          <img src={faqImgShape} className="absolute -top-30 animate-slideUpDown2" />
          
          <img src={Info2} className="h-60 w-80 absolute bottom-0 -left-35 animate-slideLR"  />

          <div className="vl h-120 w-3 rounded-xl bg-[#C6D936] absolute top-10 -left-10 -z-30"></div>
        </div>

        {/* Right FAQ Card */}
        <div className="w-[44%] bg-white rounded-[50px] p-14 shadow-xl absolute right-40 -bottom-110">
          <span className="px-8 py-2 bg-[#C6D936] rounded-full font-semibold text-sm ">
            FAQ'S
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold mt-8">Frequently Ask Question</h2>

          <p className="mt-6 text-gray-500 leading-7 mb-10 text-sm">
            While Google Ads is a highly effective advertising platform, it's
            essential to <br /> explore other channels to maximize your ad reach
            and impact.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-2xl p-3 cursor-pointer"
                onClick={() => setActive(active === item.id ? "" : item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div
                      className={`
                      w-14 h-12 rounded-2xl
                      flex items-center justify-center
                      text-2xl font-semibold
                      ${active === item.id ? "bg-[#C6D936]" : "bg-[#e8edc0]"}
                    `}
                    >
                      {item.id}
                    </div>

                    <h3 className="font-bold">{item.title}</h3>
                  </div>

                  <span className="text-3xl">
                    {active === item.id ? "⌄" : "›"}
                  </span>
                </div>

                {active === item.id && (
                  <p className=" ml-20 text-gray-500 text-sm leading-6  w-[85%]">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs2;
