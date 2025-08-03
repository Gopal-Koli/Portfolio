"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bg4 from "../assets/bgV3.mp4";
import { Typewriter } from "react-simple-typewriter";
import AnimatedCursor from "../Components/AnimatedCursor";

const Sc4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <>
      {/* <video
        className="h-[180vh] w-full relative z-20"
        src={bg4}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      
      <div
        ref={ref}
        className="flex items-center justify-center mt-30 p-2 rounded-2xl to-black px-6 min-h-screen "
      >
       
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg text-gray-900 font-[anzo3] leading-relaxed max-w-4xl"
        >
          I'm a passionate Web Developer skilled in{" "}
          <span className="text-cyan-400">React.js</span>,{" "}
          <span className="text-yellow-300">JavaScript</span>,{" "}
          <span className="text-green-400">MySQL</span>, and{" "}
          <span className="text-pink-400">Python</span>. I love building smooth
          user experiences and clean interfaces.
          <br />
          <br />
          {/* Currently preparing for exciting new challenges and exploring opportunities in frontend development. */}
        </motion.p>
   
      </div>
    </>
  );
};

export default Sc4;
