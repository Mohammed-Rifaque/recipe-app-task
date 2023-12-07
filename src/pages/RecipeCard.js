
import React from 'react';
import "./style.css"

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.label}</h3>
        <div>
          <button className="favorite-button">Add to Favorites</button>
          <button className="favorite-button">Remove from Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
