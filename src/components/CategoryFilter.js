import React from 'react';
import PropTypes from 'prop-types';
import '../assets/components/CategoryFilter.css';

const CategoryFilter = ({ onFilter, categories }) => {
  const handleFilter = ({ target }) => {
    onFilter(target.value);
  };

  const addCategoriesList = categories.map(category => {
    if (category.name !== null) {
      return (
        <option
          key={category.idCategory}
          id={category.idCategory}
          name={category.strCategory}
        >
          {category.strCategory}
        </option>
      );
    }

    return (
      <option
        key={category.idCategory}
        id={category.idCategory}
        name={category.strCategory}
      >
        {category.name}
      </option>
    );
  });

  return (
    <div className="category-filter">
      <select className="categories-list p-2 ml-2 mt-3" onChange={handleFilter}>
        <option name="All" key="All">All Categories</option>
        {addCategoriesList}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onFilter: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
};

export default CategoryFilter;
