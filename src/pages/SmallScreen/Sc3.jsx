"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Model from "../../assets/Model.jpg";
import School from "../../assets/School.jpg"

const educationList = [
  {
    title: "Bachelor Of Science In Computer Science",
    college: "Model College",
    details: "8.44 CGPA",
    period: "2022–2025",
    status: "Completed",
    img: Model,
  },
  {
    title: "HSC Science",
    college: "K.V. Pendharkar College | HSC",
    details: "47.33%",
    period: "2020–2022",
    status: "Completed",
    img: "https://images.indianexpress.com/2024/07/KV.jpg",
  },
  {
    title: "SSC",
    college: "Aadarsh Vidya Mandir  | SSC",
    details: "87.80%",
    period: "2019–2020",
    status: "Completed",
    img: School,
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
};

// Child component
const EducationCard = ({ edu, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
   <motion.div
  ref={ref}
  className="bg-gradient-to-l  bg-white border border-gray-200 rounded-xl   hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-200
                      shadow-lg flex items-center gap-4 p-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03]"
  variants={fadeInUp}
  initial="hidden"
  animate={isInView ? "show" : "hidden"}
  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
>


      <img
        src={edu.img}
        alt={edu.title}
        className="w-32 h-32 object-cover rounded-md border"
      />
      <div>
        <h3 className="text-lg font-[anzo3] text-black ">{edu.title}</h3>
        <p className="text-sm text-gray-600 font-[anzo-1]">
          {edu.college} | {edu.details}
        </p>
        <p className="text-gray-300 font-[anzo1] font-semibold mt-1">
          {edu.period} | {edu.status}
        </p>
      </div>
    </motion.div>
  );
};

const Sc3 = () => {
  return (
    <section className="bg-[#ffffff] py-10 px-4">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold">
          🎓 <span className="text-black">My Education</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
      </motion.div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <EducationCard key={index} edu={edu} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Sc3;
