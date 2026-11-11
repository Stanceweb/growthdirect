import React, { useState, useEffect } from "react";
import Topbar3 from "./Topbar3";
import Navbar3 from "./Navbar3";

const Header3 = () => {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 SINGLE HEADER CONTAINER */}
      <header
        className={`w-full transition-all duration-300 ${
          hideTopbar
            ? "fixed top-0 left-0 bg-white shadow-md z-50"
            : "relative bg-[#FAF0E7]"
        }`}
      >
        {/* Topbar */}
        <div
          className={`transition-all duration-300 ${
            hideTopbar
              ? "-translate-y-full opacity-0 h-0 overflow-hidden"
              : "translate-y-5 opacity-100 "
          }`}
        >
          <Topbar3 />
        </div>

        {/* Navbar */}
        <Navbar3 hideTopbar={hideTopbar} />
      </header>

      {/* Spacer */}
      {hideTopbar && <div className="h-[100px]"></div>}
    </>
  );
};

export default Header3;