import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_MEALS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
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

const fetchMealsByCategories = category => dispatch => {
  const url = FILTERED_MEALS_BY_CATEGORY`${category}`;

  dispatch(fetchInit());
  axios.get(url)
    .then(responce => {
      dispatch(fetchMeals(responce.data.meals));
    })
    .catch(e => {
      dispatch(fetchFail(e.message));
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
  fetchMealsByCategories,
};
