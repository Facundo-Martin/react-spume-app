import React from "react";
import "./CardNav.css";

function CardNav({ title, setSelected, isActive }) {
  return (
    <div
      className={`cardNav ${isActive ? "active-cardnav" : ""}`}
      onClick={() => setSelected(title)}
    >
      <p>{title}</p>
    </div>
  );
}

export default CardNav;
