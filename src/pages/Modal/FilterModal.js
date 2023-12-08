import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { fetchRecipesApi } from "../../api";
import { ReactComponent as CloseIcon } from "../../assets/images/close-icon.svg";

const mealTypeOptions = [
  "breakfast",
  "brunch",
  "lunch",
  "dinner",
  "Snack",
  "teatime",
];

const FilterModal = ({ handleClose, queries, setQueries }) => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setQueries((pre) => ({ ...pre, mealType: value }));
  };

  const handleSubmit = () => {
    dispatch(fetchRecipesApi(queries));
    handleClose();
  };

  return (
    <div className="filter-modal">
      <div className="filter-header">
        <h4 style={{ margin: 'unset' }}>Filter Options</h4>
        <CloseIcon style={{ width: 20, height: 20 }} onClick={handleClose} />
      </div>
      <div className="filter-options">
        <div className="filter-option">
          <label>Meal Type:</label>
          <select
            value={queries.mealType}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Select Meal Type</option>
            {mealTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="filter-buttons">
        <button onClick={handleSubmit} className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default FilterModal;
