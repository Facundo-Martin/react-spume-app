import React from "react";
import "./DropdownItem.css";

function DropdownItem({ Icon, title, MenuIcon }) {
  return (
    <div className="dropdownitem">
      <div className="dropdownitem__left">
        {Icon && <Icon style={{ fontSize: 22 }} />}
        <h4>{title}</h4>
      </div>
      {MenuIcon && <MenuIcon style={{ fontSize: 15 }} />}
    </div>
  );
}

export default DropdownItem;
