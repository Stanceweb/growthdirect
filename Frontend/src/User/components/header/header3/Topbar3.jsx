import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";



const Topbar3 = () => {
  return (
   <section className="Topbar flex items-center justify-between px-10">
    <div className="left flex items-center gap-2">
     <span className='text-[#C6D936]'><FaRegClock /></span>
     <p className='text-sm font-semibold'>Open Hours of City Govt .(Mon-Fri: <span className='text-[#C6D936]'>8:00</span>am - <span className='text-[#C6D936]'>6:00</span>pm)</p>
    </div>


    <div className="right flex items-center gap-2">
        <span className='flex items-center justify-center gap-3'><FaCalendarAlt className='text-[#0C6460]' />Friday - Jul 27, 2025</span>
     <p className='flex items-center justify-center gap-1 font-medium text-sm'> <span className='text-[#0C6460] text-[18px]'><IoLocationSharp />
    </span> Lagos Island, Lagos, Nigeria</p>
    </div>
   </section>
  )
}

export default Topbar3