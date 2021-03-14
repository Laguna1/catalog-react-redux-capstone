import React from 'react';
import PropTypes from 'prop-types';
import './Meal.css';

const Meal = ({ meal }) => (
  <div className="meal align-items-center">
    <div>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
    </div>
    <div className="meal-info">
      <h1 className="text-primary my-5 font-weight-bold display-4">{meal.strMeal}</h1>
      <p className="meal-card-detail text-left ml-5">
        Category :
        <span>
          {meal.strCategory}
        </span>
      </p>
      <p className="meal-card-detail text-left ml-5">
        Tags :
        <span>
          {meal.strTags}
        </span>
      </p>
      <p className="meal-card-detail text-left ml-5">
        Area :
        {meal.strArea}
      </p>
      <p className="meal-card-detail text-left ml-5">
        <h4>How to cook :</h4>
        {meal.strInstructions}
      </p>
    </div>
  </div>
);

Meal.propTypes = ({
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strTags: PropTypes.string,
    strIngredients: PropTypes.string,
  }).isRequired,
});

export default Meal;
