import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1220] text-white border-t border-white/10">

      {/* 🔥 TOP GLOW LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-wide">
            Alok<span className="text-green-400">.</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Java Backend Developer
          </p>
        </div>

        {/* CENTER */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Alok. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/Alok-Verma45"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-white/10 
            hover:border-green-400 hover:text-green-400 
            hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
            transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/alokxio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-white/10 
            hover:border-green-400 hover:text-green-400 
            hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
            transition"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-md border border-white/10 
            hover:border-green-400 hover:text-green-400 
            hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
            transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;