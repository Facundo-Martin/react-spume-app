import React, { useState } from "react";
import "./CardUser.css";
import { Avatar } from "@material-ui/core";
import DropdownMenu from "../DropdownMenu";

function CardUser({ image, name, user, setOpen, open }) {
  return (
    <div className="cardUser">
      <Avatar
        className="cardUser__image"
        src={image}
        onClick={() => setOpen(!open)}
      />
      <div className="cardUser__info">
        <h4 className="cardUser__info-name">{name}</h4>
        <p className="cardUser__info-user">{user}</p>
      </div>
    </div>
  );
}

export default CardUser;
