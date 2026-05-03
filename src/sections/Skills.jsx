import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 85, icon: <FaReact /> },
      { name: "JavaScript", level: 80, icon: <SiJavascript /> },
      { name: "Tailwind", level: 85, icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", level: 90, icon: <FaJava /> },
      { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
      { name: "REST APIs", level: 85, icon: <TbApi /> },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { name: "PostgreSQL", level: 75, icon: <SiPostgresql /> },
      { name: "Git", level: 85, icon: <FaGitAlt /> },
      { name: "Docker", level: 60, icon: <FaDocker /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#0b1220] text-white py-20 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies I use to build scalable and modern applications.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl 
              bg-white/[0.03] border border-white/10 backdrop-blur-md
              hover:-translate-y-2 hover:border-green-400/40 
              hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
              transition duration-300 overflow-hidden"
            >

              {/* 🔥 CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute w-40 h-40 bg-green-400/20 blur-3xl rounded-full top-[-20px] left-[-20px]"></div>
              </div>

              <h3 className="text-xl font-semibold mb-6 text-center group-hover:text-green-400 transition">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <div key={i}>

                    {/* TOP ROW */}
                    <div className="flex justify-between items-center text-sm mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400 text-xl group-hover:scale-110 transition">
                          {skill.icon}
                        </span>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 
                        transition-all duration-[1200ms] ease-out relative"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                        }}
                      >
                        {/* 🔥 SHINE EFFECT */}
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;