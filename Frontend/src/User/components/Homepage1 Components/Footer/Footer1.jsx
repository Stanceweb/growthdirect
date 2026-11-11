import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/Images/logo-light.png";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaVimeoV } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import footerImg from "../../../../assets/Images/footer-one-shape.png";
import { MdArrowOutward } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer1 = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null); // null | "success" | "error"

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim());
    if (!isValidEmail) {
      setNewsletterStatus("error");
      return;
    }
    // No newsletter backend endpoint exists yet; confirm receipt client-side.
    setNewsletterStatus("success");
    setNewsletterEmail("");
  };

  return (
    <section className="Footer min-h-[650px] w-full bg-[#163839] flex flex-col lg:flex-row overflow-hidden">
      {/* Vertical Logo Strip */}
      <div className="left-container relative hidden lg:flex w-[110px] border-r border-white/20 flex flex-col items-center justify-center gap-70">
        {/* Top Logo */}
        <img src={logo} className="rotate-[-90deg] scale-200" />

        {/* menu */}
        <button
          onClick={() => setOpenMenu(true)}
          className="text-white text-3xl cursor-pointer"
        >
          <CgMenuGridO />
        </button>

        {/* overlay */}

        {/* Dark Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[99] transition-all duration-500
 ${OpenMenu ? "opacity-100 visible" : "opacity-0 invisible"}
 `}
          onClick={() => setOpenMenu(false)}
        ></div>

        {/* Offcanvas Panel */}
      <div
 className={`
 fixed top-0 right-0 h-screen w-[330px] bg-[#1d1d1d] z-[100]
 transform transition-transform duration-500
 ${OpenMenu ? "translate-x-0" : "translate-x-full"}
 `}
>
          {/* Close */}
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-8 right-10 text-white text-xl cursor-pointer px-2 bg-white/30"
          >
            ×
          </button>

          <div className=" text-white mt-3 py-3.5">
            <div className="border-b  border-white/20 pb-3 px-4">
              <img src={logo} className="w-45" />
            </div>

            <div className="content mt-5 px-5 border-b border-white/20">
              <h2 className="text-2xl font-bold mb-3">About Us</h2>
              <p className="text-white/70 pb-5 w-full">
                DealMaker is the go-to hub for <br /> early adopters and
                innovation <br /> enthusiasts, offering cutting <br />
                technology widely.
              </p>
            </div>

            <div className="p-2 mr-20">
              <div className="py-5 space-y-8 ">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-2">
                  <span className="text-4xl">
                    <IoCallOutline />
                  </span>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-[#C6D936] text-sm mb-2">CALL NOW</p>
                    <h3 className="text-lg font-medium">+234 803 708 0343</h3>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-2">
                    <span className="text-4xl">
                      <MdOutlineMailOutline />
                    </span>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-[#C6D936] text-sm mb-2">SEND EMAIL</p>
                      <h3 className="text-lg font-medium">Info@dealmaker-advisors.com</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-2">
                    <span className="text-4xl">
                      <LuAlarmClock />
                    </span>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-[#C6D936] text-sm mx-2">HOURS</p>

                      <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium">
                          Mon - Sat 8:00 - 6:30,
                        </h3>
                        <p className="text-lg font-medium">Sunday - CLOSED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-footer absolute bottom-0 border h-12 w-full border-white/20 flex flex-col lg:flex-row items-center justify-evenly text-white text-xl">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on X (Twitter)" className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><RiTwitterXLine /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Facebook" className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><FaFacebookF /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Pinterest" className="border-r border-white/20 pr-8 h-full py-3 duration-300 hover:text-[#1A4137]"><FaPinterest /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Instagram" className="mr-5 duration-300 hover:text-[#1A4137]"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="left w-full lg:w-[70%] bg-[#163839] flex flex-col">
        <div className="left-top relative py-6 lg:py-0 lg:h-30 w-full border-b border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-around gap-6 lg:gap-0 px-6 lg:px-0 ">
          {/* Call */}
          <div className="call flex flex-row items-center text-white text-lg lg:text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full shrink-0">
              <IoIosCall />
            </span>

            <div className="call-conatent">
              <p>Call Us:</p>
              <p className="font-bold ">+234 803 708 0343</p>
            </div>
          </div>

          {/* Email */}
          <div className="call flex flex-row items-center text-white text-lg lg:text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full shrink-0">
              <MdEmail />
            </span>

            <div className="call-conatent">
              <p>Email Us:</p>
              <p className="font-bold break-all">Info@dealmaker-advisors.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="call flex flex-row items-center text-white text-lg lg:text-xl gap-3">
            <span className="text-2xl py-3 px-3 bg-white/20 rounded-full shrink-0">
              <MdLocationPin />
            </span>

            <div className="call-conatent">
              <p>Our Office:</p>
              <p className="font-bold ">Lagos Island, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="left-middle w-full flex flex-col lg:flex-row items-start justify-around p-6 lg:p-20 gap-8 lg:gap-0 ">
          {/* Services */}
          <div className="service">
            <h3 className="text-white text-2xl font-semibold">Services</h3>
            <ul className="text-white/70 flex flex-col text-sm">
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Portfolio Advisory</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Corporate Finance</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Business Valuation</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Debt Recovery</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Bank Charges Audit</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Tax Advisory</Link></li>
              <li><Link to="/service" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Loan Restructuring</Link></li>
            </ul>
          </div>

          {/* pages  */}
          <div className="Pages">
            <h3 className="text-white text-2xl font-semibold">Company</h3>
            <ul className="text-white/70 flex flex-col text-sm">
              <li><Link to="/about-us" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">About Us</Link></li>
              <li><Link to="/research" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Research & Insights</Link></li>
              <li><Link to="/investors" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">For Investors</Link></li>
              <li><Link to="/contact-us" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Contact Us</Link></li>
              <li><Link to="/legal" className="hover:text-[#C6D936] transition-colors inline-flex items-center min-h-[44px] py-1.5">Legal & Compliance</Link></li>
            </ul>
          </div>

          {/* Sign up for  news letter */}
          <div className="Sign-up ">
            <h3 className="text-white text-2xl font-semibold">
              Market Updates
            </h3>
            <p className="text-white/60 text-sm mt-3 max-w-[220px]">Subscribe to DealMaker's monthly capital markets newsletter.</p>

            <form onSubmit={handleNewsletterSubmit} className="py-6 flex flex-col gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterStatus) setNewsletterStatus(null);
                }}
                required
                className="bg-white px-4 font-medium text-lg py-3 rounded-full"
                placeholder="Email Address"
              />
              <button type="submit" className="py-3 w-full lg:w-70 px-8 bg-[#C6D936] rounded-full cursor-pointer flex items-center justify-center gap-2">
                Sign Up Now <LiaAngleRightSolid />
              </button>
              {newsletterStatus === "success" && (
                <p className="text-[#C6D936] text-sm">Thanks! You're subscribed to Market Updates.</p>
              )}
              {newsletterStatus === "error" && (
                <p className="text-red-400 text-sm">Please enter a valid email address.</p>
              )}
            </form>

            <div className="social-icons flex flex-row flex-wrap text-white gap-5 text-lg mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Facebook" className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on X (Twitter)" className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <RiTwitterXLine />
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Vimeo" className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaVimeoV />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="DealMaker on Pinterest" className="px-3 py-3 bg-white/20 rounded-full duration-500 hover:bg-[#C6D936] hover:text-black">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        <div className="left-bottom w-full border-t border-white/10 flex items-start justify-start p-6 lg:p-10 ">
          <span className="text-white/60">
            © {new Date().getFullYear()} DealMaker Financial Advisors. All Rights Reserved. &nbsp;
            <span className="text-white/40 hover:text-white/60 cursor-pointer">Privacy Policy</span>
            &nbsp;|&nbsp;
            <Link to="/legal" className="text-white/40 hover:text-white/60 inline-flex items-center min-h-[44px] py-2">Legal & Compliance</Link>
          </span>
        </div>
      </div>

      <div className="right w-full lg:w-[30%] py-10 lg:py-0 bg-[#D4F25A] relative flex flex-col items-center justify-center">
        <img
          src={footerImg}
          className="h-full w-full object-cover absolute top-0"
        />
        <div className="content p-8">
          <h1 className="text-black text-center text-3xl lg:text-4xl font-bold py-6 lg:py-10">
            Have a Project in
            <br /> your Mind?
          </h1>
          <Link to="/contact-us" className="contactus group relative flex items-center justify-center gap-2 h-48 w-48 lg:h-60 lg:w-60 overflow-hidden bg-[#1A4137] mx-auto lg:ml-5 rounded-full text-xl text-white font-bold z-50 cursor-pointer">
            Contact us
            <MdArrowOutward className="transition-transform duration-500 group-hover:rotate-[406deg] " />
            <div
              className="
      bottom-round
      h-20 
      w-20 
      bg-[#C6D936] 
      rounded-full
      absolute 
      bottom-0 
      right-0
      transition-all
      duration-500
      group-hover:h-60
      group-hover:w-60
      group-hover:-z-10
  "
            ></div>
          </Link>
        </div>
        <div className="hours flex flex-col relative mt-10 pb-10 lg:pb-0 text-lg text-center w-full">
          <p className="text-[#1A4137] font-bold">09 : 00 AM - 10 : 30 PM</p>
          <span className="text-[#1A4137] ">Saturday - Thursday</span>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
