import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setSidebar] = useState(false);


  return (
    <>
      <div>
        <aside className={`text-white transition-all ${isOpen ? 'w-64' : "w-0 overflow-hidden"}`}>
          < ul className="flex flex-col p-5 space-y-3 ">
            <li className=""><a href="">Search</a></li>
            <li className=""><a href="">Home</a></li>
            <li className=""><a href="">Items</a></li>
            <li className=""><a href="">Discounts</a></li>
            <li className=""><a href="">Contact Us</a></li>
            {isOpen ? <h1>Open</h1> : <h1>Close</h1>}
          </ul>
        </aside>
        <button onClick={() => setSidebar((prev) => !prev)} className="bg-white text-gray-700 rounded-full p-3 hover:bg-blue-400">Open/Close Sidebar</button>
      </div >
    </>
  );
};














































