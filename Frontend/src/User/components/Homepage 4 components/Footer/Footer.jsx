import React, { useState } from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";
import Logo from "../../../../assets/Images/logo-light.png";
import Shape from "../../../../assets/Images/consult-shape.png";
import "../../../../../src/App.css"

const Footer = () => {
  const [open, setOpen] = useState(false);

  const languages = ["ENGLISH (US)", "ENGLISH (UK)", "BANGLA (BD)"];
  const [selected, setSelected] = useState("ENGLISH (US)");

  return (
    <footer className="Footer min-h-[90vh] mt-20 bg-[#1A4137] p-40 flex flex-row items-start justify-between relative">
      
      {/* Left */}
      <div className="flex flex-col items-start gap-6">
        <img src={Shape} className="absolute top-0 -left-50  animate-slow-spin2"/>
        <h2 className="text-3xl font-bold text-white tracking-wider">
          Subscribe Newsletter
        </h2>

        <p className="text-white">
          We understand that every challenge is an opportunity. We're here to{" "}
          <br />
          seize it with a team of dedicated professionals and a culture
        </p>

        <div className="flex flex-row gap-3 mt-6">
          <input
            type="text"
            className="py-3 w-100 border border-white/20 px-4 text-white focus:outline-none focus:border-[#C6D936] bg-transparent"
            placeholder="Email Address"
          />

          <button className="flex items-center gap-2 bg-[#C6D936] px-6 py-3 rounded-xl cursor-pointer text-sm font-medium">
            Sign Up <FaAngleRight />
          </button>
        </div>

        <span className="text-white/60">
          By subscribing you're accept{" "}
          <span className="font-medium text-white underline cursor-pointer">
            Privacy Policy
          </span>
        </span>
      </div>

      {/* Services */}
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-white text-2xl">Services</h2>

        <div className="mt-5 flex flex-col text-[16px] gap-5">
          <span className="font-medium text-white/50">Business Plan</span>
          <span className="font-medium text-white/50">Growth Strategy</span>
          <span className="font-medium text-white/50">
            Strategic Planning
          </span>
          <span className="font-medium text-white/50">
            Workflow Automation
          </span>
          <span className="font-medium text-white/50">Lead Generation</span>
          <span className="font-medium text-white/50">
            Financial Planning
          </span>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-start">
        <div className="flex flex-col text-[16px] gap-5">
          <h2 className="font-bold text-white text-2xl">Location</h2>

          <span className="font-medium text-white/50 flex flex-row items-start gap-2 text-xl">
            55 Main Street, 2nd Block <br />
            Melbourne , Australia
          </span>

          <h2 className="font-bold text-white text-2xl">Contact</h2>

          <span className="font-medium text-white/50 text-xl flex flex-row items-start gap-2">
            support@gmail.com
          </span>

          <span className="font-medium text-white flex flex-row items-start gap-2 text-xl">
            +880 (123) 456 88
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom border-t border-white/10 h-24 w-full absolute left-0 bottom-0 flex flex-row items-center justify-between px-40">
        
        {/* Logo */}
        <img src={Logo} alt="logo" />

        {/* Language Dropdown + Copyright */}
        <div className="flex items-center gap-30">
          
          {/* Dropdown */}
          <div className="relative">
            
            {/* Dropdown Menu */}
            <div
              className={`absolute bottom-14 left-0 w-52 overflow-hidden rounded-md bg-white transition-all duration-300 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-3"
              }`}
            >
              {languages.map((lang, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className={`px-6 py-4 text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-[#C6D936] hover:text-[#1A4137]
                  ${
                    selected === lang
                      ? "bg-[#F5F5F5] text-[#1A4137]"
                      : "text-[#666]"
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#294D43] rounded-full px-5 py-2 flex items-center gap-4 text-white font-semibold text-sm"
            >
              {selected}

              <span className="w-7 h-7 rounded-full bg-[#C6D936] flex items-center justify-center text-black">
                <FaAngleUp
                  className={`transition-all duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Copyright */}
          <span className="text-white/70 text-lg">
            © 2025 <span className="text-amber-400">Kodesolution</span> - IT
            Services. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;