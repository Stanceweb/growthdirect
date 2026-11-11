import React from "react";
import BlogImg1 from "../../../../assets/Images/blog-three-image1.jpg";
import BlogImg2 from "../../../../assets/Images/blog-three-image2.jpg";
import BlogImg3 from "../../../../assets/Images/blog-three-image3.jpg";
import { TbUserCircle } from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";


const Blogs = ({Color = "text-[#000]" , bgColor2 = "bg-[#C6D936]"}) => {
  const Blog = [
    {
      id: 1,
      img: BlogImg1,
      service: "Digital Marketing",
      title: "10 Proven Strategies to Scale Your Business in 2025",
      author: "Brooklyn Simmon",
      comments: "Comments (05)",
    },
    {
      id: 2,
      img: BlogImg2,
      service: "Business Consulting",
      title: "Time Management Tips for Busy Entrepreneurs",
      author: "Leslie Alexander",
      comments: "Comments (03)",
    },
    {
      id: 3,
      img: BlogImg3,
      service: "Business Growth",
      title: "Why Networking is Crucial for Business Growth",
      author: "Savannah Nguyen",
      comments: "Comments (05)",
    },
  ];
  return (
    <section className="Blogs min-h-screen flex flex-col items-center p-10">
      <span className={`w-40 py-2 flex items-center justify-center ${bgColor2} ${Color} tracking-widest rounded-full font-semibold text-sm`}>
        NEWS & BLOGS
      </span>

      <h1 className="text-center text-3xl lg:text-5xl font-bold leading-14 mt-3">
        Get Update News & Blogs <br />
        By Company
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Blog.map((elem, idx) => {
          return (
            <div className="mt-10 flex flex-col p-5">
              <img src={elem.img} className="rounded-2xl" />

              <div className="content p-5 border-b border-gray-200">
              <p className="font-medium">{elem.service}</p>
              <h2 className="font-bold text-2xl leading-9">{elem.title}</h2>
              </div>

              <div className="flex flex-row justify-between">

                  <div className="user flex flex-row items-center gap-2 p-5 text-gray-500">
                    <span className="text-xl"><TbUserCircle /></span>
                    <span>{elem.author}</span>
                  </div>

                  <div className="cmt flex flex-row items-center gap-2 p-5 text-gray-500">
                    <span className="text-xl"><BiMessageRoundedDetail /></span>
                    <span>{elem.commentsi}</span>
                  </div>  
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
