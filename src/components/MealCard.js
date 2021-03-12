import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = ({ meal, clickHandler }) => {
  const {
    mealId,
    name,
    category,
    image,
    ingredients,
    measures,
  } = meal;

  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div className="meal-card" key={mealId}>
      <h1 className="title">
        <Link
          to={{
            state: { meal },
          }}
          onClick={() => handleClick(meal)}
          className="link"
        >
          {meal.name}
        </Link>
      </h1>
      <p>{category}</p>
      <img src={image} alt={name} />
      <p>{ingredients}</p>
      <p>{measures}</p>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    mealId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    measures: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MealCard;
