import { SET_LOADING, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './uiActionTypes';

const initialState = {
    loading: true,
    notifications: []
}

export default (state = initialState, action) => {
    const { type, payload, notification, id } = action;
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SHOW_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, notification]
            }
        case HIDE_NOTIFICATION: {
            return {
                ...state,
                notifications: [...state.notifications.filter(n => n.id !== id)]
            }
        }
        default:
            return state;
    }
}