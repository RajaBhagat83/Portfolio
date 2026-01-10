import { useEffect, useRef, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Name from "../parts/Name";
import Stack from "./Stack";
import Project from "./Project";
import { motion } from "motion/react";
import { SiReaddotcv } from "react-icons/si";
import resume from "../assets/RajaResume-Real.pdf"

function Main() {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const [stackdata, setStackData] = useState(false);
  const [project, setProject] = useState(true);
  const box = useRef("apps");

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const hours =
        date.getHours() > 0 ? date.getHours() : "0" + date.getHours();
      const min =
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      const sec =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
      const time = [hours, min, sec].join(":");
      setDate(time);
    }, 1000);
  }, [date]);

  const words = ["apps", "websites", "backend", "frontend"];
  let index = 0;
  useEffect(() => {
    setInterval(() => {
      box.current = words[index];
      index = (index + 1) % 4;
    }, 3000);
  }, [index]);

useEffect(() => {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem("lastVisitDate");

  if (lastVisit !== today) {
    const count = Number(localStorage.getItem("visitCount") || 0);
    localStorage.setItem("visitCount", count + 1);
    localStorage.setItem("lastVisitDate", today);
  }
}, []);
const visitCount = localStorage.getItem('visitCount')|| 0;
  return (
    <div className="h-full w-full">
  <Name />

  <div className="bg-black min-h-screen flex justify-center text-center px-4">
    <div className="w-full md:w-3/4 lg:w-1/2 text-white mt-8 md:mt-16">

      {/* Header */}
      <div className="flex justify-between items-center mt-4">
        <div className="font-serif text-xl md:text-2xl text-gray-400">
          Raja Bhagat
        </div>
        <div className="text-xs md:text-sm">
          {date}
        </div>
      </div>

      {/* About */}
      <div
        className="text-base md:text-lg text-gray-400 flex justify-start mt-8"
        id="about"
      >
        About Me
      </div>

      <div className="mt-4 text-sm md:text-base text-gray-300 text-justify">
        <h1>
          I make{" "}
          <motion.span
            className="font-bold"
            id="word"
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              delay: 0.4,
              damping: 10,
            }}
          >
            {box.current}
          </motion.span>
          ,
        </h1>

        <h2 className="mt-4">
          I’m Raja, a 20-year-old developer from India, passionate about
          building web apps that solve problems and delight users. I love
          learning, experimenting, and turning ideas into reality.
        </h2>
      </div>

      {/* Social icons */}
      <div className="flex gap-4 mt-6 justify-start cursor-pointer">
        <CiTwitter size={20} onClick={() => navigate("https://x.com/Raja__bhagat")} />
        <CiLinkedin size={20} onClick={() => navigate("https://www.linkedin.com/in/raja-bhagat-6a04b02a9/")} />
        <FaGithub size={20} onClick={() => navigate("https://github.com/RajaBhagat83")} />
        <a href={resume} download className="group">
          <SiReaddotcv size={20} className="group-hover:scale-110 transition" />
        </a>
      </div>
      <div className="relative top-12 -right-2 text-gray-800">
        <h2>Views -{visitCount >9?visitCount:"0" + visitCount}</h2>
      </div>

      {/* Tabs */}
      <div className="cursor-pointer flex justify-center gap-12 mt-16 text-sm md:text-base">
        <div onClick={() => { setStackData(false); setProject(true); }}>
          Projects
        </div>
        <div onClick={() => { setProject(false); setStackData(true); }}>
          Stack
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gray-900 mt-2"></div>

      {/* Content */}
      <div>
        {project && <Project />}
        {stackdata && <Stack />}
      </div>
      {/* Footer Divider */}
      <div className="h-0.5 w-full bg-gray-900 mt-20"></div>
    </div>
  </div>
</div>

  );
}

export default Main;
