import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import serviceBG from "../../../../assets/Images/service-shape.png";
import serviceLine from "../../../../assets/Images/service-line.png";
import BannerArray from "../../../../assets/Images/service-arry-color.png";
import ServiceCard from "./ServiceCard";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import high from "../../../../assets/Images/high.png";
import party from "../../../../assets/Images/party.png";
import BusinessGrowth from "../../../../assets/Images/businessGrowth.png";
import ServiceBg from "../../../../assets/Images/service-item-shape.png";
import ServiceImg1 from "../../../../assets/Images/service-image1.jpg";
import ServiceImg2 from "../../../../assets/Images/service-image2.jpg";
import ServiceImg3 from "../../../../assets/Images/service-image3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Services = () => {
  const [serviceCards, setServiceCards] = React.useState([]);
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/service/all-services');
        if (!response.ok) throw new Error('API not available');
        const data = await response.json();
        const mappedData = data.map((item, index) => ({
          id: item.id,
          icons: <img src={high} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />,
          no: `0${index + 1}`.slice(-2),
          serviceLeftBg: ServiceBg,
          heading: item.title,
          para: item.description,
          btn: <RiArrowRightUpLongLine />,
          serviceRighgImg: ServiceImg1,
        }));
        setServiceCards(mappedData);
      } catch (error) {
        console.error("Error fetching services, using fallback data:", error);
        setServiceCards([
          { id: "1", icons: <img src={high} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "01", serviceLeftBg: ServiceBg, heading: "Portfolio Advisory", para: "Expert guidance on capital allocation and portfolio management to maximize yields.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg1 },
          { id: "2", icons: <img src={party} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "02", serviceLeftBg: ServiceBg, heading: "Corporate Finance", para: "Comprehensive financial modeling and restructuring for enterprises.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg2 },
          { id: "3", icons: <img src={BusinessGrowth} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "03", serviceLeftBg: ServiceBg, heading: "Business Valuation", para: "Accurate and defensible valuation services for M&A, reporting, or restructuring.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg3 },
          { id: "4", icons: <img src={high} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "04", serviceLeftBg: ServiceBg, heading: "Auction", para: "Professional auction management and asset liquidation services.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg1 },
          { id: "5", icons: <img src={party} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "05", serviceLeftBg: ServiceBg, heading: "Tax Advisory", para: "Strategic tax planning to ensure compliance and optimize liabilities.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg2 },
          { id: "6", icons: <img src={BusinessGrowth} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "06", serviceLeftBg: ServiceBg, heading: "Debt Recovery", para: "Efficient resolution and recovery services for non-performing corporate debts.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg3 },
          { id: "7", icons: <img src={high} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "07", serviceLeftBg: ServiceBg, heading: "Loan Restructuring", para: "Re-negotiating loan terms to provide liquidity relief and long-term viability.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg1 },
          { id: "8", icons: <img src={party} className="h-30 w-full md:w-1/2 lg:w-[30%] object-contain" />, no: "08", serviceLeftBg: ServiceBg, heading: "Bank Charges Audit", para: "Detailed forensic auditing to recover excess bank charges and ensure compliance.", btn: <RiArrowRightUpLongLine />, serviceRighgImg: ServiceImg2 }
        ]);
      }
    };
    fetchServices();
  }, []);
  return (
    <section
      className="services relative h-auto lg:h-[100vh] w-full mt-10 lg:mt-30 flex flex-col lg:flex-row overflow-hidden translate-y-[2px]"
    >
      <div className="left h-auto lg:h-full w-full lg:w-[60%] relative py-8 lg:py-0">
        <span data-aos = 'fade-right' className="static lg:absolute py-3 px-10 rounded-full bg-[#C6D936] mx-6 lg:mx-35 my-0 lg:my-30 font-semibold tracking-widest text-sm inline-block">
          SERVICE AREA
        </span>
        <h2 data-aos = 'fade-right'  className="static lg:absolute mt-4 lg:mt-0 mx-6 lg:mx-35 lg:inset-x-6 lg:top-24 lg:my-20 text-3xl lg:text-5xl font-bold leading-tight lg:leading-16">
          Empowering Your Portfolio <br />
          With Expert Advisory
        </h2>
        <img src={serviceBG} className="absolute inset-0 h-full w-full object-cover -z-10" />
        <div className="h-full w-full bg-gray-500 absolute inset-0 opacity-10 -z-10"></div>
      </div>

      <div className="relative lg:absolute h-auto lg:h-150 w-full lg:w-[70%] lg:top-[320px] lg:left-[15%] mt-6 lg:mt-0 px-4 lg:px-0  z-30 p-5">
        <Swiper
          modules={[Autoplay]}
          speed={2000} // 👉 animation smooth & slow
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          grabCursor={true} // 👉 mouse drag smooth feel
          spaceBetween={30}
          slidesPerView={1} breakpoints={{768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}
          loop={true}
        >
          {serviceCards.map((item) => (
            <SwiperSlide key={item.id}>
              <ServiceCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="right h-auto lg:h-full w-full lg:w-[40%] bg-[#1A4137] py-8 lg:p-10 relative">
        <Link to="/service">
          <button data-aos='fade-left' className="static lg:absolute block mx-auto py-3 px-8 lg:px-14 font-medium bg-[#C6D936] lg:p-20 lg:inset-x-auto lg:mx-35 lg:my-30 cursor-pointer z-20">
            All Services
          </button>
        </Link>
        <img
          src={serviceLine}
          className="absolute right-0 animate-slideUpDown hidden lg:block"
        />
        <img src={BannerArray} className="absolute right-20 animate-slideLR hidden lg:block" />
      </div>
    </section>
  );
};

export default Services;
