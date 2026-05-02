import ProjectPart from "../parts/ProjectPart";
import buddy from "../assets/buddy.png";
import notes from "../assets/notes.png";
import coffee from "../assets/Coffee.png";
import paytm from "../assets/patym.png";
import leetcode from "../assets/leetcode.webp"
import LiveCanvas from "../assets/LiveCanvas.png"
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 w-full h-full flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 sm:ml-6">
      <ProjectPart
        link="https://buddyfinder-psi.vercel.app/"
        image={buddy}
        alt="Buddy-finder"
        title="BuddySync"
        desc="A platform to discover, connect, and collaborate with compatible buddies"
      />

      <ProjectPart
        link="https://github.com/RajaBhagat83/LiveCanvas"
        image={LiveCanvas}
        alt="LiveCanvas"
        title="LiveCanvas"
        desc="A real-time collaborative drawing platform where multiple users can create, edit, and view shapes simultaneously using WebSockets and HTML Canvas"
      />
      <ProjectPart
        link="https://notes-frontend-rho-sandy.vercel.app/login"
        image={notes}
        alt="Notes-All"
        title="NoteVault"
        desc="A collaborative notes space where all team members can view, edit, and delete notes"
      />

      <ProjectPart
        link="https://midnightsip.netlify.app/"
        image={coffee}
        alt="Landing-Page"
        title="Caffè Co"
        desc="Experience the taste of freshly crafted coffee (Landing Page )"
      />

      <ProjectPart
        link="https://github.com/RajaBhagat83/Paytm"
        image={paytm}
        alt="Paytm-Demo"
        title="Paytm-Demo"
        desc="A P2P demo app where users can transfer and receive virtual money after logging in, mimicking real-world transactions"
      />
        <ProjectPart
        link="https://leetcode.com/u/Raja_Bhagat/"
        image={leetcode}
        alt="Leetcode"
        title="Leetcode"
        desc="Actively solving Data Structures and Algorithms problems in C++ to strengthen problem-solving and logical thinking."
      />

      {/* More projects */}
      <h1
        className="w-full text-center text-gray-600 mt-12 cursor-pointer text-sm sm:text-base"
        onClick={() => {
          navigate("https://github.com/RajaBhagat83");
        }}
      >
        --- More Projects On GitHub ---
      </h1>
    </div>
  );
}

export default Project;
