import React from "react";
import "./CounterBox.css";

function CounterBox({ title }) {
  return (
    <div className="counterbox">
      <p>{title}</p>
    </div>
  );
}

export default CounterBox;
