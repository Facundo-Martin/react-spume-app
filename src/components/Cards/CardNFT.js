import React from "react";
import "./CardNFT.css";
import CardUser from "./CardUser";
import Button from "../UI/Button";

// This will obviously come from the user account
const dataNFT = {
  image: "https://i.postimg.cc/zBJ2cSqJ/NFTRobot.jpg",
  title: "Astronaut",
  price: "100 Player",
  releaseDate: "",
  stats: {
    rewards: "$500 K",
    access: "PlayVerse Seed Round",
    ticket: "Thailand Travala Gateway",
  },
  user: {
    image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
    // Tell Leo (or should I say Kenny) I'm sorry for hosting his profile image online
    name: "Allison Black",
    user: "@allison",
  },
};

function CardNFT() {
  console.log({ dataNFT });

  return (
    <div className="cardNFT">
      <div className="cardNFT__image">
        <img src={dataNFT.image} />
      </div>
      <div className="cardNFT__data">
        {/* <CardUser image={user.image} name={user.name} user={user.user} /> */}
        <div className="cardNFT__header">
          <CardUser
            image={dataNFT.user.image}
            name={dataNFT.user.name}
            user={dataNFT.user.user}
          />
          <h3>Add Icon with isActive</h3>
        </div>
        <div className="cardNFT__title">
          <h2>{dataNFT.title}</h2>
        </div>
        <div className="cardNFT__info">
          <h3>card data</h3>
        </div>
        <div className="cardNFT__stats">
          <h3>card stats</h3>
        </div>
        <div className="cardNFT__buttons">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default CardNFT;
