import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import './App.css';

function App() {
  const meal = useSelector(store => store.singleMealReducer.meal.data);
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          {
            meal ? (
              <Route exact path={`/meals/${meal.detail}`}>
                <Meal meal={meal} />
              </Route>
            ) : null
          }
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
