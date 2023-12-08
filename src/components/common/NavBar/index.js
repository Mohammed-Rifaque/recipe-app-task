import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../../assets/images/recipe-book-icon.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../config/constant/routePathConstants";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/slicers/recipeSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    // Update the favorite count when the component mounts or when favorites change
    const favoritesCount = favorites.length;
    setFavoriteCount(favoritesCount);
  }, [favorites]);

  return (
    <nav>
      <div className="dashboard-nav">
        <div className="logo" onClick={() => navigate(HOME)}>
          <img src={Logo} alt="logo" />
          <span>
            <span style={{ color: "#4caf50" }}>Recipe</span>{" "}
            <span>App</span>
          </span>
        </div>
        <div className="right-nav">
          <span className="admin-profile" id="admin-profile">
            <div
              className="FavoriteIcon-box"
              onClick={() => navigate("/favorites")}
            >
              <div className="favorite-icon-container">
                <FavoriteIcon
                  style={{ color: favoriteCount > 0 ? "red" : "" }}
                />
                {favoriteCount > 0 && (
                  <span className="favorite-count">{favoriteCount}</span>
                )}
              </div>
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
    </nav>
  );
};

export default NavBar;
