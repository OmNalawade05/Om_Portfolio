
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "motion/react";

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

function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1240px] mx-auto px-5 lg:px-8 py-16 lg:py-24 scroll-mt-24"
    >
      {/* Section Heading */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold/20 text-forest text-xs uppercase tracking-wider font-bold mb-4">
          <FiMail size={15} />
          Get In Touch
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
          Let's Work Together
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
          Have an interesting project, opportunity, or idea?
          I'd love to hear from you. Let's connect and build
          something meaningful.
        </p>
      </motion.div>

      {/* Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* LEFT: Contact Information */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 bg-forest text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-2xl font-bold">
              Contact Information
            </h3>

            <p className="text-white/65 text-sm leading-relaxed mt-3">
              Feel free to reach out for collaborations,
              internships, technical discussions, or
              opportunities.
            </p>

            {/* Email */}
            <motion.a
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="mailto:omnalawade.24@gmail.com"
              className="flex items-center gap-4 mt-10 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                <FiMail size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/50 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium mt-1 group-hover:text-gold break-all transition-colors">
                  omnalawade.24@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-7"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                <FiMapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm font-medium mt-1">
                  Kolhapur, Maharashtra, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 pt-7 border-t border-white/15"
          >
            <p className="text-xs uppercase tracking-wider text-white/50 font-bold mb-4">
              Connect With Me
            </p>

            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -5, scale: 1.08 }}
                href="https://github.com/OmNalawade05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.08 }}
                href="https://www.linkedin.com/in/om-nalawade-b944822b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-3 bg-white rounded-3xl p-7 sm:p-10 border border-[#efe6d4] shadow-md"
        >
          <h3 className="font-display text-2xl font-bold text-forest mb-2">
            Send Me a Message
          </h3>

          <p className="text-sm text-gray-500 mb-8">
            Fill in the details below to get in touch.
          </p>

          <form
            action="mailto:om.nalawade@example.com"
            method="post"
            encType="text/plain"
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-forest mb-2"
              >
                Your Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#e8e1d3] bg-[#faf8f2] text-forest text-sm outline-none focus:border-[#795600] focus:ring-2 focus:ring-[#795600]/10 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-forest mb-2"
              >
                Your Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#e8e1d3] bg-[#faf8f2] text-forest text-sm outline-none focus:border-[#795600] focus:ring-2 focus:ring-[#795600]/10 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-semibold text-forest mb-2"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="Subject"
                placeholder="What would you like to discuss?"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#e8e1d3] bg-[#faf8f2] text-forest text-sm outline-none focus:border-[#795600] focus:ring-2 focus:ring-[#795600]/10 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-forest mb-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="Message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-xl border border-[#e8e1d3] bg-[#faf8f2] text-forest text-sm outline-none focus:border-[#795600] focus:ring-2 focus:ring-[#795600]/10 transition resize-y"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-forest text-white text-sm font-bold hover:bg-[#00513d] transition-colors shadow-md"
            >
              Send Message
              <FiSend size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 pt-7 border-t border-[#e8e1d3] flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Om Nalawade. All rights reserved.
        </p>

        <motion.a
          whileHover={{ y: -4 }}
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-[#795600] transition-colors"
        >
          Back to top
          <FiArrowUpRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;
