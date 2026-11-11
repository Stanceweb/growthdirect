import React from 'react'
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from '../../assets/Images/service-block-shape.png'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Services from '../components/Homepage 3 Components/Services3/Services';
import icon1 from '../../assets/Images/service-three-icon1.svg'
import icon2 from '../../assets/Images/service-three-icon2.svg'
import icon3 from '../../assets/Images/service-three-icons3.svg'
const ServicePage = () => {
    const services = [
            {
                id:1,
                icon:icon1,
                heading:"Business Planning",
            },
            {
                id:2,
                icon:icon2,
                heading:"Marketing & Branding",
            },
            {
                id:3,
                icon:icon3,
                heading:"Sales Consulting"
            },
            {
                id:4,
                icon:icon3,
                heading:"Financial Consulting",
            },
            {
                id:5,
                icon:icon1,
                heading:"Human Resources",
            },
            {
                id:6,
                icon:icon2,
                heading:"Market Research "
            }
        ]
  return (
    <>
      {/* HERO SECTION */}
             <section className="Aboutus relative flex flex-col">
               <div className="container h-90 w-full overflow-hidden relative">
                 <img
                   src={AboutusBanner}
                   className="h-full w-full object-cover object-top"
                 />
       
                 <img src={Pattern} className="absolute top-0 right-0" />
       
                 <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
                   <h1 className="font-bold text-3xl lg:text-6xl text-white">Service Grid</h1>
       
                   <div className="flex flex-row items-center gap-1 mt-6">
                     <Link to="/" className="text-[#BED034]">
                       Home
                     </Link>
       
                     <span className="text-white flex items-center gap-1">
                       <FaAngleRight />
                       Service Grid
                     </span>
                   </div>
                 </div>
               </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-10 p-4 lg:p-20">
        {services.map((elem ,idx)=>{
            return(
                <div className="flex flex-col items-center justify-start gap-2 h-120 w-110 p-10 bg-white relative hover:bg-[#C6D936] group"> 
                <img src={BannerShape} className="absolute left-20 top-0 " />
                <div className="bg-[#C6D936] rounded-full h-30 w-30 flex items-center justify-center z-30 group-hover:bg-[#1A4137] ">
                     <img src={elem.icon} className="scale-60 duration-500  group-hover:invert-100 group-hover:rotate-y-[360deg]" />
                </div>

                <p className="text-2xl font-semibold mt-3">{elem.heading}</p>
                <p className="text-center text-[16px] text-gray-500 w-100 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, vitae! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>

                <button className="px-8 py-3 border border-gray-100 bg-white z-10 rounded-full mt-6 group-hover:bg-[#051b05] group-hover:text-white group-hover:border-0">Learn More</button>
                </div>
            )
        })}
      </div>
             </section>
    </>
  )
}

export default ServicePage