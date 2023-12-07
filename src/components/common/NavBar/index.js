import React from "react";
import "./style.css";
import Logo from "../../../assets/images/recipe-book-icon.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="dashboard-nav">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Recipe App</span>
          </div>
          <div className="right-nav">
            <span className="admin-profile" id="admin-profile">
              <div className="notification-box">
                <NotificationsIcon />
              </div>
              <div className="profile-box">
                <AccountCircleIcon />
              </div>
              <div className="down-arrow-box">
                <ArrowDropDownIcon />
              </div>
            </span>
          </div>
        </div>
        <div></div>
      </nav>
    </>
  );
};

export default NavBar;
