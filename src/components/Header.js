import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CardNav from "./Cards/CardNav";
import CardUser from "./Cards/CardUser";

const menuTitles = ["All items", "Art", "Sports", "Gaming", "Utility", "Cards"];

// This will obviously come from the user account
const user = {
  image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
  // Tell Leo (or should I say Kenny) I'm sorry for hosting his profile image online
  name: "Kenny Lorem",
  user: "kenny",
};

function Header() {
  return (
    <div className="header">
      <img className="header__logo " src="/logo.jpeg" alt="spume logo" />
      <div className="header__input">
        <SearchIcon className="header__searchicon" />
        <input placeholder="Search" />
      </div>
      <div className="header__nav">
        {menuTitles?.map((title, index) => (
          <CardNav title={title} key={index} />
        ))}
      </div>
      <div className="header__user">
        <div className="header__user-icon">
          <NotificationsNoneIcon />
        </div>
        <CardUser image={user.image} name={user.name} user={user.user} />
      </div>
    </div>
  );
}

export default Header;
