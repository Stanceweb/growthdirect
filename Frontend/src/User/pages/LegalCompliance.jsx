import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaShieldAlt, FaFileAlt, FaBalanceScale, FaLock } from "react-icons/fa";
import BannerImg from "../../assets/Images/banner-image3.jpg";

const SECTIONS = [
  {
    id: "regulatory",
    icon: <FaShieldAlt />,
    title: "Regulatory Status",
    content: [
      "DealMaker Financial Advisors is registered and operates in compliance with the Securities & Exchange Commission (SEC) of Nigeria.",
      "Our advisory activities are governed by the Investments and Securities Act (ISA) 2007, SEC Rules and Regulations, and all applicable subsidiary legislation.",
      "We maintain all required regulatory filings, capital adequacy requirements, and compliance programmes as stipulated by the SEC.",
      "Clients are encouraged to verify our regulatory status directly with the SEC of Nigeria at www.sec.gov.ng.",
    ],
  },
  {
    id: "risk",
    icon: <FaBalanceScale />,
    title: "Risk Disclaimer",
    content: [
      "Investment in securities and capital market instruments involves risk, including the possible loss of principal invested.",
      "Past performance of any investment, strategy, or financial product is not indicative of future results.",
      "The value of investments may go down as well as up. You may receive less than you invest.",
      "Returns are not guaranteed. All investment decisions should be made after careful consideration of your personal financial situation, objectives, and risk tolerance.",
      "DealMaker Financial Advisors provides advisory services only. We do not execute trades directly. All transactions are executed through duly licensed stockbrokers and dealing members of the NGX.",
      "Information provided in our research reports, market commentary, and website content is for informational purposes only and does not constitute investment advice tailored to any individual's circumstances.",
    ],
  },
  {
    id: "privacy",
    icon: <FaLock />,
    title: "Privacy Policy",
    content: [
      "DealMaker Financial Advisors is committed to protecting the personal data of our clients and website visitors in accordance with the Nigeria Data Protection Act (NDPA) 2023 and the Nigeria Data Protection Regulation (NDPR).",
      "Personal data collected through our website (including consultation request forms and newsletter sign-ups) is used solely for the purposes of providing advisory services, communicating market updates, and improving our service offering.",
      "We do not sell, rent, or share your personal data with third parties for marketing purposes.",
      "Data is stored securely and retained only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.",
      "You have the right to access, correct, or request deletion of your personal data. To exercise this right, contact us at: contact@dealmaker-advisors.com.",
      "Our website may use cookies for analytics and user experience purposes. You may disable cookies in your browser settings.",
    ],
  },
  {
    id: "terms",
    icon: <FaFileAlt />,
    title: "Terms of Use",
    content: [
      "By accessing and using this website, you agree to be bound by these Terms of Use.",
      "The content on this website is provided for informational purposes only. Nothing on this website constitutes an offer to buy or sell any security or financial product.",
      "DealMaker Financial Advisors makes no representation or warranty, express or implied, as to the accuracy, completeness, or timeliness of information on this website.",
      "Unauthorised reproduction, distribution, or transmission of any content on this website without prior written consent from DealMaker Financial Advisors is prohibited.",
      "DealMaker Financial Advisors shall not be liable for any loss or damage arising from reliance on information contained on this website.",
      "These Terms of Use are governed by Nigerian law. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.",
    ],
  },
];

const LegalCompliance = () => {
  const [activeSection, setActiveSection] = useState("regulatory");

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img src={BannerImg} className="h-full w-full object-cover object-center" alt="Legal & Compliance" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E2C]/95 to-[#082E2C]/30 flex flex-col justify-center px-8 md:px-24 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#C6D936] hover:underline">Home</Link>
            <FaAngleRight className="text-white text-xs" />
            <span className="text-white">Legal & Compliance</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest w-fit">
            REGULATORY DISCLOSURES
          </span>
          <h1 className="font-bold text-4xl md:text-5xl text-white">Legal & Compliance</h1>
          <p className="text-white/70 text-sm max-w-lg">
            DealMaker Financial Advisors operates with full regulatory compliance and transparency. Please read these important disclosures carefully.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10 lg:py-16 flex flex-col lg:flex-row gap-10">

        {/* Sidebar Nav */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-6">
            {SECTIONS.map((s) => (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors
                  ${activeSection === s.id ? "bg-[#1A4137] text-white" : "text-gray-600 hover:bg-gray-50"}`}>
                <span className={`text-lg ${activeSection === s.id ? "text-[#C6D936]" : "text-[#1A4137]"}`}>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-6 bg-[#C6D936] rounded-2xl p-5">
            <h4 className="font-bold text-[#1A4137] mb-2 text-sm">Compliance Queries</h4>
            <p className="text-xs text-[#1A4137]/70 mb-3">For regulatory or compliance enquiries, contact us directly.</p>
            <a href="mailto:contact@dealmaker-advisors.com"
              className="text-xs font-semibold text-[#1A4137] underline break-all">
              contact@dealmaker-advisors.com
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className={activeSection === s.id ? "block" : "hidden"}>
              <div className="flex items-center gap-4 mb-6">
                <span className="p-4 rounded-full bg-[#1A4137] text-white text-2xl">{s.icon}</span>
                <h2 className="text-3xl font-bold text-[#1A4137]">{s.title}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {s.content.map((para, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-lg font-black text-[#C6D936] shrink-0 w-8">{String(i + 1).padStart(2, "0")}.</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Last updated */}
          <p className="text-xs text-gray-400 mt-10 border-t border-gray-100 pt-6">
            Last updated: September 2026. DealMaker Financial Advisors reserves the right to update these disclosures at any time.
            Continued use of this website constitutes acceptance of the current terms.
          </p>
        </div>
      </div>

    </div>
  );
};

export default LegalCompliance;
