import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => (
  <div className="meal">
    <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
    <p>{meal.strTags}</p>
    <p>{meal.strMeal}</p>
    <p>{meal.strArea}</p>
    <p>{meal.strCategory}</p>
    <p>{meal.strInstructions}</p>
  </div>
);

Meal.propTypes = ({
  meal: PropTypes.shape({
    strMeal: PropTypes.instanceOf(Object).isRequired,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
});

export default Meal;
