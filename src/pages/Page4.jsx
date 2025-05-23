import React from "react";
import bgV1 from "../assets/bgV1.mp4";
import { motion } from "motion/react";
import { useState } from "react";
import gopal from "../assets/gopal3.png";
import { GiTriangleTarget } from "react-icons/gi";
const Page4 = () => {
  const [moved, setMoved] = useState(false);
  return (
    <div className="h-screen relative p-10 bg-white ">
      <div className="h-full w-full bg-black rounded-[25px] items-end overflow-hidden ">
        <video
          className="h-[180vh] w-[160vh] relative  "
          src={bgV1}
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.h1
          initial={{ x: -100, y: [0], opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white font-[anzo5] text-[6vw] font-extrabold absolute uppercase top-10 left-10 p-2 z-10"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 ,repeat:'infinity' }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white font-[anzo1] w-[400px] cursor-pointer   absolute text-[19px] top-40 left-10 p-2 pl-4 z-10"
          whileHover={{ x: 1000, duration: 6 }}
        >
          Hello..!, I'm Gopal Koli a passionate and self-driven software
          developer with a strong foundation in React.js, JavaScript, Python,
          and full-stack web development. I enjoy turning ideas into reality
          using clean and efficient code. I'm always curious to learn new
          technologies, solve real-world problems, and build user-friendly
          digital experiences. Apart from coding, I love also designing digital
          posters and continuously improving myself to achieve my goals.
        </motion.p>
      </div>

      
      {/* <motion.img
        src={gopal}
        initial={{ y: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 8, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }}
        className="h-[45vh] w-[38vh] shadow- absolute  bottom-10 z-60   left-290 overflow-hidden"
      ></motion.img> */}

    </div>
  );
};

export default Page4;
