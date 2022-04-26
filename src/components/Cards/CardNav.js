import React from "react";
import "./CardNav.css";

function CardNav({ title }) {
  return (
    <div className="cardNav">
      <p>{title}</p>
    </div>
  );
}

export default CardNav;
