import { useState } from "react";

export const ToggleText = () => {
  const [isVisible, setVisible] = useState(false);



  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <button onClick={() => setVisible((prev) => !prev)} className="rounded-full bg-blue-400 w-64 hover:bg-gray-500">Show/Hide the text</button>
        {isVisible && (<p>This text can be show or hidden by pressing the button above </p>)}
      </div>
    </>
  );
};
