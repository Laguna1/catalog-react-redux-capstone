import axios from 'axios';

const ALL_MEALS = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
const ALL_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const CATEGORIES_BY_PAGE = `${ALL_CATEGORIES}`;
const FILTERED_MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php';

const getMeals = async (filter = '') => {
  const url = filter === 'All' || filter === '' || filter === null ? ALL_MEALS : FILTERED_MEALS_BY_CATEGORY + filter;

  try {
    const { data: { meals } } = await axios.get(url);

    await Promise.all(meals.map(async meal => {
      meals.push(meal);
    }));

    return meals;
  } catch (e) {
    throw new Error(e);
  }
};

const getAllCategories = async () => {
  const categories = [];

  const url = CATEGORIES_BY_PAGE;
  const { data: { groups } } = await axios.get(url);

  Promise.all(categories.map(async category => {
    categories.push(category);
  }));

  return Promise.all(groups);
};
export {
  getMeals,
  getAllCategories,
  FILTERED_MEALS_BY_CATEGORY,
};
