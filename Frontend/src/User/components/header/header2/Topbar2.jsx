import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Topbar2 = () => {
  // Currency state
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Language state
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const currencies = ["USD", "URO", "BDT"];
  const languages = ["English", "Bangla", "Hindi"];

  const handleCurrency = (cur) => {
    setSelectedCurrency(cur);
    setCurrencyOpen(false);
  };

  const handleLang = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  return (
    <section className="Topbar h-12 w-full border-b border-gray-300 bg-[#1A4137] flex items-center justify-between text-white">
      
      {/* LEFT */}
      <div className="left flex items-center gap-5 px-15">
        <p className="flex items-center gap-2 font-medium text-sm">
          <span className="text-[#C6D936] text-[18px]">
            <MdMail />
          </span>
          Info@dealmaker-advisors.com
        </p>

        <p className="flex items-center gap-1 font-medium text-sm">
          <span className="text-[#C6D936] text-[18px]">
            <IoLocationSharp />
          </span>
          Lagos Island, Lagos, Nigeria
        </p>
      </div>

      {/* RIGHT */}
      <div className="right flex items-center px-4 lg:px-20 gap-5">
        
        {/* CURRENCY DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => {
                setCurrencyOpen(!currencyOpen)  
                setLangOpen(false)
            }}
            
            className="flex items-center gap-1 text-sm"
          >
            {selectedCurrency}
            <FaAngleDown
              className={`transition-transform duration-300 ${
                currencyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {currencyOpen && (
            <div className="absolute top-full mt-2 bg-white text-gray-600 text-sm shadow-md rounded-md w-24">
              {currencies.map((cur) => (
                <p
                  key={cur}
                  onClick={() => handleCurrency(cur)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    selectedCurrency === cur ? "font-bold bg-gray-100" : ""
                  }`}
                >
                  {cur}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* LANGUAGE DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => {
                setLangOpen(!langOpen)
                setCurrencyOpen(false);
            }}
            className="flex items-center gap-1 text-sm"
          >
            {selectedLang}
            <FaAngleDown
              className={`transition-transform duration-300 ${
                langOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {langOpen && (
            <div className="absolute top-full mt-2 bg-white text-gray-600 text-sm shadow-md rounded-md w-28">
              {languages.map((lang) => (
                <p
                  key={lang}
                  onClick={() => handleLang(lang)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    selectedLang === lang ? "font-bold bg-gray-100" : ""
                  }`}
                >
                  {lang}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* SOCIAL ICONS */}
        <span className="cursor-pointer transition-transform duration-500 hover:rotate-y-[360deg] hover:text-[#C6D936] text-sm">
          <FaFacebookF />
        </span>
        <span className="cursor-pointer transition-transform duration-500 hover:rotate-y-[360deg] hover:text-[#C6D936] text-sm">
          <FaInstagram />
        </span>
        <span className="cursor-pointer transition-transform duration-500 hover:rotate-y-[360deg] hover:text-[#C6D936] text-sm">
          <FaXTwitter />
        </span>
        <span className="cursor-pointer transition-transform duration-500 hover:rotate-y-[360deg] hover:text-[#C6D936] text-sm">
          <FaLinkedinIn />
        </span>
      </div>
    </section>
  );
};

export default Topbar2;