import React, { useState } from "react";
import Logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import "../header1/header1.css";

const Navbar1 = ({ hideTopbar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <section className="h-16 lg:h-[88px] w-full border-b border-gray-300 px-4 lg:px-10 bg-white flex items-center justify-between shadow-2xl relative z-[100]">
      {/* LEFT: Logo */}
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center py-2 min-h-[44px]">
        <img src={Logo} alt="DealMaker Logo" className="h-7 lg:h-12 object-contain" />
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 lg:gap-10">
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-[16px] duration-100 hover:text-[#1A4137] font-medium">Home</Link>
          <Link to="/about-us" className="text-[16px] duration-100 hover:text-[#1A4137] font-medium">About Us</Link>
          
          <div className="service cursor-pointer flex items-center gap-2 text-[16px] relative font-medium group">
            Services <FaAngleDown className="text-[12px]" />
            <div className="service-dp absolute w-64 bg-white top-8 z-50 shadow-2xl flex flex-col items-start justify-center gap-4 p-4 opacity-0 invisible translate-y-6 transition-all duration-500 rounded-b-2xl group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/portfolio-advisory">Portfolio Advisory</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/corporate-finance">Corporate Finance</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/business-valuation">Business Valuation</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/auction">Auction</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/tax-advisory">Tax Advisory</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/debt-recovery">Debt Recovery</Link>
              <Link className="w-full border-b border-gray-200 pb-2 duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/loan-restructuring">Loan Restructuring</Link>
              <Link className="w-full duration-100 hover:translate-x-2 hover:text-[#1A4137]" to="/services/bank-charges-audit">Bank Charges Audit</Link>
            </div>
          </div>

          <Link to="/research" className="text-[16px] duration-100 hover:text-[#1A4137] font-medium">Research & Insights</Link>
          <Link to="/investors" className="text-[16px] duration-100 hover:text-[#1A4137] font-medium">For Investors</Link>
          <Link to="/contact-us" className="text-[16px] duration-100 hover:text-[#1A4137] font-medium">Contact</Link>
        </ul>

        {/* CTA BUTTON (Desktop only) */}
        {!hideTopbar && (
          <div className="hidden lg:flex items-center px-6 gap-4">
            <a href="mailto:Info@dealmaker-advisors.com" className="hidden xl:flex items-center gap-2 text-sm text-[#1A4137] font-medium hover:text-[#0C6460]">
              <span className="p-2 rounded-full bg-[#C6D936] text-base"><IoMdCall /></span>
              Info@dealmaker-advisors.com
            </a>
            <Link to="/contact-us">
              <button className="px-8 py-3 bg-[#1A4137] text-white font-medium cursor-pointer hover:bg-[#0d2620] transition-colors">
                Contact Now
              </button>
            </Link>
          </div>
        )}
        
        {/* MOBILE HAMBURGER ICON */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="text-3xl text-[#1A4137] focus:outline-none transition-transform h-11 w-11 -mr-2 flex items-center justify-center"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col lg:hidden border-t border-gray-100 z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-gray-100 font-medium text-[#1A4137] hover:bg-gray-50">Home</Link>
          <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-gray-100 font-medium text-[#1A4137] hover:bg-gray-50">About Us</Link>
          
          {/* Mobile Services Accordion */}
          <div className="flex flex-col border-b border-gray-100">
            <button 
              className="px-6 py-4 font-medium text-[#1A4137] flex justify-between items-center w-full text-left hover:bg-gray-50"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <FaAngleDown className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Expanded Services List */}
            {isServicesOpen && (
              <div className="flex flex-col bg-gray-50 px-6 py-2">
                <Link to="/services/portfolio-advisory" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 block">Portfolio Advisory</Link>
                <Link to="/services/corporate-finance" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Corporate Finance</Link>
                <Link to="/services/business-valuation" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Business Valuation</Link>
                <Link to="/services/auction" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Auction</Link>
                <Link to="/services/tax-advisory" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Tax Advisory</Link>
                <Link to="/services/debt-recovery" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Debt Recovery</Link>
                <Link to="/services/loan-restructuring" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Loan Restructuring</Link>
                <Link to="/services/bank-charges-audit" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-sm text-gray-600 border-t border-gray-200 block">Bank Charges Audit</Link>
              </div>
            )}
          </div>

          <Link to="/research" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-gray-100 font-medium text-[#1A4137] hover:bg-gray-50">Research & Insights</Link>
          <Link to="/investors" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-gray-100 font-medium text-[#1A4137] hover:bg-gray-50">For Investors</Link>
          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 font-medium text-[#1A4137] hover:bg-gray-50">Contact Us</Link>
        </div>
      )}
    </section>
  );
};

export default Navbar1;
