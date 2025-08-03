import React from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Sc1 = () => {
  return (
    <div className="lg:hidden">
      <nav className="nav w-full h-[50px] font-[anzo3] p-2  justify-between flex items-center  bg-gradient-to-r from-black to-white">

          <div className="flex items-center text-white">
          <RiCodeSSlashLine className="text-[30px] pr-2" />
          <p className="text-white text-lg font-semibold">Gopal Koli</p>
        </div>
          <IoMenu className="text-black rounded-full bg-amber-50 p-1 text-3xl" />
      </nav>
      
      
    </div>
    
  );
};

export default Sc1;
