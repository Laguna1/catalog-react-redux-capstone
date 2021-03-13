import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = ({ meal, clickHandler }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
  } = meal;

  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div className="meal-card" key={idMeal}>
      <h1 className="title">
        <Link
          to={{
            pathname: `/meals/${idMeal}`,
            state: { meal },
          }}
          onClick={() => handleClick(meal)}
          className="link"
        >
          {meal.strMeal}
        </Link>
      </h1>
      <img src={strMealThumb} alt={strMeal} className="image" />
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MealCard;
