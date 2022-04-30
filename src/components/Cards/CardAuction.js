import React from "react";
import "./CardAuction.css";
import Button from "../UI/Button";
import BidIcon from "../UI/NFTStatIcons/BidIcon";
import { Avatar } from "@material-ui/core";
import SaveItem from "../SaveItem";

function CardAuction({ image, title, lastbid, creators }) {
  return (
    <div className="cardauction">
      <div className="cardauction__image">
        <img src={image} alt="" />
        <div className="saveitem">
          <SaveItem type="small" />
        </div>
      </div>
      <h3 className="cardauction__title">{title}</h3>
      <div className="cardauction__lastbid">
        <div className="cardauction__lastbid-left">
          <BidIcon />
          <p>Last Bid: {lastbid.eth} ETH</p>
        </div>
        <p className="cardauction__lastbid-right">{lastbid.dollars}</p>
      </div>
      {/* I'm tired of doing everything with just props and logic so I'm hardcoding this, please don't judge! */}
      <div className="cardauction__creators">
        <p className="cardauction__creators-left">@derry, @aoife</p>
        <div className="cardauction__creators-right">
          <Avatar className="avatar" src="/@derry-profile-pic.jpeg" />
          <Avatar className="avatar overlap" src="/@aoife-profile-pic.jpeg" />
        </div>
      </div>

      <div className="cardauction__buttons">
        <Button title="Place a bid" size="small" type="darkblue" />
        <Button title="History" size="small" type="white" />
      </div>
    </div>
  );
}

export default CardAuction;
