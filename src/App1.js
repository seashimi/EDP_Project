import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");
  const [showingResult, setShowingResult] = useState(false);

  const thisclick = (value) => {
    if (showingResult) {
      const isOperator = ["+", "-", "*", "/"].includes(value);

      // number pressed: start a new equation
      // operator pressed: keep going with the result
      setResult(isOperator ? result + value : String(value));
      setShowingResult(false);
    } else {
      setResult(result + value);
    }
  };

  const calculate = () => {
    try {
      const answer = eval(result);

      // only update if it's a real, finite number
      if (typeof answer === "number" && isFinite(answer)) {
        setResult(String(answer));
        setShowingResult(true);
      }
    } catch (e) {
      // not solvable, do nothing
    }
  };

  const clear = () => {
    setResult("");
    setShowingResult(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="script-title">Calculator</h1>
<table>
        <input className="input" value={result} readOnly />

        <div>
          <button onClick={() => thisclick(7)}>7</button>
          <button onClick={() => thisclick(8)}>8</button>
          <button onClick={() => thisclick(9)}>9</button>
          <button onClick={clear}>C</button>
        </div>
        <div>
          <button onClick={() => thisclick(4)}>4</button>
          <button onClick={() => thisclick(5)}>5</button>
          <button onClick={() => thisclick(6)}>6</button>
          <button onClick={() => thisclick("*")}>*</button>
        </div>
        <div>
          <button onClick={() => thisclick(1)}>1</button>
          <button onClick={() => thisclick(2)}>2</button>
          <button onClick={() => thisclick(3)}>3</button>
          <button onClick={() => thisclick("/")}>/</button>
        </div>
        <div>
          <button onClick={() => thisclick("+")}>+</button>
          <button onClick={() => thisclick("-")}>-</button>
          <button onClick={() => thisclick(0)}>0</button>
          <button onClick={calculate}>=</button>
        </div>
        </table>
      </header>
    </div>
  );
}

export default App;