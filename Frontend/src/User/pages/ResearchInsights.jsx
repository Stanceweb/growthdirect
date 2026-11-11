import React, { useState } from "react";
import { FaLock, FaUnlock, FaDownload, FaCalendarAlt, FaTag, FaSearch, FaTimes, FaCheckCircle } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

// ─── Seed data (replace with API call when backend is ready) ────────────────
const REPORTS = [
  {
    id: 1,
    title: "NGX Market Outlook — Q3 2026",
    summary: "A comprehensive review of the Nigerian Exchange Group performance in Q3 2026, covering equity market indices, sector returns, and macroeconomic drivers shaping investor sentiment.",
    category: "Market Commentary",
    date: "September 2026",
    readTime: "8 min read",
    gated: false,
    badge: "FREE",
    badgeColor: "bg-[#C6D936] text-black",
  },
  {
    id: 2,
    title: "Fixed Income & T-Bills: Yield Curve Analysis",
    summary: "An in-depth look at Nigeria's fixed income landscape — treasury bill yields, FGN bond performance, and opportunities in the short-end of the curve.",
    category: "Fixed Income",
    date: "August 2026",
    readTime: "12 min read",
    gated: true,
    badge: "PREMIUM",
    badgeColor: "bg-[#1A4137] text-white",
  },
  {
    id: 3,
    title: "SME Corporate Finance: Raising Capital in Nigeria",
    summary: "A guide for Nigerian SMEs on capital-raising options — equity, debt, structured finance — and how to position for advisory mandates in the current rate environment.",
    category: "Corporate Finance",
    date: "August 2026",
    readTime: "10 min read",
    gated: true,
    badge: "PREMIUM",
    badgeColor: "bg-[#1A4137] text-white",
  },
  {
    id: 4,
    title: "Debt Recovery Strategies for Nigerian Corporates",
    summary: "Practical frameworks for recovering non-performing receivables, legal enforcement pathways under Nigerian law, and negotiation tactics for out-of-court settlements.",
    category: "Debt & Recovery",
    date: "July 2026",
    readTime: "9 min read",
    gated: false,
    badge: "FREE",
    badgeColor: "bg-[#C6D936] text-black",
  },
  {
    id: 5,
    title: "Business Valuation in Volatile Markets",
    summary: "How to value a business when macro conditions are uncertain — discount rate adjustments, scenario-based DCF, and comparables analysis in the Nigerian context.",
    category: "Valuation",
    date: "July 2026",
    readTime: "14 min read",
    gated: true,
    badge: "PREMIUM",
    badgeColor: "bg-[#1A4137] text-white",
  },
  {
    id: 6,
    title: "Bank Charges Audit: What Nigerian Businesses Are Missing",
    summary: "A review of common excess bank charges Nigerian businesses unknowingly pay — from COT overcharges to forex spread abuses — and how to reclaim them.",
    category: "Banking & Audit",
    date: "June 2026",
    readTime: "7 min read",
    gated: false,
    badge: "FREE",
    badgeColor: "bg-[#C6D936] text-black",
  },
];

const CATEGORIES = ["All", "Market Commentary", "Fixed Income", "Corporate Finance", "Debt & Recovery", "Valuation", "Banking & Audit"];

