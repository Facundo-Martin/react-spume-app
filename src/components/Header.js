import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CardNav from "./Cards/CardNav";
import CardUser from "./Cards/CardUser";
import DropdownMenu from "./DropdownMenu";

const menuItems = ["All items", "Art", "Sports", "Gaming", "Utility", "Cards"];

// This will obviously come from the user account
const user = {
  image: "https://i.postimg.cc/TPbFQmSP/Kenny-Lorem.jpg",
  // Tell Leo (or should I say Kenny) I'm sorry for hosting his profile image online
  name: "Kenny Lorem",
  user: "@kenny",
};

function Header({ initialSelectedCard = menuItems[0] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initialSelectedCard);
  // Checking selected state
  console.log("the current selected menu title is", selected);

  return (
    <div className="header">
      <img
        className="header__logo "
        src="https://i.postimg.cc/LXZ2nZ1r/Logo.png"
        alt="spume logo"
      />

      <div className="header__input">
        <SearchIcon className="header__searchicon" />
        <input placeholder="Search" />
      </div>
      <div className="header__nav">
        {menuItems?.map((item, index) => (
          <CardNav
            title={item}
            key={index}
            setSelected={setSelected}
            isActive={Boolean(selected === item)}
          />
        ))}
      </div>
      <div className="header__user">
        <div className="header__user-icon">
          <NotificationsNoneIcon style={{ fontSize: 20 }} />
        </div>
        <CardUser
          image={user.image}
          name={user.name}
          user={user.user}
          setOpen={setOpen}
          open={open}
        />
      </div>
      <div className="header__dropdownmenu">{open && <DropdownMenu />}</div>
    </div>
  );
}

export default Header;
