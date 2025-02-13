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
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

const Mail = () => {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.appSlice);
  const { id } = useParams(); // ✅ Extract params correctly

  const deleteMailById = async (id) => {
    if (!id) {
      console.error("Error: Email ID is missing");
      return;
    }

    try {
      await deleteDoc(doc(db, "emails", id)); // ✅ Ensure ID is valid
      console.log("Email deleted successfully");
      navigate("/"); // ✅ Correctly use navigate() instead of Navigate()
    } catch (err) {
      console.error("Error deleting email:", err);
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={"24px"} />
          </div>
          <div
            onClick={() => deleteMailById(id)}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
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
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 text-sm my-5">
            <p>
              {selectedEmail?.createdAt?.seconds
                ? new Date(selectedEmail.createdAt.seconds * 1000).toLocaleString()
                : "Invalid Date"}
            </p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedEmail?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
