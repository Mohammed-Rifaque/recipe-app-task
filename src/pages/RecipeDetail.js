import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites, addToFavorites, removeFromFavorites } from '../redux/slicers/recipeSlice';
import './style.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the recipe details from local storage
    const storedDetail = localStorage.getItem('detail');
    if (storedDetail) {
      const parsedDetail = JSON.parse(storedDetail);
      setRecipeDetail(parsedDetail);
    }
  }, []);

  const isFavorite = recipeDetail && favorites.some((fav) => fav.uri === recipeDetail.uri);

  const handleToggleFavorite = () => {
    if (recipeDetail) {
      if (isFavorite) {
        dispatch(removeFromFavorites(recipeDetail));
      } else {
        dispatch(addToFavorites(recipeDetail));
      }
    }
  };

  return (
    <div className="recipe-detail-container">
      {recipeDetail ? (
        <>
          <h2>
            {recipeDetail.label}
          </h2>
          <div className='recipe-detail-image-wrapper'>
          <div className="recipe-image">
            <img src={recipeDetail.image} alt={recipeDetail.label} />
          </div>
          <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
          <FavoriteIcon />
        </button>
          
          </div>
          <p>
            <span style={{ color: 'red' }}>Calories:</span> {recipeDetail.calories}
          </p>
          <div className="ingredients">
            <p style={{ color: '#4caf50' }}>Ingredients:</p>
            <ul>
              {recipeDetail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
