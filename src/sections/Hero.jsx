import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/cropped2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0b1220] text-white pt-20 md:pt-24"
    >
      {/* 🔥 SAFE BACKGROUND GLOW (FIXED) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full top-20 right-20"></div>
        <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full bottom-10 left-10"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:pr-10 lg:pr-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-green-400">Alok!</span>
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2">
            <span className="text-gray-300">Java Backend</span>
          </h2>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-400">
            Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-md sm:max-w-lg mx-auto md:mx-0">
            I build scalable backend systems using Spring Boot and create
            full-stack applications with modern technologies. Focused on clean
            architecture and real-world problem solving.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="relative overflow-hidden px-6 py-3 rounded-md 
              bg-gradient-to-r from-green-400 to-emerald-500 
              text-black font-semibold 
              hover:scale-105 transition duration-300 
              shadow-lg shadow-green-500/20
              before:absolute before:inset-0 before:bg-white/10 
              before:opacity-0 hover:before:opacity-100 before:transition"
            >
              Download CV ⬇️
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-green-400/30 
              text-green-400 hover:bg-green-400 hover:text-black 
              transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-green-400/30 scale-110 blur-md"></div>

            {/* Image */}
            <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] 
                            h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] 
                            rounded-full overflow-hidden border border-green-400/20 relative z-10
                            hover:scale-105 transition duration-300">
              
              <img
                src={profile}
                alt="profile"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;