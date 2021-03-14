import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_MEALS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
  FETCH_INIT_MEAL,
  SELECT_MEAL,
  FETCH_MEAL_ERROR,
  FETCH_SUCCESS,
} from './actionTypes';

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

const selectMeal = Id => ({
  type: SELECT_MEAL,
  Id,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchInitMeal = () => ({
  type: FETCH_INIT_MEAL,
});

const fetchMealError = error => ({
  type: FETCH_MEAL_ERROR,
  payload: error,
});

const fetchMealById = Id => dispatch => {
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const url = `${BASE_URL}${Id}`;
  dispatch(fetchInitMeal());
  axios.get(url)
    .then(response => {
      dispatch(fetchSuccess(response.data.meals));
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

const resetStep = () => ({ type: 'RESET_STEP' });

export {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
  changeFilter,
  fetchMealById,
  selectMeal,
  fetchSuccess,
  resetStep,
};
