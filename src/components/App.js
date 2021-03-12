import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MealList from '../containers/MealList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MealList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
