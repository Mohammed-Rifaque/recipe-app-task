import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./style.css"; // Import the CSS file
import { local } from "../helpers/projectHelpers.js";

const FavRecipeList = () => {
 const favorites = local.get("favorites") || [];

  return (
    <div className="fav-recipe-list-container">
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="recipe-list-container">
          {favorites.map((favoriteRecipe, i) => (
            <RecipeCard
              key={i}
              recipe={favoriteRecipe}
              isFavorite={true}
              className="recipe-card" 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavRecipeList;
