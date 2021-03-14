import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Meal from './Meal';
import './App.css';

const App = () => {
  const meal = useSelector(store => store.singleMealReducer.meal[0]);
  return (
    <>
      <div className="App align-items-center">
        <Switch>
          <Route exact path="/" component={MainPage} />
          {
            meal ? (
              <Route exact path={`/meals/${meal.idMeal}`}>
                <Meal meal={meal} />
              </Route>
            ) : null
          }
        </Switch>
      </div>
    </>
  );
};

export default App;
