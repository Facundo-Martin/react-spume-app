import React, { useState } from "react";
import "./CardNFT.css";
import CardUser from "./CardUser";
import Button from "../UI/Button";
import NFTStat from "../UI/NFTStat";

// I created custom icon components in UI/NFTStatsIcons and I will later pass them as props
import RewardsIcon from "../UI/NFTStatIcons/RewardsIcon";
import AccessIcon from "../UI/NFTStatIcons/AccessIcon";
import TicketIcon from "../UI/NFTStatIcons/TicketIcon";
import CardNFTData from "./CardNFTData";
import SaveItem from "../SaveItem";

// This will obviously come from the user account
const dataNFT = {
  image: "https://i.postimg.cc/zBJ2cSqJ/NFTRobot.jpg",
  title: "Astronaut",
  price: "100 Player",
  releaseDate: "",
  stats: {
    rewards: "$500k",
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
  const [isActive, setIsActive] = useState(false);
  console.log({ dataNFT });

  return (
    <div className="cardNFT">
      <div className="cardNFT__image">
        <img src={dataNFT.image} />
      </div>
      <div className="cardNFT__content">
        {/* <CardUser image={user.image} name={user.name} user={user.user} /> */}
        <div className="cardNFT__header">
          <CardUser
            image={dataNFT.user.image}
            name={dataNFT.user.name}
            user={dataNFT.user.user}
          />
          <SaveItem type="normal" />
        </div>
        <div className="cardNFT__title">
          <h2>{dataNFT.title}</h2>
        </div>
        <div className="cardNFT__info">
          <CardNFTData />
        </div>
        <div className="cardNFT__stats">
          {/* Don't judge me for hardcoding the title!!*/}
          <NFTStat
            Icon={RewardsIcon}
            title="Rewards"
            description={dataNFT.stats.rewards}
          />

          <NFTStat
            Icon={AccessIcon}
            title="Access"
            description={dataNFT.stats.access}
          />
          <NFTStat
            Icon={TicketIcon}
            title="Ticket"
            description={dataNFT.stats.ticket}
          />
        </div>
        <div className="cardNFT__buttons">
          {/* I am going to use my UI button components */}
          <Button title="View Rewards" size="large" />
          <Button title="View Collection" size="large" type="dark" />
        </div>
      </div>
    </div>
  );
}

export default CardNFT;
