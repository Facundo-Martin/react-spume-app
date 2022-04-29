import React from "react";
import ActivityCards from "./ActivityCards";
import Creators from "./Creators";
import "./Feed.css";
import Button from "./UI/Button";

function Feed() {
  return (
    <div className="feed">
      <h2>Feed</h2>
      <ActivityCards />
      <Button title="Show more" size="large" />
      <Creators />
    </div>
  );
}

export default Feed;
