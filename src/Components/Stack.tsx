
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRecoil } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import Stackinput from "../parts/Stack";
import { SiSocketdotio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

function Stack() {
  return (
    <div className='flex flex-wrap w-[770px]'>
    <Stackinput name="React Js" icons={<FaReact size={50} className='ml-28 '/>} />
    <Stackinput name="Express Js" icons={ <SiExpress size={50} className='ml-28'/>} />
    <Stackinput name="Mongo DB" icons={ <DiMongodb size={50} className='ml-28'/>} />
    <Stackinput name="Postgres SQL" icons={ <DiPostgresql size={50} className='ml-28'/>} />
    <Stackinput name="Next Js" icons={ <RiNextjsFill size={50} className='ml-28'/>} />
    <Stackinput name="Tailwind CSS" icons={ <RiTailwindCssFill size={50} className='ml-28'/>} />
    <Stackinput name="Recoil" icons={ <SiRecoil size={50} className='ml-28'/>} />
    <Stackinput name="Redis" icons={ <DiRedis size={50} className='ml-28'/>} />
    <Stackinput name="Socket.io" icons={ <SiSocketdotio size={50} className='ml-28'/>} />
    <Stackinput name="Git" icons={ <FaGitAlt size={50} className='ml-28'/>} />
    <Stackinput name="Github" icons={ <FaGithub size={50} className='ml-28'/>} />
    <Stackinput name="AWS" icons={ <FaAws size={50} className='ml-28'/>} />
      </div>
  )
}

export default Stack
