import React, { useState } from "react";
import "./Sidebar.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarOption from "./SidebarOption";

function Sidebar({ initialSelectedIcon = "Inbox" }) {
  const [selected, setSelected] = useState(initialSelectedIcon);
  console.log("the current selected menu title is", selected);
  console.log(
    "Logs for sidebar toggle:",
    "Inbox isActive is",
    Boolean(selected === "Inbox"),
    "Wallet isActive is",
    Boolean(selected === "Wallet"),
    "Flight isActive is",
    Boolean(selected === "Flight")
  );

  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <SidebarOption
          id="Inbox"
          Icon={DraftsIcon}
          isActive={Boolean(selected === "Inbox")}
          setSelected={setSelected}
        />
        <SidebarOption
          id="Wallet"
          Icon={AccountBalanceWalletIcon}
          isActive={Boolean(selected === "Wallet")}
          setSelected={setSelected}
        />
        <SidebarOption
          className="rotate"
          id="Flight"
          Icon={LocalAirportIcon}
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
