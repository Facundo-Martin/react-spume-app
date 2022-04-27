import React from "react";
import "./AuctionCards.css";
import CardAuction from "./Cards/CardAuction";

// This will be coming from an API/Databse
// I should probably not hardcode numbers into strings, do later
const dataAuction = [
  {
    image: "https://i.postimg.cc/CKpQjptn/Abstract-Art-187.jpg",
    title: "Abstract Art 187",
    lastbid: {
      eth: "1.47",
      dollars: "4,347,86",
    },
    creators: ["@derry", "@aoife"],
  },
  {
    image: "https://i.postimg.cc/ZqPDHDt7/Abstract-Art-188.jpg",
    title: "Abstract Art 187",
    lastbid: {
      eth: "1.47",
      dollars: "4,347,86",
    },
    creators: ["@derry", "@aoife"],
  },
  {
    image: "https://i.postimg.cc/1tJ7hnzD/Abstract-Art-189.jpg",
    title: "Abstract Art 187",
    lastbid: {
      eth: "1.47",
      dollars: "4,347,86",
    },
    creators: ["@derry", "@aoife"],
  },
];
function AuctionCards() {
  console.log({ dataAuction });
  return (
    <div className="auctioncards">
      {dataAuction?.map((item, index) => (
        <CardAuction
          key={index}
          image={item.image}
          title={item.title}
          lastbid={item.lastbid}
          creators={item.creators}
        />
      ))}
    </div>
  );
}

export default AuctionCards;
