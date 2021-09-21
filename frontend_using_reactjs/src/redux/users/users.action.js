import bridge from '../../bridge';
import {
    ERRORS, GETUSERS, CREATENEWUSER, EDITUSER, REMOVEUSER
} from './users.types';

export const getUsers = (payload) => async (dispatch) => {
    const paramsObj = {};

    if (payload.currentPage !== '') {
        Object.assign(paramsObj, { page: payload.currentPage });
    }

    if (payload.search !== '') {
        Object.assign(paramsObj, { search_key: payload.search });
    }

    if (payload.sortBy !== '') {
        Object.assign(paramsObj, { sort_by: payload.sortBy });
    }

    if (payload.sortDir !== '') {
        Object.assign(paramsObj, { sort_dir: payload.sortDir });
    }

    try {
        const res = await bridge.get(`/users`, { params: paramsObj });
        if (res.status === 200) {
            dispatch({
                type: GETUSERS,
                payload: res.data.data
            });
        }
        return res;
    } catch (e) {
        dispatch({
            type: ERRORS,
            payload: e
        });
    }
};

export const createNewUser = (payload) => async (dispatch) => {
    dispatch({
        type: CREATENEWUSER
    });
    try {
        const res = await bridge.post(`/users`, payload);
        if (res.status === 200) {
            dispatch({
                type: CREATENEWUSER
            });
        }
        return res;
    } catch (e) {
        dispatch({
            type: ERRORS,
            payload: e
        });
        return e;
    }
};

export const editUser = (payload, userId) => async (dispatch) => {
    dispatch({
        type: EDITUSER
    });
    try {
        const res = await bridge.put(`/users/${userId}`, payload);
        dispatch({
            type: EDITUSER
        });
        return res;
    } catch (e) {
        dispatch({
            type: ERRORS,
            payload: e
        });
    }
};

export const removeUser = (user) => async (dispatch) => {
    dispatch({
        type: REMOVEUSER
    });
    try {
        const res = await bridge.delete(`/users/${user.id}`);
        dispatch({
            type: REMOVEUSER
        });
        return res;
    } catch (e) {
        dispatch({
            type: ERRORS,
            payload: e
        });
    }
};
