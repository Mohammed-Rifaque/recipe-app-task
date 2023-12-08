import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: {
    hits: [],
  },
  favorites: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipesReducer: (state, { payload }) => {
      state.recipes = payload;
    },
    addToFavorites: (state, action) => {
      const { payload } = action;
      state.favorites.push({ ...payload, isFavorite: true });
    },
    removeFromFavorites: (state, action) => {
      const { payload } = action;
      state.favorites = state.favorites.filter(
        (recipe) => recipe.uri !== payload.uri
      );
    },
  },
});

export const { getRecipesReducer, addToFavorites, removeFromFavorites } = recipesSlice.actions;
export const selectRecipes = (state) => state.recipes;
export const selectFavorites = (state) => state.recipes.favorites;

const recipeReducer = recipesSlice.reducer;
export default recipeReducer;
