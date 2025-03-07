import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <div style={{ background: "green", padding: "16px" }} className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 handleSelectedOption={handleSelectedOption} />
      <ChildComponent2 handleSelectedOption={handleSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
