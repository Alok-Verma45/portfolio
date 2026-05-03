import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 px-6 bg-[#0b1220] text-white overflow-hidden"
    >
      {/* 🔥 BALANCED BACKGROUND GLOW (FIXED) */}
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full top-20 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full top-40 right-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full bottom-10 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-green-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Real-world applications built with scalable architecture and modern technologies.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;