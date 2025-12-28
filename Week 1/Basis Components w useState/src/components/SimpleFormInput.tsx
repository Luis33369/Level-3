import { useState } from "react";

export const SimpleForm = () => {
  const [text, setText] = useState('Type Something ...');

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Type something below</h1>
        <input className="border border-white" type="text" onChange={(e) => setText(e.target.value)} />
        <p>Typed: {text}</p>
        <button onClick={() => setText("Type Something")}>Reset</button>

      </div>
    </>
  );
};
