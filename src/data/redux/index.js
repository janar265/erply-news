import { combineReducers } from 'redux';
import auth from './auth/authReducers';
import ui from './ui/uiReducers';
import news from './news/newsReducers';

export default combineReducers({
    auth,
    ui,
    news
})