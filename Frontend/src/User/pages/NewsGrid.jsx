import React from 'react'
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from '../../assets/Images/service-block-shape.png'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Blog1 from '../../assets/Images/blog-two-image1.jpg'
import Blog2 from '../../assets/Images/blog-two-image2.jpg'
import Blog3 from '../../assets/Images/blog-two-image3.jpg'
import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";


const NewsGrid = () => {
     const blogs = [
        {
          id:1,
          img:Blog1,
          date:"15 December,2025",
          title:"We Focus On The Solutions Not On The Problems"
        },
        {
          id:2,
          img:Blog2,
          date:"20 December,2025",
          title:"How To Create Viral Content That Drives Sales"
        },
        {
          id:3,
          img:Blog3,
          date:"31 December,2025",
          title:"How AI Is Changing The Future Of Online Shopping"
        },
        {
          id:4,
          img:Blog3,
          date:"31 December,2025",
          title:"How AI Is Changing The Future Of Online Shopping"
        },
        {
          id:5,
          img:Blog1,
          date:"15 December,2025",
          title:"We Focus On The Solutions Not On The Problems"
        },
        {
          id:6,
          img:Blog2,
          date:"20 December,2025",
          title:"How To Create Viral Content That Drives Sales"
        },
      ]
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
            <h1 className="font-bold text-3xl lg:text-6xl text-white">News Grid</h1>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 p-10">
                {blogs.map((blog)=>(
                  <div 
                    key={blog.id}
                    className="bg-white rounded-md overflow-hidden"
                  >
        
                    <div className="relative">
                      <img 
                        src={blog.img}
                        alt=""
                        className="w-full h-[300px] object-cover"
                      />
        
                      <span className="absolute top-6 right-0 bg-[#153F35] text-white font-medium px-8 py-3 text-sm rounded-l-md ">
                        {blog.date}
                      </span>
                    </div>
        
        
                    <div className="px-10 pt-8 pb-14">
                      
                      <div className="flex items-center gap-8 text-[#7B7B8D] text-[16px]">
                        <span className="flex items-center gap-2">
                          <FaRegUser className="text-[#153F35]"/>
                          By admin
                        </span>
        
                        <span className="flex items-center gap-2">
                       <FaRegComments className="text-[#153F35]"/>
                          Comments (05)
                        </span>
                      </div>
        
        
                      <h2 className="text-2xl leading-10 font-bold text-[#0C241B] mt-3">
                        {blog.title}
                      </h2>
        
        
                      <button className="mt-5 bg-[#C6D936] px-5 py-3 rounded-full flex items-center gap-3 text-sm font-medium cursor-pointer">
                        Read More
                      <IoArrowForwardSharp className="text-xl"/>
                      </button>
        
                    </div>
        
                  </div>
                ))}
              </div>
      </section>
    </>
   
  )
}

export default NewsGrid