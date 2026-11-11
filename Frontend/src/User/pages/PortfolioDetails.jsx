import React from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from "../../assets/Images/service-block-shape.png";
import { FaAngleRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import projectdetails1 from "../../assets/Images/project-details-1.jpg";
import projectdetails2 from "../../assets/Images/project-details-2.jpg";
import projectdetails3 from "../../assets/Images/project-details-3.jpg";
import projectdetails4 from "../../assets/Images/project-details-4.jpg";
import { CgMenuGridR } from "react-icons/cg";
const PortfolioDetails = () => {
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
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Project Details</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Project Details
              </span>
            </div>
          </div>
        </div>

        <div className="container flex flex-row p-4 lg:p-20">
          <div className="left w-full lg:w-[60%] p-10">
            <p className="font-semibold text-sm tracking-widest mx-2">
              ABOUT THE PROJECT
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold leading-14 mt-4">
              Deeper Dive Into Our Digital <br />
              Product Design Masterpieces
            </h1>
            <p className="text-lg leading-9 text-gray-500 mt-6">
              Sed ut perspiciatis unde omniste natus voluptatem accusantiume rem
              aperia eaque ipsa
              <br /> quae abillo inventore veritatis quasi architecto beatae
              vitae dicta sunt explicabo. Nemo
              <br /> enim epsam voluptatem quia voluptas aspernatur odites sed
              quia consequunture
            </p>
            <button className="flex items-center text-white bg-[#1A4137] px-10 gap-2 mt-4 py-4">
              Visit Website <FaAngleRight />
            </button>
          </div>
          <div className="right w-full lg:w-[40%] p-10 translate-x-40">
            <div className="box w-full lg:w-[60%]  h-90 bg-[#F8F5F2] p-6">
              <p className="font-bold">Clients</p>
              <span className="text-gray-500">Design Studio In USA</span>
              <p className="font-bold mt-5">Project Type</p>
              <span className="text-gray-500">Design Product Design</span>
              <p className="font-bold mt-5">Date</p>
              <span className="text-gray-500">25 October 2023</span>
              <p className="font-bold mt-5">Website</p>
              <span className=" underline ">yourdomain.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-10 -mt-30">
          <div className="left  p-10">
            <img src={projectdetails1} className="h-full w-full object-cover" />
          </div>
          <div className="right p-10">
            <img src={projectdetails2} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-row p-10 items-center justify-between -mt-20 border-b border-gray-300">
          <div className="left p-10">
            <h1 className="text-3xl lg:text-5xl font-bold leading-14">
              Intresting Facts In <br />
              Development
            </h1>
          </div>

          <div className="right p-10">
            <p className="text-gray-500 leading-9 text-lg">
              Must explain to you how all this mistaken idea of denouncing
              pleasure and
              <br /> praising pain was born and I will give you a complete
              account of the system,
              <br /> and expound the actual teachings of the great explorer of
              the truth, the
              <br /> master-builder of human happiness. No one rejects,
              dislikes, or avoids
              <br /> pleasure itself, because it is pleasure, but because those
              who do not know
              <br /> how to pursue pleasure rationally encounter
            </p>

            <div className="flex flex-row items-center gap-4 lg:p-20 mt-10">
              <p className="flex items-center gap-3">
                <FaCheck />
                Efficient Sprint Planning
              </p>
              <p className="flex items-center gap-3">
                <FaCheck />
                Standups and Demos
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 lg:p-20 mt-5">
              <p className="flex items-center gap-3">
                <FaCheck />
                iternative Delivery Approach
              </p>
              <p className="flex items-center gap-3 -mx-8 ">
                <FaCheck />
                Problem-Solving
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row p-10 items-center justify-between -mt-10 border-b border-gray-300">
          <div className="left p-10">
            <h1 className="text-3xl lg:text-5xl font-bold leading-14">
              The Result Of <br />
              Our Project
            </h1>
          </div>

          <div className="right p-10">
            <p className="text-gray-500 leading-9 text-lg">
              Will give you a complete account of the system, and expound the
              actual
              <br /> teachings of the great explorer of the truth, the
              master-builder of <br /> happiness rejects, dislikes, or avoids
              pleasure
            </p>

            <p className="flex items-center gap-3 mt-10 text-xl font-bold">
              <span className="bg-[#1A4137] text-white p-2 rounded-full text-sm ">
                <FaCheck />
              </span>
              Support Clients
            </p>
            <p className="text-gray-500 text-lg mt-3 leading-9">Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque<br/> laudantium, totam rem aperiam inventore</p>

            <p className="flex items-center gap-3 mt-10 text-xl font-bold mt-10">
              <span className="bg-[#1A4137] text-white p-2 rounded-full text-sm ">
                <FaCheck />
              </span>
              Solve Problems
            </p>
            <p className="text-gray-500 text-lg mt-3 leading-9">Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque<br/> laudantium, totam rem aperiam inventore</p>
          </div>
        </div>

        <div className="p-4 mt-10 flex items-center justify-center gap-10">
            <div className="flex flex-col">
            <img src={projectdetails3} alt="" srcset="" />
            <span className="text-xl text-gray-700 mt-5">Previous</span>
            <p className="text-xl font-bold">Business Website Design</p>
            </div>

                <span className="text-3xl lg:text-5xl mt-140 text-[#1A4137]"><CgMenuGridR /></span>

            <div className="flex flex-col">
            <img src={projectdetails4} alt="" srcset="" />
            <span className="text-xl text-gray-700 mt-5 flex items-end justify-end">Next</span>
            <p className="text-xl font-bold flex items-end justify-end">Mobile Application Design</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
