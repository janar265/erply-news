import { LOGIN, LOGOUT, LOAD_USER_SUCCESS, LOAD_USER_FAILED, PATCH_USER } from './authActionTypes';
import userService from '../../services/user/userService';

export const login = (userData) => dispatch => {
    dispatch({
        type: LOGIN,
        payload: userData
    });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
}

export const loadUser = () => dispatch => {
    const user = localStorage.getItem('user');
    if (!user) {
        dispatch({ type: LOAD_USER_FAILED });
        return;
    }
    dispatch({ type: LOAD_USER_SUCCESS });
}

export const patchUser = userData => async dispatch => {
    const user = await userService.patchUserData(userData);
    dispatch({
        type: PATCH_USER,
        payload: user
    });
}