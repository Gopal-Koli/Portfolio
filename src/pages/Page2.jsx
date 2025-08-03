import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Page2 = () => {
 gsap.registerPlugin(ScrollTrigger)
useGSAP(function(){
    gsap.from(".rotateText",{
        transform:'rotateX(-80deg)',
        opacity:0,
        duration:2,
        stagger:1,
        scrollTrigger:{
            trigger:'.rotateText',
            // markers:true,
            start:'top 60%',
            end:"top -350%",
            scrub:2
        }
    })
})


  return (
    <>
    <div id='section2' className=' bg-white text-center p-1 text-black'>
    
      <div  className='rotateText mt-17'>
        <h1 className='overflow-hidden text-[55vw]  text-black font-[anzo2] uppercase leading-[50vw]'> WHERE</h1>
      </div>
      <div className='rotateText'>
        <h1 className='overflow-hidden text-[42vw]  text-black font-[anzo2] uppercase leading-[35vw]'> CREATIVITY</h1>
      </div>
      <div className='rotateText'>
        <h1 className='overflow-hidden text-[55vw]  text-black font-[anzo2] uppercase leading-[49vw]'> MEETS</h1>
      </div>
      <div className='rotateText'>
        <h1 className='overflow-hidden text-[55vw]  text-black font-[anzo2] uppercase leading-[45vw]'> CLEAN</h1>
      </div>
      <div className='rotateText'>
        <h1 className='overflow-hidden text-[55vw]  text-black font-[anzo2] uppercase leading-[45vw]'> CODE</h1>
      </div>
      <div className='flex mx-auto items-center text-black justify-center w-wra gap-3 p-4 '>

        <FaReact className='text-[30px]' /><p className=''> React JS</p>
      
        <TbBrandJavascript className='text-[30px] ml-3' /><p className=''> JavaScript</p>
        <RiTailwindCssFill className='text-[30px] ml-3' /><p className=''> TailwindCSS</p>
        <FaHtml5 className='text-[30px] ml-3' /><p className=''>Html/Css</p>
        <GrMysql  className='text-[30px] ml-3 ' /><p className=''>Mysql</p>
          <FaPython className='text-[30px] ml-3' /><p className=''> Python</p>
         </div>
          <div className='h-[1px] w-1/2 mb-3  relative  translate-x-1/2 bg-black'></div>
    
        
    </div>
    
    </>
  )
}

export default Page2
