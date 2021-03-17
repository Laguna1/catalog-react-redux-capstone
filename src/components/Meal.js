import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { resetStep } from '../actions/index';
import '../assets/components/Meal.css';

const Meal = ({ meal }) => (
  <div className="meal text-center">
    <div className="d-flex single-card">
      <div className="w-50 image-single-card pt-3">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-info w-50">
        <h1 className="my-3 font-weight-bold display-6">{meal.strMeal}</h1>
        <div className="meal-card-detail text-left ml-5">
          Category :
          <strong>
            <span>
              {meal.strCategory}
            </span>
          </strong>
        </div>
        <div className="meal-card-detail text-left ml-5">
          Tags :
          <strong>
            <span>
              {meal.strTags}
            </span>
          </strong>
        </div>
        <div className="meal-card-detail text-left ml-5 mb-3">
          Area :
          <strong>
            {meal.strArea}
          </strong>
        </div>
        <div className="meal-card-detail text-left ml-5 mt-5">
          <strong>How to cook :</strong>
          <div className="how-to-cook pr-1">
            {meal.strInstructions}
          </div>
        </div>
      </div>
    </div>
    <div className="back-btn ml-5 text-center">
      <Link to="/">
        <button type="button" onClick={resetStep} className="px-5 btn btn-lg btn-outline-warning rounded-0">Back</button>
      </Link>
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
