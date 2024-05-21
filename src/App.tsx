import "./App.css";
import { useState } from "react";
import rules from "./Rules";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Logic here
  };
  return (
    <>
      {rules}
      {count < 1 && <button onClick={() => handleClick()}>Color me</button>}
      <br />
      <span>count: {count}</span>
      <div
        className="grid"
        style={{
          width: 800,
          height: 225,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {Array.from({ length: 15 * 15 }).map((_, i) => (
          <div
            key={i}
            className="cell"
            style={{ width: 25, height: 25, border: "1px solid #ebebeb" }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
