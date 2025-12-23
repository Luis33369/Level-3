import React, { useState } from "react";


interface HeaderWithLinks {
  title: string;
  paragraph: string;
  link: string;
  img: string;
  link2: string;
}



export const HeaderWithLinks = ({ title, paragraph, link, img, link2 }: HeaderWithLinks) => {
  return (
    <div className="text-gray-100 flex flex-col flex-wrap items-center justify-between h p-20 gap-2">
      <img className="w-64" src={img} alt="" />
      <h2 className="text-3xl">{title}</h2>
      <div className="w-60">{paragraph}</div>
      <a className="text-red-500 font-bold" href={link}>{link2}</a>
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




