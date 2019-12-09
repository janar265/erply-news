import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import { fetchNews, clearNews } from '../../../data/redux/news/newsActions';
import { getQueryParams } from '../../../utils/utils';
import Button from '../../common/button';
import NewsList from './NewsList';
import CategorySelector from '../../common/category-selector';
import newsCategories from '../../../data/constants/newsCategories';

const NewsContainer = ({ fetchNews, clearNews, articles, loadingNews, loadingMoreNews, totalNewsCount, history, location }) => {

    const PAGE_SIZE = 10;
    const queryParams = getQueryParams(location.search);
    const [pageToLoad, setPageToLoad] = useState(2);
    const [searchQuery, setSearchQuery] = useState(queryParams && queryParams.q || '');
    const [category, setCategory] = useState(queryParams && queryParams.category || 'General');

    useEffect(() => {
        fetchNewsData(PAGE_SIZE, 1, searchQuery, category);
        if (searchQuery !== '') {
            history.push(`?category=${category}&q=${searchQuery}`);
        } else {
            history.push(`?category=${category}`);
        }
    }, [category]);

    useEffect(() => {
        window.addEventListener("scroll", scrollPositionHandler);
        return () => {
            window.removeEventListener("scroll", scrollPositionHandler);
        };
    });

    const fetchNewsData = useCallback(async (pageSize, page, searchQuery, category) => {
        if (page > 1 && (articles.length === totalNewsCount || articles.length === 100)) {
            return;
        }
        if (articles.length === 0 && searchQuery === '') {
            fetchNews(PAGE_SIZE, 1, searchQuery, category);
            return;
        }
        fetchNews(pageSize, page, searchQuery, category);
    }, [articles]);


    const scrollPositionHandler = () => {
        if (totalNewsCount > articles.length && (document.documentElement.scrollHeight === document.documentElement.clientHeight + document.documentElement.scrollTop)) {
            setPageToLoad(pageToLoad + 1)
            fetchNews(PAGE_SIZE, pageToLoad, searchQuery, category);
        }
    }

    const handleSearch = () => {
        clearNews();
        fetchNews(PAGE_SIZE, 1, searchQuery, category);
        historyPush();
    }

    const handleCategorySelect = category => {
        setCategory(category);
        historyPush();
    }

    const historyPush = () => {
        if (searchQuery !== '') {
            history.push(`?category=${category}&q=${searchQuery}`);
            return;
        }
        history.push(`?category=${category}`);
    }

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            handleSearch();
        }
    }

    const clearQuery = () => {
        setSearchQuery('');
        history.push(`?category=${category}`);
        fetchNews(PAGE_SIZE, 1, '', category);
    }

    const handleStoryClick = id => {
        const encodedURI = encodeURIComponent(id);
        history.push(`/story/${encodedURI}`);
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
            <CategorySelector
                categories={newsCategories}
                onCategoryChange={handleCategorySelect}
                selectedCategory={category} />
            <NewsList
                news={articles}
                clearQuery={clearQuery}
                onStoryClick={handleStoryClick}
                isLoading={loadingNews}
                loadMore={loadingMoreNews} />
        </div>
    )
}

NewsContainer.propTypes = {
    fetchNews: PropTypes.func.isRequired,
    clearNews: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    loadingNews: PropTypes.bool.isRequired,
    loadingMoreNews: PropTypes.bool.isRequired,
    totalNewsCount: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    articles: state.news.articles,
    category: state.news.category,
    loadingNews: state.news.isLoading,
    loadingMoreNews: state.news.isLoadingMoreNews,
    totalNewsCount: state.news.totalCount
})

export default withRouter(connect(mapStateToProps, { fetchNews, clearNews })(NewsContainer));
