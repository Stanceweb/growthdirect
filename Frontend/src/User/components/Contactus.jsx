import React from "react";

const Contactus = () => {
  return (
    <section className="Contact-us min-h-screen bg-[#EEF0F6] flex flex-col items-center justify-start p-4 lg:p-20">

      <span className="bg-[#C6D936] w-70 py-1 rounded-full flex items-center justify-center text-gray-600">
        CONTACT WITH US NOW
      </span>

      <h1 className="text-center text-3xl lg:text-5xl leading-14 mt-4 font-bold">
        Feel Free to Write Our <br />
        Alen Hispro
      </h1>

      <form className="flex flex-col mt-10 gap-5">

        {/* Row 1 */}
        <div className="flex flex-row gap-5">

          <input
            type="text"
            placeholder="Enter Name"
            className="bg-white w-120 py-4 px-5 rounded-xl outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="bg-white w-120 py-4 px-5 rounded-xl outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

        </div>

        {/* Row 2 */}
        <div className="flex flex-row gap-5">

          <input
            type="text"
            placeholder="Enter Subject"
            className="bg-white w-120 py-4 px-5 rounded-xl outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <input
            type="tel"
            placeholder="Enter Phone"
            className="bg-white w-120 py-4 px-5 rounded-xl outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

        </div>

        {/* Textarea */}
        <textarea
          placeholder="Enter message"
          rows={8}
          className="bg-white w-full py-4 px-5 rounded-xl outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
        ></textarea>

        {/* Buttons */}
        <div className="btn flex flex-row items-center justify-center gap-5 mt-3">

          <button
            type="submit"
            className="px-8 py-3 text-white text-sm font-semibold bg-[#1A4137] cursor-pointer rounded-lg hover:bg-[#0f2c24] transition-all duration-300"
          >
            Send Message
          </button>

          <button
            type="reset"
            className="px-18 py-3 text-black text-sm font-semibold bg-[#C6D936] cursor-pointer rounded-lg hover:bg-[#b3c52e] transition-all duration-300"
          >
            Reset
          </button>

        </div>

      </form>
    </section>
  );
};

export default Contactus;