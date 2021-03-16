import { SELECT_MEAL } from '../actions/actionTypes';

const selectMealReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MEAL:
      return {
        type: action.Id,
      };
    default:
      return state;
  }
};

export default selectMealReducer;
