import { CLEAR_NEWS, FETCH_NEWS_SUCCEEDED, START_FETCHING_NEWS, FETCH_NEWS_FAILED } from './newsActionTypes';

const initialState = {
    articles: [],
    totalCount: 0,
    isLoading: false,
    isLoadingMoreNews: false
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case START_FETCHING_NEWS:
            return {
                ...state,
                isLoading: state.totalCount === 0,
                isLoadingMoreNews: state.articles.length > 0
            }
        case FETCH_NEWS_SUCCEEDED:
            return {
                ...state,
                articles: [...state.articles, ...payload.articles],
                totalCount: payload.totalResults,
                isLoading: false,
                isLoadingMoreNews: false
            }
        case FETCH_NEWS_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadingMoreNews: false
            }
        case CLEAR_NEWS:
            return {
                ...state,
                articles: [],
                totalCount: 0
            }
        default:
            return state;
    }
}