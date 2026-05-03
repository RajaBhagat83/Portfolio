import { motion } from "motion/react";
import resume from "../assets/Resume_RajaBhagat_SoftwareDeveloper.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <p className="text-primary font-medium tracking-wide">Hi, I am</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 tracking-tight"
          >
            Raja Bhagat.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-textMuted mb-8 tracking-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-textMuted max-w-2xl mb-12 leading-relaxed"
          >
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at the intersection of robust backend systems and dynamic frontend interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25"
            >
              Check out my work!
            </a>
            <a
              href={resume}
              download
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6 mt-16 text-textMuted"
          >
            <a href="https://github.com/RajaBhagat83" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/raja-bhagat-6a04b02a9/" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/Raja__bhagat" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
              <FaXTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
