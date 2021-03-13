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

const selectMeal = idMeal => ({
  type: SELECT_MEAL,
  idMeal,
});

const fetchInitMeal = () => ({
  type: FETCH_INIT_MEAL,
});

const fetchMealError = error => ({
  type: FETCH_MEAL_ERROR,
  payload: error,
});

const fetchMealById = idMeal => dispatch => {
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const url = `${BASE_URL}${idMeal}`;

  dispatch(fetchInitMeal());
  axios.get(url)
    .then(responce => {
      dispatch(fetchSuccess(responce.data.meals));
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
  fetchMealById,
  selectMeal,
};
