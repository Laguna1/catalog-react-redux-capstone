import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => (
  <div className="meal">
    <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
    <p>
      Tags :
      <span>
        {meal.strTags}
      </span>
    </p>
    <h2>{meal.strMeal}</h2>
    <p>
      Area :
      {meal.strArea}
    </p>
    <p>
      Category :
      <span>
        {meal.strCategory}
      </span>
    </p>
    <p>
      <h3>How to cook :</h3>
      {meal.strInstructions}
    </p>
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
