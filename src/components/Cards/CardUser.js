import React from "react";
import "./CardUser.css";
import { Avatar } from "@material-ui/core";

function CardUser({ image, name, user }) {
  return (
    <div className="cardUser">
      <Avatar className="cardUser_image" src={image} />
      <div className="cardUser__info">
        <h4 className="cardUser__info-name">{name}</h4>
        <p className="cardUser__info-user">@{user}</p>
      </div>
    </div>
  );
}

export default CardUser;
