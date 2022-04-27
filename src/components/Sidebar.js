import React from "react";
import "./Sidebar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FlightIcon from "@mui/icons-material/Flight";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* NavIcons */}
      <div className="sidebar__nav">
        <MailOutlineIcon className="sidebar__nav-icon" />
        <AccountBalanceWalletIcon className="sidebar__nav-icon" />
        <FlightIcon className="sidebar__nav-icon rotate" />
        <RocketLaunchIcon className="sidebar__nav-icon rotate" />
        <FavoriteIcon className="sidebar__nav-icon" />
      </div>
      {/* SettingsIcon */}
      <div className="sidebar__settingsicon">
        <SettingsIcon className="sidebar__nav-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
