import React from "react";
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
        className={`sidebaroption__icon ${
          isActive ? "activesidebaricon" : "inactivesidebaricon"
        }`}
      >
        <Icon className={className ? className : ""} />
      </div>
    </div>
  );
}

export default SidebarOption;
