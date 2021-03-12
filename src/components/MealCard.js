import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = ({ meal, clickHandler }) => {
  const {
    mealId,
    title,
    content,
  } = meal;

  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div className="meal-card" key={meal.mealId}>
      <h1 className="title">
        <Link
          to={{
            state: { meal },
          }}
          onClick={() => handleClick(meal)}
          className="link"
        >
          {meal.title}
        </Link>
      </h1>
      <p>{meal.content}</p>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    mealId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MealCard;
