// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import { SiDoordash } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
// interface HeaderWithLinks {
//   title: string;
//   paragraph: string;
//   link: string;
//   img: string;
//   link2: string;
// }
//
//
//
// export const HeaderWithLinks = ({ title, paragraph, link, img, link2 }: HeaderWithLinks) => {
//   return (
//     <div className="text-gray-100 flex flex-col flex-wrap items-center justify-between h p-20 gap-2"> 
//       <img className="w-64" src={img} alt="" />
//       <h2 className="text-3xl">{title}</h2>
//       <div className="w-60">{paragraph}</div>
//       <a className="text-red-500 font-bold" href={link}>{link2}</a>
//     </div>
//
//   );
// };



export const Navbar = () => {
  return (
    <>
      <header className="relative">
        <img src="/images/hero.png" alt="" className="w-full h-[720px] object-cover" />

        <nav className="absolute top-0 left-0  w-full flex justify-end gap-6 p-6">
          <button className="bg-red-500 text-white rounded-full px-5 py-3 text-lg font-bold">Sign In</button>
          <button className="bg-white text-gray-500 rounded-full px-5 py-3 text-lg font-bold">Sign Up</button>
        </nav>
        <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="flex items-center justify-center gap-3 text-2xl">
            <SiDoordash className="text-white text-5xl" />
            <p className="font-times  text-3xl font-medium  tracking-widest">DOORDASH</p>
          </div>
          <p className="font-bold text-5xl whitespace-nowrap ">$0 DELIVERY FEE ON FIRST ORDER</p>
          <p className="flex justify-center text-xs font-bold">Other fees apply</p>
          <div className="flex justify-center p-2 gap-3">
            <div className="flex justify-between gap-2  items-center py-2 px-2 w-110 bg-white m-3 rounded-full border border-gray-300 " >
              <IoLocationOutline className="text-gray-600  text-3xl" />
              <input type="text" placeholder="Enter delivery address" className="w-64 text-gray-600" />
              <FaCircleArrowRight className=" text-5xl text-red-500" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center rounded-full bg-white  w-64 py-2 text-sm text-black font-bold items-center gap-1">
              <FaRegUser />
              <button className="">Sign in for saved address</button>
            </div>
          </div>


        </div>
      </header>


    </>
  );

};





































































