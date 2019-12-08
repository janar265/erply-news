import React from 'react';
import './NewsPlaceholder.css';

const NewsPlaceholder = () => {
    return (
        <div className="placeholder-container">
            <div className="placeholder-line-container">
                <div className="placeholder-line loading"></div>
                <div className="placeholder-line short loading"></div>
                <div className="placeholder-line loading"></div>
            </div>
            <div className="placeholder-image loading"></div>
        </div>
    )
}

export default NewsPlaceholder;
