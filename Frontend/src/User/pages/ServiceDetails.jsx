import React, { useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import { FaAngleRight, FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ServiceDetailsImg from "../../assets/Images/service-details.jpg";
import Img2 from "../../assets/Images/service-details-2.jpg";
import Img3 from "../../assets/Images/service-details-3.jpg";
import { FaPlay } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const ServiceDetails = () => {
  const [openVideo, setopenVideo] = useState(false);

  const [activeFaq, setActiveFaq] = useState(0);

  const faqData = [
    {
      question: "Do you offer marketing contracts or relationships?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "What kind of marketing efforts do you specialize ?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "Can I use the demos made by Ewebot?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "What everybody ought to know about digital marketing?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Service Details</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Service Details
              </span>
            </div>
          </div>
        </div>

        <div className="heading flex flex-row items-center justify-between p-10">
          <div className="left flex flex-col p-10">
            <span className="text-sm tracking-widest font-medium">
              SERVICE DETAILS
            </span>

            <h1 className="text-3xl lg:text-5xl font-bold leading-14 mt-4">
              Product Development <br />
              For Butter Business
            </h1>
          </div>

          <div className="right">
            <p className="text-lg text-gray-500 leading-9 mt-6">
              Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem
              ipsum
              <br /> dolor sit ametconsectetur adipiscing elit, sed do eiusmod
              temporRorem
              <br /> ipsum dolor
            </p>
          </div>
        </div>

        <div className="px-30 flex relative items-center justify-center ">
          <img src={ServiceDetailsImg} alt="" />

          <div className="relative flex items-center justify-center w-20 h-20 -translate-x-160">
            <span className="absolute w-20 h-20 rounded-full border border-gray-300 pulse1 z-[-9999]"></span>

            <span className="absolute w-16 h-16 rounded-full border border-gray-300 pulse2 z-[-9999]"></span>

            <span className="absolute w-12 h-12 rounded-full border border-gray-300 pulse3 z-[-9999]"></span>

            <button
              onClick={() => setopenVideo(true)}
              className="relative z-10 text-sm border p-3 rounded-full flex items-center justify-center cursor-pointer bg-white"
            >
              <FaPlay />
            </button>
          </div>
        </div>

        {openVideo && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
            <button
              onClick={() => setopenVideo(false)}
              className="absolute top-8 right-10 text-white text-4xl cursor-pointer"
            >
              ×
            </button>

            <div className="w-full h-full max-w-full lg:w-[90%]">
              <iframe
                width="1000"
                height="500"
                src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mt-30 ml-50"
              ></iframe>
            </div>
          </div>
        )}

        <div className="conatainer min-h-screen flex flex-row p-10">
          <div className="left w-full lg:w-[70%] p-12">
            <h2 className="text-4xl font-bold">Description</h2>

            <p className="text-lg leading-9 text-gray-600 mt-6">
              UX design refers to the term “user experience design”, while UI
              stands for “user interface design”. Both
              <br /> elements are crucial to a product and work closely
              together. But despite their professional relationship,
              <br /> the roles themselves are quite different, referring to very
              different aspects of the product development
              <br /> process and the design discipline.
            </p>

            <p className="text-lg leading-9 text-gray-600 mt-6">
              In relation to websites and apps, UI design considers the look,
              feel, and interactivity of the product. It’s
              <br /> all about making sure that the user interface of a product
              is as intuitive as possible, and that means
              <br /> carefully considering each and every visual, interactive
              element the user might encounter.
            </p>

            <div className="mt-10">
              <h2 className="text-4xl font-bold">Service Process</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-10">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">
                    <span className="text-[40px] font-bold text-transparent stroke-text mx-3">
                      01
                    </span>{" "}
                    Creative Analysis
                  </h2>

                  <p className="text-gray-500 text-lg leading-8 mt-5">
                    Creative analysis is important. It is common for
                    <br /> marketers to measure campaign performance at a
                    <br /> superficial level. But to fully understand it
                  </p>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">
                    <span className="text-[40px] font-bold text-transparent stroke-text mx-3">
                      02
                    </span>{" "}
                    Design & Scatches
                  </h2>

                  <p className="text-gray-500 text-lg leading-8 mt-5">
                    A design sketch is a graphical sketched
                    <br /> representation of a design plan. A design sketch,
                    <br /> see example figure, is a visualization
                  </p>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">
                    <span className="text-[40px] font-bold text-transparent stroke-text mx-3">
                      03
                    </span>{" "}
                    Prototype & Wireframing
                  </h2>

                  <p className="text-gray-500 text-lg leading-8 mt-5">
                    A prototype is a barebones, relatively simple
                    <br /> working model of an app or webpage. They are <br />
                    typically the next step in the product design.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">
                    <span className="text-[40px] font-bold text-transparent stroke-text mx-3">
                      04
                    </span>{" "}
                    Delivery & Deploy
                  </h2>

                  <p className="text-gray-500 text-lg leading-8 mt-5">
                    Continuous delivery is an extension of continuous
                    <br /> integration since it automatically deploys all to a
                    <br /> testing and/or production
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-4xl font-bold">Service Outcomes</h2>

              <div className="mt-6 flex flex-col gap-y-4">
                <p className="flex flex-row items-center gap-3 text-xl text-gray-600">
                  <span className="text-2xl">
                    <FaCheck />
                  </span>
                  Excepteur sint occaecat cupidatat a deserunt mollit anim id
                  est laborum.
                </p>

                <p className="flex flex-row items-center gap-3 text-xl text-gray-600">
                  <span className="text-2xl">
                    <FaCheck />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                </p>

                <p className="flex flex-row items-center gap-3 text-xl text-gray-600">
                  <span className="text-2xl">
                    <FaCheck />
                  </span>
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>

                <p className="flex flex-row items-center gap-3 text-xl text-gray-600">
                  <span className="text-2xl">
                    <FaCheck />
                  </span>
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>

              <div className="flex flex-row gap-8 mt-10">
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
              </div>
            </div>

            {/* FAQ SECTION START */}

            <div className="mt-20">
              <div className="flex flex-col gap-5">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#f7f7f7] border border-gray-200 overflow-hidden transition-all duration-500"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between px-8 py-8 text-left cursor-pointer"
                    >
                      <h2 className="text-xl font-bold text-black/70">
                        {index + 1}. {faq.question}
                      </h2>

                      <span className="text-lg text-black/80">
                        {activeFaq === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeFaq === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-8 pb-8 border-t border-gray-200">
                          <p className="text-gray-500 text-lg font-medium leading-9 mt-6">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ SECTION END */}
          </div>

          <div className="right w-full lg:w-[30%] p-10 flex flex-col">
            <div className="p-10 bg-[#F1F1F2]">
              <h1 className="text-2xl font-bold">More Services</h1>

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="text-lg relative flex items-center justify-between">
                  Web Development{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  UI/UX Design{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  Digital Marketing{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  Product Design{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  Branding & illustration{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  Mobile Solutions{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
                <p className="text-lg relative flex items-center justify-between">
                  App Development{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>

            <div className="p-10 bg-[#F1F1F2] mt-10">
              <h1 className="text-2xl font-bold">Contact With Us</h1>
              <div className="flex flex-col gap-6 mt-6">

              <p className="font-medium">New South Head Rd, Double Bay</p>

              <span className="font-medium">2028 , New York</span>

              <span className="font-medium">contact@fufo.com</span>

              <span className="font-medium">+1300 877 503</span>
              </div>
            </div>


                
              <div className="p-10 bg-[#F1F1F2] mt-10">
              <h1 className="text-2xl font-bold">More Services</h1>

              <div className="flex flex-col mt-6 gap-y-5">
                <input type="text" className="bg-white w-full py-4 px-4" placeholder="Your Name " />
                <input type="email" className="bg-white w-full py-4 px-4" placeholder="Email Address  " />
                <textarea type="text" rows={7} className="bg-white w-full py-4 px-4" placeholder="Write a Message" />

                <button className="w-50 py-3 bg-[#1A4137] text-white font-medium flex items-center justify-center rounded-lg cursor-pointer">Send Message Us</button>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
