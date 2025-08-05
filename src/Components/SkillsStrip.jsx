import React from "react";
import { FaReact, FaHtml5, FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { FaFigma } from "react-icons/fa";
const skills = [
  { icon: <FaReact className="text-[30px]" />, name: "React JS" },
  { icon: <TbBrandJavascript className="text-[30px]" />, name: "JavaScript" },
  { icon: <RiTailwindCssFill className="text-[30px]" />, name: "TailwindCSS" },
  { icon: <FaHtml5 className="text-[30px]" />, name: "HTML / CSS" },
  { icon: <GrMysql className="text-[30px]" />, name: "MySQL" },
  { icon: <FaPython className="text-[30px]" />, name: "Python" },
 {icon: <FcLinux className="text-[30px]" />, name: "Linux"},
  {icon: <FaFigma className="text-[30px]" />, name: "Figma"},
];

export default function SkillsStrip() {
  return (
    <div className="w-full overflow-hidden bg-white py-4 border-t border-b  border-gray-300">
      {/* Infinite Scroll Container */}
      <div className="flex w-max animate-scroll gap-10  text-black text-lg font-semibold items-center">
        {Array(2)
          .fill(skills) // repeat skills twice for smooth loop
          .flat()
          .map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon} <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
