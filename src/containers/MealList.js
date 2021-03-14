import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealById, selectMeal } from '../actions/index';
import MealCard from '../components/MealCard';
import './MealList.css';

const MealList = ({ meals, fetchMealById, selectMeal }) => {
  const handleFetchMeal = meal => {
    selectMeal(meal.idMeal);
    fetchMealById(meal.idMeal);
  };

  const addMeals = meals.map(meal => (
    <MealCard
      meal={meal}
      key={meal.idMeal}
      clickHandler={() => handleFetchMeal(meal)}
    />
  ));

  return (
    <div className="meals-wrapper">
      <h4>All Meals in this category:</h4>
      <div className="meals-list">
        {addMeals}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectMeal: idMeal => dispatch(selectMeal(idMeal)),
  fetchMealById: idMeal => dispatch(fetchMealById(idMeal)),
});

MealList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  selectMeal: PropTypes.func.isRequired,
  fetchMealById: PropTypes.func.isRequired,
};

MealList.defaultProps = {
  meals: [],
};

export default connect(null, mapDispatchToProps)(MealList);
