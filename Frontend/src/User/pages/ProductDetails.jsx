import { useParams } from "react-router-dom";
import React, { useState } from "react";
import AboutusBanner from "../../assets/Images/page-title-bg.jpg";
import Pattern from "../../assets/Images/page-title-pattern.png";
import BannerShape from "../../assets/Images/service-block-shape.png";
import { FaAngleRight, FaCartPlus, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Products from "../Data/ProductData";
import { FaArrowRight, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest, FaInstagram } from "react-icons/fa6";
import review1 from "../../assets/Images/testi-1.jpg";
import review2 from "../../assets/Images/testi-2.jpg";
import { FaRegStar } from "react-icons/fa";
import Headphone from '../../assets/Images/headphone.jpg'
import Lagege from '../../assets/Images/lagege.jpg'
import Watch from '../../assets/Images/watch.jpg'
import SdCard from '../../assets/Images/sdcard.jpg'
const reviewCard = [
  {
    id: 1,
    img: review2,
    name: "JON D. WILLIAM",
    date: "10 Jan, 2023 . 4:00 Pm",
  },
  {
    id: 2,
    img: review1,
    name: "ALEESHA BROWN",
    date: "12 Feb , 2023 . 8:00 Pm",
  },
];


const ReletedProduct = [
  {
    id:1,
    img:Headphone,
    name:"HeadPhone",
    price:"$32.00",
  },
  {
    id:2,
    img:Lagege,
    name:"Lagage",
    price:"$32.00",
  },
  {
    id:3,
    img:Watch,
    name:"Watch",
    price:"$32.00",
  },
  {
    id:4,
    img:SdCard,
    name:"SD Card",
    price:"$32.00",
  }
]
const ProductDetails = () => {
  const [count, setcount] = useState(1);

  const [ActiveTab, setActiveTab] = useState("Description");

  const Increse = () => {
    setcount(count + 1);
  };

  const Decrese = () => {
    if (count > 1) setcount(count - 1);
  };

  const { id } = useParams();
  console.log(id);

  const SingleProduct = Products.find((item) => item.id === parseInt(id));
  return (
    <>
      <section className="Aboutus relative flex flex-col">
        <div className="container h-90 w-full overflow-hidden relative">
          <img
            src={AboutusBanner}
            className="h-full w-full object-cover object-top"
          />

          <img src={Pattern} className="absolute top-0 right-0" />

          <div className="h-full w-full bg-gradient-to-r from-[#082E2C]/100 to-[#082E2C]/10 absolute top-0 flex flex-col py-30 px-30 gap-5 z-10">
            <h1 className="font-bold text-3xl lg:text-6xl text-white">Product Details</h1>

            <div className="flex flex-row items-center gap-1 mt-6">
              <Link to="/" className="text-[#BED034]">
                Home
              </Link>

              <span className="text-white flex items-center gap-1">
                <FaAngleRight />
                Shop
              </span>
            </div>
          </div>
        </div>

        <div className="container min-h-screen flex flex-row p-10">
          <div className="Left w-full lg:w-[50%] p-10">
            <img src={SingleProduct.img} />
          </div>
          <div className="Right w-full lg:w-[50%] p-10">
            <h1 className="font-semibold text-4xl">
              {SingleProduct.Heading}{" "}
              <span className="text-[18px] font-bold mx-3 text-[#1A4137]">
                {SingleProduct.price}
              </span>
            </h1>

            <div className="flex items-center gap-1 text-[#FDB819] mt-4 border-b  border-black/10 pb-10">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span className="text-gray-700 mx-6">2 Customer Review</span>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 leading-8 text-lg">
                Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
                des mauris
                <br /> commodo venenatis ligula commodo leez sed blandit
                convallis dignissim
                <br /> onec vel pellentesque neque.
              </p>

              <p className="mt-6 tracking-wider text-gray-600">REF.4321/406</p>

              <p className="text-lg text-gray-600">Available in Store</p>

              <div className="counter flex flex-row  gap-3 items-center mt-6">
                <span>Choose Qunatity :-</span>

                <div className=" flex flex-row items-center gap-6 px-4 py-1 border border-gray-200 rounded-sm bg-gray-100">
                  <button onClick={Decrese} className="text-sm cursor-pointer">
                    <FaMinus />
                  </button>
                  <p className="text-lg">{count}</p>
                  <button onClick={Increse} className="text-sm cursor-pointer">
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="flex flex-row mt-8 gap-4">
                <button className="flex items-center px-6 rounded-xl py-4 border border-white bg-[#1A4137] text-white gap-4 cursor-pointer text-sm font-medium">
                  {" "}
                  <span className="text-xl">
                    <FaCartPlus />
                  </span>
                  Add To Cart
                </button>

                <button className="flex items-center px-2 rounded-xl py-4 border border-white bg-[#1A4137] text-white gap-4 cursor-pointer text-sm font-medium">
                  {" "}
                  <span className="text-xl">
                    <FaRegHeart />
                  </span>
                  Add To Wishlist
                </button>
              </div>

              <div className="flex flex-row items-center gap-3">
                <p className="mt-8 text-xl font-bold text-gray-800">
                  Share with friends
                </p>

                <div className="flex flex-row items-center mt-8 ">
                  <span className="p-2 text-lg rounded-full">
                    <RiTwitterXLine />
                  </span>

                  <span className="p-2 text-lg rounded-full">
                    <FaFacebookF />
                  </span>

                  <span className="p-2 text-lg rounded-full">
                    <FaPinterest />
                  </span>

                  <span className="p-2 text-lg rounded-full">
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container  flex-col items-center justify-center relative mt-20">
          <hr className="text-black/20 " />
          <div className="flex flex-row items-center justify-center gap-6 absolute -top-6 left-[40%] z-10">
            <button
              onClick={() => setActiveTab("Description")}
              className={`flex items-center px-6 py-4 border gap-4 cursor-pointer text-sm font-medium
                
                ${ActiveTab === "Description" ? " border-white bg-[#1A4137] text-white" : "bg-white text-black border border-gray-300"} `}
            >
              DESCRIPTION
            </button>

            <button
              onClick={() => setActiveTab("Review")}
              className={`flex items-center px-10 py-4  gap-4 cursor-pointer text-sm font-medium
                 ${ActiveTab === "Review" ? " border-white bg-[#1A4137] text-white" : "bg-white text-black border border-gray-300"}
                `}
            >
              REVIEW
            </button>
          </div>

          {ActiveTab === "Description" ? (
            <div className="p-4 lg:p-20">
              <h1 className="text-3xl font-bold">Description</h1>
              <p className="mt-4 text-gray-600 leading-8">
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrang hidden in the middle of text.
              </p>

              <div className="flex flex-col mt-6 gap-4">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-[#C6D936]">
                    <FaArrowRight />
                  </span>
                  Nam at elit nec neque suscipit gravida.
                </p>
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-[#C6D936]">
                    <FaArrowRight />
                  </span>
                  Aenean egestas orci eu maximus tincidunt.
                </p>
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-[#C6D936]">
                    <FaArrowRight />
                  </span>{" "}
                  Curabitur vel turpis id tellus cursus laoreet.
                </p>
              </div>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
                Related Products
              </p>
            </div>
          ) : (
            <div className="p-4 lg:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {reviewCard.map((elem, idx) => {
                  return (
                    <div className="flex flex-row items-start h-60 gap-6 bg-[#F4F5F4] p-10">
                      <img src={elem.img} className="h-20 w-20 rounded-full" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 text-[#FDB819] mt-4">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>

                        <h3 className="mt-3 font-medium text-lg">
                          {elem.name}{" "}
                          <span className="text-sm font-normal mx-3">
                            {elem.date}
                          </span>
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Aliquam hendrerit a augue insuscipit. Etiam aliquam
                          massa quis des mauris commodo.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="box h-150 w-full shadow-2xl mt-10 p-14 ">
                <h1 className="text-2xl font-medium">ADD YOUR COMMENTS</h1>

                <textarea
                  rows={6}
                  placeholder="Enter Message"
                  className="w-full bg-[#F4F5F8] mt-10 px-6 py-4 text-[16px] rounded-lg"
                ></textarea>

                <div className="flex flex-row gap-2 -mt-8">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-1/2 bg-[#F4F5F8] mt-10 px-6 py-4 text-[16px] rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="w-1/2 bg-[#F4F5F8] mt-10 px-6 py-4 text-[16px] rounded-lg"
                  />
                </div>

                <div className="flex flex-row items-center gap-3">
                  <p className="mt-6 text-gray-600">Your Review</p>
                  <div className="flex mt-6 gap-1 text-[#FDB819]">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>

                <p className="text-lg mt-6 text-gray-600 gap-2"><input type="checkbox"  />Save my name, email, and website in this browser for the next time I comment.</p>

                <button className="bg-[#F0F0F0] py-3 px-10 mt-10">Submit Comment</button>
              </div>
            </div>
          )}
        </div>

        <div className="container min-h-screen p-4 lg:p-20">
            <h1 className="text-3xl font-bold">Related Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
              {ReletedProduct.map((elem , idx )=>{
                return(

                  <div className="flex flex-col items-center text-center rounded-lg border p-2 group">
                    <div className="h-full w-full flex items-center justify-center p-4 rounded-lg overflow-hidden">
                       <img src={elem.img} className="h-70 w-70 rounded-lg duration-500 group-hover:scale-105"/>
                    </div>
                       <h1 className="text-2xl font-bold mt-3">{elem.name}</h1>
                       <p className="text-lg font-medium mt-3">{elem.price}</p>
                        <div className="flex items-center gap-1 text-[#FDB819] mt-4">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                </div>
                )
              })}
            </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
