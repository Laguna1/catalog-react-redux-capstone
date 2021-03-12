import { combineReducers } from 'redux';
import mealReducer from './mealReducer';

const rootReducer = combineReducers({
  plants: mealReducer,
});

export default rootReducer;
