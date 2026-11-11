import React,{useState} from "react";
import Netflix from "../../../../assets/Images/netflix.png";
import Spotify from "../../../../assets/Images/spotify.png";
import Shopify from "../../../../assets/Images/shopify.png";

import Team1 from "../../../../assets/Images/testi-thumb-1.jpg";
import Team2 from "../../../../assets/Images/testi-thumb-2.jpg";
import Team3 from "../../../../assets/Images/testi-thumb-3.jpg";

import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const [openVideo, setopenVideo] = useState(false);

  const team = [
    {
      id: 1,
      logo: Netflix,
      para: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services",
      img: Team1,
      Name: "Brendan Carroll",
      occupatiom: "Founder & CEO",
    },
    {
      id: 2,
      logo: Spotify,
      para: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services",
      img: Team2,
      Name: "Harleen Quinzel",
      occupatiom: "Business Owner",
    },
    {
      id: 3,
      logo: Shopify,
      para: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services",
      img: Team3,
      Name: "Paula Lrving",
      occupatiom: "CO Founder",
    },
  ];

  return (
    <section className="Testimonial min-h-screen flex flex-col items-center justify-start p-5 gap-2 mt-10">
      <button className="w-fit px-6 py-2 rounded-full tracking-widest font-semibold text-sm bg-[#C6D936]">
        TESTIMONIAL
      </button>

      <h1 className="text-center text-3xl lg:text-5xl font-bold leading-14">
        What Our Customers <br />
        Say About Us
      </h1>

      {/* SWIPER */}
      <div className="w-full mt-5 px-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="pb-20"
        >
          {team.map((elem, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex flex-row items-center justify-center relative bg-white rounded-3xl overflow-hidden ">
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={elem.img}
                      className="rounded-l-3xl w-[2000px] h-[450px] object-cover"
                    />

                    <button  onClick={() => setopenVideo(true)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C6D936] p-5 rounded-full cursor-pointer">
                      <FaPlay />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col p-10 gap-6">
                    <img src={elem.logo} className="h-10 w-30 object-contain" />

                    <p className="text-[18px] text-gray-500 leading-8 border-b border-gray-200 pb-10">
                      {elem.para}
                    </p>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold">{elem.Name}</h4>

                        <span className="text-gray-500">{elem.occupatiom}</span>
                      </div>

                      <h3 className="px-5 h-8 font-bold bg-[#C6D936] flex items-center justify-center gap-2 rounded-full">
                        4.9
                        <span>
                          <FaStar />
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {openVideo && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">

            <button
              onClick={() => setopenVideo(false)}
              className="absolute top-8 right-10 text-white text-4xl cursor-pointer"
            >
              ×
            </button>

            <div className="w-full h-full max-w-full lg:w-[90%]">
              <iframe
                width="1000"
                height="500"
                src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mt-30 ml-50"
              ></iframe>
            </div>

          </div>
        )}

    </section>
  );
};

export default Testimonial;
