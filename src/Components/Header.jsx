import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CgMenuGridO } from "react-icons/cg";
const Header = () => {

  return (
    <div className='fixed lg:w-full flex w-md   items-center justify-end z-10 lg:p-20 p-4'> 
    <button className=' px-6 sm:px-6 sm:py-3 lg:text-sm sm:text-base py-3 border-2 border-white text-[9px]  hover:bg-gray-400  hover:text-black rounded-full bg-black shadow-lg shadow-gray-500 cursor-pointer'>Hire me  </button>
      < CgMenuGridO className=" text-black text-3xl ml-3"/>
    </div>
  )
}

export default Header
