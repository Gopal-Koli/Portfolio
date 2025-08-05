import React, { useEffect, useRef } from "react";
import myimg from "../../assets/MyImg.jpg";
import myimg2 from "../../assets/backimg1.jpg";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "../../Components/ParticleBackground";
const Sc2 = () => {


  return (
    <div className="">
     
      <div className="lg:hidden heading p-3 ">
        <h1 className="text-2xl text-[#071063] font-[anzo1] font-[600] capitalize">
          Hi There ,
        </h1>
        <div className="flex text-4xl">
          <h1 className=" text-[#071063]  font-[900]  shadow-gray-600 capitalize">
            I'm Gopal
          </h1>
          <span className="text-4xl text-[#ffc516] font-[900] shadow-2xl shadow-gray-600 capitalize ml-2">
            Koli
          </span>
        </div>
        <div className="flex justify-items-center text-[#D5451B] :text-2xl font-bold p-1">
          <p className="text-[#071063] mr-1 font-bold">
           
            I am into 
           
          </p>
          <Typewriter
              words={[
                "Web Development",
                
                "FRONTEND DEVELOPER",
                "UI/UX DESIGN ",
                "SQL DEVELOPER",
                "LINUX SHELL SCRIPTING"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
              className="text-2xl   ml-4"
            />
           
           <ParticleBackground/>
           
        </div>
        <div className="relative w-full h-100 mt-2">
          <img
            src={myimg2}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-50 "
          />
          <img
            src={myimg} 
            alt="Overlay"
            className="absolute bottom-4 left-4 w-40 h-40 object-cover border-2 border-white z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Sc2;
