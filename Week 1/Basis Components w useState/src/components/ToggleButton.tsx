import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
export const Toggle = () => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <button onClick={() => setFavorite((prev) => !prev)} className="flex justify-center items-center gap-2 w-64 rounded-md bg-white text-black hover:bg-gray-400">Mark as Favorite<FaCheck /></button>
        <h3 className={`flex items-center gap-2 rounded-md p-2 ${isFavorite ? "bg-yellow-300" : "bg-red-500"}`} >{isFavorite ? <FaStar /> : <FaCircleXmark />}Favorite</h3>
      </div>
    </>
  );
};
