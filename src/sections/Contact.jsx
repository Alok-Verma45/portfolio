import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0b1220] text-white py-24 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Let’s <span className="text-green-400">Connect</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Want to build something amazing or just say hi?  
          I’m always open to discussing new opportunities 🚀
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {/* EMAIL */}
          <div
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=alokkumar09921@gmail.com",
                "_blank"
              )
            }
            className="cursor-pointer group relative p-6 rounded-xl 
            bg-white/[0.03] border border-white/10 backdrop-blur-md
            hover:-translate-y-2 hover:border-green-400/40 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
            transition duration-300 overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-32 h-32 bg-green-400/20 blur-3xl rounded-full top-[-20px] left-[-20px]"></div>
            </div>

            <FaEnvelope className="text-3xl text-green-400 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-400 text-sm mt-2">
              Send me a message anytime
            </p>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com/Alok-Verma45"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-xl 
            bg-white/[0.03] border border-white/10 backdrop-blur-md
            hover:-translate-y-2 hover:border-green-400/40 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
            transition duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-32 h-32 bg-green-400/20 blur-3xl rounded-full top-[-20px] left-[-20px]"></div>
            </div>

            <FaGithub className="text-3xl text-green-400 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-400 text-sm mt-2">
              Explore my work
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/alokxio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-xl 
            bg-white/[0.03] border border-white/10 backdrop-blur-md
            hover:-translate-y-2 hover:border-green-400/40 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
            transition duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-32 h-32 bg-green-400/20 blur-3xl rounded-full top-[-20px] left-[-20px]"></div>
            </div>

            <FaLinkedin className="text-3xl text-green-400 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-400 text-sm mt-2">
              Let’s connect professionally
            </p>
          </a>

        </div>

        {/* 🔥 CTA SECTION */}
        <div className="mt-20 flex flex-col items-center gap-4">

          <p className="text-gray-400 text-sm">
            Prefer quick chat? Ping me directly 👇
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/919628586190?text=Hi%20Alok%20I%20saw%20your%20portfolio",
                "_blank"
              )
            }
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-xl 
            bg-gradient-to-r from-green-400 to-emerald-500 
            text-black font-semibold text-lg 
            hover:scale-105 active:scale-95 transition duration-300 
            shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
};

export default Contact;