import React from "react";

const ChildComponent1 = ({ handleSelectedOption }) => {
  return (
    <div style={{ background: "brown" }}>
      <h2>Child Component 1</h2>
      <button onClick={() => handleSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
