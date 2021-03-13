import axios from 'axios';

const ALL_MEALS = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
const ALL_GROUPS = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const GROUPS_BY_PAGE = `${ALL_GROUPS}`;
const FILTERED_MEALS_BY_GROUP = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const getMeals = async (filter = '') => {
  const url = filter === 'All' || filter === '' || filter === null ? ALL_MEALS : FILTERED_MEALS_BY_GROUP + filter;

  try {
    const { data: { meals } } = await axios.get(url);

    const mealList = [];

    await Promise.all(meals.map(async meal => {
      mealList.push(meal);
    }));
    return mealList;
  } catch (e) {
    throw new Error(e);
  }
};

const getAllGroups = async () => {
  const groups = [];
  const url = GROUPS_BY_PAGE;
  const { data: { categories } } = await axios.get(url);

  Promise.all(categories.map(async group => {
    groups.push(group);
  }));

  return Promise.all(groups);
};

export {
  getMeals,
  getAllGroups,
  FILTERED_MEALS_BY_GROUP,
};
