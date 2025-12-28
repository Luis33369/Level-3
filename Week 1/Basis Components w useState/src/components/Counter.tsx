//TODO: Implement + - buttons 
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  justify-center  p-3 gap-3">
        <button className=" rounded-md bg-red-500 hover:bg-gray-200" onClick={() => setCount(count + 1)}><FaPlusCircle className="text-2xl" /></button>
        <h1>Counter {count}</h1>
        <button className="rounded-md bg-black hover:bg-gray-200" onClick={() => setCount(count - 1)}><FaMinusCircle className="text-2xl" /></button>

      </div>
    </>
  );
};
