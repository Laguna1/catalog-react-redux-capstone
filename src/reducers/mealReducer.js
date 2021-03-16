import {
  FETCH_INIT,
  FETCH_MEALS,
  FETCH_FAIL,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  meals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_MEALS:
      return {
        ...state,
        loading: false,
        error: false,
        meals: action.payload.meals,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default mealReducer;
