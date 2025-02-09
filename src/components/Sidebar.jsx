import React from "react";
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater, MdOutlineDrafts, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdSend } from "react-icons/io";


const sidebarItems = [
  {

    icon: <LuPencil size={"24px"} />,
    text:"Inbox"
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Starred"
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "Snozzed"
  },
  {
    icon: <IoMdSend size={"24px"} />,
    text: "Sent",

  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "Drafts"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"}/>,
    text: "More"
  }
  
]
const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md  bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose 

        </button>
      </div>

      <div className="text-gray-500">
        { 
          sidebarItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2 pl-6 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-r-full">
                {item.icon}
                <p>{item.text}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Sidebar;
