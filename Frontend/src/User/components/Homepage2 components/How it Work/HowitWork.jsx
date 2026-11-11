import React from 'react'
import Img1 from '../../../../assets/Images/how1.svg'
import Img2 from '../../../../assets/Images/how2.svg'
import Img3 from '../../../../assets/Images/how3.svg'
import '../../../../../src/App.css'
import arrowLine from '../../../../assets/Images/steps-line.png'
const HowitWork = () => {

  const HowData = [
    {
      id:"01",
      img:Img1,
      heading:"Innovative Planning",
      desc:"It is a long-established fact that a reader will be distracted by the readable content of a page site design work."
    },
    {
      id:"02",
      img:Img2,
      heading:"Integration Services",
      desc:"It is widely recognized that a reader's attention is often drawn away by the visual content of a webpage's design."
    },
    {
      id:"03",
      img:Img3,
      heading:"Business Profit",
      desc:"It is well-known that the visual elements of a webpage often distract a reader from the content itself."
    }
  ]

  return (
    <section className="container flex flex-col items-center justify-center pb-30 -translate-y-20">
      <span className='px-10 py-2 bg-[#C6D936] rounded-full font-semibold tracking-widest'>HOW IT WORKS</span>
      <h1 className='text-center text-3xl lg:text-5xl font-bold leading-14 mt-5'>Inspiring Innovation & Setting<br/>
in Your Industry.</h1>

<div className="flex items-center gap-60 py-10 relative">
  {HowData.map((elem) => (
    <div
    key={elem.id}
    className={`w-56 h-56 rounded-full flex flex-col items-center justify-center group
      ${elem.id === "01" ? "bg-[#C6D936] duration-300 hover:bg-[#1A4137]" : ""}
      ${elem.id === "02" ? "bg-[#1A4137]" : ""}
      ${elem.id === "03" ? "bg-[#C6D936] duration-300 hover:bg-[#1A4137]" : ""}
      `}
      >
      <img
        src={elem.img}
        className="w-20 h-20 object-contain duration-700 group-hover:rotate-y-[360deg] group-hover:invert"
        />
        <span className='absolute h-20 w-20 flex items-center justify-center ml-50 mt-20 shadow-2xl bg-white rounded-full text-2xl font-bold text-[#1A4137]'>{elem.id}</span>
  <h1 className='absolute bottom-0 font-bold text-2xl'>{elem.heading}</h1>
  <p className='absolute -bottom-26 text-center w-90 text-lg text-gray-500'>{elem.desc}</p>
    </div>
  ))}
</div>
  <img src={arrowLine} className='absolute left-110 top-80' />
  <img src={arrowLine} className='absolute right-110 top-80' />
    </section>
  )
}

export default HowitWork