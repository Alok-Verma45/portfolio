import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">
          Alok<span className="text-green-400">.</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">Projects</li>
          <li className="hover:text-green-400 cursor-pointer">Skills</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;