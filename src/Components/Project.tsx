import ProjectPart from "../parts/ProjectPart"
import buddy from "../assets/buddy.png"
import notes from "../assets/notes.png"
import coffee from "../assets/Coffee.png"
import paytm from "../assets/patym.png"
import { useNavigate } from "react-router-dom"


function Project() {
  const navigate=useNavigate();
  return (
      <div className="mt-4 w-full ml-12 h-full flex flex-wrap ">
       <ProjectPart link="https://frontend-finder.vercel.app/" image={buddy} alt="Buddy-finder" title="BuddySync" desc="A platform to discover, connect, and collaborate with compatible buddies" />
       <ProjectPart link="https://notes-frontend-rho-sandy.vercel.app/login" image={notes} alt="Notes-All" title="NoteVault" desc="A collaborative notes space where all team members can view, edit, and delete notes" />
      <ProjectPart link="https://midnightsip.netlify.app/" image={coffee} alt="Landing-Page" title="Caffè Co" desc="Experience the taste of freshly crafted coffee (Landing Page )" />
      <ProjectPart link="https://github.com/RajaBhagat83/Paytm" image={paytm} alt="Paytm-Demo" title="Paytm-Demo" desc="A P2P demo app where users can transfer and receive virtual money after logging in, mimicking real-world transactions " />
      <h1 className="text-gray-600 relative left-48 mt-12 cursor-pointer" onClick={() => {
           navigate("https://github.com/RajaBhagat83")
      }}>--- More Projects On Github----</h1>
   </div>
  )
}

export default Project
