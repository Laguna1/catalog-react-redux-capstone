import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import mealReducer from './mealReducer';
import filterReducer from './filter';
import singleMealReducer from './meal';
import mealSelectedReducer from './selectMeal';

const rootReducer = combineReducers({
  meals: mealReducer,
  categories: categoryReducer,
  filterReducer,
  singleMealReducer,
  mealSelectedReducer,
});

export default rootReducer;
