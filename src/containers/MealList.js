import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MealList = ({ meals }) => {
//   return (
//     <div className="meal-list">
//       <h1>MealList here!</h1>
//     </div>
//   );
  const addMeals = meals.map(meal => (
    <div className="meal-add" key={meal.mealId}>
      <h2>{meal.title}</h2>
      <div>{meal.category}</div>
    </div>
  ));

  return (
    <div>
      <h1>All Meals</h1>
      <div className="meals-list">
        {addMeals}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  meals: state.meals,
});

MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      mealId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(MealList);
