import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = ({ meal, clickHandler }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
  } = meal;

  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div className="meal-card" key={idMeal}>
      <h1 className="title">
        <Link
          to={{
            state: { meal },
          }}
          onClick={() => handleClick(meal)}
          className="link"
        >
          {meal.strMeal}
        </Link>
      </h1>
      <p>{strCategory}</p>
      <img src={strMealThumb} alt={strMeal} />
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MealCard;
