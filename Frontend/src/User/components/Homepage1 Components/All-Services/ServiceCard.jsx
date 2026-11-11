import React from 'react'
import { Link } from 'react-router-dom'

const serviceCard = ({data}) => {
  return (
   <section className="Service-card h-auto lg:h-[500px] w-full flex flex-col rounded-2xl overflow-hidden shadow-2xl">
          <div className="left h-auto lg:h-[60%] w-full bg-[#102930] relative p-6 lg:p-8 flex flex-col items-start justify-center gap-4">
              <img src={data.serviceLeftBg} className='absolute left-10 top-4 opacity-50 pointer-events-none'/>

             <div className='w-16 h-16 flex items-center justify-start transform transition duration-800 hover:rotate-y-[360deg]'>
                {data.icons}
             </div>

             <div className="content flex flex-col items-start gap-2 relative z-10">
                <span className='text-[#C6D936] text-xl font-bold'>{data.no}</span>
                <p className='text-white text-xl lg:text-2xl font-bold '>{data.heading}</p>
                <p className='text-white text-sm lg:text-base font-light leading-relaxed'>{data.para}</p>
             </div>
             
             {/* The floating button */}
             <Link
                to="/service"
                aria-label={`View ${data.heading} service details`}
                className='bg-[#1A4137] h-12 w-12 cursor-pointer rounded-full absolute top-8 right-8 flex items-center justify-center text-white text-2xl transform duration-700 hover:bg-[#C6D936] hover:text-[#102930] z-20 shadow-xl'
             >
                {data.btn}
             </Link>
          </div>

          <div className="right h-[250px] lg:h-[40%] w-full relative z-0">
                <img src={data.serviceRighgImg} className='h-full w-full object-cover'/>
          </div>
   </section>
  )
}

export default serviceCard
