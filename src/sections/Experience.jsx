
import {
  FiUsers,
  FiCode,
  FiCalendar,
} from "react-icons/fi";
import { motion } from "motion/react";

const events = [
  {
    title: "Leadership & Team Management",
    category: "Leadership",
    icon: FiUsers,
    description:
      "Led a multidisciplinary student team across technical, public relations, design, and event operations departments.",
  },
  {
    title: "Technical Workshops & Events",
    category: "Technical Events",
    icon: FiCode,
    description:
      "Organized coding bootcamps, hands-on development workshops, and technical sessions to encourage students to explore new technologies.",
  },
  {
    title: "Event Planning & Execution",
    category: "Event Management",
    icon: FiCalendar,
    description:
      "Planned and coordinated club events, managed team responsibilities, and ensured smooth execution of activities under byteARQ Club.",
  },
];

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-[1240px] mx-auto px-5 lg:px-8 py-16 lg:py-24 scroll-mt-24"
    >
      {/* Section Heading */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
      >
        <div>
          <span className="text-xs text-[#7b5800] uppercase tracking-widest font-bold">
            Extracurricular Impact
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight mt-2">
            Experience & Leadership
          </h2>
        </div>
      </motion.div>

      {/* Leadership Showcase Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={slideUp}
        className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md border border-[#efe6d4]"
      >
        {/* TOP SECTION — CONTENT KEPT AS IT IS */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#efe6d4]">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gold text-forest text-xs font-bold uppercase tracking-wider mb-3">
              Executive Leadership
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest">
              President – byteARQ Club
            </h3>

            <p className="text-base text-gray-600 font-medium mt-2">
              KIT College of Engineering, Kolhapur
            </p>

            <br />

            <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              Leading technical communities, fostering competitive engineering
              culture, and organizing developer initiatives.
            </p>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#f4eddf] text-forest text-sm font-bold w-fit"
          >
            <FiCalendar size={17} className="text-[#795600]" />
            Active Tenure • 2023 – 2026
          </motion.div>
        </div>

        {/* Events Heading */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-9 mb-7"
        >
          <h3 className="font-display text-2xl font-bold text-forest">
            Events Under My Leadership
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Events and initiatives organized by byteARQ Club.
          </p>
        </motion.div>

        {/* ONLY THREE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-[#faf8f2] border border-[#efe6d4] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-forest flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={23} />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#795600]">
                  {event.category}
                </span>

                <h4 className="font-display text-xl font-bold text-forest mt-2">
                  {event.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {event.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
