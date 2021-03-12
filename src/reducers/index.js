import { combineReducers } from 'redux';
import mealReducer from './mealReducer';
import categoryReducer from './categoryReducer';
import filterReducer from './filter';

const rootReducer = combineReducers({
  meals: mealReducer,
  categories: categoryReducer,
  filterReducer,
});

export default rootReducer;
