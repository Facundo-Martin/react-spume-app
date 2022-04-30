import React from "react";
import "./CardNFTData.css";

import CounterBox from "../UI/CounterBox";
import ETHCardIcon from "../UI/NFTStatIcons/ETHCardIcon";

function CardNFTData() {
  return (
    <div className="cardNFTdata">
      <div className="cardNFTdata__price">
        <p>Price per NFT</p>
        <div className="cardNFTdata__price-info">
          <ETHCardIcon />
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
