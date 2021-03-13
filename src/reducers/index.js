import { combineReducers } from 'redux';
import mealReducer from './mealReducer';
import categoryReducer from './categoryReducer';
import filterReducer from './filter';
import singleMealReducer from './meal';
import selectMealReducer from './selectMeal';

const rootReducer = combineReducers({
  meals: mealReducer,
  groups: categoryReducer,
  filterReducer,
  singleMealReducer,
  selectMealReducer,
});

export default rootReducer;
