import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import './CategorySelector.css';

const CategorySelector = ({ categories, onCategoryChange, selectedCategory }) => {
    return (
        <div className="category-selector-container">
            {categories.map(cat =>
                <Category
                    key={cat}
                    name={cat}
                    handleClick={() => onCategoryChange(cat)}
                    isSelected={selectedCategory === cat} />)}
        </div>
    )
}

CategorySelector.propTypes = {
    categories: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired
}

export default CategorySelector;
