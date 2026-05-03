import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group relative flex flex-col h-full p-6 rounded-2xl 
      bg-white/[0.03] border border-white/10 backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-400/10 
      hover:border-green-400/40 overflow-hidden"
    >

      {/* 🔥 HOVER GLOW (FIXED FOR ALL CARDS) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute w-40 h-40 bg-green-400/20 blur-3xl rounded-full top-[-20px] left-[-20px]"></div>
      </div>

      {/* STATUS BADGE */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium tracking-wide ${
            project.status === "Live"
              ? "bg-green-400/10 text-green-400 border border-green-400/20"
              : "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition relative z-10">
        {project.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-3 text-sm leading-relaxed flex-grow min-h-[72px] relative z-10">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 relative z-10">
        {project.tech.map((t, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full 
            bg-green-400/10 text-green-400 
            border border-green-400/10
            group-hover:scale-105 transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-auto pt-6 relative z-10">

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 rounded-lg 
          border border-white/10 text-gray-300 
          hover:bg-white/5 hover:text-white 
          transition duration-300"
        >
          GitHub
        </a>

        {/* Live */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 text-center py-2 rounded-lg 
          bg-gradient-to-r from-green-400 to-emerald-500 
          text-black font-medium 
          hover:scale-105 active:scale-95 transition duration-300
          shadow-md shadow-green-500/20
          before:absolute before:inset-0 before:bg-white/10 
          before:opacity-0 hover:before:opacity-100 before:transition"
        >
          Live
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;