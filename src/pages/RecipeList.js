import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesApi } from "../api";
import { selectRecipes } from "../redux/slicers/recipeSlice";
import RecipeCard from "./RecipeCard";
import FilterModal from "./Modal/FilterModal";
import useDebouncedEffect from "../hooks/useDebouncedEffect";
import FilterListIcon from '@mui/icons-material/FilterList';
import Skeleton from "../components/Skeleton";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes = [] } = useSelector(selectRecipes);

  const nextUrl = recipes?._links?.next?.href || null

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({
    query: null,
    mealType: null,
  });

  useEffect(() => {
    dispatch(fetchRecipesApi(queries, setLoading));
  }, [dispatch]);

  const handleFilter = () => {
    setIsFilterOpen((pre) => !pre);
  };

  const handleNext = () => {
    setLoading(true)
    dispatch(fetchRecipesApi(queries, setLoading, nextUrl));
  };
  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  useDebouncedEffect(
    () => {
      dispatch(fetchRecipesApi(queries, setLoading));
    },
    3000,
    [queries.query]
  );

  return (
    <div className="container">
      <h2>Recipe List</h2>
      <div className="search-filter-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes"
            value={queries.query}
            onChange={(e) =>
              setQueries((pre) => ({ ...pre, query: e.target.value }))
            }
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>
        <div className="filter-container">
          <div className="buttonwrapper">
            <button className="filter-btn" onClick={handleFilter}>
              <FilterListIcon className="icon" /> Filter
            </button>
          </div>
          {isFilterOpen && (
            <FilterModal
              handleClose={handleCloseFilter}
              queries={queries}
              setQueries={setQueries}
            />
          )}
        </div>
      </div>
      <div className="recipe-list-container">
        {loading ? (
          <>
            {[...Array(10)].map((x, index) => (
              <Skeleton />
            ))}
          </>
        ) : (
          recipes?.hits?.map((item, index) => (
            <RecipeCard key={index} recipe={item.recipe} />
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={handleNext} className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default RecipeList;
