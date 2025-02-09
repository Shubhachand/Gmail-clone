import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { setOpen } from "../redux/appSlice";
const SendMail = () => {
  const [formData,setFormData] = useState({
    to:"",
    subject:"",
    message:""
  })
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
      setFormData({...formData,[e.target.name]: e.target.value});
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(formData);
      setFormData({
        to: "",
        subject: "",
        message: ""
      });
      dispatch(setOpen(false));
    }
  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className="flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md">
        <h1>NEW MESSAGE</h1>
        <div onClick={()=>dispatch(setOpen(false))} className="p-2 rounded-full bg-gray-200 cursor-pointer">
          <RxCross2 size={10} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input   onChange={changeHandler} value={formData.to} name="to" type="text" placeholder="To" className="outline-none py-1" />
        <input   onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder="Subject" className="outline-none py-1" />
        <textarea   onChange={changeHandler} value={formData.message} name="message" cols={'30'} rows={'10'} placeholder="Write your message here..." className="outline-none py-3" />
        <button type="submit"  className="bg-[#0B57D0] w-fit px-4 text-white font-medium">Send</button>
      </form>
    </div>
  );
};

export default SendMail;
