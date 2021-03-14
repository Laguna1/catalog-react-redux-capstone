import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { resetStep } from '../actions/index';

import './Meal.css';

const Meal = ({ meal }) => (
  <div className="meal d-flex align-items-center">
    <div>
      <div className="back-btn mb-3 ml-1 text-left">
        <Link to="/">
          <button type="button" onClick={resetStep} className="btn btn-large btn-primary rounded-0">Back</button>
        </Link>
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
    </div>
    <div className="meal-info w-50">
      <h1 className="text-primary my-5 font-weight-bold display-4">{meal.strMeal}</h1>
      <p className="meal-card-detail text-left ml-5">
        Category :
        <strong>
          <span>
            {meal.strCategory}
          </span>
        </strong>
      </p>
      <p className="meal-card-detail text-left ml-5">
        Tags :
        <strong>
          <span>
            {meal.strTags}
          </span>
        </strong>
      </p>
      <p className="meal-card-detail text-left ml-5 mb-3">
        Area :
        <strong>
          {meal.strArea}
        </strong>

      </p>
      <p className="meal-card-detail text-left ml-5 mt-5">
        <h6 className="font-weight-bold">How to cook :</h6>
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
