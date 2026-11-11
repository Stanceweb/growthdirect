import { User, LogOut ,UserKey} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axiosInstance";

const Header = () => {
  const navigate = useNavigate();

  const id = 2; // ✅ FIX

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  const [info, setinfo] = useState({});

  const adminInfo = async () => {
    try {
      const res = await axios.get(`/admin/user/${id}`);
      setinfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    adminInfo();
  }, []); // ✅ FIX

  return (
    <div className="h-20 bg-[#C7D635] shadow-md flex items-center justify-between px-8">
      <h1 className="text-2xl font-semibold text-[#101828]">
        Welcome {info?.name || "Admin"} 👋
      </h1>

      <div className="flex items-center gap-5 relative">
        {/* 👤 Profile */}
        <div className="group relative">
          <div className="bg-white/40 p-2 rounded-full cursor-pointer">
            <User size={22} />
          </div>

          {/* 🔥 Hover */}
          <div
            className="absolute right-0 mt-3 w-60 bg-white shadow-lg rounded-lg p-4 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 flex flex-row items-center gap-2"
          >
          <div className="">
            <UserKey size={40} color="#000" className="p-2 rounded-full bg-gray-100" absoluteStrokeWidth />
          </div>
          <div className="">

            <p className="text-sm font-semibold text-gray-800">{info?.name}</p>
            <p className="text-xs text-gray-500">{info?.email}</p>

            <p className="text-xs font-bold  text-blue-600 mt-2">
              {" "}
              {info?.role?.charAt(0).toUpperCase() + info?.role?.slice(1)}
            </p>
          </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2"
        >
          Logout <LogOut size={16} />
        </button>
      </div>
    </div>
  );
};

export default Header;
