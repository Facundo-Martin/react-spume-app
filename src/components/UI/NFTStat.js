import React from "react";
import "./NFTStat.css";

function NFTStat({ Icon, title, description }) {
  return (
    <div className="NFTstat">
      <Icon />
      <div className="NFTstat__info">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NFTStat;
