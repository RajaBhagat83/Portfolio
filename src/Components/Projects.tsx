import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import buddy from "../assets/buddy.png";
import LiveCanvas from "../assets/LiveCanvas.png";
import paytm from "../assets/patym.png";

const Projects = () => {
  const allProjects = [
    {
      title: "BuddySync",
      description: "A full-stack networking platform to discover, connect, and collaborate with buddies. Features robust state management and real-time connectivity for seamless user experiences.",
      tech: ["React", "Express.js", "MongoDB", "Tailwind"],
      github: "https://github.com/RajaBhagat83",
      external: "https://buddyfinder-psi.vercel.app/",
      image: buddy,
    },
    {
      title: "LiveCanvas",
      description: "A real-time collaborative drawing platform where multiple users create, edit, and interact with shapes simultaneously using WebSockets and the HTML5 Canvas API.",
      tech: ["Next.js", "TypeScript", "Socket.io", "Canvas"],
      github: "https://github.com/RajaBhagat83/LiveCanvas",
      external: "https://github.com/RajaBhagat83/LiveCanvas",
      image: LiveCanvas,
    },
    {
      title: "Paytm-Demo",
      description: "A P2P demo application mimicking real-world transaction handling. Allows users to securely transfer and receive virtual money while simulating complex backend banking logic.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      github: "https://github.com/RajaBhagat83/Paytm",
      external: "https://github.com/RajaBhagat83/Paytm",
      image: paytm,
    },
    {
      title: "NoteVault",
      description: "A collaborative notes space where team members can view, edit, and delete notes securely, featuring persistent storage and user authentication.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/RajaBhagat83",
      external: "https://notes-frontend-rho-sandy.vercel.app/login",
      image: null,
    },
    {
      title: "Caffè Co",
      description: "A visually engaging landing page designed for a premium coffee brand with smooth scrolling, modern CSS layouts, and elegant animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/RajaBhagat83",
      external: "https://midnightsip.netlify.app/",
      image: null,
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Projects</h2>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 group items-center bg-surface/30 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Project Image */}
              {project.image && (
                <div className="w-full md:w-2/5 shrink-0 rounded-xl overflow-hidden relative border border-white/10">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  />
                </div>
              )}

              {/* Project Details */}
              <div className={`w-full ${project.image ? 'md:w-3/5' : 'md:w-full'}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    <a href={project.external} target="_blank" rel="noreferrer">{project.title}</a>
                  </h3>
                  <div className="flex items-center gap-4 text-textMuted">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.external} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-textMuted text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-md">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://github.com/RajaBhagat83" target="_blank" rel="noreferrer" className="inline-block border border-white/20 text-textMuted hover:text-white hover:border-white/50 px-6 py-3 rounded-lg transition-colors text-sm font-mono">
              View more on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
