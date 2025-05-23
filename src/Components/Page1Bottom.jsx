import React from "react";
import Logo from "../assets/MyLogo1.png";
import { useGSAP } from "@gsap/react";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

import gsap from "gsap";
const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="absolute  bottom-10 P-32 flex items-end justify-between  w-[90vw] ">
      <div className="">
        <h2 className="font-[anzo4]">
          WEBSITE | DIGITAL DESIGN | WEBAPPLICATION{" "}
        </h2>
        <h3 className=" text-gray-300">GOPAL KOLI</h3>
      </div>

      <div id="banner">
        <div className="classname  text-black justify-end  h-70 w-20 mb-10 ml-30  ">
         <p className="font-[anzo1] "> EXPLORE </p>
        
            <a
              href="https://github.com/Gopal-Koli"
              target="_blank"
              rel="noopener noreferrer"
            >
               <ImGithub className="text-[35px] hover:scale-120 text-black mt-3 ml-5" />
            </a>
             <a
              href="https://www.linkedin.com/in/gopal-koli-4b703033a/"
              target="_blank"
             
            >
              <FaLinkedin className="text-[35px] text-black hover:scale-120 mt-7 ml-5" />
            </a>
       
        </div>
        <img
          src={Logo}
          className="rounded-full z-50 h-40 w-40 shadow shadow-gray-600 mr-4"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
