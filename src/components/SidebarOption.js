import React, { useState } from "react";
import "./SidebarOption.scss";

function SidebarOption({ Icon, setSelected, id, isActive }) {
  return (
    <div
      className="sidebaroption"
      onClick={() => {
        setSelected(id);
      }}
    >
      <div
        className={`sidebaroption__icon ${isActive ? "active" : "inactive"}`}
      >
        <Icon />
      </div>
    </div>
  );
}

export default SidebarOption;
