import React from "react";
import "./ActivityCards.css";
import CardActivity from "./Cards/CardActivity";

// Obviously this will come from a database
const userActivity = [
  {
    image: "https://i.postimg.cc/65PRVHLG/Abstract-Art187.jpg",
    amount: 0.06,
    crypto: "ETH",
  },
  {
    image: "https://i.postimg.cc/ZqPDHDt7/Abstract-Art-188.jpg",
    amount: 0.04,
    crypto: "ETH",
  },
  {
    image: "https://i.postimg.cc/FK5L876r/Abstract-Art189.jpg",
    amount: 0.08,
    crypto: "ETH",
  },
];

function ActivityCards() {
  return (
    <div className="activitycards">
      {userActivity.map((item, index) => (
        <CardActivity
          key={index}
          image={item.image}
          amount={item.amount}
          crypto={item.crypto}
        />
      ))}
    </div>
  );
}

export default ActivityCards;
