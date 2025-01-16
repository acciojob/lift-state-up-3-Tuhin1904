import React from "react";

const ChildComponent2 = ({ handleSelectedOption }) => {
  return (
    <div style={{ background: "brown", padding: "16px" }}>
      <h2>Child Component 2</h2>
      <button onClick={() => handleSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
