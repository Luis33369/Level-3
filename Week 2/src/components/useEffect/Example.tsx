import { useEffect } from "react";

export const Example = () => {
  /**
   * Common use cases:
   *  Fetching data from an API
   *  Subscribing/unsubscribing to events (resize, keydown, websockets)
   *  Timers/intervals
   *  Reading/writing localStorage
   */

  /**
   *Empty - runs on the first render only
   */

  const [user, setUser] = React.useState("Luis");

  useEffect(() => {
    console.log("This is running");

  }, [user]);

  return <div>{user}</div>
};


