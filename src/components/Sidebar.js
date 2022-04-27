import React, { useState } from "react";
import "./Sidebar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FlightIcon from "@mui/icons-material/Flight";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarOption from "./SidebarOption";

function Sidebar({ initialSelectedIcon = "Home" }) {
  const [selected, setSelected] = useState(initialSelectedIcon);
  console.log(
    "Logs for sidebar toggle:",
    "Home isActive is",
    Boolean(selected === "Home"),
    "Wallet isActive is",
    Boolean(selected === "Wallet"),
    "Flight isActive is",
    Boolean(selected === "Flight")
  );

  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <SidebarOption
          id="Home"
          Icon={MailOutlineIcon}
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
        />
        <SidebarOption
          id="Wallet"
          Icon={AccountBalanceWalletIcon}
          isActive={Boolean(selected === "Wallet")}
          setSelected={setSelected}
        />
        <SidebarOption
          id="Flight"
          Icon={FlightIcon}
          isActive={Boolean(selected === "Flight")}
          setSelected={setSelected}
        />
        <SidebarOption
          id="Rocket"
          Icon={RocketLaunchIcon}
          isActive={Boolean(selected === "Rocket")}
          setSelected={setSelected}
        />
        <SidebarOption
          id="Favorites"
          Icon={FavoriteIcon}
          isActive={Boolean(selected === "Favorites")}
          setSelected={setSelected}
        />
      </div>
      <div className="sidebar__settingsicon">
        <SidebarOption
          id="Settings"
          Icon={SettingsIcon}
          isActive={Boolean(selected === "Settings")}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default Sidebar;
