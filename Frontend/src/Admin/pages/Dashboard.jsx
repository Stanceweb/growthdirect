import React, { useEffect, useState } from "react";
import axios from "../services/axiosInstance";
import AdminCards from "../components/AdminCards";
import { useNavigate } from "react-router-dom";

// Sidebar ke same icons
import { Users, Folder, Package } from "lucide-react";
import { LiaBlogSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { CiSquareQuestion } from "react-icons/ci";

const Dashboard = () => {
  const navigate = useNavigate();
  const [Dashboard, setDashboard] = useState({});

  const getDashBoard = async () => {
    try {
      const res = await axios.get("/admin/dashboard-counts");
      setDashboard(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDashBoard();
  }, []);

  const Cards = [
    {
      id: 1,
      heading: "Total Users",
      count: Dashboard.total_users,
      path: "/admin/users",
      icon: <Users />,
      bg: "bg-gradient-to-r from-blue-200 to-blue-300",
    },
    {
      id: 2,
      heading: "Total Categories",
      count: Dashboard.total_categories,
      path: "/admin/categories",
      icon: <Folder />,
      bg: "bg-gradient-to-r from-green-200 to-green-300",
    },
    {
      id: 3,
      heading: "Total Services",
      count: Dashboard.total_services,
      path: "/admin/services",
      icon: <Package />,
      bg: "bg-gradient-to-r from-purple-200 to-purple-300",
    },
    {
      id: 4,
      heading: "Total Blogs",
      count: Dashboard.total_blogs,
      path: "/admin/blogs",
      icon: <LiaBlogSolid />,
      bg: "bg-gradient-to-r from-pink-200 to-pink-300",
    },
    {
      id: 5,
      heading: "Total TeamMembers",
      count: Dashboard.total_team_members,
      path: "/admin/team-members",
      icon: <RiTeamLine />,
      bg: "bg-gradient-to-r from-yellow-200 to-yellow-300",
    },
    {
      id: 6,
      heading: "Total Testimonials",
      count: Dashboard.total_testimonials,
      path: "/admin/testimonials",
      icon: <VscFeedback />,
      bg: "bg-gradient-to-r from-orange-200 to-orange-300",
    },
    {
      id: 7,
      heading: "Total Inquiries",
      count: Dashboard.total_inquiries,
      path: "/admin/inquiries",
      icon: <CiSquareQuestion />,
      bg: "bg-gradient-to-r from-red-200 to-red-300",
    },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      <div className="grid grid-cols-4 gap-6">
        {Cards.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => navigate(elem.path)}
            className="cursor-pointer"
          >
            <AdminCards
              heading={elem.heading}
              count={elem.count || 0}
              icon={elem.icon}
              bg={elem.bg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Dashboard;