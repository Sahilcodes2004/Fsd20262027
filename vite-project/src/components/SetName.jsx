import { useState } from "react";

function SetName() {
  const [name, setName] = useState("AJ");

  return (
    <>
      <h2>{name}</h2>

      <button onClick={() => setName("Raj Gupta")}>
        Change Name
      </button>
    </>
  );
}

export default SetName;