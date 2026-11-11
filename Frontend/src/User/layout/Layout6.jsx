import React from "react";
import Header6 from "../components/header/header6/Header6";
import { Outlet } from "react-router-dom";
import Footer3 from "../components/Homepage 3 Components/Footer/Footer3";
import Logo2 from "../../assets/Images/logo-2.png";

const Layout6 = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* Header */}
      <Header6 />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer3
        bgColor="bg-[#063232]"
        bgColor2="bg-[#E24B1B]"
        Color="text-[#fff]"
        Color2="text-[#E24B1B]"
        logo = {Logo2}
      />
    </div>
  );
};

export default Layout6;
