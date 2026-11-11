import React from 'react'
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";




const Topbar1 = () => {
  return (
   <section className="Topbar h-12 w-full border-b border-gray-300 hidden lg:flex flex-row items-center justify-between">
       <div className="left flex items-center justify-center gap-5 px-6"> 
          <p className='flex items-center justify-center gap-2 font-medium text-sm'> <span className='text-[#0C6460] text-[18px]'><MdMail /></span>Info@dealmaker-advisors.com</p>

          <p className='flex items-center justify-center gap-1 font-medium text-sm'> <span className='text-[#0C6460] text-[18px]'><IoLocationSharp />
</span> Lagos Island, Lagos, Nigeria</p>
       </div>
       
       <div className="right flex flex-row items-center h-full px-6 justify-center gap-5 bg-[#C6D936]">
         <Link className='text-sm font-medium hover:text-[#0C6460]'>About</Link>
         <Link className='text-sm font-medium hover:text-[#0C6460]'>Faqs</Link>
         <Link className='text-sm font-medium hover:text-[#0C6460]'>Contact</Link>
         <span className='cursor-pointer transition-transform duration-800 hover:rotate-y-[360deg] hover:text-[#0C6460] text-sm'><FaFacebookF /></span>
         <span className='cursor-pointer transition-transform duration-800 hover:rotate-y-[360deg] hover:text-[#0C6460] text-sm'><FaInstagram /></span>
         <span className='cursor-pointer transition-transform duration-800 hover:rotate-y-[360deg] hover:text-[#0C6460] text-sm'><FaXTwitter /></span>
         <span className='cursor-pointer transition-transform duration-800 hover:rotate-y-[360deg] hover:text-[#0C6460] text-sm'><FaLinkedinIn /></span>
       </div>
   </section>
  )
}

export default Topbar1