import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import Avatar from 'react-avatar';
function Navbar() {
  return (
    <div className="flex items-center justify-between  mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-grey-100 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://w7.pngwing.com/pngs/758/665/png-transparent-new-logo-gmail-google-new-logos-icon-thumbnail.png"
            alt="gmail logo"
          />
          <h1 className="text-2xl text-grey-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] rounded-full px-2 py-3">
          <IoIosSearch className="text-grey-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center ">
          <div className="p-3 rounded-full hover:bg-grey-100 cursor-pointer">
            <CiCircleQuestion size={"25px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-grey-100 cursor-pointer">
            <AiTwotoneSetting size={"25px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-grey-100 cursor-pointer">
            <RiGeminiFill size={"25px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-grey-100 cursor-pointer">
            <TbGridDots size={"25px"} />
          </div>
          <div className=" cursor-pointer rounded-full "> 
          <Avatar size="30px"  round={true} src="https://avatars.githubusercontent.com/u/118814330?v=4" alt='profile' /> </div>
        </div>
         
      </div>
    </div>
  );
}

export default Navbar;
