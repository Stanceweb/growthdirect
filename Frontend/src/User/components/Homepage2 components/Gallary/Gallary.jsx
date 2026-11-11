import React from 'react'
import Gallary1 from '../../../../assets/Images/gellery-image1.jpg'
import Gallary2 from '../../../../assets/Images/gellery-image2.jpg'
import Gallary3 from '../../../../assets/Images/gellery-image3.jpg'
import { MdArrowOutward } from "react-icons/md";

const Gallary = () => {
  return (
    <section className="gallary py-10 lg:py-20">
      <div className="w-[95%] mx-auto">

        <div className="flex gap-6 h-[550px]">

          {/* Image 1 */}
          <div className="group flex-[1] hover:flex-[2] duration-700 overflow-hidden rounded-xl relative">
            <img
              src={Gallary1}
              alt=""
              className="w-full h-full object-cover grayscale hover:grayscale-0 duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
              <button className="w-28 h-28 rounded-full bg-white text-4xl flex items-center justify-center text-[#C6D936] shadow-[0px_10px_0px_0px] shadow-[#C6D936]  duration-500">
                <MdArrowOutward />
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group flex-[1] hover:flex-[2] duration-700 overflow-hidden rounded-xl relative">
            <img
              src={Gallary2}
              alt=""
              className="w-full h-full object-cover grayscale hover:grayscale-0 duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
              <button className="w-28 h-28 rounded-full bg-white text-4xl flex items-center justify-center text-[#C6D936] shadow-[0px_10px_0px_0px] shadow-[#C6D936]  duration-500">
                <MdArrowOutward />
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group flex-[1] hover:flex-[2] duration-700 overflow-hidden rounded-xl relative">
            <img
              src={Gallary3}
              alt=""
              className="w-full h-full object-cover grayscale hover:grayscale-0 duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
             <button className="w-28 h-28 rounded-full bg-white text-4xl flex items-center justify-center text-[#C6D936] shadow-[0px_10px_0px_0px] shadow-[#C6D936]  duration-500">
                <MdArrowOutward />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Gallary