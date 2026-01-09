import { useEffect, useRef, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Name from "./Name";
import Stack from "./Stack";
import Project from "./Project";
import { motion } from "motion/react";
import { SiReaddotcv } from "react-icons/si";

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

  return (
    <div className="h-full w-full">
      <Name />
      <div className="bg-black h-[1200px] flex justify-center text-center">
        <div className="w-1/2 h-[80%] text-white mt-16">
          <div className="flex justify-evenly mt-4">
            <div
              title="heading"
              className="font-serif text-2xl text-gray-400 mr-80"
            >
              Raja Bhagat
            </div>

            <div title="time" className="text-sm">
              {date}
            </div>
          </div>
          {/* <div id="line" className="bg-white h-0.5 mt-12 w-[559px] ml-16"></div> */}
          <div
            className="text-lg text-gray-400 flex justify-start ml-16 mt-8"
            id="about"
          >
            About Me
          </div>
          <div className=" mx-16 mt-4 text-sm text-gray-300 text-justify">
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
          <div className="flex gap-3 ml-16 mt-5 cursor-pointer">
            <CiTwitter
              size={20}
              onClick={() => {
                navigate("https://x.com/Raja__bhagat");
              }}
            />
            <CiLinkedin
              size={20}
              onClick={() => {
                navigate("https://www.linkedin.com/in/raja-bhagat-6a04b02a9/");
              }}
            />
            <FaGithub
              size={20}
              onClick={() => {
                navigate("https://github.com/RajaBhagat83");
              }}
            />
            <a href="/D:\RajaResume-Real.pdf" download className="group btn" >
            <SiReaddotcv
            size={20} className="mt-0.5 group-hover:scale-110" />
            </a>
          </div>
          <div className="cursor-pointer flex justify-evenly mt-16">
            <div
              onClick={() => {
                setStackData(false);
                setProject(true);
              }}
            >
              Projects
            </div>
            <div
              onClick={() => {
                setProject(false);
                setStackData(true);
              }}
            >
              Stack
            </div>
          </div>
          <div
            id="line"
            className="h-0.5 w-[559px] shadow-2xl bg-gray-900 mt-1 ml-20"
          ></div>
          <div className="">
            {project && <Project />}
            {stackdata && <Stack />}
          </div>
          <div
            id="line"
            className="h-0.5 w-[559px] shadow-2xl bg-gray-900 mt-32 ml-20"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
