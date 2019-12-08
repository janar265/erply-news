import React from 'react';
import PropTypes from 'prop-types';
import './CategorySelector.css';

const Category = ({ name, isSelected, handleClick }) => {
    return (
        <div className={`${isSelected ? 'active' : ''} category`} onClick={handleClick}>
            {name}
        </div>
    )
}

Category.propTypes = {
    name: PropTypes.string.isRequired
}

export default Category;
