
import { motion } from "motion/react";
import {
  FiBookOpen,
  FiMapPin,
} from "react-icons/fi";

const educationData = [
  {
    period: "2023 - 2027",
    degree: "B.Tech in Computer Science and Business Systems (CSBS)",
    institution:
      "Kolhapur Institute of Technology's College of Engineering",
    location: "Kolhapur, Maharashtra",
    current: true,
  },
  {
    period: "2023",
    degree: "Higher Secondary Education (12th)",
    institution: "Gopal Krishna Gokhale College, Kolhapur",
    location: "Kolhapur, Maharashtra",
    current: false,
  },
  {
    period: "2021",
    degree: "Secondary Education (10th)",
    institution: "Sau Ambubai Patil English Medium School",
    location: "Kolhapur, Maharashtra",
    current: false,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="w-full max-w-[1240px] mx-auto px-5 lg:px-8 py-16 lg:py-24 scroll-mt-24"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold/20 text-forest text-xs font-bold uppercase tracking-wider mb-4">
          <FiBookOpen size={15} />
          Academic Background
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
          Education
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl leading-relaxed">
          My academic journey and educational milestones.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-[13px] sm:left-[19px] top-5 bottom-5 w-[2px] bg-gold/50" />

        <div className="space-y-8">

          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="relative pl-10 sm:pl-14"
            >

              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="absolute left-0 top-7 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gold border-4 border-[#f8f5ed] flex items-center justify-center shadow-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-forest" />
              </motion.div>

              {/* Education Card */}
              <div className="bg-white border border-[#efe6d4] rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                {/* Period */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f4eddf] text-[#795600] text-sm font-bold tracking-wider mb-5">
                  {item.period}
                </div>

                {/* Degree */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-forest leading-snug">
                  {item.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-3 mt-4 text-gray-600">
                  <FiBookOpen
                    size={19}
                    className="shrink-0 mt-1 text-[#795600]"
                  />
                  <p className="text-sm sm:text-base leading-relaxed">
                    {item.institution}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 mt-3 text-gray-500">
                  <FiMapPin
                    size={17}
                    className="shrink-0 text-[#795600]"
                  />
                  <span className="text-sm">
                    {item.location}
                  </span>
                </div>

                {/* Current Status */}
                <div className="flex flex-wrap items-center gap-3 mt-7">
                  {item.current && (
                    <span className="px-4 py-2 rounded-full bg-[#e6f4ed] text-[#08734d] text-sm font-bold">
                      Current
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;
