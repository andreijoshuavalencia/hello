import React, { useState } from "react";
import DisplayNumber from "./DisplayNumber";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [currentNum, setCurrentNum] = useState(true);
  const [operation, setOperation] = useState(null);
  const numbers = [7,8,9,"/",4,5,6,"x",1,2,3,"-","CLR",0,"=","+",];

  // trigger when user clicks button
  const buttonClickHandler = (event) => {
    if (event.target.innerHTML >= 0 && currentNum == true) {
      setDisplayValue(displayValue.concat(event.target.innerHTML));
      setNum1(displayValue.concat(event.target.innerHTML));
    }
    if (
      event.target.innerHTML == "+" ||
      event.target.innerHTML == "-" ||
      event.target.innerHTML == "x" ||
      (event.target.innerHTML == "/" && event.target.innerHTML != "=")
    ) {
      setOperation(event.target.innerHTML);
      setDisplayValue("");
      setCurrentNum(false);
    } else if (!currentNum && num1 != null) {
      setDisplayValue(displayValue.concat(event.target.innerHTML));
      setNum2(displayValue.concat(event.target.innerHTML));
      setCurrentNum(true);
    }
  };

  const equalHandler = () => {
    let value1 = parseInt(num1);
    let value2 = parseInt(num2);

    switch (operation) {
      case "+":
        setDisplayValue(value1 + value2);
        break;
      case "-":
        setDisplayValue(value1 - value2);
        break;
      case "x":
        setDisplayValue(value1 * value2);
        break;
      case "/":
        setDisplayValue(value1 / value2);
        break;
    }
  };
  // trigger when clearing the calc
  const clearAll = () => {
    setDisplayValue("");
  };
  return (
    <div className="calculator-container">
      <DisplayNumber value={displayValue} />
      <div className="number-grid">
        {numbers.map((number) =>
          number == "CLR" ? (
            <button className="number clear" onClick={clearAll}>
              {number}
            </button>
          ) : number == "=" ? (
            <button className="number equals" onClick={equalHandler}>
              {number}
            </button>
          ) : (
            <button className="number" onClick={buttonClickHandler}>
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
}
export default Calculator;