// ─── Gated Access Modal ───────────────────────────────────────────────────────
const GateModal = ({ report, onClose, onSuccess }) => {
  const [form, setForm] = useState({ name: "", email: "", investorType: "Individual Investor" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => { onSuccess(report.id); onClose(); }, 1800);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><FaTimes /></button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <FaCheckCircle className="text-3xl lg:text-5xl text-[#1A4137]" />
            <h3 className="text-2xl font-bold text-[#1A4137]">Access Granted!</h3>
            <p className="text-gray-500">Unlocking your report now…</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-[#1A4137] text-white"><FaLock /></span>
              <div>
                <h3 className="text-xl font-bold text-[#1A4137]">Premium Report Access</h3>
                <p className="text-sm text-gray-500">Enter your details to unlock the full report</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-700 mb-1 line-clamp-2">"{report.title}"</p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Adeola Johnson"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1A4137]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="adeola@company.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1A4137]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Investor Type</label>
                <select
                  value={form.investorType}
                  onChange={e => setForm({ ...form, investorType: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1A4137] bg-white"
                >
                  <option>Individual Investor</option>
                  <option>Corporate / Institutional</option>
                  <option>SME Owner</option>
                  <option>Financial Professional</option>
                  <option>Media / Researcher</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#1A4137] text-white font-semibold rounded-lg mt-2 hover:bg-[#0d2620] transition-colors disabled:opacity-60"
              >
                {loading ? "Unlocking…" : "Unlock Full Report →"}
              </button>
              <p className="text-xs text-gray-400 text-center">We respect your privacy. No spam, ever.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Report Card ─────────────────────────────────────────────────────────────
const ReportCard = ({ report, isUnlocked, onGateClick }) => {
  const canAccess = !report.gated || isUnlocked;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
      {/* Header accent */}
      <div className="h-1.5 bg-[#1A4137]" />

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Badges row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${report.badgeColor}`}>
            {report.badge}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <FaTag className="text-[10px]" /> {report.category}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
            <FaCalendarAlt className="text-[10px]" /> {report.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-[#1A4137] leading-snug">{report.title}</h3>

        {/* Summary — blurred if gated and not unlocked */}
        <div className={`relative text-sm text-gray-600 leading-relaxed ${!canAccess ? "max-h-16 overflow-hidden" : ""}`}>
          <p>{report.summary}</p>
          {!canAccess && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        {/* Read time */}
        <p className="text-xs text-gray-400">{report.readTime}</p>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6">
        {canAccess ? (
          <button className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-[#1A4137] text-[#1A4137] font-semibold rounded-lg hover:bg-[#1A4137] hover:text-white transition-all duration-200 text-sm">
            <FaDownload /> Read Full Report
          </button>
        ) : (
          <button
            onClick={() => onGateClick(report)}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1A4137] text-white font-semibold rounded-lg hover:bg-[#0d2620] transition-all duration-200 text-sm"
          >
            <FaLock /> Unlock Report
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ResearchInsights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [gateReport, setGateReport] = useState(null);
  const [unlockedIds, setUnlockedIds] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const filtered = REPORTS.filter(r => {
    const matchesCategory = activeCategory === "All" || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUnlock = (id) => setUnlockedIds(prev => [...prev, id]);

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterDone(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9f4]">

      {/* ── Hero Banner ── */}
      <section className="bg-[#1A4137] text-white py-10 lg:py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-5">
            NGX CAPITAL MARKET ADVISORY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Research &<br />Insights
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Capital market reports, macroeconomic commentary, and sector analysis — curated by DealMaker's advisory team. Free summaries open to all; full reports unlocked with a quick registration.
          </p>
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1A4137] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search reports…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1A4137]"
            />
          </div>
        </div>
      </section>

      {/* ── Report Grid ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-10 lg:py-20 text-gray-400">
            <FaSearch className="text-3xl lg:text-5xl mx-auto mb-4 opacity-30" />
            <p className="text-lg">No reports match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(report => (
              <ReportCard
                key={report.id}
                report={report}
                isUnlocked={unlockedIds.includes(report.id)}
                onGateClick={setGateReport}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Newsletter Strip ── */}
      <section className="bg-[#1A4137] py-10 lg:py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#C6D936] text-black text-xs font-bold tracking-widest mb-4">
            MARKET UPDATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Reports Delivered to Your Inbox
          </h2>
          <p className="text-white/70 mb-8">
            Subscribe to DealMaker's monthly capital markets newsletter — no spam, just insight.
          </p>

          {newsletterDone ? (
            <div className="flex items-center justify-center gap-3 text-[#C6D936] font-semibold text-lg">
              <FaCheckCircle /> You're subscribed! Welcome aboard.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                required
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="flex-1 max-w-sm px-5 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C6D936]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#C6D936] text-black font-bold rounded-lg hover:bg-[#b5c72e] transition-colors text-sm"
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Gated Modal ── */}
      {gateReport && (
        <GateModal
          report={gateReport}
          onClose={() => setGateReport(null)}
          onSuccess={handleUnlock}
        />
      )}
    </div>
  );
};

export default ResearchInsights;
