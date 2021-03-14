import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './assets/index.css';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
