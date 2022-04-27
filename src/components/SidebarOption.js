import React, { useState } from "react";
import "./SidebarOption.scss";

function SidebarOption({ Icon, setSelected, id, isActive, className }) {
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
        <Icon className={className ? className : ""} />
      </div>
    </div>
  );
}

export default SidebarOption;
