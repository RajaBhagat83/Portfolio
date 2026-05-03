import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">About Me</h2>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-textMuted text-base leading-relaxed lg:col-span-3"
          >
            <p>
              Hello! My name is Raja, and I am a 22-year-old software engineer based in India. I specialize in building robust, scalable web applications that deliver seamless user experiences. My journey into web development began with a deep curiosity for how digital platforms function behind the scenes, which quickly evolved into a passion for full-stack engineering.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of architecting complex systems—from real-time collaborative platforms utilizing WebSockets to highly optimized, database-driven architectures. My core focus lies in bridging the gap between sophisticated backend logic and highly intuitive frontend interfaces.
            </p>
            <p>
              Whether I'm optimizing MongoDB aggregations, implementing Next.js Server-Side Rendering, or crafting pixel-perfect UI components, I thrive in environments that challenge me to solve hard problems and continuously expand my technical horizons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group max-w-[250px] mx-auto lg:mx-0 lg:ml-auto lg:col-span-2"
          >
            {/* Image Placeholder Frame */}
            <div className="relative z-10 rounded-xl overflow-hidden bg-surface border border-white/10 aspect-square group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="text-5xl font-display font-bold text-white/20">RB</div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
