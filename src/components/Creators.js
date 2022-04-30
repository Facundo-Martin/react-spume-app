import React, { useState } from "react";
import "./Creators.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardCreator from "./Cards/CardCreator";
import TrendingUpIcon from "./UI/NFTStatIcons/TrendingUpIcon";
import TrendingDownIcon from "./UI/NFTStatIcons/TrendingDownIcon";

const dataCreators = [
  {
    image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
    name: "Harold Monic",
    amount: "6,034,82",
    profits: 28.04,
  },
  {
    image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
    name: "Jung Taekwoon",
    amount: "5,839,31",
    profits: 13.52,
  },
  {
    image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
    name: "Jean Woodland",
    amount: "3,839,31",
    profits: -10.01,
  },
];

function Creators() {
  return (
    <div className="creators">
      <div className="creators__header">
        <h3>Top Creators</h3>
        <a className="creators__header-link" href="">
          <h4>View All </h4>

          <ArrowForwardIosIcon
            style={{ color: "rgb(2, 100, 198))", fontSize: 11 }}
          />
        </a>
      </div>
      {dataCreators.map((creator, index) => (
        <CardCreator
          key={index}
          image={creator.image}
          name={creator.name}
          amount={creator.amount}
          profits={creator.profits}
          Icon={creator.profits >= 0 ? TrendingUpIcon : TrendingDownIcon}
        />
      ))}
    </div>
  );
}

export default Creators;
