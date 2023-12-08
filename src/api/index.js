import axios from "axios";
import { getRecipesReducer } from "../redux/slicers/recipeSlice";

const API_KEY = "7ffcf191a98dc398406b0680a0136ef4";
const APP_ID = "4bd499e3";
const API_URL = (query, mealType = null) =>
  `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}${mealType ? `&mealType=${mealType}` : ""
  }`;

export const fetchRecipesApi = (queries, setImageLoading, nextUrl) => async (
  dispatch
) => {
  const { query, mealType = null } = queries;
  const queryTerm = query || "popular";
  const URL = nextUrl ? nextUrl : API_URL(queryTerm, mealType);

  try {
    const response = await axios.get(URL);
    dispatch(getRecipesReducer(response.data));
    setImageLoading && setImageLoading(false);
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    dispatch(getRecipesReducer([]));
    setImageLoading && setImageLoading(false);
  }
};
