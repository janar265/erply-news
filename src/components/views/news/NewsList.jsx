import React from 'react';
import NewsListItem from './NewsListItem';
import NewsPlaceholder from '../../common/news-placeholder/NewsPlaceholder';
import SegmentPlaceholder from '../../common/segment-placeholder/SegmentPlaceholder';
import PropTypes from 'prop-types';
import './News.css';

const NewsList = ({ news, isLoading, loadMore, onStoryClick, clearQuery }) => {

    if (isLoading) {
        return (
            <div className="news-list-placeholder-container">
                {[1, 2].map(i => (<NewsPlaceholder key={i} />))}
            </div>
        );
    }

    if (news.length === 0) {
        return (
            <SegmentPlaceholder
                icon={"search"}
                action
                onActionClick={clearQuery}
                actionMessage={"Clear query"}
                message={"We didn't find any news."} />
        );
    }

    return (
        <React.Fragment>
            <div className="news-list-container">
                {news.map((story, i) => (<NewsListItem key={i} story={story} onClick={() => onStoryClick(story.title)} />))}
            </div>
            {loadMore && <NewsPlaceholder />}
        </React.Fragment>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadMore: PropTypes.bool.isRequired
}

export default NewsList;
