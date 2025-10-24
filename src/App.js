import React from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";
import { useState } from "react/cjs/react.development";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [percent, setPercent] = useState(0);
  const setValuer = (e) => {
    setPercent(e.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={percent} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" val={percent} onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
