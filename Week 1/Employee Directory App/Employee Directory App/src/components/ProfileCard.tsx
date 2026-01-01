import { useState } from "react";

interface ProfileProp {
  img: string;
  name: string;
  location: string;
  position: string;
  bio: string;

}

export const ProfileCard = ({ img, name, location, position, bio }: ProfileProp) => {
  const [isClicked, setClick] = useState(false);

  return (
    <>
      <div onClick={() => setClick((prev) => !prev)} className={`group rounded-md border border-gray-600 flex ${isClicked && "flex-col text-center "}items-center gap-4 w-75  p-2 hover:bg-gray-300 shadow shadow-gray-500`}>
        <div>
          {/* <img className="rounded-full w-25 h-25" src='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png' alt="" /> */}
          <img className="rounded-full w-25 h-25" src={img} alt="" />
        </div>
        <div className="space-y-2">
          <p className=" hidden opacity-0 font-bold group-hover:opacity-100">Click to see the bio</p>
          <h1 className="font-bold">{name}</h1>
          <h2>{location}</h2>
          <h3 className="border border-blue-400 text-blue-400 rounded-full p-1">{position}</h3>
        </div>
        {isClicked && <div><p>{bio}</p></div>}
      </div >
    </>
  );
};
