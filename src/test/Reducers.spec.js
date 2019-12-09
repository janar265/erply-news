import authReducer from '../data/redux/auth/authReducers';
import uiReducer from '../data/redux/ui/uiReducers';
import newsReducer from '../data/redux/news/newsReducers';

const userPayload = {
    name: "Test", email: "test@test.com", apiKey: "abcdefghijk"
}

const loggedInState = {
    user: { name: "Test", email: "test@test.com", apiKey: "abcdefghijk" },
    isAuthenticated: true,
    initialized: true
}

const loggedOutState = {
    user: null,
    isAuthenticated: false,
    initialized: true
};

const initialUserState = {
    user: null,
    isAuthenticated: false,
    initialized: false
};

const initialUiState = {
    loading: true,
    notifications: []
}

const uiWithNotification = {
    loading: true,
    notifications: [{
        id: 1,
        message: "Test notification",
        type: "success",
        duration: 3000
    }]
};

const uiWithMultipleNotifications = {
    loading: true,
    notifications: [{
        id: 1,
        message: "Test notification",
        type: "success",
        duration: 3000
    },
    {
        id: 2,
        message: "Test notification",
        type: "success",
        duration: 3000
    }]
}

const initialNewsState = {
    articles: [],
    totalCount: 0,
    isLoading: false,
    isLoadingMoreNews: false
}

const loadingNewsState = {
    articles: [],
    totalCount: 0,
    isLoading: true,
    isLoadingMoreNews: false
}

const fetchedNews = {
    articles: [
        { author: "Test1", description: "Test1", content: "Test1" },
        { author: "Test2", description: "Test2", content: "Test2" }],
    totalCount: 2,
    isLoading: false,
    isLoadingMoreNews: false
}

const newsPayload = {
    articles: [
        { author: "Test1", description: "Test1", content: "Test1" },
        { author: "Test2", description: "Test2", content: "Test2" }],
    totalResults: 2
}

describe("Reducers", () => {
    describe("Auth reducers", () => {
        it("Login should set user info", () => {
            const newState = authReducer(initialUserState, {
                type: "LOGIN",
                payload: userPayload
            });
            expect(newState).toEqual(loggedInState);
        });

        it("Logout should remove user info", () => {
            const newState = authReducer(loggedInState, {
                type: "LOGOUT"
            });
            expect(newState).toEqual(loggedOutState);
        });

        it("Failed load user should remove user data", () => {
            const newState = authReducer(loggedInState, {
                type: "LOAD_USER_FAILED"
            });
            expect(newState).toEqual(loggedOutState);
        });

        it("Successful load user should persist user data", () => {
            const newState = authReducer(loggedInState, {
                type: "LOAD_USER_SUCCESS"
            });
            expect(newState).toEqual(loggedInState);
        });
    });

    describe("Ui reducers", () => {
        it("Changing loading state", () => {
            const newState = uiReducer(initialUiState, {
                type: "SET_LOADING",
                payload: false
            });
            expect(newState).toEqual({
                loading: false,
                notifications: []
            });
        });

        it("Show notification should append notification to list", () => {
            const newState = uiReducer(initialUiState, {
                type: "SHOW_NOTIFICATION",
                notification: {
                    id: 1,
                    message: "Test notification",
                    type: "success",
                    duration: 3000
                }
            });
            expect(newState).toEqual(uiWithNotification);
        });

        it("Append multiple notifications", () => {
            const newState = uiReducer(uiWithNotification, {
                type: "SHOW_NOTIFICATION",
                notification: {
                    id: 2,
                    message: "Test notification",
                    type: "success",
                    duration: 3000
                }
            });
            expect(newState).toEqual(uiWithMultipleNotifications);
        });

        it("Hide notification removes correct notification", () => {
            const newState = uiReducer(uiWithMultipleNotifications, {
                type: "HIDE_NOTIFICATION",
                id: 2
            });
            expect(newState).toEqual(uiWithNotification);
        });
    });

    describe("News reducers", () => {
        it("Start fetching sets state to loading", () => {
            const newState = newsReducer(initialNewsState, {
                type: "START_FETCHING_NEWS"
            });
            expect(newState).toEqual(loadingNewsState);
        });

        it("Fetch news succeed appends news to state", () => {
            const newState = newsReducer(initialNewsState, {
                type: "FETCH_NEWS_SUCCEEDED",
                payload: newsPayload
            });
            expect(newState).toEqual(fetchedNews);
        });

        it("Clear news should empty articles", () => {
            const newState = newsReducer(fetchedNews, {
                type: "CLEAR_NEWS",
            });
            expect(newState).toEqual(initialNewsState);
        });
    });
})