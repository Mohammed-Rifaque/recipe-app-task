import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/slicers/recipeSlice.js";
import RecipeCard from "./RecipeCard";
import "./style.css"; // Import the CSS file

const FavRecipeList = () => {
  const favorites = useSelector(selectFavorites);

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
              className="recipe-card" // Add the new class to the RecipeCard
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavRecipeList;
