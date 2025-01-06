import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectedOption = (option) => {
    console.log(option, "option");
    setSelectedOption(option);
  };
  return (
    <div style={{ background: "green", padding: "16px" }}>
      <h1>Parent Component</h1>
      <ChildComponent1 handleSelectedOption={handleSelectedOption} />
      <ChildComponent2 handleSelectedOption={handleSelectedOption} />
      Selected Option: {selectedOption}
    </div>
  );
};

export default App;
