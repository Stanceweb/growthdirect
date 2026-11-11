import React, { useState } from "react";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/Images/logo-light.png";
import adminBG from "../../assets/Images/banner-image1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid user or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="LoginPage h-screen w-full flex items-center justify-center">
      <img src={adminBG} className="h-full w-full blur-xs" />
      <div className="container absolute h-80 w-170 bg-red-500 flex flex-row items-center justify-center shadow-2xl shadow-[#10252B]">
        <div className="left h-full w-[60%] bg-[#10252B] p-10 flex flex-col items-start gap-5">
          <img src={Logo} alt="Logo" className="scale-110 px-2" />
          <h1 className="text-5xl font-bold w-100 text-white">
            Welcome Back
            <br />
            Admin
          </h1>
          <p className="text-white font-medium">
            Manage your business with ease and control.
          </p>
        </div>
        <div className="Right h-full w-[40%] bg-[#C6D936] text-[#10252B] flex flex-col items-center p-10">
          <h1 className="text-3xl font-semibold ">Login</h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col items-start gap-2 mt-3"
          >
            <label className="font-bold text-[14px] px-1">Email :</label>
            <span className="absolute top-30 ml-1 mt-0.5 text-lg p-2  rounded-full bg-gray-300">
              <MdOutlineMail />
            </span>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              className="bg-gray-200 py-3 w-60 px-12 rounded-md text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#10252B]"
              placeholder="you@example.com"
              required
            />

            <label className="font-bold text-[14px] px-1">Password:</label>
            <span className="absolute bottom-21 ml-1 mt-0.5 text-lg p-2  rounded-full bg-gray-300">
              <PiLockKeyLight />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setpassword(e.target.value)}
              className="bg-gray-200 py-3 w-60 px-12 rounded-md text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#10252B]"
              placeholder="enter your password"
              required
            />

            <span
              onClick={() => setshowPassword(!showPassword)}
              className="absolute bottom-22 right-8 cursor-pointer text-black text-xl "
            >
              {showPassword ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
            </span>

            <button
              disabled={loading}
              className="w-40 ml-10 mt-5 py-2 bg-[#10252B] text-white rounded-full flex items-center justify-center gap-3 cursor-pointer text-[14px] hover:bg-[#0d1f24] transition"
            >
              {loading ? (
                <>
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                  Logging...
                </>
              ) : (
                "Login"
              )}
              <span className="text-2xl">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
