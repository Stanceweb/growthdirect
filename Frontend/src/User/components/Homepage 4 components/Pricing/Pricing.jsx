import React from 'react'
import PriceShape from '../../../../assets/Images/pricing-shape.png'

const Pricing = () => {
 
    const PriceCard = [
        {
            id:1,
            plan:"Regular Plan",
            business:"For Small Business",
            features:[
                "Email marketing",
                "Unlimited chat history",
                "Unlimited landing pages",
                "Automation templates",
                "Greate Customer Support"
            ],
            price:"$19.99",
        },
        {
            id:2,
            plan:"Standard Plan",
            business:"For Medium Business",
            features:[
                "Email marketing",
                "Unlimited chat history",
                "Unlimited landing pages",
                "Automation templates",
                "Greate Customer Support"
            ],
            price:"$29.99",
        },
        {
            id:3,
            plan:"Premium Plan",
            business:"For Big Business",
            features:[
                "Email marketing",
                "Unlimited chat history",
                "Unlimited landing pages",
                "Automation templates",
                "Greate Customer Support"
            ],
            price:"$99.10",
        }
    ]

  return (
    <section className="Price min-h-screen flex flex-col items-center justify-start mt-20 pb-20">
        <span className="text-sm font-medium tracking-widest w-50 flex items-center justify-center py-2 bg-[#C6D936] rounded-full">
           PRICING PLAN
          </span>
          <h1 className='text-3xl lg:text-5xl font-bold text-center mt-5 leading-14'>Secure The Success Of Your <br/> Business Journey...</h1>

          <p className='text-center text-lg text-gray-500 leading-9'>Business consulting is a dynamic and multifaceted field that plays a pivotal<br/>
role in helping organizations thrive in today's competitive landscape.</p>




<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {PriceCard.map((elem, idx)=>{
        return(
            <div className="h-150 w-100 mt-20 bg-white rounded-2xl shadow-2xl relative">
                <img src={PriceShape} className='absolute right-0 top-10' />

                {elem.id === 2 && (
                    <div className="h-40 w-100 bg-[#1A4037] absolute -z-20 -top-15 rounded-t-3xl flex items-start justify-center text-white text-lg  font-bold"><span className='py-5 -translate-x-3'>POPULER PACKAGE</span></div>
                )}

                <div className="content z-20 flex flex-col items-start p-10 gap-5">
                    <h3 className='text-lg font-bold text-white bg-[#1A4037] px-8 rounded-xl py-2 '>{elem.plan}</h3>
                    <p className='text-gray-500 px-1'>{elem.business}</p>

                    <div key={idx} className="flex flex-col  border-b border-gray-200 pb-10">
                       {elem.features.map((feature, idx) => {
  return (
    <li
      key={idx}
      className={`marker:text-[#C6D936] p-2 mx-4 font-medium
      ${
        elem.id === 3 && idx >= 3
          ? "text-gray-400"
          : "text-black"
      }
      ${
        elem.id === 1 && idx >=3
         ? "text-gray-400"
          : "text-black"
      }
      ${
        elem.id === 2 && idx >=4
         ? "text-gray-400"
          : "text-black"
      }
      `}
      
    >
      {feature}
    </li>
  );
})}
                    </div>

                    <h1 className='text-3xl lg:text-5xl font-bold'>{elem.price}<span className='text-lg text-gray-500 font-normal'>/Monthly</span></h1>
                    <p className='text-gray-500 px-1 font-semibold'>{elem.business}</p>

                    <button className={`text-center w-80 h-12 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer  ${elem.id === 2 ? "bg-[#C6D936] font-medium border-0" : "bg-white"}`}>Choose Package</button>
                </div>
            </div>
        )
    })}
</div>
    </section>
  )
}

export default Pricing