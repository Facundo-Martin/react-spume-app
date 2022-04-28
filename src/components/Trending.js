import React from "react";
import "./Trending.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Trending() {
  return (
    <div>
      <div className="trending">
        <h2>Trending Auctions</h2>
        <div>
          <a className="trending-link" href="">
            <h4>View All </h4>

            <ArrowForwardIosIcon
              style={{ color: "rgb(2, 100, 198))", fontSize: 11 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trending;
