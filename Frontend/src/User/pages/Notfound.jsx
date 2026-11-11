import React from 'react'
import Img from '../../assets/Images/404.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <section className="notfound min-h-screen flex flex-col items-center justify-center pb-50">
        <img src={Img} alt="" srcset="" />
        <h1 className='text-4xl font-semibold tracking-widest'>PAGE NOT FOUND!</h1>
        <p className='text-center text-lg text-gray-500 mt-6'>Sorry We can't fond that page! The pageb you are looking <br/>for was never existed</p>


<div className="relative mt-10">
        <input type="text" placeholder='Search here...' className='w-160 py-4 bg-[#F5F5F5] px-4  rounded-lg' />
        <span className='absolute right-10 top-4 text-2xl cursor-pointer'><IoSearchOutline /></span>
</div>

<Link to='/' className='px-10 py-4 bg-[#C6D936] mt-5 text-sm font-bold'>Back To Home</Link>
    </section>  
  )
}

export default Notfound