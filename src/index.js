import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
const mealIds = () => Math.ceil(Math.random() * 100);

const mealTitles = [
  'Almond',
  'Bean',
  'Baobab',
  'Wineberry',
  'Tomato',
  'Strawberry',
  'Mango',
];

const categories = [
  'Beech',
  'Nettle',
  'Grass',
  'Aster',
  'Buttercup',
  'Pea',
  'Olive',
];

const contentRandom = () => Math.floor(Math.random() * categories.length);

const meals = [];

for (let i = 0; i < mealTitles.length; i += 1) {
  meals[i] = {
    mealId: mealIds(),
    title: mealTitles[i],
    content: categories[contentRandom()],
  };
}

const initialState = {
  meals,
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
