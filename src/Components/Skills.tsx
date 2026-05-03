import { motion } from "motion/react";
import { FaReact, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiExpress, SiRecoil, SiSocketdotio, SiTypescript, SiPostman, SiWebrtc } from "react-icons/si";
import { DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React Js", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { name: "Recoil", icon: <SiRecoil /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Express Js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "PostgreSQL", icon: <DiPostgresql /> },
        { name: "Redis", icon: <DiRedis /> },
      ]
    },
    {
      title: "Real-time & Tools",
      skills: [
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "WebRTC", icon: <SiWebrtc /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-white">Tech Stack</h2>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-medium text-textMuted mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm font-medium text-gray-300"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
