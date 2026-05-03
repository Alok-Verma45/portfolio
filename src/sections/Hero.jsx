import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-green-400">Alok</span> 👋
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Java Backend Developer | Building scalable applications with Spring Boot  
          | Solved 150+ DSA problems
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition">
            View Projects
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-green-400 transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;