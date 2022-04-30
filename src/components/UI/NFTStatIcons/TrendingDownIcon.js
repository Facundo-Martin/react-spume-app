import React from "react";
import "./TrendingDownIcon.css";
import { BiTrendingDown } from "react-icons/bi";

function TrendingDownIcon() {
  return (
    <div className="trendingdownicon__wrapper">
      <div className="trendingdownicon">
        <BiTrendingDown className="trendingdownicon__icon" />
      </div>
    </div>
  );
}

export default TrendingDownIcon;
