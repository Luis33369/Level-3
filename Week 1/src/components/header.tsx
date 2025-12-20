// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import { FaBeer, FaUser } from "react-icons/fa"; // Font Awesome icons
import { MdSearch } from "react-icons/md";       // Material Design icons
import { SiDoordash } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
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
      <img src="/images/hero.png" alt="" className="w-full h-[720px] object-cover"/>

      <nav className="absolute top-0 left-0  w-full flex justify-end gap-6 p-6">
        <button className="bg-red-500 text-white rounded-full px-5 py-3 text-lg font-bold">Sign In</button>
        <button className="bg-white text-gray-500 rounded-full px-5 py-3 text-lg font-bold">Sign Up</button>
      </nav>
      <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <div className="flex items-center gap-2 text-2xl">
        <SiDoordash className="text-white text-5xl "/>
        <p className="font-times  text-2xl font-medium  tracking-widest">DOORDASH</p>
        </div>
        <p className="font-bold text-4xl whitespace-nowrap ">$0 DELIVERY FEE ON FIRST ORDER</p>
        <p>Other fees apply</p>
        <div className="flex items-center gap-2 rounded-full" >
          <IoLocationOutline/>
          <input type="text" placeholder="Enter delivery address" className=""/>
          <FaCircleArrowRight/>
        </div>
        <button>Sign in for saved address</button>
      </div>



    </header>
    </>
  );
  
};
    // <div className="static">
    //   <div className="absolute flex justify-end gap-6">
    //     <button className="bg-red-500 text-white rounded-full px-5 py-3">Sign In</button>
    //     <button className="bg-white text-gray-500 rounded-full px-5 py-3">Sign Up</button>
    //   </div>
    // </div>
