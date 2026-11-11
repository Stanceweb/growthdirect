import React from 'react'
import TestProfile from '../../../../assets/Images/testimonial-two-image.png'
import Info1 from '../../../../assets/Images/banner-two-info1.png'
import Info2 from '../../../../assets/Images/banner-two-info2.png'
import '../../../../../src/App.css'
import Testlogo from '../../../../assets/Images/testimonial-two-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      para: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
      name: "Ronald Richards",
      position: "CEO & Founder",
    },
    {
      id: 2,
      para: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
      name: "Leslie Alexander",
      position: "Web Designer",
    },
    {
      id: 3,
      para: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
      name: "Dianne Russell",
      position: "Junior Manager",
    },
  ]

  return (
  <section className="Testimonials relative py-30 w-full bg-[#1A4137] overflow-hidden rounded-[40%_40%_0_0_/_50px_50px_0_0] flex flex-row items-center justify-center">
      {/* LEFT SIDE - untouched */}
      <div className="left w-full lg:w-[40%] p-10 relative">
        <img src={TestProfile} />
        <img src={Info1} className='absolute bottom-10 left-30 animate-slideLR2' />
        <img src={Info2} className='absolute top-90 left-30 animate-slideUpDown' />
      </div>

      {/* RIGHT SIDE - Swiper Slider */}
      <div className="right w-full lg:w-[60%] p-10 relative flex flex-col justify-center mr-20 ">

        {/* Trustpilot Header + Nav Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
                <img src={Testlogo}  />
          </div>

          {/* Custom Prev/Next Buttons */}
          <div className="flex gap-3">
            <button
              className="swiper-btn-prev w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl"
            >
              ‹
            </button>
            <button
              className="swiper-btn-next w-16 h-16 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer text-3xl"
            >
              ›
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="w-full min-h-[500px]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-6">

                {/* Paragraph */}
                <p className="text-white/85 text-4xl leading-relaxed">
                  {item.para}
                </p>

                {/* Divider */}
                <hr className="border-white/20" />

                {/* Name + Ratings Row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-2xl">{item.name}</p>
                    <p className="text-white/60 text-sm mt-1">{item.position}</p>
                  </div>
                  <div className="flex gap-1 text-[#FF8C22] text-3xl">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials