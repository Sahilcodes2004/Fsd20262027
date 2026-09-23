import { useState } from "react";

function SetCollege() {
  const [college, setCollege] = useState("ABES");

  return (
    <>
      <h2>{college}</h2>

      <button onClick={() => setCollege("ABES Engineering College")}>
        Change College Name
      </button>
    </>
  );
}

export default SetCollege;