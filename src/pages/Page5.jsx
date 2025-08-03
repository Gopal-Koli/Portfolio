import React from "react";
import * as motion from "motion/react-client"
import Rotate from '../Components/Rotate'

const Page5 = () => {
  return (
    <>
      <div className="rotateText mt-17 p-5  " >
        <h1 className="overflow-hidden text-[20vw]  justify-center items-cente flex text-black font-[anzo2] P-2 PL-2 uppercase leading-[30vw]">
        
          Projects
        </h1>
        <h2 className="text-red-500 font-bold p-7 text-4xl justify-center items-cente flex"> Farmer Buddy</h2>
        <div className=" justify-center items-cente flex">
          <p className="text-black font-[anzo1] ">
            Farmer Buddy is an e-commerce website that allows farmers to sell
            their products directly to consumers. The main aim of this platform
            is to eliminate middlemen so that farmers can receive the fair price
            for their produce. The website has two panels: User Panel – where
            customers can browse and purchase products. Admin Panel – where all
            activities are managed, such as product listings and order handling.
            It includes features like secure login, product listings, and order
            management. This project is built using HTML, CSS, JavaScript, and
            MySQL technologies.
          </p>
          <Rotate/>

        </div>
      </div>
      <div className=" text-gray-500 justify-end p-4">
        <p> Contact Me on  +91 8433564084 </p> 
       
        
       <p>  Email:gopalkoli4430@gmail.com </p>
      </div>
    </>
  );
};

export default Page5;
