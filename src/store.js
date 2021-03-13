const getMealsState = store => store.meals.meals;

const getMealCategories = store => store.groups.groups;

const getMealsList = store => getMealsState(store);

const getMealCategoriesList = store => getMealCategories(store);

export {
  getMealsList,
  getMealsState,
  getMealCategoriesList,
};
