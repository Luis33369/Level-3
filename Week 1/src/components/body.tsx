import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface HeaderWithLinks {
  title: string;
  paragraph: string;
  link: string;
  img: string;
  link2: string;
}

interface FindingLinks {
  title: string;
  paragraph: string;
  image: string;
  link: string;
  content: string;
}
interface FindingLinks2 {
  title: string;
  paragraph: string;
  image: string;
  link: string;
}



export const HeaderWithLinks = ({ title, paragraph, link, img, link2 }: HeaderWithLinks) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-2">
      <img className="w-[20vh]" src={img} alt="" />
      <h2 className="text-4xl font-bold gap-2 text-center">{title}</h2>
      <div className="w-60 text-center font-medium">{paragraph}</div>
      <div className="flex justify-center text-red-500  gap-2 items-center">
        <a className="text-red-500 font-bold" href={link}>{link2}</a>
        <FaArrowRight />
      </div>
    </div>

  );
};

export const FindingLinks = ({ title, paragraph, image, link, content }: FindingLinks) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex-col flex-wrap space-y-3 w-100 p-3">
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-lg ">{paragraph}</div>
        <div>{content}</div>
        <button className="rounded-full bg-red-500 text-white p-2 text-lg font-bold">{link}</button>
      </div>
      <div className="p-3">
        <img className="items-end" src={image} alt="" />
      </div>
    </div>
  );

};

export const FindingLinks2 = ({ title, paragraph, image, link }: FindingLinks) => {
  return (
    <div className="flex justify-center items-center gap-5 h-[650px] bg-[#FEF1EE]">
      <div className="p-3">
        <img className="items-end" src={image} alt="" />
      </div>
      <div className="flex-col flex-wrap space-y-3 w-100 p-3">
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-lg">{paragraph}</div>
        <button className="rounded-full bg-red-500 text-white p-2 text-lg font-bold">{link}</button>
      </div>
    </div>
  );

};














// export const Body = () => {
//   const [count, setCount] = useState<number>(0);
//
//   return (
//     <>
//       <h1></h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//     </>
//   );
// }


































































































































