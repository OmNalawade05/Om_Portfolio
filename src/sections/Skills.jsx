
import React from "react";
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiTool,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FiCode />,
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: <FiGlobe />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: <FiDatabase />,
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <FiTool />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core Concepts",
    icon: <FiLayers />,
    skills: ["Data Structures", "OOP", "DBMS", "Problem Solving"],
  },
  {
    title: "Emerging Technologies",
    icon: <FiCpu />,
    skills: ["AI/ML Fundamentals", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F7F5EF] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B58B45]">
            What I Work With
          </p>

          <h2 className="text-3xl font-bold text-[#173D32] md:text-4xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#66736C]">
            Technologies, tools, and concepts I use to build projects,
            solve problems, and continuously expand my technical knowledge.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E5E0D4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B58B45] hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#173D32] text-xl text-[#D6B36A]">
                {group.icon}
              </div>

              <h3 className="mb-5 text-lg font-semibold text-[#173D32]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E8E2D5] bg-[#F7F5EF] px-3 py-2 text-sm font-medium text-[#52645A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
