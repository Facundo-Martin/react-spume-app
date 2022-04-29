import { Avatar } from "@material-ui/core";
import React from "react";
import "./CardActivity.css";

function CardActivity({ image, crypto, amount }) {
  return (
    <div className="cardactivity">
      <Avatar className="cardactivity__image" src={image} />
      <div className="cardactivity__info">
        <h4 className="crypto">{crypto}</h4>
        <p className="amount">
          {amount} {crypto} Recieved
        </p>
      </div>
    </div>
  );
}

export default CardActivity;
