import { useState } from "react";
import { motion } from "motion/react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "CIELDOUX INNOVATIONS PVT LTD",
      role: "Full Stack Intern",
      date: "Apr 2026 - Present",
      points: [
        "Developing scalable, full-stack web applications primarily using Next.js and React to deliver dynamic user experiences.",
        "Designing and integrating robust backend APIs to facilitate seamless data communication between the frontend and database.",
        "Collaborating with the development team to optimize performance, enhance UI/UX, and implement new product features.",
      ]
    },
    {
      id: 2,
      company: "Net Communication Services",
      role: "Web Developer Intern",
      date: "Jan 2026 – Feb 2026",
      points: [
        "Reduced query execution time ~25% via targeted MongoDB indexing on high-traffic collections; applied Agile sprint workflows throughout.",
        "Resolved 2 critical real-time production bugs with single-day turnaround using structured Git branching and version control best practices.",
        "Migrated 3 dynamic pages to Next.js SSG and deployed via CI/CD pipeline, eliminating SSR overhead and achieving near-instant page loads.",
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Where I've Worked</h2>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 min-h-[300px]">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-white/10 md:w-64 md:min-w-[16rem] no-scrollbar pb-2 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-4 text-sm font-medium text-left whitespace-nowrap md:whitespace-normal md:leading-snug transition-colors border-b-2 md:border-b-0 md:border-l-2 -ml-[2px] ${
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-textMuted border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 w-full pt-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-medium text-white mb-1">
                {experiences[activeTab].role}
              </h3>
              <div className="text-xl text-primary font-medium mb-3">
                @ {experiences[activeTab].company}
              </div>
              <p className="text-sm text-textMuted mb-8 font-mono">{experiences[activeTab].date}</p>
              
              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex gap-4 text-textMuted leading-relaxed">
                    <span className="text-primary mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
