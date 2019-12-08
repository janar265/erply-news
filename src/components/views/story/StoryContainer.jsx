import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Story from './Story';
import SegmentPlaceholder from '../../common/segment-placeholder/SegmentPlaceholder';
import NewsPlaceholder from '../../common/news-placeholder/NewsPlaceholder';
import { fetchNews } from '../../../data/redux/news/newsActions';
import './Story.css';

const StoryContainer = ({ match, articles, fetchNews, history }) => {

    const { id } = match.params;
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticle(id);
        window.scrollTo(0, 0);
    }, [articles, id]);


    const getArticle = id => {
        if (articles.length === 0) {
            fetchNews(10, 1, '');
        }
        const article = articles.find(a => a.title === id);
        setArticle(article);
    }

    const backToNewsList = () => {
        history.push("/");
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
        <Story article={article} />
    );
}

const mapStateToProps = state => ({
    articles: state.news.articles
});

export default connect(mapStateToProps, { fetchNews })(StoryContainer);