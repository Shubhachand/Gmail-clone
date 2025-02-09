import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Message = () => {
    const Navigate = useNavigate();
    const openMail = () => {
        Navigate("/mail/1234567r89r")
    }
  return (
    <div onClick={openMail} className="flex  items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hove:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300 ">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300 ">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div className="flex-1 m1-4">
          <p className="text-gray-600 truncate inline-block max-w-full"> I just recieved your mail Thansjdxkj kfh hkh ihflih</p>
        </div>
      </div>
        <div className="flex-none text-gray-400 text-sm">
            <p>Time aayega</p>
        </div>
    </div>
  );
};

export default Message;
