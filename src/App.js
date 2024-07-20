import Keypad from "./Keypad.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleClick(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    const outputValue = eval(inputValue);
    setInputValue(outputValue);
  }

  function handleClear() {
    setInputValue("");
  }

  return (
    <div className="container">
      <h1>Calculator App Using React</h1>
      <div className="calculator">
        <input type="text" className="output" value={inputValue} readOnly />
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
