import { useEffect, useState } from "react";

/**
 *Goal: Run an effect when state changes.
 *- Task Build a counter. Whenever count changes, set document.title = "Count: X";
 Constraints: 
- Title updatesnly when count changes (not on unrelated state)
- Stretch: reset title to "React App" on unmount
 
 **/

export const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Incrementing by ${count}`


  }, [count]);
  return (
    <>
      <div>Document Title</div>
      <div>Count {count}</div>
      <button onClick={() => setCount(count + 1)}>Add +1</button >

    </>
  );
}
