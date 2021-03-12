import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_MEALS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
  FETCH_MEAL,
  SELECT_MEAL,
  FETCH_INIT_MEAL,
  FETCH_SUCCESS,
  FETCH_MEAL_ERROR,
} from './actionTypes';

import { FILTERED_MEALS_BY_CATEGORY } from '../api/api';

const fetchInit = () => ({
  type: FETCH_INIT,
});

const fetchMeals = content => ({
  type: FETCH_MEALS,
  payload: {
    meals: content,
  },
});

const fetchFail = () => ({
  type: FETCH_FAIL,
});

const fetchCategories = content => ({
  type: FETCH_CATEGORY,
  payload: {
    categories: content,
  },
});

const fetchMeal = content => ({
  type: FETCH_MEAL,
  payload: {
    meal: content,
  },
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const selectMeal = detail => ({
  type: SELECT_MEAL,
  detail,
});

const fetchInitMeal = () => ({
  type: FETCH_INIT_MEAL,
});

const fetchMealError = error => ({
  type: FETCH_MEAL_ERROR,
  payload: error,
});

const fetchMealsByDetail = detail => dispatch => {
  const url = FILTERED_MEALS_BY_CATEGORY`${category}`;

  dispatch(fetchInitMeal());
  axios.get(url)
    .then(responce => {
      dispatch(fetchSuccess(responce.data));
    })
    .catch(error => {
      dispatch(fetchMealError(error.message));
    });
};

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

export {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
  changeFilter,
  fetchMeal,
  fetchSuccess,
  fetchMealsByDetail,
  fetchInitMeal,
  selectMeal,
  fetchMealError,
};
