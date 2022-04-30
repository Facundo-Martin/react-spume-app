import React from "react";
import "./TrendingUpIcon.css";
import { BiTrendingUp } from "react-icons/bi";

function TrendingUpIcon() {
  return (
    <div className="trendingupicon__wrapper">
      <div className="trendingupicon">
        <BiTrendingUp className="trendingupicon__icon" />
      </div>
    </div>
  );
}

export default TrendingUpIcon;
