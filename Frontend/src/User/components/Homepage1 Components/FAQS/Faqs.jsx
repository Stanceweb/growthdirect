import React, { useState } from "react";
import { Link } from "react-router-dom";
import faqleft from "../../../../assets/Images/faq-image1.jpg";
import Map from "../../../../assets/Images/faq-map.png";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Faqs = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What advisory services does DealMaker provide?",
      answer: "We specialize in Portfolio Advisory, Corporate Finance, Business Valuation, Tax Advisory, Debt Recovery, and Bank Charges Auditing within the NGX capital market."
    },
    {
      question: "Is DealMaker regulated by the SEC?",
      answer: "Yes, DealMaker Financial Advisors is fully registered and regulated by the Nigerian Securities and Exchange Commission (SEC), ensuring 100% compliance and secure mandates."
    },
    {
      question: "How do I start an advisory mandate?",
      answer: "You can begin by booking a consultation through our Contact or Investor portals. Our lead advisors will evaluate your portfolio and propose a tailored financial strategy."
    },
    {
      question: "Do you offer forensic bank charges audits?",
      answer: "Yes, our audit team conducts detailed forensic analyses of corporate bank accounts to recover excess charges and ensure strict regulatory compliance."
    },
    {
      question: "Who are your typical clients?",
      answer: "We serve a discerning mandate of institutional investors, SMEs, corporate entities, and high-net-worth individuals navigating the Nigerian financial landscape."
    },
  ];

  return (
    <section className="FAQS w-full lg:min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT */}
      <div className="left w-full lg:w-[35%] h-auto">
        <img
          src={faqleft}
          className="w-full h-[220px] sm:h-[300px] object-cover lg:h-full lg:object-cover grayscale-100 hover:grayscale-0"
          alt="FAQ"
        />
      </div>

      {/* RIGHT */}
      <div className="right w-full lg:w-[65%] bg-[#163839] relative p-6 lg:p-10 flex flex-col lg:flex-row items-start">

        {/* MAP BG */}
        <img src={Map} className="absolute inset-0 h-full w-full object-cover opacity-50 pointer-events-none" alt="" />

        {/* LEFT CONTENT */}
        <div className="content relative lg:absolute lg:top-0 py-10 lg:py-40 px-2 lg:px-10 flex flex-col items-start justify-center gap-6 z-10 w-full lg:w-[50%]">
          <span className="w-fit px-6 lg:px-10 py-3 lg:py-1 rounded-full tracking-widest font-medium text-sm bg-[#C6D936] inline-block">
            FAQ'S
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight lg:leading-14 text-white">
            Frequently
            <br />
            Asked Questions
          </h1>

          <p className="text-white/90 leading-relaxed text-sm lg:text-base pr-4">
            DealMaker provides expert capital market advisory and portfolio management, offering rigorous financial analysis and strategic growth solutions for discerning mandates.
          </p>

          <Link to="/contact-us">
            <button className="px-10 py-3 mt-2 bg-white text-[#163839] font-bold text-sm cursor-pointer hover:bg-gray-100 transition-colors">
              Get A Quote
            </button>
          </Link>
        </div>

        {/* FAQ ACCORDION (RIGHT SIDE) */}
        <div className="relative lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%] mt-10 lg:mt-0 z-10 flex flex-col gap-4">

          {faqs.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">

              {/* HEADER */}
              <div
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className={`flex justify-between items-center px-5 py-4 cursor-pointer transition-colors duration-300
                ${activeIndex === index ? "bg-[#00715D]" : "bg-[#123334] hover:bg-[#00715D]/80"}`}
              >
                <h3 className="text-white text-sm lg:text-base font-bold pr-4">
                  {item.question}
                </h3>

                {activeIndex === index ? (
                  <FiChevronDown className="text-white flex-shrink-0" />
                ) : (
                  <FiChevronRight className="text-white flex-shrink-0" />
                )}
              </div>

              {/* CONTENT */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-40 p-5 bg-[#0F2E2F]" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Faqs;