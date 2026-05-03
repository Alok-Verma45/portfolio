import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navLinks = ["home", "projects", "skills", "contact"];

  // ✅ SCROLL SPY (center detection)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-[#0b1220]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-white flex items-center gap-1 select-none">
            <span className="drop-shadow-[0_0_6px_rgba(34,197,94,0.35)]">
              Alok
            </span>

            <span className="relative flex h-2.5 w-2.5 translate-y-[9px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setActive(link)} // 🔥 FIX
                className={`relative capitalize transition ${
                  active === link
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    active === link ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-4 space-y-4 bg-[#0b1220]/95 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => {
                  setActive(link); // 🔥 FIX
                  setOpen(false);
                }}
                className={`block capitalize ${
                  active === link
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
