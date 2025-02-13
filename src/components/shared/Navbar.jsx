import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
// import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import Avatar from "react-avatar";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import GeminiSidebar from "../GeminiSidebar"; // Import Gemini Sidebar

function Navbar() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          
            <img 
              className="w-8"
              src="https://w7.pngwing.com/pngs/758/665/png-transparent-new-logo-gmail-google-new-logos-icon-thumbnail.png"
              alt="gmail logo"
            />
         
          <h1 className="text-xl text-gray-600 font-medium">Gmail</h1>
        </div>

        <div className="hidden md:flex w-1/3">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full">
            <IoIosSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search mail"
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <AiTwotoneSetting size={"24px"} />
          </div>
          {/* Gemini Sidebar Toggle */}
          <div
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={() => setAiOpen(true)}
          >
            <RiGeminiFill size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <TbGridDots size={"24px"} />
          </div>
          <div className="cursor-pointer rounded-full">
            <Avatar
              size="30px"
              round={true}
              src="https://avatars.githubusercontent.com/u/118814330?v=4"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <GeminiSidebar isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}

export default Navbar;
