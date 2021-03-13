import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Meal from './Meal';
import './App.css';

function App() {
  const meal = useSelector(store => store.singleMealReducer.meal.data);
  return (
    <>
      <div>
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
}

export default App;
