import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealsByDetail, selectMeal } from '../actions/index';
import MealCard from '../components/MealCard';

const MealList = ({ meals, fetchMealsByDetail, selectMeal }) => {
  const handleFetchMeal = meal => {
    selectMeal(meal.idMeal);
    fetchMealsByDetail(meal.idMeal);
  };

  const addMeals = meals.map(meal => (
    <MealCard
      meal={meal}
      key={meal.idMeal}
      clickHandler={() => handleFetchMeal(meal)}
    />
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

const mapDispatchToProps = dispatch => ({
  selectMeal: idMeal => dispatch(selectMeal(idMeal)),
  fetchMealByDetail: idMeal => dispatch(fetchMealsByDetail(idMeal)),
});

MealList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  selectMeal: PropTypes.func.isRequired,
  fetchMealsByDetail: PropTypes.func.isRequired,
};

MealList.defaultProps = {
  meals: [],
};

export default connect(null, mapDispatchToProps)(MealList);
