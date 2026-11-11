import React from "react";
import Header7 from "../components/header/header7/Header7";
import { Outlet } from "react-router-dom";
import Footer2 from "../components/Homepage2 components/Footer/Footer2"

const Layout7 = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] overflow-hidden py-6">
      <Header7 />
      <main>
        <Outlet />
      </main>
      <Footer2 />
    </div>
  );
};

export default Layout7;