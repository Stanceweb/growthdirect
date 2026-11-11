import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaAngleRight, FaCheckCircle, FaRegPaperPlane,
  FaPhone, FaEnvelope, FaArrowRight
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdBusiness } from "react-icons/md";
import BannerImg from "../../assets/Images/banner-image3.jpg";

// ─── Service Data ─────────────────────────────────────────────────────────────
const SERVICES = {
  "portfolio-advisory": {
    title: "Portfolio Advisory",
    tagline: "Preserving Capital & Maximising Yield",
    description:
      "Our Portfolio Advisory service provides institutional and individual investors with expert guidance on capital allocation, asset selection, and portfolio construction tailored to the Nigerian capital market. We combine quantitative analysis with deep market intelligence from the NGX to help clients navigate volatility, optimise risk-adjusted returns, and build resilient long-term portfolios.",
    forWho: [
      "High-net-worth individuals seeking structured investment guidance",
      "Pension funds and institutional investors",
      "Family offices and trusts",
      "Retail investors building long-term wealth",
    ],
    process: [
      { step: "01", title: "Discovery & Goal Setting", desc: "We assess your financial objectives, risk appetite, investment horizon, and liquidity needs." },
      { step: "02", title: "Portfolio Analysis", desc: "We review existing holdings and benchmark against NGX indices and peer portfolios." },
      { step: "03", title: "Strategy Design", desc: "We craft a bespoke asset allocation strategy across equities, fixed income, and alternatives." },
      { step: "04", title: "Execution Support", desc: "We guide execution through regulated brokers and monitor for optimal entry/exit timing." },
      { step: "05", title: "Ongoing Reporting", desc: "We provide regular performance reports, rebalancing recommendations, and market commentary." },
    ],
    img: "banner-image1.jpg",
  },
  "corporate-finance": {
    title: "Corporate Finance",
    tagline: "Institutional Corporate Finance & Debt Restructuring",
    description:
      "DealMaker's Corporate Finance team advises businesses on their most complex financial decisions — from capital raising and mergers to debt restructuring and financial modelling. We work alongside management teams and boards to deliver objective, actionable advice that creates sustainable value.",
    forWho: [
      "Corporations seeking to raise debt or equity capital",
      "Businesses undergoing M&A transactions",
      "Companies with complex balance sheet challenges",
      "Management teams requiring independent financial modelling",
    ],
    process: [
      { step: "01", title: "Mandate Scoping", desc: "Define objectives, timelines, and regulatory requirements." },
      { step: "02", title: "Financial Due Diligence", desc: "Deep-dive into financial statements, covenants, and capital structure." },
      { step: "03", title: "Structuring", desc: "Design optimal capital or transaction structure to meet client objectives." },
      { step: "04", title: "Counterparty Engagement", desc: "Approach lenders, investors, or acquirers with a compelling information memorandum." },
      { step: "05", title: "Execution & Closing", desc: "Manage negotiations, documentation, and closing conditions through to completion." },
    ],
    img: "banner-image2.jpg",
  },
  "business-valuation": {
    title: "Business Valuation",
    tagline: "Accurate, Defensible Business Valuations",
    description:
      "Our Business Valuation practice delivers rigorous, independent valuations for a wide range of purposes — M&A transactions, shareholder disputes, regulatory filings, estate planning, and financial reporting. We apply internationally recognised methodologies including DCF, market comparables, and net asset value, calibrated to the Nigerian market.",
    forWho: [
      "Businesses preparing for acquisition or sale",
      "Shareholders requiring an independent valuation",
      "Companies preparing financial statements (IFRS 3, IAS 36)",
      "Legal teams handling disputes or estate matters",
    ],
    process: [
      { step: "01", title: "Instruction & Scope", desc: "Agree purpose, standard of value, and valuation date." },
      { step: "02", title: "Information Gathering", desc: "Collect financial statements, forecasts, contracts, and market data." },
      { step: "03", title: "Analysis & Modelling", desc: "Build DCF and comparables models; stress-test key assumptions." },
      { step: "04", title: "Draft Report", desc: "Prepare detailed valuation report with methodology, assumptions, and conclusions." },
      { step: "05", title: "Review & Delivery", desc: "Present findings to management or board; respond to queries from auditors or counterparties." },
    ],
    img: "banner-image3.jpg",
  },
  "auction": {
    title: "Auction Services",
    tagline: "Professional Asset Auction & Liquidation",
    description:
      "DealMaker provides end-to-end auction management and asset liquidation services, helping financial institutions, corporates, and receivers realise maximum value from distressed, surplus, or recoverable assets. Our experienced team manages the entire process — from asset identification and marketing to sale and settlement.",
    forWho: [
      "Banks and financial institutions with non-performing loan collateral",
      "Receivers and liquidators managing insolvencies",
      "Corporates divesting non-core assets",
      "Government agencies with surplus assets",
    ],
    process: [
      { step: "01", title: "Asset Assessment", desc: "Survey and value assets to establish reserve prices and marketing strategy." },
      { step: "02", title: "Marketing & Advertising", desc: "Multi-channel promotion to qualified Nigerian and international buyers." },
      { step: "03", title: "Pre-Auction Due Diligence", desc: "Facilitate buyer inspections and provide information packs." },
      { step: "04", title: "Auction Management", desc: "Run transparent, competitive auction process — physical or online." },
      { step: "05", title: "Settlement & Handover", desc: "Manage payment, documentation, and asset transfer to new owner." },
    ],
    img: "banner-image1.jpg",
  },
  "tax-advisory": {
    title: "Tax Advisory",
    tagline: "Strategic Tax Planning & Compliance",
    description:
      "Our Tax Advisory team helps businesses and individuals navigate Nigeria's complex tax environment — optimising their tax position, ensuring compliance with FIRS requirements, and avoiding costly penalties. We cover corporate income tax, VAT, transfer pricing, withholding tax, and personal income tax.",
    forWho: [
      "SMEs and corporates seeking to reduce effective tax rates",
      "Multinationals with transfer pricing exposure",
      "High-net-worth individuals managing personal tax liabilities",
      "Businesses facing FIRS audits or disputes",
    ],
    process: [
      { step: "01", title: "Tax Health Check", desc: "Review of current tax filings, exposures, and compliance status." },
      { step: "02", title: "Opportunity Identification", desc: "Identify legitimate tax planning opportunities within Nigerian law." },
      { step: "03", title: "Strategy Design", desc: "Develop a bespoke tax strategy aligned with business structure and objectives." },
      { step: "04", title: "Implementation Support", desc: "Assist with restructuring, elections, and filing to execute the strategy." },
      { step: "05", title: "Compliance & Monitoring", desc: "Ongoing compliance support — filing, payments, and correspondence with FIRS." },
    ],
    img: "banner-image2.jpg",
  },
  "debt-recovery": {
    title: "Debt Recovery",
    tagline: "Efficient Recovery of Non-Performing Receivables",
    description:
      "DealMaker's Debt Recovery service provides corporates, financial institutions, and SMEs with a structured, professional approach to recovering outstanding receivables. We deploy negotiation, mediation, and — where necessary — legal enforcement to achieve optimal recovery outcomes while preserving important business relationships.",
    forWho: [
      "Banks and microfinance institutions with non-performing loans",
      "Corporates with aged trade receivables",
      "SMEs chasing overdue invoices",
      "Factoring companies and credit funds",
    ],
    process: [
      { step: "01", title: "Portfolio Assessment", desc: "Analyse the debt book — age, debtor profile, security, and recovery prospects." },
      { step: "02", title: "Debtor Engagement", desc: "Professional initial contact to establish dialogue and payment intent." },
      { step: "03", title: "Negotiation & Settlement", desc: "Negotiate repayment plans, settlements, or asset surrender agreements." },
      { step: "04", title: "Legal Escalation", desc: "Engage legal counsel for enforcement via courts or arbitration where required." },
      { step: "05", title: "Recovery & Reporting", desc: "Remit recovered funds and provide detailed portfolio recovery reports." },
    ],
    img: "banner-image3.jpg",
  },
  "loan-restructuring": {
    title: "Loan Restructuring",
    tagline: "Restoring Liquidity Through Smart Restructuring",
    description:
      "When debt obligations become unsustainable, DealMaker's Loan Restructuring advisors work with borrowers and lenders to find a workable solution — renegotiating loan terms, extending tenors, reducing interest rates, or converting debt to equity. Our goal is to restore financial viability while fairly balancing the interests of all parties.",
    forWho: [
      "Businesses with over-leveraged balance sheets",
      "Borrowers experiencing cash flow difficulties",
      "Banks seeking consensual resolution of problem loans",
      "Companies emerging from distress or insolvency",
    ],
    process: [
      { step: "01", title: "Financial Assessment", desc: "Model current debt service burden against realistic cash flow projections." },
      { step: "02", title: "Restructuring Options", desc: "Design alternative scenarios — tenor extension, rate reduction, debt-equity swap, etc." },
      { step: "03", title: "Lender Negotiation", desc: "Present restructuring proposal to lenders with supporting financial analysis." },
      { step: "04", title: "Documentation", desc: "Coordinate with legal counsel to amend facility agreements and security arrangements." },
      { step: "05", title: "Implementation", desc: "Monitor compliance with restructured terms and provide ongoing financial support." },
    ],
    img: "banner-image1.jpg",
  },
  "bank-charges-audit": {
    title: "Bank Charges Audit",
    tagline: "Recover Excess Bank Charges for Your Business",
    description:
      "Nigerian businesses routinely overpay banks through excess COT charges, unauthorised fees, inflated forex spreads, and other overcharges — often without realising it. DealMaker's Bank Charges Audit service conducts a forensic review of your bank statements and facility agreements to identify and quantify overcharges, then engages your bank to secure refunds.",
    forWho: [
      "SMEs with active bank borrowing facilities",
      "Corporates with multi-bank relationships",
      "Companies with historical forex transactions",
      "Businesses that have received unexplained bank deductions",
    ],
    process: [
      { step: "01", title: "Statement Collection", desc: "Gather bank statements, facility letters, and tariff schedules for the review period." },
      { step: "02", title: "Forensic Analysis", desc: "Line-by-line review of charges against contractual and regulatory entitlements." },
      { step: "03", title: "Overcharge Report", desc: "Quantify overcharges by type and bank, with supporting documentation." },
      { step: "04", title: "Bank Engagement", desc: "Present findings to the bank with a formal claim for refund or credit." },
      { step: "05", title: "Recovery & Settlement", desc: "Negotiate and confirm refund or set-off of identified overcharges." },
    ],
    img: "banner-image2.jpg",
  },
};

