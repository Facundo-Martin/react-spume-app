import React from "react";
import "./CardAuction.css";
import Button from "../UI/Button";

function CardAuction({ image, title, lastbid, creators }) {
  return (
    <div className="cardauction">
      <img className="cardauction_image" src={image} alt="" />
      <h3>{title}</h3>
      <div className="cardauction__lastbid">
        <p>{lastbid.eth}</p>
        <p>{lastbid.dollars}</p>
      </div>
      <p>{creators}</p>
      <div className="cardauction__buttons">
        <Button title="Place a bid" />
        <Button title="History" />
      </div>
    </div>
  );
}

export default CardAuction;
