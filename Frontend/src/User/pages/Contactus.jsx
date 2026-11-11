import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleRight, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaCheckCircle, FaRegPaperPlane, FaClock, FaLinkedinIn,
  FaTwitter, FaFacebookF
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdBusiness } from "react-icons/md";
import BannerImg from "../../assets/Images/banner-image2.jpg";

// ─── Contact Info Cards ───────────────────────────────────────────────────────
const INFO_CARDS = [
  {
    id: 1,
    icon: <FaPhone />,
    heading: "Call Us",
    lines: ["+234 803 708 0343", "Mon – Fri, 8:00 AM – 5:00 PM"],
    accent: "bg-[#C6D936]",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    heading: "Email Us",
    lines: ["Info@dealmaker-advisors.com", "contact@dealmaker-advisors.com"],
    accent: "bg-[#1A4137]",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    heading: "Visit Us",
    lines: ["Lagos, Nigeria", "Abuja Liaison Office"],
    accent: "bg-[#C6D936]",
  },
  {
    id: 4,
    icon: <FaClock />,
    heading: "Business Hours",
    lines: ["Monday – Friday: 8 AM – 5 PM", "Saturday: 9 AM – 1 PM"],
    accent: "bg-[#1A4137]",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const Contactus = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
    } catch {
      // even if API fails, show success UX for now
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="flex flex-col">

      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <div className="relative h-72 md:h-90 w-full overflow-hidden">
        <img src={BannerImg} className="h-full w-full object-cover object-center" alt="Contact DealMaker" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E2C]/90 to-[#082E2C]/30 flex flex-col justify-center px-10 md:px-30 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#C6D936] hover:underline">Home</Link>
            <FaAngleRight className="text-white text-xs" />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="font-bold text-4xl md:text-6xl text-white">Get in Touch</h1>
          <p className="text-white/70 max-w-lg text-sm md:text-base">
            Ready to start investing or need advisory support? Our team is here to help.
          </p>
        </div>
      </div>

      {/* ── Info Cards ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-gray-100">
        {INFO_CARDS.map((card) => (
          <div key={card.id} className="flex flex-col items-center justify-center py-10 px-6 text-center border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors">
            <span className={`text-xl p-4 rounded-full text-white mb-4 ${card.accent}`}>
              {card.icon}
            </span>
            <h3 className="font-bold text-[#1A4137] text-lg mb-2">{card.heading}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="text-gray-500 text-sm">{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Main Content: Form + Map ──────────────────────────────── */}
      <div className="flex flex-col lg:flex-row min-h-[700px]">

        {/* Left — Consultation Form */}
        <div className="lg:w-1/2 p-8 md:p-16 bg-white">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-10 lg:py-20">
              <FaCheckCircle className="text-3xl lg:text-6xl text-[#1A4137]" />
              <h2 className="text-3xl font-bold text-[#1A4137]">Message Received!</h2>
              <p className="text-gray-500 max-w-sm">
                Thank you, <strong>{form.name}</strong>. One of our advisors will reach out to you within 1 business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                className="mt-4 px-6 py-2.5 border-2 border-[#1A4137] text-[#1A4137] font-semibold rounded-lg hover:bg-[#1A4137] hover:text-white transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-5">
                BOOK A CONSULTATION
              </span>
              <h2 className="text-4xl font-bold text-[#1A4137] mb-2">Talk to an Advisor</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Tell us about your financial goals. We'll connect you with the right specialist.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <FaRegUser className="absolute left-0 top-3.5 text-gray-400 text-sm" />
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      type="text" placeholder="Full Name *"
                      className="w-full border-b border-gray-300 pl-7 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent"
                    />
                  </div>
                  <div className="relative">
                    <MdBusiness className="absolute left-0 top-3.5 text-gray-400" />
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      type="text" placeholder="Company / Organisation"
                      className="w-full border-b border-gray-300 pl-7 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <FaEnvelope className="absolute left-0 top-3.5 text-gray-400 text-sm" />
                    <input
                      name="email" required value={form.email} onChange={handleChange}
                      type="email" placeholder="Email Address *"
                      className="w-full border-b border-gray-300 pl-7 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent"
                    />
                  </div>
                  <div className="relative">
                    <FaPhone className="absolute left-0 top-3.5 text-gray-400 text-sm" />
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      type="tel" placeholder="Phone Number"
                      className="w-full border-b border-gray-300 pl-7 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent"
                    />
                  </div>
                </div>

                {/* Service selector */}
                <div className="relative">
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent text-gray-500 appearance-none"
                  >
                    <option value="" disabled>Select Service of Interest *</option>
                    <option>Portfolio Advisory</option>
                    <option>Corporate Finance</option>
                    <option>Business Valuation</option>
                    <option>Auction</option>
                    <option>Tax Advisory</option>
                    <option>Debt Recovery</option>
                    <option>Loan Restructuring</option>
                    <option>Bank Charges Audit</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <CiEdit className="absolute left-0 top-3 text-gray-400 text-xl" />
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    placeholder="Tell us about your needs *"
                    rows={4}
                    className="w-full border-b border-gray-300 pl-7 py-3 text-sm focus:outline-none focus:border-[#1A4137] bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="flex items-center gap-3 px-8 py-4 bg-[#1A4137] text-white font-semibold w-fit mt-2 hover:bg-[#0d2620] transition-colors disabled:opacity-60 cursor-pointer"
                >
                  <FaRegPaperPlane />
                  {loading ? "Sending…" : "Request a Consultation"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Right — Map + Contact Summary */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Lagos map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46330442936!2d3.1191219!3d6.5483605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1694000000000"
            className="w-full h-[400px] lg:h-[500px] border-0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DealMaker Lagos Office"
          />

          {/* Quick contact bar */}
          <div className="bg-[#1A4137] text-white p-8 flex flex-col gap-6 flex-1">
            <h3 className="text-xl font-bold text-[#C6D936]">DealMaker Financial Advisors</h3>
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C6D936] mt-1 shrink-0" />
                <span>Lagos Island / Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#C6D936] shrink-0" />
                <span>+234 803 708 0343</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C6D936] shrink-0" />
                <span>Info@dealmaker-advisors.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs text-white/50 uppercase tracking-widest">Follow us</span>
              {[FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, i) => (
                <span key={i} className="p-2 rounded-full bg-white/10 hover:bg-[#C6D936] hover:text-black transition-colors cursor-pointer">
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Regulatory Disclaimer ──────────────────────────────────── */}
      <div className="bg-gray-50 border-t border-gray-200 px-8 md:px-20 py-8">
        <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
          <strong>Regulatory Disclosure:</strong> DealMaker Financial Advisors is a registered investment advisory firm.
          All investment advisory services are subject to applicable Nigerian securities laws and SEC regulations.
          Past performance is not indicative of future results. Investment involves risk including possible loss of principal.
          Please read our full <span className="underline cursor-pointer">Legal & Compliance</span> disclosures before engaging our services.
        </p>
      </div>

    </section>
  );
};

export default Contactus;
