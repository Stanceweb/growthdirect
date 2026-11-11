import React, { useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from "../../assets/Images/service-block-shape.png";
import {
  FaAngleRight,
  FaComment,
  FaCross,
  FaMagnifyingGlass,
  FaSearchengin,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import LeftImg from "../../assets/Images/news-details.jpg";
import { FaFacebookF, FaSearch, FaSearchDollar } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest, FaInstagram } from "react-icons/fa6";
import Cmt1 from "../../assets/Images/testi-2.jpg";
import Cmt2 from "../../assets/Images/testi-1.jpg";
import { IoClose } from "react-icons/io5";
import Blog1 from "../../assets/Images/blog1-1.jpg";
import Blog2 from "../../assets/Images/blog1-2.jpg";
import Blog3 from "../../assets/Images/blog1-3.jpg";
import { FaComments } from "react-icons/fa";

const NewsDetails = () => {
  const [value, setvalue] = useState("");

  const HandleClear = () => {
    setvalue("");
  };
  return (
    <>
      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">News Details</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                News
              </span>
            </div>
          </div>
        </div>

        <div className="container min-h-screen p-10 flex flex-row">
          <div className="left w-[65%] p-10 relative ">
            <img src={LeftImg} className="rounded-xl " />

            <div className="flex flex-col items-center text-center justify-center bg-[#2F5148] text-white w-14 h-14 absolute top-10 right-10">
              <p className="text-lg">28</p>
              <span className="text-[10px] -translate-y-1">AUG</span>
            </div>

            <div className="flex flex-row gap-5">
              <p className="flex items-center mt-5 gap-2 font-semibold text-gray-600">
                <span className="p-1 bg-[#2F5148] text-white rounded-full text-[10px]">
                  <FaUser />
                </span>
                Admin
              </p>
              <p className="flex items-center mt-5 gap-2 font-semibold text-gray-600">
                <span className="p-1 bg-[#2F5148] text-white rounded-full text-[10px]">
                  <FaComment />
                </span>
                02 Comments
              </p>
            </div>

            <h1 className="text-3xl font-bold mt-6">
              Delivering the best web design agency
            </h1>

            <p className="text-lg text-gray-700 leading-9 mt-6">
              Mauris non dignissim purus, ac commodo diam. Donec sit amet
              lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
              Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
              nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
              rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
              vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
            </p>
            <p className="text-lg text-gray-700 leading-9 mt-8">
              Mauris non dignissim purus, ac commodo diam. Donec sit amet
              lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
              Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
              nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
              rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
              vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
            </p>
            <p className="text-lg text-gray-700 leading-9 mt-8 border-b pb-10 border-gray-300">
              Mauris non dignissim purus, ac commodo diam. Donec sit amet
              lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
              Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
              nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
              rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
              vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
            </p>

            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex flex-row items-center gap-3">
                <p className="text-xl text-gray-700">Tags</p>
                <span className="bg-[#1A4137] text-sm text-white font-medium rounded-full px-8 py-3 hover:underline">
                  Business
                </span>
                <span className="bg-[#1A4137] text-sm text-white font-medium rounded-full px-8 py-3 hover:underline">
                  Agency
                </span>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 text-white text-xl">
                <span className="p-2 text-lg rounded-full bg-[#1A4137] duration-300 hover:bg-[#C6D936] hover:text-black">
                  <RiTwitterXLine />
                </span>

                <span className="p-2 text-lg rounded-full bg-[#1A4137] duration-300 hover:bg-[#C6D936] hover:text-black">
                  <FaFacebookF />
                </span>

                <span className="p-2 text-lg rounded-full bg-[#1A4137] duration-300 hover:bg-[#C6D936] hover:text-black">
                  <FaPinterest />
                </span>

                <span className="p-2 text-lg rounded-full bg-[#1A4137] duration-300 hover:bg-[#C6D936] hover:text-black">
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-10 gap-10">
              <div className="h-40 w-100 bg-[#F1F1F2] backdrop-blur-2xl flex items-center justify-center rounded-xl duration-500 hover:bg-[#1A4137] group">
                <h2 className="text-xl text-gray-500 leading-9 group-hover:text-white">
                  Bring to the table win-win servival <br />
                  strategies
                </h2>
              </div>
              <div className="h-40 w-100 bg-[#F1F1F2] backdrop-blur-2xl flex items-center justify-center rounded-xl duration-500 hover:bg-[#1A4137] group">
                <h2 className="text-xl text-gray-500 leading-9 group-hover:text-white">
                  How to lead a healthy & well - <br />
                  balanced life
                </h2>
              </div>
            </div>

            <div className="flex flex-col mt-10">
              <h1 className="font-bold text-3xl">2 Comments</h1>

              <div className="flex flex-row items-start gap-5 mt-10 border-b border-gray-300 pb-10">
                <img src={Cmt1} className="h-30 w-30 rounded-full" />

                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-xl font-bold text-[#1A4137]">
                    Kevin Martin
                  </h1>
                  <p className="text-gray-500 leading-8 text-sm">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod.
                  </p>
                </div>

                <button className="bg-[#1A4137] px-6 py-3 rounded-full text-white text-sm cursor-pointer">
                  Reply
                </button>
              </div>
              <div className="flex flex-row items-start gap-5 mt-10 border-b border-gray-300 pb-10">
                <img src={Cmt2} className="h-30 w-30 rounded-full" />

                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-xl font-bold text-[#1A4137]">
                    Sarah Albert
                  </h1>
                  <p className="text-gray-500 leading-8 text-sm">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod.
                  </p>
                </div>

                <button className="bg-[#1A4137] px-6 py-3 rounded-full text-white text-sm cursor-pointer">
                  Reply
                </button>
              </div>

              <div className="flex flex-col mt-12 gap-5">
                <h1 className="text-3xl font-bold">Leave a Comment</h1>

                <div className="flex flex-row mt-10 gap-6">
                  <input
                    type="text"
                    className="w-100 py-4 px-4 bg-[#F4F5F8] rounded-xl  focus:outline-blue-500"
                    placeholder="Enter Name"
                  />
                  <input
                    type="email"
                    className="w-100 py-4 px-4 bg-[#F4F5F8] rounded-xl  focus:outline-blue-500"
                    placeholder="Enter Email"
                  />
                </div>

                <textarea
                  rows={6}
                  className="w-full py-4 px-4 bg-[#F4F5F8] rounded-xl  focus:outline-blue-500"
                  placeholder="Enter Message"
                ></textarea>

                <button className="bg-[#1A4137] w-50 py-4  text-white text-sm cursor-pointer">
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
          <div className="right w-[35%] p-7">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                value={value}
                onChange={(e) => setvalue(e.target.value)}
                className="w-full bg-[#1A4137] py-5 px-6 pr-24 text-white placeholder:text-white outline-none rounded-2xl"
              />

              {/* Search Icon */}
              <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-xl cursor-pointer">
                <FaMagnifyingGlass />
              </span>

              {/* Clear Button */}
              {value && (
                <button
                  onClick={HandleClear}
                  className="text-white text-xl absolute top-1/2 right-20 -translate-y-1/2 cursor-pointer"
                >
                  <IoClose />
                </button>
              )}
            </div>

            <div className="mt-6 bg-[#F1F1F2] flex flex-col p-6 rounded-xl ">
              <h3 className="text-xl font-bold ">Latest Post</h3>

              <div className="flex flex-row gap-3 mt-6 duartion-500 p-4 hover:bg-white">
                <img src={Blog1} className="h-20 w-30 rounded-2xl" />

                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="p-1 bg-[#2F5148] text-white rounded-full text-[10px]">
                      <FaUser />
                    </span>
                    Admin
                  </p>

                  <h5 className="text-[16px] leading-6 font-bold">
                    How Scale Your Business
                    <br /> Without Losing Quality
                  </h5>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-6 duartion-500 p-4 hover:bg-white">
                <img src={Blog2} className="h-20 w-30 rounded-2xl" />

                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="p-1 bg-[#2F5148] text-white rounded-full text-[10px]">
                      <FaUser />
                    </span>
                    Admin
                  </p>

                  <h5 className="text-[16px] leading-6 font-bold">
                    Why Networking is Crusial for
                    <br />
                    Business Growth
                  </h5>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-6 duartion-500 p-4 hover:bg-white">
                <img src={Blog3} className="h-20 w-30 rounded-2xl" />

                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="p-1 bg-[#2F5148] text-white rounded-full text-[10px]">
                      <FaUser />
                    </span>
                    Admin
                  </p>

                  <h5 className="text-[16px]  font-bold">
                    10 Proven Strategies to Scale
                  </h5>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#F1F1F2] flex flex-col p-6 rounded-xl gap-4 ">
                <h3 className="text-xl font-bold ">Categories</h3>

                <p className="text-gray-800 duration-300 hover:bg-white p-3 hover:rounded-xl hover:font-bold ">Customer Engagement</p>
                <p className="text-gray-800 rounded-xl bg-white p-3 font-bold">Entrepreneurship</p>
                <p className="text-gray-800 duration-300 hover:bg-white p-3 hover:rounded-xl hover:font-bold ">Finance</p>
                <p className="text-gray-800 duration-300 hover:bg-white p-3 hover:rounded-xl hover:font-bold ">Investment</p>
                <p className="text-gray-800 duration-300 hover:bg-white p-3 hover:rounded-xl hover:font-bold ">Management</p>
            </div>

             <div className="mt-6 bg-[#F1F1F2] flex flex-col p-6 rounded-xl gap-4 ">
                <h3 className="text-xl font-bold ">Tags</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <span className="px-6 flex items-center justify-center py-3 text-sm font-medium bg-white rounded-full hover:bg-[#2F5148] hover:text-white duration-300">Advisor</span>
                  <span className="px-6 flex items-center justify-center py-3 text-sm font-medium bg-white rounded-full hover:bg-[#2F5148] hover:text-white duration-300">Branding</span>
                  <span className="px-6 flex items-center justify-center py-3 text-sm font-medium bg-white rounded-full hover:bg-[#2F5148] hover:text-white duration-300">Economy</span>
                  <span className="px-6 flex items-center justify-center py-3 text-sm font-medium bg-white rounded-full hover:bg-[#2F5148] hover:text-white duration-300">Experiance</span>
                  <span className="px-6 flex items-center justify-center py-3 text-sm font-medium bg-white rounded-full hover:bg-[#2F5148] hover:text-white duration-300">Freelancing</span>
                </div>
              </div>


               <div className="mt-6 bg-[#F1F1F2] flex flex-col p-6 rounded-xl gap-4 ">
                <h3 className="text-xl font-bold ">Recent Comments</h3>

                <div className="flex flex-row items-center gap-5 p-2 group">
                  <span className="p-3 bg-[#2F5148] text-white rounded-full group-hover:text-[#2F5148] group-hover:bg-[#C6D936] duration-300"><FaComments /></span>
                  <p className="text-[15px] text-gray-600 font-medium leading-6">A wordpress commenter on <br/>launch new mobile app</p>
                </div>
                <div className="flex flex-row items-center gap-5 p-2 group">
                  <span className="p-3 bg-[#2F5148] text-white rounded-full group-hover:text-[#2F5148] group-hover:bg-[#C6D936] duration-300"><FaComments /></span>
                  <p className="text-[15px] text-gray-600 font-medium leading-6"><span className="text-black">John Doe</span> on template: <br/>comments</p>
                </div>
                <div className="flex flex-row items-center gap-5 p-2 group">
                  <span className="p-3 bg-[#2F5148] text-white rounded-full group-hover:text-[#2F5148] group-hover:bg-[#C6D936] duration-300"><FaComments /></span>
                  <p className="text-[15px] text-gray-600 font-medium leading-6">A wordpress commenter on <br/>launch new mobile app</p>
                </div>
                <div className="flex flex-row items-center gap-5 p-2 group">
                  <span className="p-3 bg-[#2F5148] text-white rounded-full group-hover:text-[#2F5148] group-hover:bg-[#C6D936] duration-300"><FaComments /></span>
                  <p className="text-[15px] text-gray-600 font-medium leading-6"><span className="text-black">John Doe</span> on template: <br/>comments</p>
                </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
