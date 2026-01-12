import { useEffect } from "react";

/**
 * Goal: Run an effect once on mount
 * Task: When the component first renders, alert("mounted!")
 * Constraints:
 * - Must not log again on re-renders
 *   Stretch also log "unmounted" on cleanup
 */


export const Mounting = () => {

  useEffect(() => {
    alert("Mounted!");

    // return () => {
    //   alert("Unmounted!");
    // }
    //
  }, []);





  return <div>Mounting</div>;
}










