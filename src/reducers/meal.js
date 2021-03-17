import { FETCH_INIT_MEAL, FETCH_SUCCESS, FETCH_MEAL_ERROR } from '../actions/actionTypes';

const initialState = {
  meal: [],
  error: '',
};

const singleMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT_MEAL:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        meal: action.payload,
        error: '',
      };
    case FETCH_MEAL_ERROR:
      return {
        ...state,
        meal: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singleMealReducer;
