import { useState } from "react";
import "./define.css";

function Define({ onGoClick, onBudgetChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onBudgetChange(event.target.value); 
  };

  return (
    <>
      <div id="Define">
        <h1 id="Budget">Define Budget</h1>
        <input
          type="number"
          min="1"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button
          id="DefineButton"
          onClick={onGoClick}
          style={{
            backgroundColor: inputValue ? "blue" : "gray",
            color: "white",
          }}
          disabled={!inputValue}
        >
          Define Budget
        </button>
      </div>
    </>
  );
}

export default Define;
