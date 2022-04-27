import React from "react";
import "./Trending.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Trending() {
  return (
    <div>
      <div className="trending">
        <h2>Trending Auctions</h2>
        <div className="trending-link">
          <a href="https://spume.io">
            <h4>View All </h4>
          </a>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Trending;
