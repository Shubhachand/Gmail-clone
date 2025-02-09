import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className=" flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div  onClick={()=>navigate("/")} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdArrowBack size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdDeleteOutline size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"24px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[80vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between  bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 text-sm my-5">
            <p>1-02-2025</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>abc#gmaul.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
        <p>messages</p>

        </div>
      </div>
    </div>
  );
};

export default Mail;
