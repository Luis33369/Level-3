import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { useState } from "react";


export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <>
      <div className="p-3">
        <aside className={`flex flex-col bg-blue-400  h-400 ${toggle ? "w-10" : "w-50"}`}>
          <div className="flex align-center gap-2 items-center text-xl">
            <h2>{!toggle && "Coding Journey"}</h2>
            <button onClick={() => setToggle(!toggle)} className="hover:bg-white"><MdOutlineDoubleArrow className="hover:bg-black" /></button>
          </div>
          <ul className="space-y-4 p-2">
            <li><a className="flex items-center hover:bg-white gap-1"><FaClipboardUser />{!toggle && "User"}</a></li>
            <li><a className="flex items-center hover:bg-white gap-1"><MdTask />{!toggle && "Tasks"}</a></li>
            <li><a className="flex items-center hover:bg-white gap-1" href=""><IoLogIn />{!toggle && "Login"}</a></li>
            <li><a className="flex items-center hover:bg-white gap-1" href=""><MdNotificationsActive />{!toggle && "Notifications"}</a></li>
            <li><a className="flex items-center hover:bg-white gap-1" ><IoSettings />{!toggle && "Settings"}</a></li>
          </ul>
        </aside>
      </div >
    </>
  );
};
