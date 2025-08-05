import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import * as motion from "motion/react-client"
const projects = [
  {
    title: "MY MUSIC",
    description:
      "Music Interface to Listen a song with responsive background change.",
    githubLink: "https://github.com/Gopal-Koli/CodeSpace_Music_Assesment",
    liveLink: "https://code-space-music-assesment.vercel.app/",
  },
  
  {
    title: "Farmer Buddy Website",
    description: "A platform for farmers to sell directly to customers.",
    githubLink: "https://github.com/Gopal-Koli/Farmer-buddy-Adminpanel.git",
    liveLink: "https://github.com/Gopal-Koli/Farmer-buddy-Adminpanel",
  },
  {
    title: "Plant Disease Detection",
    description: "Detect diseases in plants using Gradio Gemini API.",
    githubLink: "https://github.com/Gopal-Koli/Plant-Disease-AI",
    liveLink: "https://github.com/Gopal-Koli/Plant-Disease-AI ",
  },
  
  {
    title: "Healthcare Dashboard",
    description: "ONGOING ",
     githubLink: "https://github.com/Gopal-Koli/Healthcare-Dashboard",
    // liveLink: "https://health-dashboard.vercel.app/",
  },
];

const ProjectsContainer = () => {
  const box = {
   
    backgroundColor: "#9911ff",
    borderRadius: 4,
}
  return (
    <>
      <h1 className="text-4xl sm:text-6xl md:text-8xl text-black font-[anzo6] text-center mt-4">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {projects.map((project, index) => (
           <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
           
      
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 min-h-[220px]
                     shadow-md hover:scale-105 hover:shadow-xl 
                     hover:bg-gradient-to-r hover:from-pink-400 hover:to-yellow-300
                     transition-all duration-500 flex flex-col justify-between"
          >
            <h3 className="text-lg font-bold text-gray-800 text-center">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {project.description}
            </p>

            <div className="flex justify-center gap-4 mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold text-3xl hover:text-white transition-all"
                >
                  <FaGithubAlt />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline text-sm hover:text-green-800"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectsContainer;
