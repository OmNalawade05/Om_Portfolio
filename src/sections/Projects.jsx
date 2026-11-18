
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FiAward,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "RetailX",
    category: "Smart Grocery System",
    

    description:
      "An intelligent inventory and billing management application designed for shopkeepers, featuring real-time stock management, fast billing checkout, financial analytics, and smart predictive inventory replenishment alerts.",

    technologies: ["React Native", "Node.js", "MongoDB"],

    github: "https://github.com/OmNalawade05/RetailX_App",

    images: [
      "/images/retailx-1.jpeg",
      "/images/retailx-2.jpeg",
      "/images/retailx-3.jpeg",
      "/images/retailx-4.jpeg",
      "/images/retailx-5.jpeg",
      "/images/retailx-6.jpeg",
      "/images/retailx-7.jpeg",
    ],
  },

  {
    number: "02",
    title: "CalmPulse",
    category: "HealthTech & ML",
    

    description:
      "A machine learning-based web application that identifies physiological and behavioral stress and burnout levels, visualizing wellness markers and offering personalized therapeutic coping recommendations.",

    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "MongoDB",
    ],

    github: "https://github.com/OmNalawade05/calmpulse",

    liveDemo: "https://calmpulse123.netlify.app/",

    images: [
      "/images/calmpulse-1.jpeg",
      "/images/calmpulse-2.jpeg",
      "/images/calmpulse-3.jpeg",
      "/images/calmpulse-4.jpeg",
      "/images/calmpulse-5.jpeg",
      "/images/calmpulse-6.jpeg",
      "/images/calmpulse-7.jpeg",
      "/images/calmpulse-1.jpeg",
    ],
  },
];

// Continuous RetailX Gallery
function RetailXGallery({ images }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white">

      {/* Left White Gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-white to-transparent" />

      {/* Right White Gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="retailx-gallery-track flex w-max">

        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="retailx-gallery-slide shrink-0 overflow-hidden rounded-xl border border-[#efe6d4] bg-[#f4eddf] mx-5"
          >
            <img
              src={image}
              alt={`RetailX screenshot ${(index % images.length) + 1}`}
              draggable="false"
              className="block h-[400px] w-auto max-w-none object-contain md:h-[450px]"
            />
          </div>
        ))}

      </div>
    </div>
  );
}

// CalmPulse Gallery
function CalmPulseGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#efe6d4] bg-white group/slider">

      {/* Sliding Images */}
      <div className="h-[350px] overflow-hidden md:h-[500px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full shrink-0"
            >
              <img
                src={image}
                alt={`CalmPulse screenshot ${index + 1}`}
                draggable="false"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-forest shadow-md opacity-0 transition group-hover/slider:opacity-100"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-forest shadow-md opacity-0 transition group-hover/slider:opacity-100"
          >
            <FiChevronRight size={22} />
          </button>
        </>
      )}
    </div>
  );
}

// Main Projects Component
function Projects() {
  return (
    <section
      id="featured-projects"
      className="w-full max-w-[1240px] mx-auto px-5 lg:px-8 py-16 lg:py-24 scroll-mt-24"
    >
      <div className="mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-forest text-xs uppercase tracking-wider mb-3 font-bold">
              <FiAward size={15} />
              Selected Works
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Featured Projects
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
            Proven track record building end-to-end applications solving
            concrete operational and user challenges.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">

          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-[#efe6d4] bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >

              <div className="p-6 sm:p-8 lg:p-10">

                {/* Project Number and Name */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">

                  <span className="font-mono text-sm font-bold text-[#9b741b]">
                    {project.number}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-forest">
                    {project.title}
                  </h3>

                  <span className="rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold text-[#85600c]">
                    {project.category}
                  </span>

                </div>

                {/* Subtitle */}
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9b741b]">
                  {project.subtitle}
                </p>

                {/* Description */}
                <div className="mt-6">
                  <p className="max-w-5xl text-sm sm:text-base leading-8 text-gray-600">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-7">

                  <p className="mb-3 text-xs font-bold tracking-[0.18em] text-gray-400">
                    TECHNOLOGIES USED
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#f4eddf] px-4 py-2 text-xs sm:text-sm font-semibold text-forest transition-all duration-300 hover:bg-gold/30"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Project Gallery */}
                <div className="mt-9">

                  <p className="mb-4 text-xs font-bold tracking-[0.18em] text-gray-400">
                    PROJECT GALLERY
                  </p>

                  {project.title === "RetailX" ? (
                    <RetailXGallery images={project.images} />
                  ) : (
                    <CalmPulseGallery images={project.images} />
                  )}

                </div>

                {/* Project Links */}
                <div className="mt-8 flex flex-wrap items-center gap-4">

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#00513d] hover:-translate-y-0.5"
                  >
                    <FaGithub size={17} />
                    GitHub Code
                    <FiExternalLink size={14} />
                  </a>

                  {/* CalmPulse Live Demo Button */}
                  {project.title === "CalmPulse" && project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-5 py-2.5 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-white hover:-translate-y-0.5"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
