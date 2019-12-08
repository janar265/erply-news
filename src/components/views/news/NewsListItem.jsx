import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateUtils';
import './News.css';

const NewsListItem = ({ story, onClick }) => {
    return (
        <div className="news-item-container">
            <div className="news-item-text-container">
                <div className="news-item-title">{story.title}</div>
                <div className="news-item-description">{story.description}</div>
                <div className="news-item-footer">
                    <div className="news-item-author-date">
                        <b>{story.author}</b>
                        <div className="news-item-date">{formatDate(story.publishedAt)}</div>
                    </div>
                    <div className="news-item-read-more" onClick={onClick}>Continue reading..</div>
                </div>
            </div>
            <img className="news-item-image"
                alt="Article"
                src={story.urlToImage == null ? "https://react.semantic-ui.com/images/avatar/large/matthew.png" : story.urlToImage} />
        </div>
    )
}

NewsListItem.propTypes = {
    story: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NewsListItem;
