import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import recipeSlice, { selectRecipes } from "../redux/slicers/recipeSlice";
import { fetchRecipesApi } from "../api";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes = [] } = useSelector(selectRecipes);
  const [searchTerm, setSearchTerm] = useState("");
console.log(recipes)
  useEffect(() => {
    dispatch(fetchRecipesApi());
  }, [dispatch]);

  const handleSearch = () => {
    // Filter recipes based on the search term
    //   const filteredRecipes = recipes.filter((recipe) =>
    //     recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   // Update the UI with filtered recipes
    //   setFilteredRecipes(filteredRecipes);
  };

  const handleResetSearch = () => {
    // Reset search term and display all recipes
    // setSearchTerm("");
    // setFilteredRecipes(recipes);
  };

  // State to hold filtered recipes
  // const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        <input
          type="text"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleResetSearch}>Reset</button>
      </div>
      {recipes?.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.label} />
          <h3>{recipe.label}</h3>
          <p>{recipe.source}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
