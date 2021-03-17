const getMealsState = store => store.meals.meals;

const getMealGroups = store => store.categories.categories;

const getMealsList = store => getMealsState(store);

const getMealGroupsList = store => getMealGroups(store);

export {
  getMealsList,
  getMealsState,
  getMealGroupsList,
};
