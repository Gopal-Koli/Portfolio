import React, { useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaEye, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import HireMeMenu from "../../Components/HireMeMenu";

const Sc1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:hidden relative">
      {/* Navbar */}
      <nav className="nav w-full h-[50px] font-[anzo3] p-2 justify-between flex items-center bg-gradient-to-r from-black to-white">
        <div className="flex items-center text-white">
          <RiCodeSSlashLine className="text-[30px] pr-2" />
          <p className="text-white text-lg font-semibold">Gopal Koli</p>
              
          
        </div>

        <div onClick={toggleMenu} className="cursor-pointer">
          {menuOpen ? (
            <IoClose className="text-black rounded-full bg-amber-50 p-1 text-3xl" />
          ) : (
            <IoMenu className="text-black rounded-full bg-amber-50 p-1 text-3xl" />
          )}
        </div>
      </nav>

      {/* Toggle Menu Content */}
      {menuOpen && (
        <div
          id="banner"
          className="absolute top-[50px] right-0 bg-white shadow-lg rounded-l-lg p-4 w-[200px] z-50 flex flex-col items-center"
        >
          <p className="font-[anzo1] text-black mb-3">EXPLORE</p>

          <a
            href="https://docs.google.com/document/d/1lfPJRqAciWAXLqCZG9ijvcMJE4fD3SYP/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEye className="text-[35px] hover:scale-125 transition-transform text-black m-2" />
          </a>

          <a
            href="https://github.com/Gopal-Koli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub className="text-[35px] hover:scale-125 transition-transform text-black m-2" />
          </a>

          <a
            href="https://www.linkedin.com/in/gopal-koli-4b703033a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[35px] hover:scale-125 transition-transform text-black m-2" />
          </a>
<HireMeMenu />
          
        </div>
      )}
      
    </div>
  );
};

export default Sc1;
