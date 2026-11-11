import React from "react";
import { Link } from "react-router-dom";
import Blogbg1 from "../../../../assets/Images/blog-image1.jpg";
import Blogbg2 from "../../../../assets/Images/blog-image2.jpg";
import Blogbg3 from "../../../../assets/Images/blog-image3.jpg";
import '../../../../App.css';

import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

/* Swiper Import */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const [BlogCard, setBlogCard] = React.useState([]);
  
  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs/all-blogs');
        if (!response.ok) throw new Error('API not available');
        const data = await response.json();
        const mappedData = data.map((item, index) => ({
          id: item.id,
          BlogBg: index % 3 === 0 ? Blogbg1 : index % 3 === 1 ? Blogbg2 : Blogbg3,
          name: "Admin",
          heading: item.title,
        }));
        setBlogCard(mappedData);
      } catch (error) {
        console.error("Error fetching blogs, using fallback data:", error);
        setBlogCard([
          {
            id: "1",
            BlogBg: Blogbg1,
            name: "DealMaker",
            heading: "Welcome to DealMaker Financial Advisors",
          },
          {
            id: "2",
            BlogBg: Blogbg2,
            name: "Expert",
            heading: "Navigating Volatility in Emerging Markets",
          },
          {
            id: "3",
            BlogBg: Blogbg3,
            name: "Consultant",
            heading: "Top 5 Strategies for Corporate Restructuring",
          }
        ]);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="Blog w-full py-10 lg:py-0 lg:min-h-screen p-4 lg:p-20 bg-[#fbf9f9] overflow-hidden">
      <div className="heading flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
        <div className="left flex flex-col gap-3">
          <span className="w-fit px-6 py-2 rounded-full tracking-widest font-bold bg-[#C6D936] inline-block">
            NEW & BLOGS
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold">Our News & Blogs</h1>
        </div>

        <div className="right">
          <Link to="/news-grid" className="inline-block">
            <button className="px-8 py-4 min-h-[44px] font-medium bg-[#1A4137] text-white">
              All News & Blogs
            </button>
          </Link>
        </div>
      </div>

      {/* Swiper Added */}
      <div className="mt-8  pb-2 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
 clickable:true,
 el: ".custom-pagination",
 bulletClass: "custom-bullet",
 bulletActiveClass: "custom-bullet-active",
}}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-20"
        >
          {BlogCard.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <div className="py-10 flex items-center relative group cursor-pointer">
                  
                  {/* Image */}
                  <img
                    src={elem.BlogBg}
                    className="
                      h-[400px] 
                      w-full 
                      object-cover
                      transition-all 
                      duration-500
                      group-hover:grayscale
                    "
                  />

                  {/* Content Box */}
                  <div
                    className="
                      w-[90%] lg:w-85
                      h-auto min-h-40
                      bg-white
                      absolute
                      left-[5%] lg:left-7
                      -bottom-10
                      rounded-2xl
                      shadow-xl
                      flex
                      flex-col
                      items-start
                      justify-start
                      p-4
                      gap-2
                      transition-all
                      duration-500
                      group-hover:bg-[#163839]
                      group-hover:text-white
                    "
                  >
                    <div className="flex items-center justify-start gap-6 lg:gap-10 flex-wrap">
                      <p className="flex items-center gap-2 transition duration-500 group-hover:text-white">
                        <FaRegCircleUser />
                        {elem.name}
                      </p>

                      <p className="flex items-center gap-2 transition duration-500 group-hover:text-white">
                        <FaRegComments />
                        Comments (03)
                      </p>
                    </div>

                    <div>
                      <h1 className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-9 transition duration-500 group-hover:text-white">
                        {elem.heading}
                      </h1>
                    </div>

                    <div>
                      <Link
                        to="/news-details"
                        state={{ blogId: elem.id }}
                        className="flex items-center gap-2 py-2 min-h-[44px] font-medium transition duration-500 group-hover:text-white"
                      >
                        Read More
                        <IoArrowForwardCircle className="text-[#1A4137] group-hover:text-white transition duration-500" />
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination mt-12 flex justify-center items-center gap-4"></div>
      </div>
    </section>
  );
};

export default Blog;