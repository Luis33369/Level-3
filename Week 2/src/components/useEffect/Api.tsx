import type { throws } from "assert";
import { useState, useEffect } from "react";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
 * Task: fetch from a public API on component mount. Store trhe data in state, map over data and display users, style component
 * Constraints:
 * Show loading state
 * Show error state
 *
 */
interface User {
  id: number;
  name: string;
  email: string;
}

export const Api = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=10").then((res) => res.json());

        setUsers(response.results);
        setLoading(false);

      } catch (error) {
        throw new Error("Check again" + error)
      }
    }
    fetchUser();


  }, []);

  if (loading) {
    return <div>Loading. . .</div>
  }



  return (
    <>
      <ul>
        {users?.map((user) => {
          return <li>{user.name.first}</li>
        })}
      </ul>

    </>
  );
};
