  import axios from 'axios';
import { getRecipesReducer } from '../redux/slicers/recipeSlice';

  const API_KEY = '7ffcf191a98dc398406b0680a0136ef4';
  const APP_ID = '4bd499e3';
  const API_URL = (query) => `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

  export const fetchRecipesApi = (query = "popular") => async (dispatch) => {
    try {
      const response = await axios.get(API_URL(query));
      dispatch(getRecipesReducer(response.data.hits));
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return dispatch(getRecipesReducer([]));
    }
  };
