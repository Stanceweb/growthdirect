import React, { useEffect, useState } from "react";
import Topbar1 from "./Topbar1";
import Navbar1 from "./Navbar1";

const Header = () => {
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
      {/* Wrapper to avoid content jump */}
      <div className="w-full">

        {/* Topbar */}
        <div
          className={`transition-all duration-300 ${
            hideTopbar
              ? "-translate-y-full opacity-0 h-0 overflow-hidden"
              : "translate-y-0 opacity-100 h-12"
          }`}
        >
          <Topbar1 />
        </div>

        {/* Navbar */}
        <div
          className={`transition-all duration-300 ${
            hideTopbar
              ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 animate-slideDown"
              : "relative"
          }`}
        >
         <Navbar1 hideTopbar={hideTopbar} />
        </div>

      </div>

      {/* Spacer (VERY IMPORTANT) */}
      {hideTopbar && <div className="h-22"></div>}
    </>
  );
};

export default Header;