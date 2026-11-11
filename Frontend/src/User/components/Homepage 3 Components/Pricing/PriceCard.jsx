import React, { useState } from "react";
import planImg from "../../../../assets/Images/plan.svg";

const PriceCard = () => {
  const [billing, setBilling] = useState("monthly");
  const [animate, setAnimate] = useState(true);

  const handleBillingChange = (type) => {
    if (type === billing) return;

    setAnimate(false); // fade out

    setTimeout(() => {
      setBilling(type); // change data
      setAnimate(true); // fade in
    }, 500);
  };

  const Plans = [
    {
      id: 1,
      img: planImg,
      planName: "Personal Plan",
      desc: "Customized anything in anytime",
      monthly: 2500,
      yearly: 4900,
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
    {
      id: 2,
      img: planImg,
      planName: "Premium Plan",
      desc: "Customized anything in anytime",
      monthly: 3500,
      yearly: 9900,
      recommended: true,
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
    {
      id: 3,
      img: planImg,
      planName: "Standard Plan",
      desc: "Customized anything in anytime",
      monthly: 3500,
      yearly: 9900,
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
  ];

  return (
    <section className="Price mt-20 px-10 py-3  flex flex-col items-center justify-center gap-3 bg-[#F8F5F2]">

         <span className="w-40 py-2 flex items-center justify-center bg-[#C6D936] tracking-widest rounded-full font-semibold text-sm ">
          PRICING PLAN
        </span>

        <h1 className="text-center text-3xl lg:text-5xl font-semibold leading-14">Our Populer Pricing Plan <br/>By Company</h1>


      {/* Toggle */}
      <div className="flex justify-center mb-12 mt-5">
        <div className="bg-gray-200 rounded-full p-1 flex ">
          <button
            onClick={() => handleBillingChange("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
              billing === "monthly"
                ? "bg-[#C6D936] text-black"
                : "text-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleBillingChange("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              billing === "yearly"
                ? "bg-[#C6D936] text-black"
                : "text-gray-600"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-10 justify-center">
        {Plans.map((plan) => (
          <div
            key={plan.id}
            className={`group relative overflow-hidden w-[360px] h-[540px] p-10 rounded-2xl shadow-sm flex flex-col justify-between
            transition-all duration-500 ease-in-out
            ${
              plan.recommended
                ? "bg-[#1A4137] text-white"
                : "bg-white hover:bg-[#1A4137] hover:text-white"
            }
            ${
              animate
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }
            `}
          >

            {/* Ribbon */}
            {plan.recommended && (
              <div className="absolute  -right-14 bg-[#C6D936] text-black text-sm tracking-widest font-bold px-4 lg:px-16 py-2 rotate-45">
                RECOMMEND
              </div>
            )}

            <div>
              <img
                src={plan.img}
                className={`mb-6 w-14 transition duration-300
                ${
                  plan.recommended
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />

              <h2 className="text-2xl font-bold mb-2">
                {plan.planName}
              </h2>
              <p className="text-sm mb-6">{plan.desc}</p>

              <hr className="mb-6 opacity-30" />

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    ✔ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-full font-medium transition cursor-pointer 
              ${
                plan.recommended
                  ? "bg-white/30 text-[#fff]"
                  : "bg-[#C6D936] text-black group-hover:bg-white group-hover:text-[#1A4137]"
              }`}
            >
              {plan.recommended
                ? "Choose Pricing Plan"
                : `$${
                    billing === "monthly"
                      ? plan.monthly
                      : plan.yearly
                  } / ${billing === "monthly" ? "Month" : "Year"}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;