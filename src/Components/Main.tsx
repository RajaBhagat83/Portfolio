import { useEffect, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Name from "./Name";
import gsap from "gsap";
import Stack from "./Stack";
import Project from "./Project";


function Main() {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const [stackdata,setStackData] = useState(false);
  const [project,setProject] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const hours = date.getHours()>0?date.getHours() : "0"+date.getHours();
      const min = date.getMinutes()>9? date.getMinutes():"0"+date.getMinutes();
      const sec = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
      const time = [hours, min, sec].join(":");
      setDate(time);
    }, 1000);
  }, [date]);
  
const words = ['apps', 'websites', 'backend', 'frontend'];
let index = 0;
const el = document.getElementById('word');

setInterval(() => {
  el.textContent = words[index];
  index = (index+1)%4;
}, 4000);


  return (
   <div  onMouseMove={(e) => {
      gsap.to("#cursor",{
         x:e.pageX,
         y:e.pageY,
         duration:0.1
      })
    }} >
      <div id="cursor" className="h-[10px] w-[10px] bg-white rounded-full fixed" > </div>
      <Name />
    <div className="bg-black h-[1900px] flex justify-center text-center">
      <div className="w-1/2 h-[80%] text-white mt-16">
        <div className="flex justify-evenly mt-4" >
          <div
            title="heading"
            className="font-serif text-2xl text-gray-400 mr-80"
          >
            Raja Bhagat
          </div>
         
          <div title="time" className="text-sm" >
            {date}
          </div>
          
        </div >
         {/* <div id="line" className="bg-white h-0.5 mt-12 w-[559px] ml-16"></div> */}
        <div className="text-lg text-gray-400 flex justify-start ml-16 mt-8" >
          About Me
        </div>
        <div className=" mx-16 mt-4 text-sm text-gray-300 text-justify">
          <h1>Hi, I make <span className="font-bold" id="word">apps</span>,</h1>
          <h2>
            This Is raja Bhagat a full Stack Developer which turn imagination
            into reality and it always into the new technologies and ready to
            learn with full excitment and is great in adapting things faster{" "}
          </h2>
        </div>
        <div className="flex gap-3 ml-16 mt-5 cursor-pointer">
          <CiTwitter size={20} onClick={() =>{
            navigate("https://x.com/Raja__bhagat");
          }} />
          <CiLinkedin size={20} onClick={() =>{
            navigate("https://www.linkedin.com/in/raja-bhagat-6a04b02a9/");
          }} />
          <FaGithub size={20} onClick={() =>{
            navigate("https://github.com/RajaBhagat83");
          }}/>
        </div>
        <div className="cursor-pointer flex justify-evenly mt-16"> 
             <div onClick={() =>{
               setStackData(false);
               setProject(true);
             }} >Projects</div>
             <div onClick={() => {
               setProject(false);
               setStackData(true);
             }}>Stack</div>
        </div>
      <div id="line" className="h-0.5 w-[559px] shadow-2xl bg-gray-900 mt-1 ml-20"></div>
      <div >
        {project && <Project />}
        {stackdata && <Stack />}
      </div>
      </div>
    </div>
   </div>
  );
}

export default Main;
