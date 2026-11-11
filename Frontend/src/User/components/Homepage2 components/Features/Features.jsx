import React from "react";
import featureShape from "../../../../assets/Images/feature-shape.png";
import Feature1 from '../../../../assets/Images/feature1.svg'
import Feature2 from '../../../../assets/Images/feature2.svg'
import Feature3 from '../../../../assets/Images/feature3.svg'
import Feature4 from '../../../../assets/Images/feature4.svg'
import { MdArrowOutward } from "react-icons/md";
import '../Features/feature.css'

const Features = () => {

  const features = [
    {
      id:"01",
      heading:"Strategic Investment",
      img:Feature1,
    },
    {
      id:"02",
      heading:"Putting Cousomers First",
      img:Feature2,
    },
    {
      id:"03",
      heading:"Smarter Business Decisions",
      img:Feature3,
    },
    {
      id:"04",
      heading:"Driving Innovation With Agile",
      img:Feature4,
    }
  ]
  return (
    <section className="features min-h-screen relative p-4 lg:p-20 bg-[#F8F5F2] flex flex-col  gap-10">
      <img
        src={featureShape}
        className="w-full h-full absolute top-0 left-0"
      />

      <div className="heading flex flex-row items-center justify-between z-30">
        <div className="left-head flex flex-col">
          <span className="w-30 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
            FEATURES
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-14">We Provide Consulting <br/>To Strategic Growth.</h1>
        </div>

        <div className="right-head flex flex-col mt-5">
            <p className="mt-5 text-lg text-gray-600">DealMaker is the destination where early adopters and innovation <br/>enthusiasts discover cutting-edge technology</p>
        </div>
      </div>


      <div className="cards flex items-center justify-around z-30">
        {features.map((elem , idx)=>{
          return(
            <div className="main bg-white shadow-2xl h-60 w-70 flex flex-col items-center justify-center gap-3 mt-5 relative">
            <p className="text-xl font-bold w-55 text-center">{elem.heading}</p>
            <img src={elem.img} />
            <button className="flex items-center gap-2 text-sm font-medium mt-3">Read Out More <MdArrowOutward  className="text-[#C6D936] font-bold"/></button>
           </div>
          )
        })}
      </div>
    </section>
  );
};

export default Features;
