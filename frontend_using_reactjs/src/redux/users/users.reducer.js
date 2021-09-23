import {
    GETUSERS, GETUSERDETAIL, CREATENEWUSER, EDITUSER, REMOVEUSER
} from './users.types';

const INITIAL_STATE = {
    users: [],
    userDetail: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CREATENEWUSER:
        return {
            ...state
        };
    case EDITUSER:
        return {
            ...state
        };
    case REMOVEUSER:
        return {
            ...state
        };
    case GETUSERS:
        return {
            ...state,
            users: action.payload
        };
    case GETUSERDETAIL:
        return {
            ...state,
            userDetail: action.payload
        };
    default: return state;
    }
};

export default reducer;
