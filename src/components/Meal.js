import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ mealId, title, content }) => (
  <div className="meal">
    <p>{mealId}</p>
    <h>{title}</h>
    <p>{content}</p>
  </div>
);

Meal.propTypes = {
  mealId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Meal;
