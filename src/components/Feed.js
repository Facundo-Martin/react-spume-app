import React from "react";
import ActivityCards from "./ActivityCards";
import Creators from "./Creators";
import "./Feed.css";
import Button from "./UI/Button";

function Feed() {
  return (
    <div className="feed">
      <h3>Recent Activity</h3>
      <ActivityCards />
      <Button title="Show more" size="large" />
      <Creators />
    </div>
  );
}

export default Feed;
