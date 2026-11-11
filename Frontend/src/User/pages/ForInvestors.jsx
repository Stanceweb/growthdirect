import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleRight, FaCheckCircle, FaArrowRight, FaRegPaperPlane,
  FaEnvelope, FaChartLine, FaShieldAlt, FaUsers, FaBookOpen, FaQuestionCircle
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import BannerImg from "../../assets/Images/banner-image1.jpg";

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Who is DealMaker Financial Advisors?",
    a: "DealMaker Financial Advisors is a registered investment advisory firm providing portfolio management, corporate finance, and capital market advisory services in Nigeria. We serve both retail and institutional clients across the NGX ecosystem."
  },
  {
    q: "Do I need a large sum to start investing?",
    a: "No. We work with investors at various stages — from individuals building their first portfolio to institutions managing significant capital. Contact us for a consultation and we'll tailor a strategy to your starting position."
  },
  {
    q: "How do I get started as a new investor?",
    a: "Simply fill in the registration form on this page or visit our Contact page to book a free 30-minute consultation. An advisor will walk you through the process — account opening, risk profiling, and strategy design."
  },
  {
    q: "Is DealMaker regulated?",
    a: "Yes. DealMaker Financial Advisors operates in compliance with the Securities & Exchange Commission (SEC) of Nigeria and applicable Nigerian securities laws. We are committed to full regulatory compliance."
  },
  {
    q: "What markets do you invest in?",
    a: "Our primary focus is the Nigerian Exchange Group (NGX) — equities, fixed income (FGN bonds, T-Bills), and money market instruments. We also advise on structured products and alternative investments for qualified investors."
  },
  {
    q: "How do I access your research reports?",
    a: "Free market summaries are publicly available on our Research & Insights page. Full premium reports are unlocked with a simple email registration. Existing clients receive reports directly to their inbox."
  },
  {
    q: "What fees do you charge?",
    a: "Our fee structures vary by service — advisory retainer, performance-linked, or project-based. We will clearly outline all fees during your initial consultation. We do not earn hidden commissions on products we recommend."
  },
];

// ─── How It Works steps ───────────────────────────────────────────────────────
const STEPS = [
  { icon: <FaUsers />, step: "01", title: "Book a Free Consultation", desc: "Fill in the form or email us to schedule a no-obligation 30-minute discovery call with one of our advisors." },
  { icon: <FaChartLine />, step: "02", title: "Risk & Goal Assessment", desc: "We understand your financial objectives, investment horizon, risk tolerance, and liquidity requirements." },
  { icon: <FaBookOpen />, step: "03", title: "Strategy Design", desc: "We develop a bespoke investment strategy — asset allocation, instrument selection, and expected outcomes." },
  { icon: <FaShieldAlt />, step: "04", title: "Execution & Monitoring", desc: "We guide implementation and provide regular performance reports, rebalancing advice, and market updates." },
];

// ─── Accordion ───────────────────────────────────────────────────────────────
const Accordion = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-gray-200 rounded-xl overflow-hidden transition-all ${open ? "border-[#1A4137]" : ""}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1A4137] hover:bg-gray-50 transition-colors">
        <span className="flex items-center gap-3"><FaQuestionCircle className="text-[#C6D936] shrink-0" />{q}</span>
        <span className={`text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{a}</div>}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ForInvestors = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", investorType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/inquiries/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "New Investor Onboarding" }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img src={BannerImg} className="h-full w-full object-cover object-center" alt="For Investors" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E2C]/95 to-[#082E2C]/20 flex flex-col justify-center px-8 md:px-24 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#C6D936] hover:underline">Home</Link>
            <FaAngleRight className="text-white text-xs" />
            <span className="text-white">For Investors</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest w-fit">
            START YOUR INVESTMENT JOURNEY
          </span>
          <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl">
            Invest Smarter with<br />DealMaker Advisory
          </h1>
          <p className="text-white/70 max-w-lg text-sm md:text-base">
            Whether you're a first-time investor or an experienced market participant, our advisors are here to help you navigate the Nigerian capital market confidently.
          </p>
        </div>
      </div>

      {/* ── Why Invest with Us ── */}
      <section className="bg-gray-50 py-10 lg:py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">WHY DEALMAKER</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4137] mb-5">Why Invest Through DealMaker?</h2>
            <div className="flex flex-col gap-4">
              {[
                "Independent advisory — no product conflicts or hidden commissions",
                "Research-backed investment decisions grounded in NGX data",
                "Bespoke strategies tailored to your specific goals and risk profile",
                "Transparent fee structures — you know exactly what you're paying",
                "Regulatory compliance — SEC-registered and fully accountable",
                "Ongoing support — regular reporting, rebalancing, and market updates",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#C6D936] mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { value: "₦2B+", label: "Assets Under Advisory" },
              { value: "200+", label: "Active Investors" },
              { value: "15+", label: "Years in the Market" },
              { value: "100%", label: "Independent Advice" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-black text-[#C6D936]">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-10 lg:py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4137]">Your Path to Investing</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">Getting started is simple. Here's what to expect when you engage DealMaker.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#1A4137]/30 hover:shadow-md transition-all">
                <span className="text-3xl font-black text-[#C6D936]">{s.step}</span>
                <span className="p-4 rounded-full bg-[#1A4137] text-white text-2xl">{s.icon}</span>
                <h3 className="font-bold text-[#1A4137]">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form + FAQs ── */}
      <section className="bg-[#f8f9f4] py-10 lg:py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Registration Form */}
          <div className="lg:w-1/2 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <FaCheckCircle className="text-3xl lg:text-5xl text-[#1A4137]" />
                <h3 className="text-2xl font-bold text-[#1A4137]">You're on the list!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you, <strong>{form.name}</strong>. An advisor will reach out within 1 business day to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">GET STARTED</span>
                <h3 className="text-2xl font-bold text-[#1A4137] mb-2">Register Your Interest</h3>
                <p className="text-gray-500 text-sm mb-6">Fill in your details and an advisor will contact you to arrange your free first consultation.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  </div>

                  <select required name="investorType" value={form.investorType} onChange={e => setForm({ ...form, investorType: e.target.value })}
                    className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent text-gray-500 appearance-none">
                    <option value="" disabled>I am a... *</option>
                    <option>First-time investor</option>
                    <option>Experienced retail investor</option>
                    <option>High-net-worth individual</option>
                    <option>Corporate / Institutional investor</option>
                    <option>SME owner</option>
                  </select>

                  <textarea name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us briefly about your investment goals (optional)" rows={3}
                    className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent resize-none" />

                  <button type="submit" disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1A4137] text-white font-semibold hover:bg-[#0d2620] transition-colors disabled:opacity-60">
                    <FaRegPaperPlane /> {loading ? "Submitting…" : "Request Free Consultation"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Your details are handled securely per the Nigeria Data Protection Act.</p>
                </form>
              </>
            )}
          </div>

          {/* FAQs */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">FAQs</span>
            <h3 className="text-2xl font-bold text-[#1A4137] mb-6">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => <Accordion key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#1A4137] py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to start your investment journey?</h2>
            <p className="text-white/60 mt-1 text-sm">Join 200+ investors who trust DealMaker with their capital market goals.</p>
          </div>
          <Link to="/contact-us"
            className="px-8 py-4 bg-[#C6D936] text-black font-bold shrink-0 hover:bg-[#b5c72e] transition-colors flex items-center gap-2">
            Book a Consultation <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ForInvestors;
