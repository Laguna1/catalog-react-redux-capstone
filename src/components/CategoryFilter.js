import React from 'react';
import PropTypes from 'prop-types';

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
    <div clasName="category-filter">
      <h3>Categories: </h3>
      <select className="categories-list p-2 ml-2" onChange={handleFilter}>
        <option name="All" key="All">All</option>
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
