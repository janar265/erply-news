import { SET_LOADING, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './uiActionTypes';

export const setUiLoading = loading => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: loading
    })
}

export const showNotification = notification => ({
    type: SHOW_NOTIFICATION,
    notification
})

export const hideNotification = id => ({ type: HIDE_NOTIFICATION, id });