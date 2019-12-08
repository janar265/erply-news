import newsService from '../../services/news/newsService';
import { CLEAR_NEWS, FETCH_NEWS_SUCCEEDED, START_FETCHING_NEWS, FETCH_NEWS_FAILED } from './newsActionTypes';
import { showNotification } from '../ui/uiActions';
import { Notification } from '../../../components/common/notification/api/Notification';

const fetchNewsSucceeded = news => dispatch => {
    dispatch({
        type: FETCH_NEWS_SUCCEEDED,
        payload: news
    });
};

const fetchNewsFailed = () => dispatch => {
    dispatch({ type: FETCH_NEWS_FAILED });
};

const startFetchingNews = () => dispatch => {
    dispatch({ type: START_FETCHING_NEWS });
};

export const clearNews = () => dispatch => {
    dispatch({ type: CLEAR_NEWS })
};

export const fetchNews = (pageSize, page = 1, searchQuery, category) => async dispatch => {
    if (category !== '' && page === 1) {
        dispatch(clearNews());
    }
    dispatch(startFetchingNews());
    try {
        const response = await newsService.fetchTopNews(pageSize, page, searchQuery, category);
        dispatch(fetchNewsSucceeded(response));
    } catch (error) {
        if (error.body) {
            dispatch(showNotification(new Notification(error.body.message, "error", 8000)));
        }
        dispatch(fetchNewsFailed());
    }
}