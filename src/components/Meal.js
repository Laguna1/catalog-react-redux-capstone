import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => (
  <div className="meal">
    <p>{meal.name}</p>
  </div>
);

Meal.propTypes = {
  name: PropTypes.instanceOf(Object).isRequired,
};

export default Meal;
