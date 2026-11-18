
import { motion } from "motion/react";

import {
  FiUser,
  FiMail,
  FiMapPin,
  FiLink,
  FiCode,
  FiGlobe,
  FiDatabase,
  FiTerminal,
  FiSmartphone,
  FiCpu,
  FiLayers,
  FiServer,
  FiGitBranch,
  FiStar,
} from "react-icons/fi";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Skill categories
const skillCategories = [
  {
    title: "Programming Languages",
    icon: FiCode,
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Frontend Technologies",
    icon: FiGlobe,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend & Databases",
    icon: FiDatabase,
    skills: ["Node.js", "Flask", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Environments",
    icon: FiTerminal,
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];

// Icons for individual skills
const skillIcons = {
  Java: FiCode,
  Python: FiCode,
  C: FiCpu,
  HTML5: FiCode,
  CSS3: FiCode,
  JavaScript: FiCode,
  "React.js": FiLayers,
  "Node.js": FiServer,
  Flask: FiGlobe,
  MongoDB: FiDatabase,
  MySQL: FiDatabase,
  Git: FiGitBranch,
  GitHub: FaGithub,
  "VS Code": FiTerminal,
  "Android Studio": FiSmartphone,
};

// Animation variants
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1240px] mx-auto px-5 lg:px-8 my-10 scroll-mt-24"
    >
      <div className="relative overflow-hidden rounded-3xl bg-forest text-white p-7 sm:p-10 lg:p-14 shadow-2xl">

        {/* Decorative Background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">

            <div>

              {/* Section Badge */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-gold text-xs uppercase tracking-wider font-bold mb-5"
              >
                <FiUser size={15} />
                Profile & Background
              </motion.div>

              {/* Name */}
              <motion.h2
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight"
              >
                Om Nalawade
              </motion.h2>

              {/* Degree */}
              <motion.p
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-yellow-100 mt-2 font-semibold leading-relaxed"
              >
                B.Tech in Computer Science & Business Systems
              </motion.p>

              {/* Description */}
              <motion.p
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/75 mt-6 text-sm sm:text-base leading-8"
              >
                Studying at the intersection of modern computation and
                commercial strategy. Focused on architecting scalable web
                applications, robust backends, and responsive user experiences
                with precision engineering and maintainable clean code.
              </motion.p>
            </div>

            {/* CONTACT INFORMATION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-black/20 p-5 sm:p-6 rounded-2xl space-y-5"
            >

              {/* Email */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-yellow-200">
                  <FiMail size={19} />
                </div>

                <div className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                    Email
                  </span>

                  <a
                    href="mailto:omnalawade.24@gmail.com"
                    className="text-sm font-mono hover:text-yellow-200 transition break-all"
                  >
                    omnalawade.24@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-yellow-200">
                  <FiMapPin size={19} />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                    Location
                  </span>

                  <span className="text-sm font-medium">
                    Kolhapur, Maharashtra, India
                  </span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-yellow-200">
                  <FiLink size={19} />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

                  <a
                    href="https://www.linkedin.com/in/om-nalawade-b944822b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
                  >
                    <FaLinkedinIn size={20} />
                  </a>

                  <span className="text-white/30">•</span>

                  <a
                    href="https://github.com/OmNalawade05"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
                  >
                    <FaGithub size={20} />
                  </a>

                </div>
              </motion.div>

            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3 text-xs sm:text-sm text-white/65 italic"
            >
              <FiStar size={18} className="text-yellow-200 shrink-0" />

              Clean architectures translate directly into business resilience.
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Heading */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap items-center justify-between gap-3 mb-7"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Technical Skillset
              </h3>

              <span className="text-xs font-semibold text-yellow-200 bg-white/10 rounded-full px-3 py-2">
                Proficiencies & Tooling
              </span>
            </motion.div>

            {/* Skill Categories */}
            <div className="space-y-7">

              {skillCategories.map((category, index) => {
                const CategoryIcon = category.icon;

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12,
                      ease: "easeOut",
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                  >

                    <div className="flex items-center gap-2 mb-3">
                      <CategoryIcon
                        size={16}
                        className="text-yellow-200"
                      />

                      <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-yellow-100">
                        {category.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2.5">

                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skillIcons[skill];
                        const isReact = skill === "React.js";

                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: skillIndex * 0.08,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                              y: -5,
                              scale: 1.04,
                            }}
                            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm ${
                              isReact
                                ? "bg-gold text-forest shadow-md"
                                : "bg-white text-forest"
                            }`}
                          >
                            {SkillIcon && <SkillIcon size={16} />}
                            {skill}
                          </motion.div>
                        );
                      })}

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
