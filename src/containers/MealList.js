import React from 'react';
import { connect } from 'react-redux';

const MealList = ({ meals }) => {
//   return (
//     <div className="meal-list">
//       <h1>MealList here!</h1>
//     </div>
//   );
  const addMeals = meals.map(meal => (
    <div className="meal-add" key={meals.id}>
      <h2>{meals.title}</h2>
      <div>{meals.content.substring(0, 100)}</div>
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

export default connect(mapStateToProps, null)(MealList);
