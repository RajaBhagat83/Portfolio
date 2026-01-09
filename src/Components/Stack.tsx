
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
import { SiTypescript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiWebrtc } from "react-icons/si"

function Stack() {
  return (
    <div
      className="
        flex flex-wrap 
        w-[770px]
        max-w-[770px]
        mx-auto
        justify-center
        mr-44
      "
    >
      <Stackinput name="React Js" icons={<FaReact size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Express Js" icons={<SiExpress size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Mongo DB" icons={<DiMongodb size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Postgres SQL" icons={<DiPostgresql size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Next Js" icons={<RiNextjsFill size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Typescript" icons={<SiTypescript size={35} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Tailwind CSS" icons={<RiTailwindCssFill size={35} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Recoil" icons={<SiRecoil size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Redis" icons={<DiRedis size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Socket.io" icons={<SiSocketdotio size={35} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Github" icons={<FaGithub size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="AWS" icons={<FaAws size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Postman" icons={<SiPostman size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="Git" icons={<FaGitAlt size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
      <Stackinput name="WebRTC" icons={<SiWebrtc size={40} className="ml-0 sm:ml-12 lg:ml-24" />} />
    </div>
  );
}

export default Stack;


