import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/components/MealCard.css';

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
    <div className="meal-card-wrapper">
      <div className="meal-card p-3" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} className="meal-card-image my-3" />
        <div className="title">
          <Link
            to={{
              pathname: `/meals/${idMeal}`,
              state: { meal },
            }}
            onClick={() => handleClick(meal)}
            className="meal-card-link"
          >
            {meal.strMeal}
            mealcard
          </Link>
        </div>
      </div>
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
