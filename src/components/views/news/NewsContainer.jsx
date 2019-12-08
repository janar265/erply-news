import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';
import Button from '../../common/button';
import { Input } from 'semantic-ui-react';
import { fetchNews, clearNews } from '../../../data/redux/news/newsActions';

const NewsContainer = ({ fetchNews, clearNews, articles, loadingNews, loadingMoreNews, totalNewsCount, history }) => {

    const PAGE_SIZE = 10;
    const [pageToLoad, setPageToLoad] = useState(2);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchNewsData(PAGE_SIZE, 1, searchQuery);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollPositionHandler);
        return () => {
            window.removeEventListener("scroll", scrollPositionHandler);
        };
    });

    const fetchNewsData = useCallback(async (pageSize, page, searchQuery) => {
        if (page > 1 && (articles.length === totalNewsCount || articles.length === 100)) {
            return;
        }
        if (articles.length === 0 && searchQuery === '') {
            fetchNews(PAGE_SIZE, 1, searchQuery);
            return;
        }
        fetchNews(pageSize, page, searchQuery);
    }, [articles]);


    const scrollPositionHandler = () => {
        if (totalNewsCount > articles.length && (document.documentElement.scrollHeight === document.documentElement.clientHeight + document.documentElement.scrollTop)) {
            setPageToLoad(pageToLoad + 1)
            fetchNews(PAGE_SIZE, pageToLoad, searchQuery);
        }
    }

    const handleSearch = () => {
        clearNews();
        fetchNews(PAGE_SIZE, 1, searchQuery);
    }

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            handleSearch();
        }
    }

    const clearQuery = () => {
        setSearchQuery('');
        fetchNews(PAGE_SIZE, 1, '');
    }

    const handleStoryClick = id => {
        history.push(`/story/${id}`);
    }

    return (
        <div className="news-container">
            <Input
                className="news-search-bar"
                fluid
                placeholder="Search.."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                action={<Button primary content="Search" onClick={handleSearch} />} />
            <NewsList
                news={articles}
                clearQuery={clearQuery}
                onStoryClick={handleStoryClick}
                isLoading={loadingNews}
                loadMore={loadingMoreNews} />
        </div>
    )
}

const mapStateToProps = state => ({
    articles: state.news.articles,
    loadingNews: state.news.isLoading,
    loadingMoreNews: state.news.isLoadingMoreNews,
    totalNewsCount: state.news.totalCount
})

export default connect(mapStateToProps, { fetchNews, clearNews })(NewsContainer);
