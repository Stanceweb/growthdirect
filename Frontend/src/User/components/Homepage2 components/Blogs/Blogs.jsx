import React from 'react'
import Blog1 from '../../../../assets/Images/blog-two-image1.jpg'
import Blog2 from '../../../../assets/Images/blog-two-image2.jpg'
import Blog3 from '../../../../assets/Images/blog-two-image3.jpg'
import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";


const Blogs = () => {

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
    }
  ]

  return (
    <section className="Blogs min-h-screen relative p-4 lg:p-20 bg-[#F8F5F2] flex flex-col gap-10">
            
      <div className="heading flex flex-row items-center justify-between z-30">
        <div className="left-head flex flex-col">
          <span className="w-50 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
            NEWS & BLOGS
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-14">
            Read All Our consulting<br/>
            News & Blogs
          </h1>
        </div>

        <div className="right-head flex flex-col mt-5">
           <button className='border px-14 py-3 rounded-full cursor-pointer'>
             Contact Us
           </button>
        </div>
      </div>


      {/* Added Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
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
  )
}

export default Blogs