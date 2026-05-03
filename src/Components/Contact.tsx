import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative text-center">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-textMuted text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            I am actively looking for new opportunities and my inbox is always open. Whether you have a question, a potential role, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:bhagatraja116@gmail.com"
            className="inline-block px-8 py-4 bg-transparent border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 w-full py-6 text-center">
        <a href="https://github.com/RajaBhagat83/Portfolio" target="_blank" rel="noreferrer" className="text-textMuted text-sm font-mono hover:text-primary transition-colors">
          Built with React & Tailwind CSS
        </a>
      </footer>
    </section>
  );
};

export default Contact;
