import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Story from './Story';
import SegmentPlaceholder from '../../common/segment-placeholder';
import NewsPlaceholder from '../../common/news-placeholder';
import { fetchNews } from '../../../data/redux/news/newsActions';
import './Story.css';

const StoryContainer = ({ match, articles, fetchNews }) => {

    const { id } = match.params;
    const decodedURI = decodeURIComponent(id);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticle(decodedURI);
        window.scrollTo(0, 0);
    }, [articles, decodedURI]);

    const getArticle = id => {
        if (articles.length === 0) {
            fetchNews(10, 1, '', '');
        }
        const article = articles.find(a => a.title === id);
        setArticle(article);
    }

    const backToNewsList = () => {
        window.history.back();
    }

    if (articles.length === 0) {
        return <NewsPlaceholder />
    }

    if (articles !== 0 && !article) {
        return (
            <div className="story-container">
                <SegmentPlaceholder
                    icon="search"
                    message="Can't find this story."
                    action
                    onActionClick={backToNewsList}
                    actionMessage={"Go back"} />
            </div>
        );
    }

    return (
        <Story article={article} onBackClick={backToNewsList} />
    );
}

StoryContainer.propTypes = {
    articles: PropTypes.array.isRequired,
    fetchNews: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    articles: state.news.articles
});

export default connect(mapStateToProps, { fetchNews })(StoryContainer);
