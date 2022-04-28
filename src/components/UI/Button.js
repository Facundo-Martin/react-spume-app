import React from "react";
import "./Button.css";

function Button({ title, size, type }) {
  return <div className={`button-${size} ${type}`}>{title}</div>;
}

export default Button;
