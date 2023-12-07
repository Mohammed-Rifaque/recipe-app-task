// recipeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipesReducer: (state, {payload}) => {
      state.recipes = payload
    }
  },
});

// Export actions and reducer
export const { getRecipesReducer } = recipesSlice.actions;
export const selectRecipes = (state) => state.recipes;

export default recipesSlice.reducer;
