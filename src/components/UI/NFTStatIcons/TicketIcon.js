import React from "react";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import "./TicketIcon.css";

function TicketIcon() {
  return (
    <div className="ticketicon">
      <LocalActivityIcon
        style={{ color: "#ecaf4e", fontSize: 20, marginTop: 4 }}
      />
    </div>
  );
}

export default TicketIcon;
