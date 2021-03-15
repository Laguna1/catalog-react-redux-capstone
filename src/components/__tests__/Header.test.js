import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../Header';

const renderer = new ShallowRenderer();

it('should render Header correctly', () => {
  renderer.render(<Header />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