// ─── CTA Form ─────────────────────────────────────────────────────────────────
const EnquiryForm = ({ serviceTitle }) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/inquiries/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: serviceTitle }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <FaCheckCircle className="text-3xl lg:text-5xl text-[#1A4137]" />
        <h3 className="text-2xl font-bold text-[#1A4137]">Enquiry Received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">An advisor will be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="relative">
        <FaRegUser className="absolute left-0 top-3.5 text-gray-400 text-xs" />
        <input required name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          type="text" placeholder="Full Name *"
          className="w-full border-b border-gray-300 pl-6 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent" />
      </div>
      <div className="relative">
        <FaEnvelope className="absolute left-0 top-3.5 text-gray-400 text-xs" />
        <input required name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          type="email" placeholder="Email Address *"
          className="w-full border-b border-gray-300 pl-6 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent" />
      </div>
      <div className="relative">
        <MdBusiness className="absolute left-0 top-3.5 text-gray-400" />
        <input name="company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
          type="text" placeholder="Company / Organisation"
          className="w-full border-b border-gray-300 pl-6 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent" />
      </div>
      <textarea required name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        placeholder="Tell us about your needs *" rows={3}
        className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent resize-none" />
      <button type="submit" disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A4137] text-white font-semibold hover:bg-[#0d2620] transition-colors disabled:opacity-60 mt-2">
        <FaRegPaperPlane /> {loading ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICES[slug];

  // 404 fallback
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#1A4137]">Service Not Found</h1>
        <p className="text-gray-500">The service you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/")} className="px-8 py-3 bg-[#C6D936] font-semibold">
          Back to Home
        </button>
      </div>
    );
  }

  const otherServices = Object.entries(SERVICES).filter(([k]) => k !== slug);

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img src={`/src/assets/Images/${service.img}`} className="h-full w-full object-cover object-center" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E2C]/95 to-[#082E2C]/30 flex flex-col justify-center px-8 md:px-24 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#C6D936] hover:underline">Home</Link>
            <FaAngleRight className="text-white text-xs" />
            <Link to="/service" className="text-[#C6D936] hover:underline">Services</Link>
            <FaAngleRight className="text-white text-xs" />
            <span className="text-white">{service.title}</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest w-fit">
            DEALMAKER ADVISORY
          </span>
          <h1 className="font-bold text-3xl md:text-5xl text-white leading-tight max-w-2xl">{service.title}</h1>
          <p className="text-[#C6D936] font-semibold text-lg">{service.tagline}</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 md:px-12 py-10 lg:py-16 gap-12">

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col gap-12">

          {/* Description */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">
              OVERVIEW
            </span>
            <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
          </div>

          {/* Who It's For */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">
              WHO IT'S FOR
            </span>
            <h2 className="text-2xl font-bold text-[#1A4137] mb-5">Is this service right for you?</h2>
            <ul className="flex flex-col gap-3">
              {service.forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <FaCheckCircle className="text-[#C6D936] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Steps */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-2xl font-bold text-[#1A4137] mb-8">How We Work</h2>
            <div className="flex flex-col gap-6">
              {service.process.map((p) => (
                <div key={p.step} className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl hover:border-[#1A4137]/30 hover:shadow-md transition-all">
                  <span className="text-3xl font-black text-[#C6D936] shrink-0 w-12 text-center">{p.step}</span>
                  <div>
                    <h3 className="font-bold text-[#1A4137] text-base mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:w-80 flex flex-col gap-8 shrink-0">

          {/* Enquiry Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#1A4137] mb-1">Enquire About This Service</h3>
            <p className="text-xs text-gray-400 mb-5">An advisor will respond within 1 business day.</p>
            <EnquiryForm serviceTitle={service.title} />
          </div>

          {/* Contact quick links */}
          <div className="bg-[#1A4137] rounded-2xl p-6 text-white flex flex-col gap-4">
            <h3 className="font-bold text-lg">Prefer to Talk?</h3>
            <a href="tel:+2348037080343" className="flex items-center gap-3 text-sm hover:text-[#C6D936] transition-colors">
              <FaPhone className="text-[#C6D936]" /> +234 803 708 0343
            </a>
            <a href="mailto:Info@dealmaker-advisors.com" className="flex items-center gap-3 text-sm hover:text-[#C6D936] transition-colors">
              <FaEnvelope className="text-[#C6D936]" /> Info@dealmaker-advisors.com
            </a>
          </div>

          {/* Other services */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-[#1A4137] mb-4">Other Services</h3>
            <div className="flex flex-col gap-2">
              {otherServices.slice(0, 6).map(([k, s]) => (
                <Link key={k} to={`/services/${k}`}
                  className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-0 text-sm text-gray-600 hover:text-[#1A4137] hover:font-medium transition-all group">
                  {s.title}
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-[#C6D936]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div className="bg-[#C6D936] py-12 px-8 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4137]">Ready to get started with {service.title}?</h2>
            <p className="text-[#1A4137]/70 mt-1">Book a free 30-minute consultation with one of our advisors.</p>
          </div>
          <Link to="/contact-us"
            className="px-8 py-4 bg-[#1A4137] text-white font-bold shrink-0 hover:bg-[#0d2620] transition-colors flex items-center gap-2">
            Book a Consultation <FaArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetail;
