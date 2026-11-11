import React, { useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqs = () => {
  const leftFaq = [
    {
      question: "What warranties do I have for installation?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles.",
    },
    {
      question: "What is included in your services?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles.",
    },
    {
      question: "What are the payment methods?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles.",
    },
    {
      question: "How fast I get my order?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles.",
    },
  ];

  const rightFaq = [
    {
      question: "Produce Your Own Clean Save The Environment",
      answer:
        "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.",
    },
    {
      question: "On-Site Service And Support For Certification",
      answer:
        "We provide complete on-site service and certification support to ensure quality standards and compliance for your business requirements.",
    },
    {
      question: "Light Source For Stable Conversion Efficiency",
      answer:
        "Our advanced lighting solutions are designed for stable conversion efficiency and long-lasting performance in all environments.",
    },
    {
      question: "Do You Give Guarantee And After Sales Service?",
      answer:
        "Yes, we provide guarantee coverage along with dedicated after-sales support to ensure customer satisfaction and reliability.",
    },
  ];

  const [openLeft, setOpenLeft] = useState(0);
  const [openRight, setOpenRight] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="Aboutus relative flex flex-col">
        <div className="container h-100 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/0 absolute top-0 flex flex-col py-30 px-30 gap-5">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">FAQ</h1>

            <div className="flex flex-row items-center gap-1">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                FAQ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-20">
          
          {/* LEFT FAQ */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-[#06210B]">
              Service Faq
            </h1>

            {leftFaq.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 cursor-pointer transition-all duration-500"
                onClick={() =>
                  setOpenLeft(openLeft === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  
                  <h2 className="text-xl font-semibold text-[#5B5B5B]">
                    {item.question}
                  </h2>

                  <span className="text-3xl text-[#06210B] transition-all duration-300">
                    {openLeft === index ? <FiMinus /> : <FiPlus />}
                  </span>

                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openLeft === index
                      ? "max-h-[300px] opacity-100 mt-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg leading-[2] text-[#6A6F7A] pr-10">
                    {item.answer}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT FAQ */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-[#06210B]">
              Research Faq
            </h1>

            {rightFaq.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 cursor-pointer transition-all duration-500"
                onClick={() =>
                  setOpenRight(openRight === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-semibold text-[#5B5B5B]">
                    {item.question}
                  </h2>

                  <span className="text-3xl text-[#06210B] transition-all duration-300">
                    {openRight === index ? <FiMinus /> : <FiPlus />}
                  </span>

                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openRight === index
                      ? "max-h-[300px] opacity-100 mt-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg leading-[2] text-[#6A6F7A] pr-10">
                    {item.answer}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Faqs;