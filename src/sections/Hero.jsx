
import { ArrowDown, Download, Code } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "../assets/images/profile.jpeg";

function Hero() {
  const slideLeft = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="max-w-[1240px] mx-auto px-5 lg:px-8 py-16 lg:py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">

          {/* Availability Badges */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            <span className="bg-gold/30 text-forest rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <span style={{ color: "green" }}>●</span> Available for Work
            </span>

            <span className="bg-muted rounded-full px-4 py-2 text-xs font-semibold">
              Summer 2027 Grad
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-forest leading-tight">
              Software <br />

              <span className="relative inline-block">
                <span className="relative z-10">
                  Developer
                </span>

                <span className="absolute bottom-2 left-0 w-full h-4 bg-gold -z-0 -rotate-1 rounded-md" />
              </span>

              <br />
            </h1>

            <h2 className="font-display text-xl font-bold text-moss mt-4">
              Building Digital Solutions Through
              Code & Creativity.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-moss text-lg leading-8 max-w-xl"
          >
            Hello! I'm Om Nalawade, a Computer Science
            and Business Systems student passionate
            about software development, full-stack
            architectures, and algorithmic problem-solving.
            I build resilient, user-first applications
            bridging business requirements with clean
            engineering.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {/* Projects Button */}
            <motion.a
              href="#featured-projects"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.06 }}
              className="bg-forest text-cream px-6 py-4 rounded-full font-semibold flex gap-3 items-center transition shadow-lg"
            >
              Explore My Projects
              <ArrowDown size={18} />
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              whileHover={{ scale: 1.06 }}
              className="bg-gold text-forest px-6 py-4 rounded-full font-bold flex gap-3 items-center transition"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* CREDENTIALS */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-5 text-sm text-moss"
          >
            <span>🎓 B.Tech CSBS @ KIT Kolhapur</span>
            <span>⌘ Full-Stack & ML Systems</span>
          </motion.div>
        </div>

        {/* RIGHT PROFILE COMPOSITION */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">

            {/* Yellow Circle */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-gold to-yellow-200 shadow-xl"
            />

            {/* Outer Ring */}
            <div className="absolute w-[94%] h-[94%] rounded-full border-2 border-gold/30" />

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="relative z-10 w-[88%] h-[88%] rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={profileImage}
                alt="Om Nalawade"
                className="w-full h-full object-cover object-top hover:scale-110 transition duration-500"
              />
            </motion.div>

            {/* Floating Code Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 left-6 bg-white px-4 py-3 rounded-2xl shadow-lg font-bold flex gap-2"
            >
              <Code className="text-gold" />
              &lt;/&gt;
            </motion.div>

            {/* Floating Time Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-16 -right-2 bg-forest text-cream px-4 py-3 rounded-2xl shadow-lg font-mono text-sm"
            >
              <span className="text-gold">Time:</span> O(1)
            </motion.div>

            {/* Floating Solution Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-16 -left-4 bg-white px-4 py-3 rounded-2xl shadow-lg font-mono text-xs"
            >
              <span className="text-gold">class</span>
              {" "}Solution {"{}"}
            </motion.div>

            {/* College Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute -bottom-4 right-2 bg-white rounded-full px-5 py-3 shadow-lg text-xs font-bold"
            >
              KIT College of Engineering
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
