import { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export const Links = () => {

  const shortcuts = [
    { label: "Home", icon: <FaHome />, href: "/" },
    { label: "Profile", icon: <FaUser />, href: "/profile" },
    { label: "Settings", icon: <FaCog />, href: "/settings" },
  ];

  const [count, setCount] = useState(0);


  return (
    <>
      <div className="flex justify-center items-center bg-white p-3 text-blue-400 gap-2">
        <ul className="flex">
          {shortcuts.map(short => <li className="flex items-center gap-2 p-2 hover:bg-gray-300">{short.label}{short.icon}</li>)}
        </ul>
        <div className="relative right">
          <FaBell onClick={() => setCount(count + 1)} />
          <a><span className="absolute -top-2.5 -right-2.5 bg-red-500 rounded-full w-4 h-4 flex  justify-center items-center text-xs">{count}</span></a>
          {/* <a className="absolute right-3 p-2 text-2xl hover:bg-gray-300 " href=""><FaBell /></a> */}
        </div>
      </div >
      <div>

      </div>
    </>
  );
};

export const Greeting = ({ name }: { name: string }) => {

  return (
    <>
      <div className=" p-3">
        <div className="w-375 h-50 p-3 flex flex-col items-center space-y-2 bg-blue-400">
          <h1 className="text-3xl font-bold">Hello, {name}</h1>
          <p className="text-xl">Welcome to the Coding Community</p>
          <button className="rounded-full border-white bg-white w-30 text-blue-400 hover:bg-gray-300">Sign Up</button>
        </div>
      </div>
    </>
  );
};
