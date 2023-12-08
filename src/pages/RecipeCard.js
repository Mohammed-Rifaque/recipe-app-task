import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Skeleton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DETAIL } from "../config/constant/routePathConstants";

import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../redux/slicers/recipeSlice";
import { local } from "../helpers/projectHelpers";

const RecipeCard = ({ recipe, loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteValues = local.get("favorites") || [];
  const currentFavorite = favorites.find((fav) => fav?.uri === recipe?.uri);

  useEffect(() => {
    setIsFavorite(currentFavorite ? true : false);
  }, [currentFavorite]);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    
    if (isFavorite) {
      const newFavorites = favoriteValues.filter((fav) => fav?.uri !== recipe?.uri);
      dispatch(removeFromFavorites(recipe));
      local.set("favorites", newFavorites);
    } else {
      dispatch(addToFavorites(recipe));
      local.set("favorites", [...favoriteValues, recipe]);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleRecipeDetail = () => {
    localStorage.setItem("detail", JSON.stringify(recipe));
    navigate(DETAIL);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  return (
    <div className="recipe-card" onClick={handleRecipeDetail}>
      <>
        {imageLoading && (
          <Stack spacing={1}>
            <Skeleton variant="text" width={300} height={300} />
          </Stack>
        )}
        <div className="like-button-container">
        <button
          className="favorite-button"
          onClick={handleToggleFavorite}
        >
          <FavoriteIcon style={{ color: isFavorite ? "red" : "black" }} />
        </button>
      </div>
        <img
          style={{ display: imageLoading ? "none" : "block" }}
          src={recipe?.image}
          alt={recipe?.label}
          className={`recipe-image ${imageLoading ? "hidden" : ""}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <div className="recipe-info">
          <h3 className="recipe-title">{recipe?.label}</h3>

        </div>
      </>
    </div>
  );
};

export default RecipeCard;
