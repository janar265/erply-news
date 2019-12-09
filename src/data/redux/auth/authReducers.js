import { LOGIN, LOGOUT, LOAD_USER_SUCCESS, LOAD_USER_FAILED, PATCH_USER } from './authActionTypes';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    isAuthenticated: false,
    initialized: false
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            localStorage.setItem('user', JSON.stringify(payload));
            return {
                ...state,
                user: { ...payload },
                isAuthenticated: true,
                initialized: true
            }
        case LOGOUT:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                initialized: true
            }
        case LOAD_USER_FAILED:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                initialized: true
            }
        case PATCH_USER:
            return {
                ...state,
                user: { ...payload }
            }
        default:
            return state;
    }
}