import { Avatar } from "@material-ui/core";
import React from "react";
import "./CardCreator.css";
import ETHIcon from "../UI/NFTStatIcons/ETHIcon";

function CardCreator({ image, name, amount, profits, Icon }) {
  return (
    <div className="cardcreator">
      <div className="cardcreators__profile">
        <div className="wrapper">
          <Avatar className="cardcreator__profile-image" src={image} />
        </div>
        <div className="cardcreator__profile__info">
          <h4>{name}</h4>
          <div className="cardcreator__profile__info-flex">
            <ETHIcon />
            <p>{amount}</p>
          </div>
        </div>
      </div>
      <div className="cardcreator__profits">
        {profits >= 0 ? "+" : ""}
        {profits}%
      </div>
      <div className="cardcreator__profitsicon">
        <Icon />
      </div>
    </div>
  );
}

export default CardCreator;
