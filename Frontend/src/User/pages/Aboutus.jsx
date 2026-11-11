import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BannerImg from "../../assets/Images/banner-image2.jpg";
import AboutImg from "../../assets/Images/about-01.png";
import TeamImg1 from "../../assets/Images/team-five-image1.jpg";
import TeamImg2 from "../../assets/Images/team-five-image2.jpg";
import TeamImg3 from "../../assets/Images/team-image3.jpg";
import TeamImg4 from "../../assets/Images/team-image4.jpg";

const STATS = [
  { value: "₦2B+", label: "Assets Under Advisory" },
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Years of Experience" },
  { value: "8", label: "Service Lines" },
];

const VALUES = [
  { title: "Integrity", desc: "We act with honesty and transparency in every client interaction and advisory mandate." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards of analytical rigour and professional output." },
  { title: "Independence", desc: "Our advice is objective and unconflicted — we work for our clients, not for product sellers." },
  { title: "Client Focus", desc: "We measure our success by the outcomes we create for the businesses and investors we serve." },
];

const TEAM = [
  { name: "Christian Isaac", role: "Founder & Managing Director", img: TeamImg1 },
  { name: "Adaeze Nwachukwu", role: "Head, Portfolio Advisory", img: TeamImg2 },
  { name: "Femi Adetokunbo", role: "Head, Corporate Finance", img: TeamImg3 },
  { name: "Ngozi Okafor", role: "Head, Research & Analytics", img: TeamImg4 },
];

const Aboutus = () => {
  return (
    <div className="flex flex-col">

      {/* ── Hero Banner ── */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img src={BannerImg} className="h-full w-full object-cover object-center" alt="About DealMaker" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E2C]/95 to-[#082E2C]/20 flex flex-col justify-center px-8 md:px-24 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#C6D936] hover:underline">Home</Link>
            <FaAngleRight className="text-white text-xs" />
            <span className="text-white">About Us</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest w-fit">
            NGX CAPITAL MARKET ADVISORY
          </span>
          <h1 className="font-bold text-4xl md:text-6xl text-white">About DealMaker</h1>
          <p className="text-white/70 max-w-lg text-sm md:text-base">
            A credibility-first financial advisory firm serving investors and corporates in the Nigerian capital market.
          </p>
        </div>
      </div>

      {/* ── Firm Overview ── */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10 lg:py-20 flex flex-col lg:flex-row gap-12 items-center">
        {/* Image */}
        <div className="lg:w-1/2 relative">
          <img src={AboutImg} alt="DealMaker team" className="w-full rounded-2xl object-cover max-h-[480px]" />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 bg-[#C6D936] px-6 py-4 rounded-xl shadow-xl">
            <p className="text-3xl font-black text-[#1A4137]">15+</p>
            <p className="text-xs font-semibold text-[#1A4137]">Years of Advisory<br />Excellence</p>
          </div>
        </div>

        {/* Text */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest w-fit">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4137] leading-snug">
            A Trusted Partner in Nigeria's Capital Markets
          </h2>
          <p className="text-gray-600 leading-relaxed">
            DealMaker Financial Advisors is a registered investment advisory firm providing expert guidance across investment analysis, portfolio advisory, and corporate finance in the Nigerian Exchange Group (NGX) ecosystem. Founded on the principle that every client deserves objective, research-backed advice, we have grown into one of Nigeria's leading independent advisory practices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We serve a broad spectrum of clients — from retail and high-net-worth individuals building personal wealth, to SMEs raising capital, to institutions managing complex financial mandates. Our team combines deep capital market expertise with practical business acumen to deliver outcomes that matter.
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {[
              "SEC-registered investment advisory firm",
              "Independent — no product conflicts or hidden commissions",
              "Research-led approach to every mandate",
              "Fully responsive to Nigerian regulatory requirements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                <FaCheckCircle className="text-[#C6D936] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link to="/contact-us"
            className="flex items-center gap-2 w-fit px-8 py-4 bg-[#1A4137] text-white font-semibold hover:bg-[#0d2620] transition-colors mt-2">
            Book a Consultation <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#1A4137] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#C6D936]">{s.value}</span>
              <span className="text-white/70 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#f8f9f4] rounded-2xl p-8 border-l-4 border-[#C6D936]">
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">OUR MISSION</span>
          <h3 className="text-2xl font-bold text-[#1A4137] mb-3">Why We Exist</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower Nigerian investors and businesses with independent, research-backed financial advice that enables informed decisions, protects capital, and creates sustainable wealth in the Nigerian capital market.
          </p>
        </div>
        <div className="bg-[#1A4137] rounded-2xl p-8 border-l-4 border-[#C6D936]">
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">OUR VISION</span>
          <h3 className="text-2xl font-bold text-white mb-3">Where We're Going</h3>
          <p className="text-white/70 leading-relaxed">
            To become Nigeria's most trusted independent financial advisory firm — the first call for investors and businesses navigating the opportunities and complexities of Africa's most dynamic capital market.
          </p>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-gray-50 py-10 lg:py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4137]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#1A4137]/30 hover:shadow-md transition-all">
                <div className="w-10 h-1 bg-[#C6D936] mb-4 rounded-full" />
                <h3 className="font-bold text-[#1A4137] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 lg:py-20">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">LEADERSHIP</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4137]">Meet the Team</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            Our leadership team brings together decades of capital market, corporate finance, and advisory experience from across Nigeria's financial services sector.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative w-full mb-4 overflow-hidden rounded-2xl">
                <img src={member.img} alt={member.name}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1A4137]/0 group-hover:bg-[#1A4137]/20 transition-all duration-300" />
                <a href="#" className="absolute bottom-4 right-4 p-2.5 bg-[#C6D936] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaLinkedinIn className="text-[#1A4137]" />
                </a>
              </div>
              <h3 className="font-bold text-[#1A4137] text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Regulatory Disclosure ── */}
      <div className="bg-gray-50 border-t border-gray-200 px-8 md:px-20 py-8">
        <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
          <strong>Regulatory Disclosure:</strong> DealMaker Financial Advisors is a registered investment advisory firm operating in compliance with applicable Nigerian securities laws and Securities & Exchange Commission (SEC) regulations.
          Investment advisory services are subject to regulatory oversight. Please review our full{" "}
          <Link to="/legal" className="underline hover:text-gray-600">Legal & Compliance</Link> disclosures.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
