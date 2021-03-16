import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MealCard from '../MealCard';

const mealTest = {
  idMeal: '52525',
  strMeal: 'My meal',
  strMealThumb: 'https://www.google.com/images/test.png',
};

const renderer = new ShallowRenderer();

it('should render MealCard correctly 1', () => {
  renderer.render(<MealCard meal={mealTest} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
