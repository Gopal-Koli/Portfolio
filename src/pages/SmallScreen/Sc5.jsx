import React from "react";
import ParticleBackground from "../../Components/ParticleBackground";
import ProfilePicture1 from "../../assets/ProfilePicture1.jpg"
const Sc5 = () => {
  return (
    <>
    <div className="lg:hidden flex flex-col items-center justify-center text-center Z-10 p-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Profile Image */}
      
      <img
        src={ProfilePicture1}
        alt="Gopal Koli"
        className="rounded-full w-32 h-32 mb-4 border-4 border-white shadow-lg"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold mb-2">Gopal Koli</h2>

      {/* Short Description */}
      <p className="text-gray-300 text-sm leading-6 max-w-xs mb-4">
         Hi, I’m Gopal Koli. I have completed my B.Sc. in Computer Science from
          Model College of Dombivli, University of Mumbai, with a CGPI of 8.44 In The Year Of 2025.
          I am passionate about learning new technologies and building creative
          digital solutions. I enjoy designing, exploring software development,
          and continuously improving my skills.
      </p>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {[
          "REACT.JS",
          "JAVASCRIPT",
          "PYTHON",
          "MYSQL",
          "HTML",
          "CSS",
          "UI/UX DESIGN",
          "LINUX",
        ].map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs bg-gray-700 rounded-full hover:bg-gray-600 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Resume & Contact Buttons */}
      <div className="flex gap-4 mt-3">
        <a
          href="https://docs.google.com/document/d/1lfPJRqAciWAXLqCZG9ijvcMJE4fD3SYP/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-300 transition"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
    </>
  );
};

export default Sc5;
