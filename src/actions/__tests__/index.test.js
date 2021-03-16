import {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
} from '../index';

describe('Get meals and categories', () => {
  const content = {
    meals: [
      {
        strMeal: 'Breakfast Potatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
        idMeal: '52965',
      },
    ],
  };

  const categoriesList = {
    categories: [
      {
        idCategory: '13',
        strCategory: 'Breakfast',
        strCategoryThumb: 'https://www.themealdb.com/images/category/breakfest.png',
      },
    ],
  };

  const response = fetchInit();
  const meals = fetchMeals(content);
  const failure = fetchFail();
  const categories = fetchCategories(categoriesList);

  it('Should return FETCH_INIT', () => {
    expect(response.type).toEqual('FETCH_INIT');
  });

  it('Should return FETCH_MEALS', () => {
    expect(meals.type).toEqual('FETCH_MEALS');
  });

  it('Should return data', () => {
    expect(meals.payload.meals).toEqual(content);
  });

  it('Should return FETCH_FAIL', () => {
    expect(failure.type).toEqual('FETCH_FAIL');
  });

  it('Should return FETCH_CATEGORY', () => {
    expect(categories.type).toEqual('FETCH_CATEGORY');
  });

  it('Should return categories', () => {
    expect(categories.payload.categories).toEqual(categoriesList);
  });
});
