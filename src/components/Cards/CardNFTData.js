import React from "react";
import "./CardNFTData.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CounterBox from "../UI/CounterBox";

function CardNFTData() {
  return (
    <div className="cardNFTdata">
      <div className="cardNFTdata__price">
        <p>Price per NFT</p>
        <div className="cardNFTdata__price-info">
          <FavoriteIcon style={{ fontSize: 15 }} />
          <p>100 Player</p>
        </div>
      </div>
      <div className="cardNFTdata__counter">
        <p>Starts in</p>
        <div className="cardNFTdata__counter__boxes">
          {/* I'm hardcoding data for now */}
          <CounterBox title="02h" />
          <CounterBox title="32m" />
          <CounterBox title="44s" />
        </div>
      </div>
    </div>
  );
}

export default CardNFTData;
