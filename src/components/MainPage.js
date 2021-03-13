import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getMeals, getAllCategories } from '../api/api';
import MealList from '../containers/MealList';
import CategoryFilter from './CategoryFilter';
import { getMealCategoriesList, getMealsList } from '../store';
import {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
} from '../actions/index';

const MainPage = ({
  meals,
  groups,
  loading,
  error,
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
}) => {
  const filter = useSelector(store => store.filterReducer);

  const handleFetchMeals = async () => {
    fetchInit();

    try {
      const result = await getMeals(filter);
      const categories = await getAllCategories();
      fetchMeals(result);
      fetchCategories(categories);
    } catch (e) {
      fetchFail();
    }
  };

  const handleFilterChange = async category => {
    const filteredMeals = await getMeals(category);
    fetchMeals(filteredMeals);
  };

  useEffect(() => {
    handleFetchMeals();
  }, []);

  return (
    <>
      <CategoryFilter groups={groups} onFilter={handleFilterChange} />
      {error && <p>Something went wrong</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <MealList meals={meals} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { meals: { loading, error } } = state;
  const meals = getMealsList(state);
  const categories = getMealCategoriesList(state);
  return {
    meals,
    categories,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchInit: () => dispatch(fetchInit()),
  fetchMeals: result => dispatch(fetchMeals(result)),
  fetchFail: () => dispatch(fetchFail()),
  fetchCategories: categories => dispatch(fetchCategories(categories)),
});

MainPage.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  groups: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  fetchInit: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  meals: [],
  groups: [],
  loading: false,
  error: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
