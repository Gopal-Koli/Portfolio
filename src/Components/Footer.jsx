import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-sky-400 mb-2">Contact</h2>
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-sky-400" /> gopalkoli@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-sky-400" /> +91 8433564084
          </p>
          <p className="flex items-center gap-2">
            <GoLocation className="text-sky-400" /> Mumbai, India
          </p>
        </div>

        {/* Skills / Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Tech Stack</h3>
          <ul className="space-y-2">
            <li>React.js</li>
            <li>JavaScript / ES6+</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/Gopal-Koli" className="hover:text-sky-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gopal-koli-4b703033a/" className="hover:text-sky-400 transition"><FaLinkedin /></a>
            <a href="https://x.com/Krishna_Koli_8?t=XP8x0r_xYHqq96Llam1RkA&s=09" className="hover:text-sky-400 transition"><FaTwitter /></a>
          </div>
        </div>
        
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mt-10 text-sm">
        © 2025 Gopal Koli. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
