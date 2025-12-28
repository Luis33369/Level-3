import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <label className="text-xl">Password</label>
        <div className="relative flex gap-2 p-3">
          <input className="border border-white" type={showPassword ? "text" : "password"} />
          <button onClick={() => setShowPassword((prev) => !prev)} className='rounded-md bg-blue-400 flex items-center gap-2 p-3'>Show/Hide Password {showPassword ? <IoEye /> : <IoEyeOff />}</button>
        </div>
      </div >
    </>
  );
};
