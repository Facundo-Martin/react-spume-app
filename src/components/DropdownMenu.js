import React from "react";
import "./DropdownMenu.css";
import DropdownItem from "./UI/DropdownItem";
import PersonIcon from "@mui/icons-material/Person";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function DropdownMenu() {
  return (
    <div className="dropdownmenu">
      <DropdownItem
        title="View Profile"
        Icon={PersonIcon}
        MenuIcon={ArrowForwardIosIcon}
      />

      <DropdownItem title="(Balance coming from wallet)" />
      <DropdownItem
        title="Contact Support"
        Icon={SupportAgentIcon}
        MenuIcon={ArrowForwardIosIcon}
      />
      <DropdownItem
        title="Settings"
        Icon={SettingsIcon}
        MenuIcon={ArrowForwardIosIcon}
      />
      <DropdownItem title="Disconnect" Icon={LogoutIcon} />
    </div>
  );
}

export default DropdownMenu;
