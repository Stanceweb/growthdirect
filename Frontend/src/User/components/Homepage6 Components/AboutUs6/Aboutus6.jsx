import React, { useRef } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import AboutImg from '../../../../assets/Images/about6-1.jpg'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Aboutus6 = () => {

  const swiperRef = useRef(null);

  const about = [
    {
      id:1,
      heading :"Our Vision.",
      para:"Our mission is empower individuals families and businesses with clear unbiased insurance guidance that protects what matters most. We are committed to delivering expert advice identifying the right coverage"
    },
    {
      id:2,
      heading :"Our Mission.",
      para:"Our mission is empower individuals families and businesses with clear unbiased insurance guidance that protects what matters most. We are committed to delivering expert advice identifying the right coverage"
    }
  ]

  return (
    <section className="About min-h-screen flex flex-col p-10">

        <div className="heading flex flex-row items-center justify-between p-10">

            <div className="flex flex-col">
              <span className='w-40 flex items-center justify-center py-2 tracking-widest font-medium bg-[#E34B1B] text-white rounded-full text-sm'>
                ABOUT US
              </span>

              <h1 className='text-3xl lg:text-5xl font-bold leading-14'>
                Committed To Delivering <br/>
                Professional Dependable<br/>
                Insurance Guidance
              </h1>
            </div>

            <div className="flex flex-col items-start gap-3">

              <p className='text-gray-500 text-lg leading-9'>
                As independent insurance consultants, we do not sell insurance
                <br/>
                products. Instead, we work solely in your best interest to
                <br/>
                evaluate your current coverage identify any gaps
              </p>

              <button className='flex items-center gap-1 px-8 py-3 bg-[#1A4137] text-white rounded-full cursor-pointer'>
                Discover More <FaAngleRight />
              </button>

            </div>
        </div>

        <div className="content flex items-center justify-center p-6 relative overflow-hidden">

          <img
            src={AboutImg}
            className='h-full w-full object-cover rounded-3xl'
          />

          <div className="conatiner h-100 w-120 bg-[#063232] absolute right-6 bottom-6 overflow-hidden rounded-2xl">

            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className='h-full w-full'
            >

              {about.map((elem) => {
                return(
                  <SwiperSlide key={elem.id}>

                    <div className="flex flex-col items-start p-10 gap-4">

                      <h2 className='text-3xl font-semibold text-white'>
                        {elem.heading}
                      </h2>

                      <p className='text-lg text-white/60 leading-10'>
                        {elem.para}
                      </p>

                    </div>

                  </SwiperSlide>
                )
              })}

            </Swiper>

            {/* SINGLE BUTTONS */}
            <div className="navigate absolute bottom-8 left-10 z-10 flex text-4xl text-white gap-2">

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className='cursor-pointer'
              >
                <IoIosArrowRoundBack />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className='cursor-pointer'
              >
                <IoIosArrowRoundForward />
              </button>

            </div>

          </div>

        </div>
    </section>
  )
}

export default Aboutus6