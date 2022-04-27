import React from "react";
import AuctionCards from "./AuctionCards";
import "./Content.css";
import CardNFT from "./Cards/CardNFT";
import Trending from "./Trending";

function Content() {
  return (
    <div className="content">
      {/* NFT Collection */}
      <CardNFT />
      {/* Trending Auctions title & link */}
      <Trending />
      {/* Auction Cards */}
      <AuctionCards />
    </div>
  );
}

export default Content;
