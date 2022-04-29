import React, { useState } from "react";
import "./SaveItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Ideally, this component would ACTAULLY save items to users bags/carts
function SaveItem() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <div className="saveitem" onClick={toggle}>
      <FavoriteIcon
        style={{ fontSize: 20, marginTop: 2 }}
        className={isActive ? "activesaveitem" : "inactivesaveitem"}
      />
    </div>
  );
}

export default SaveItem;
