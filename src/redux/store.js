import { combineReducers , configureStore } from "@reduxjs/toolkit";

import recipeReducer from "./slicers/recipeSlice";


const rootReducer = combineReducers({
    recipes: recipeReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;