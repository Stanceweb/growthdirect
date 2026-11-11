import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Package, Folder } from "lucide-react";
import { LiaBlogSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { CiSquareQuestion } from "react-icons/ci";

import logo from "../../assets/Images/logo-light.png";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200 hover:bg-[#C7D635] hover:text-black";

  const activeClass = "bg-[#C7D635] text-black";

  return (
    <div className="w-65 h-screen bg-gray-900 text-white fixed flex flex-col">

      {/* Logo */}
      <div className="p-5 border-b border-gray-700">
        <img src={logo} alt="logo" className="w-36" />
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-2">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <Users size={20} /> Users
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <Folder size={20} /> Categories
        </NavLink>

        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <Package size={20} /> Services
        </NavLink>

        <NavLink
          to="/admin/blogs"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <LiaBlogSolid size={20} /> Blogs
        </NavLink>

        <NavLink
          to="/admin/team-members"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <RiTeamLine size={20} /> Team Members
        </NavLink>

        <NavLink
          to="/admin/testimonials"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <VscFeedback size={20} /> Testimonials
        </NavLink>

        <NavLink
          to="/admin/inquiries"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <CiSquareQuestion size={20} /> Inquiries
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;