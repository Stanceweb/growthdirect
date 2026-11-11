import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <section className="GetInTouch w-full h-screen relative">

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17418.569934377392!2d-6.259279000000001!3d53.342779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b9e1777e3%3A0xf0c386e79dfddfc0!2s1-2%20Adam%20Court%2C%20Sr%C3%A1id%20Grafton%2C%20Dublin%202%2C%20D02%20W0Y7%2C%20Ireland!5e1!3m2!1sen!2sus!4v1778150798061!5m2!1sen!2sus"
        className="w-full h-full absolute top-0 left-0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* CONTAINER */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-20">

        <div className="w-full max-w-7xl bg-white rounded-3xl p-15 shadow-2xl">
          
          <div className="text-center">
            <button className="text-sm rounded-full font-semibold px-8 py-2 bg-[#C6D936]">
              GET IN TOUCH
            </button>

            <h1 className="text-3xl lg:text-5xl font-bold mt-6">
              Book An Appointment
            </h1>

            <p className="text-gray-500 mt-5 text-lg leading-9">
              By submitting this form you are agreeing to our Privacy Policy,
              <br />
              We guarantee not to disclose your information.
            </p>

<form className="mt-5 flex flex-col items-center gap-5">

            <div className="flex flex-row items-center justify-center gap-3">
                <input type="text" className="bg-[#F0F1F6] border border-gray-500 py-5 w-lg rounded-xl px-8 placeholder:text-black" placeholder="Your Name"/>
                <input type="email" className="bg-[#F0F1F6] border border-gray-500 py-5 w-lg rounded-xl placeholder:text-black px-8" placeholder="Email Address"/>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
                <input type="date" className="bg-[#F0F1F6] border border-gray-500 py-5 w-lg rounded-xl px-8 placeholder:text-black" placeholder=""/>
               <select className="bg-[#F0F1F6] border border-gray-500 py-5 w-lg rounded-xl px-5 placeholder:text-black">
                <option>Select Services</option>
                <option>UI/UX Design</option>
                <option>Web Developer</option>
                <option>Marketing Manager</option>
                <option>Web Designer</option>
                <option>Financial Advise</option>
               </select>
            </div>

            <textarea rows={8} className="bg-[#F0F1F6] w-[1040px] border border-gray-500 py-5 w- rounded-xl px-5 placeholder:text-black " placeholder="Write message"></textarea>


            <button className="px-8 py-3 bg-[#C6D936] flex items-center gap-2 cursor-pointer">Free Consultation <FaAngleRight /></button>
</form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GetInTouch;